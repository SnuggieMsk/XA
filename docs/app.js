/* NISM X-B Study Hub — single-page study app
   Works hosted (GitHub Pages) or opened locally; all content is in content.js */
(function () {
  "use strict";

  var DATA = window.STUDY_CONTENT || { chapters: [], readme: "" };
  var CH = DATA.chapters;
  var VIEWS = [
    { key: "notes", label: "Notes", ico: "📖" },
    { key: "flashcards", label: "Flashcards", ico: "🃏" },
    { key: "questions", label: "Quiz (100 MCQs)", ico: "📝" }
  ];

  // ---------- Markdown ----------
  if (window.marked && marked.setOptions) {
    marked.setOptions({ gfm: true, breaks: false, headerIds: true, mangle: false });
  }
  function md(src) {
    if (!src) return "";
    if (window.marked) { try { return marked.parse(src); } catch (e) {} }
    // crude fallback if CDN blocked
    return "<pre>" + src.replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    }) + "</pre>";
  }
  function mdInline(src) {
    var h = md(src || "").trim();
    return h.replace(/^<p>/, "").replace(/<\/p>$/, "");
  }

  // ---------- Progress (localStorage) ----------
  var PKEY = "nismxb_progress_v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PKEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) { try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch (e) {} }
  var progress = loadProgress();
  function progKey(num, view) { return num + ":" + view; }
  function isDone(num, view) { return !!progress[progKey(num, view)]; }
  function totalUnits() { return CH.length * VIEWS.length; }
  function doneCount() { return Object.keys(progress).filter(function (k) { return progress[k]; }).length; }
  function updateProgressUI() {
    var pct = totalUnits() ? Math.round(doneCount() / totalUnits() * 100) : 0;
    var f = document.getElementById("progressFill");
    var t = document.getElementById("progressPct");
    if (f) f.style.width = pct + "%";
    if (t) t.textContent = pct + "%";
  }

  // ---------- Theme ----------
  var TKEY = "nismxb_theme";
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var b = document.getElementById("themeBtn");
    if (b) b.textContent = t === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem(TKEY, t); } catch (e) {}
  }
  (function initTheme() {
    var saved;
    try { saved = localStorage.getItem(TKEY); } catch (e) {}
    if (!saved) saved = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    applyTheme(saved);
  })();

  // ---------- Helpers ----------
  function chapterByNum(num) {
    for (var i = 0; i < CH.length; i++) if (CH[i].num === num) return CH[i];
    return null;
  }
  function el(html) { var d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }
  function esc(s) { return (s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- Sidebar ----------
  function buildSidebar() {
    var nav = document.getElementById("nav");
    var html = '<a class="nav-chap-head" href="#/home"><span class="nav-chap-num">🏠</span>'
             + '<span class="nav-chap-title">Home &amp; Exam Guide</span></a>';
    var lastModule = null;
    CH.forEach(function (c) {
      if (c.module !== lastModule) {
        html += '<div class="nav-module">' + esc(c.module) + '</div>';
        lastModule = c.module;
      }
      var chDone = VIEWS.every(function (v) { return isDone(c.num, v.key); });
      html += '<div class="nav-chapter" data-ch="' + c.num + '">'
        + '<button class="nav-chap-head" data-toggle="' + c.num + '">'
        + '<span class="nav-chap-num">' + c.num + '</span>'
        + '<span class="nav-chap-title">' + esc(c.title) + '</span>'
        + '<span class="nav-check" data-check="' + c.num + '">' + (chDone ? "✓" : "") + '</span>'
        + '</button><div class="nav-sub">';
      VIEWS.forEach(function (v) {
        html += '<a href="#/ch/' + c.num + '/' + v.key + '" data-link="' + c.num + '/' + v.key + '">'
          + '<span class="dot">' + v.ico + '</span>' + v.label
          + '<span class="nav-check" data-check="' + c.num + ':' + v.key + '">' + (isDone(c.num, v.key) ? "✓" : "") + '</span>'
          + '</a>';
      });
      html += '</div></div>';
    });
    nav.innerHTML = html;

    nav.querySelectorAll("[data-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".nav-chapter");
        // navigate to notes by default, and toggle open
        var num = btn.getAttribute("data-toggle");
        if (!wrap.classList.contains("open")) {
          location.hash = "#/ch/" + num + "/notes";
        } else {
          wrap.classList.toggle("open");
        }
      });
    });
  }

  function refreshChecks() {
    document.querySelectorAll("[data-check]").forEach(function (n) {
      var key = n.getAttribute("data-check");
      if (key.indexOf(":") > -1) {
        n.textContent = progress[key] ? "✓" : "";
      } else {
        var allDone = VIEWS.every(function (v) { return isDone(key, v.key); });
        n.textContent = allDone ? "✓" : "";
      }
    });
  }

  function highlightNav(num, view) {
    document.querySelectorAll(".nav-chap-head").forEach(function (n) { n.classList.remove("active"); });
    document.querySelectorAll(".nav-sub a").forEach(function (a) { a.classList.remove("active"); });
    document.querySelectorAll(".nav-chapter").forEach(function (w) { w.classList.remove("open"); });
    if (!num) {
      var home = document.querySelector('.nav-chap-head[href="#/home"]');
      if (home) home.classList.add("active");
      return;
    }
    var wrap = document.querySelector('.nav-chapter[data-ch="' + num + '"]');
    if (wrap) {
      wrap.classList.add("open");
      wrap.querySelector(".nav-chap-head").classList.add("active");
    }
    var link = document.querySelector('.nav-sub a[data-link="' + num + "/" + view + '"]');
    if (link) link.classList.add("active");
  }

  // ---------- Renderers ----------
  var contentEl = document.getElementById("content");
  var chapterNavEl = document.getElementById("chapterNav");

  function renderHome() {
    var hero = '<div class="hero"><h1>🎯 NISM Series X-B Study Hub</h1>'
      + '<p>Investment Adviser (Level 2) — notes, flashcards & 2,000+ explained MCQs. Pick a chapter and study at your own pace.</p></div>';
    var cards = '<div class="home-cards">';
    CH.forEach(function (c) {
      cards += '<div class="home-card" data-go="#/ch/' + c.num + '/notes">'
        + '<div class="hc-num">CHAPTER ' + c.num + '</div>'
        + '<div class="hc-title">' + esc(c.title) + '</div>'
        + '<div class="hc-links">'
        + '<span class="chip">📖 Notes</span><span class="chip">🃏 Cards</span><span class="chip">📝 100 MCQs</span>'
        + '</div></div>';
    });
    cards += "</div>";
    var readme = '<div class="markdown-body">' + md(DATA.readme || "") + "</div>";
    contentEl.innerHTML = hero + "<h2>Jump to a chapter</h2>" + cards
      + '<hr><details open><summary style="cursor:pointer;font-weight:700;font-size:18px">📋 Full exam guide & study plan</summary>' + readme + "</details>";
    contentEl.querySelectorAll("[data-go]").forEach(function (card) {
      card.addEventListener("click", function () { location.hash = card.getAttribute("data-go"); });
    });
    chapterNavEl.innerHTML = "";
    highlightNav(null);
    document.title = "NISM X-B Study Hub";
  }

  function viewTabs(num, active) {
    var c = chapterByNum(num);
    var done = isDone(num, active);
    var h = '<div class="view-tabs">';
    VIEWS.forEach(function (v) {
      h += '<a class="view-tab ' + (v.key === active ? "active" : "") + '" href="#/ch/' + num + '/' + v.key + '">'
        + '<span class="vt-ico">' + v.ico + '</span>' + v.label + "</a>";
    });
    h += '<button class="mark-read ' + (done ? "done" : "") + '" id="markReadBtn">'
      + (done ? "✓ Marked as studied" : "Mark as studied") + "</button>";
    h += "</div>";
    return h;
  }

  function bindMarkRead(num, view) {
    var btn = document.getElementById("markReadBtn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var k = progKey(num, view);
      progress[k] = !progress[k];
      saveProgress(progress);
      btn.classList.toggle("done", !!progress[k]);
      btn.textContent = progress[k] ? "✓ Marked as studied" : "Mark as studied";
      refreshChecks();
      updateProgressUI();
    });
  }

  function renderNotes(num) {
    var c = chapterByNum(num);
    contentEl.innerHTML = viewTabs(num, "notes") + '<div class="markdown-body">' + md(c.notes) + "</div>";
    bindMarkRead(num, "notes");
  }

  function renderQuestions(num) {
    var c = chapterByNum(num);
    contentEl.innerHTML = viewTabs(num, "questions")
      + '<div class="quiz-tools"><button id="expandAll">▾ Reveal all answers</button>'
      + '<button id="collapseAll">▸ Hide all answers</button>'
      + '<button id="toTop">↑ Back to top</button></div>'
      + '<div class="markdown-body" id="quizBody">' + md(c.questions) + "</div>";
    bindMarkRead(num, "questions");
    var body = document.getElementById("quizBody");
    document.getElementById("expandAll").onclick = function () {
      body.querySelectorAll("details").forEach(function (d) { d.open = true; });
    };
    document.getElementById("collapseAll").onclick = function () {
      body.querySelectorAll("details").forEach(function (d) { d.open = false; });
    };
    document.getElementById("toTop").onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
  }

  // ----- Flashcards: parse "**Qn.** ... \n> **A:** ..." into cards -----
  function parseFlashcards(src) {
    var lines = (src || "").split("\n");
    var cards = [], cur = null, mode = null;
    var qRe = /^\s*\*\*Q\d+\.?\*\*\s*(.*)$/i;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var m = line.match(qRe);
      if (m) {
        if (cur) cards.push(cur);
        cur = { q: m[1] ? m[1].trim() : "", a: "" };
        mode = "q";
        continue;
      }
      if (!cur) continue;
      var bq = line.match(/^\s*>\s?(.*)$/);
      if (bq) {
        var txt = bq[1].replace(/^\*\*A:?\*\*\s*/i, "").replace(/^\*\*Answer:?\*\*\s*/i, "");
        cur.a += (cur.a ? "\n" : "") + txt;
        mode = "a";
      } else if (line.trim() === "") {
        // blank line — keep, separates paragraphs
        if (mode === "a") cur.a += "\n";
        else if (mode === "q") cur.q += "\n";
      } else {
        if (mode === "a") cur.a += "\n" + line;
        else cur.q += "\n" + line.trim();
      }
    }
    if (cur) cards.push(cur);
    return cards.filter(function (c) { return c.q || c.a; });
  }

  var fcState = { cards: [], idx: 0 };
  function renderFlashcards(num) {
    var c = chapterByNum(num);
    var cards = parseFlashcards(c.flashcards);
    fcState = { cards: cards, idx: 0 };
    if (!cards.length) {
      contentEl.innerHTML = viewTabs(num, "flashcards") + '<div class="markdown-body">' + md(c.flashcards) + "</div>";
      bindMarkRead(num, "flashcards");
      return;
    }
    contentEl.innerHTML = viewTabs(num, "flashcards")
      + '<div class="fc-toolbar">'
      + '<span class="fc-counter" id="fcCounter"></span>'
      + '<div style="flex:1"></div>'
      + '<button class="view-tab" id="fcShuffle">🔀 Shuffle</button>'
      + '<button class="view-tab" id="fcReset">↺ Reset order</button>'
      + "</div>"
      + '<div class="flashcard" id="flashcard"><div class="flashcard-inner">'
      + '<div class="fc-face fc-front"><div class="fc-tag">Question</div><div class="fc-body" id="fcFront"></div><div class="fc-hint">Click card / press Space to flip</div></div>'
      + '<div class="fc-face fc-back"><div class="fc-tag">Answer</div><div class="fc-body" id="fcBack"></div><div class="fc-hint">Click to flip back</div></div>'
      + "</div></div>"
      + '<div class="fc-controls">'
      + '<button id="fcPrev">← Prev</button>'
      + '<button class="primary" id="fcFlip">Flip</button>'
      + '<button id="fcNext">Next →</button>'
      + "</div>";
    bindMarkRead(num, "flashcards");
    var orig = cards.slice();
    var card = document.getElementById("flashcard");
    function show() {
      card.classList.remove("flipped");
      var cc = fcState.cards[fcState.idx];
      document.getElementById("fcFront").innerHTML = md(cc.q);
      document.getElementById("fcBack").innerHTML = md(cc.a);
      document.getElementById("fcCounter").textContent = "Card " + (fcState.idx + 1) + " / " + fcState.cards.length;
    }
    function flip() { card.classList.toggle("flipped"); }
    function next() { fcState.idx = (fcState.idx + 1) % fcState.cards.length; show(); }
    function prev() { fcState.idx = (fcState.idx - 1 + fcState.cards.length) % fcState.cards.length; show(); }
    card.addEventListener("click", flip);
    document.getElementById("fcFlip").onclick = function (e) { e.stopPropagation(); flip(); };
    document.getElementById("fcNext").onclick = next;
    document.getElementById("fcPrev").onclick = prev;
    document.getElementById("fcShuffle").onclick = function () {
      for (var i = fcState.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = fcState.cards[i]; fcState.cards[i] = fcState.cards[j]; fcState.cards[j] = t;
      }
      fcState.idx = 0; show();
    };
    document.getElementById("fcReset").onclick = function () { fcState.cards = orig.slice(); fcState.idx = 0; show(); };
    fcState._nav = { next: next, prev: prev, flip: flip };
    show();
  }

  function renderChapterNav(num) {
    var i = -1;
    for (var k = 0; k < CH.length; k++) if (CH[k].num === num) { i = k; break; }
    var prev = i > 0 ? CH[i - 1] : null;
    var next = i < CH.length - 1 ? CH[i + 1] : null;
    var h = "";
    if (prev) h += '<a class="prev" href="#/ch/' + prev.num + '/notes"><div class="cn-label">← Previous</div><div class="cn-title">' + esc(prev.num + ". " + prev.title) + "</div></a>";
    else h += '<div class="cn-spacer"></div>';
    if (next) h += '<a class="next" href="#/ch/' + next.num + '/notes"><div class="cn-label">Next →</div><div class="cn-title">' + esc(next.num + ". " + next.title) + "</div></a>";
    else h += '<div class="cn-spacer"></div>';
    chapterNavEl.innerHTML = h;
  }

  // ---------- Router ----------
  function route() {
    var hash = location.hash || "#/home";
    window.scrollTo(0, 0);
    closeSidebar();
    var m = hash.match(/^#\/ch\/(\d{2})\/(notes|flashcards|questions)/);
    if (m) {
      var num = m[1], view = m[2];
      var c = chapterByNum(num);
      if (!c) { renderHome(); return; }
      if (view === "notes") renderNotes(num);
      else if (view === "flashcards") renderFlashcards(num);
      else renderQuestions(num);
      renderChapterNav(num);
      highlightNav(num, view);
      document.title = num + ". " + c.title + " — NISM X-B";
    } else {
      renderHome();
    }
  }

  // ---------- Search ----------
  var searchInput = document.getElementById("search");
  var searchResults = document.getElementById("searchResults");
  function snippet(text, q) {
    var idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx < 0) return "";
    var start = Math.max(0, idx - 40), end = Math.min(text.length, idx + q.length + 60);
    var s = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
    var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return esc(s).replace(re, "<mark>$1</mark>");
  }
  function doSearch(q) {
    q = q.trim();
    if (q.length < 2) { searchResults.hidden = true; return; }
    var results = [];
    CH.forEach(function (c) {
      VIEWS.forEach(function (v) {
        var text = c[v.key] || "";
        var li = text.toLowerCase().indexOf(q.toLowerCase());
        if (li > -1) {
          results.push({ num: c.num, title: c.title, view: v.key, vlabel: v.label, snip: snippet(text, q) });
        }
      });
    });
    if (!results.length) {
      searchResults.innerHTML = '<div class="sr-empty">No matches for “' + esc(q) + '”.</div>';
      searchResults.hidden = false; return;
    }
    var html = "";
    results.slice(0, 40).forEach(function (r) {
      html += '<a class="sr-item" href="#/ch/' + r.num + '/' + r.view + '">'
        + '<div class="sr-where">Ch ' + r.num + ". " + esc(r.title) + " · " + r.vlabel + "</div>"
        + '<div class="sr-snip">' + r.snip + "</div></a>";
    });
    searchResults.innerHTML = html;
    searchResults.hidden = false;
    searchResults.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { searchResults.hidden = true; searchInput.value = ""; });
    });
  }
  searchInput.addEventListener("input", function () { doSearch(this.value); });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-wrap")) searchResults.hidden = true;
  });

  // ---------- Sidebar toggle (mobile) ----------
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  function openSidebar() { sidebar.classList.add("open"); overlay.classList.add("show"); }
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("show"); }
  document.getElementById("menuBtn").addEventListener("click", function () {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);

  // ---------- Wire up controls ----------
  document.getElementById("themeBtn").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  document.getElementById("resetProgress").addEventListener("click", function () {
    if (confirm("Reset all progress checkmarks?")) {
      progress = {}; saveProgress(progress); refreshChecks(); updateProgressUI();
    }
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if (e.key === "/" && !typing) { e.preventDefault(); searchInput.focus(); return; }
    if (typing) return;
    if (fcState._nav && location.hash.indexOf("/flashcards") > -1) {
      if (e.key === "ArrowRight") { fcState._nav.next(); }
      else if (e.key === "ArrowLeft") { fcState._nav.prev(); }
      else if (e.key === " ") { e.preventDefault(); fcState._nav.flip(); }
    }
  });

  // ---------- Init ----------
  buildSidebar();
  updateProgressUI();
  window.addEventListener("hashchange", route);
  route();
})();
