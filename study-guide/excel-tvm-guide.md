# 💻 Excel TVM Worksheet — One-Pager (your test-day weapon)

> The NISM test-centre computers have **Microsoft Excel / OpenOffice Calc**. The five functions below solve almost every numerical in the exam — corpus, SIP, EMI, growth rate, goal funding. This page shows a real practice sheet, decodes every result on it, and fixes the one error (`#NUM!`) everyone hits.

---

## 🖥️ The practice sheet (build this yourself in 2 minutes)

| | A | B |
|---|---|---|
| 2 | Time (years) | `15` |
| 3 | rate | `10%` |
| 6 | PV | `10000` |
| 7 | start/PV | `100000` |
| 8 | end/FV | `345000` |
| 10 | FV | `=FV(B3, B2, 0, -B6)` |
| 11 | PV | `=PV(B3, B2, -B6, 0)` |
| 12 | rate | `=RATE(B2, 0, -B7, B8)` |
| 13 | PMT | `=PMT(B3, B2, -B7, 0)` |

### What each result means (decoded line by line)

**Row 10 — FV = ₹41,772.48** → `=FV(10%, 15, 0, -10000)`
*"₹10,000 invested today at 10% for 15 years grows to…"*
Logic: FV = 10,000 × (1.10)¹⁵ = 10,000 × 4.177 = **₹41,772**. The `0` means no yearly payments — pure lump sum. PV is entered **negative** because you *pay it out*.

**Row 11 — PV = ₹76,060.80** → `=PV(10%, 15, -10000, 0)`
*"What's a stream of ₹10,000 every year for 15 years worth today at 10%?"*
Logic: PV of annuity = 10,000 × [1 − 1.10⁻¹⁵] ÷ 0.10 = **₹76,061**. This is the "pension corpus" formula — the exam's favourite. (Notice ₹10,000×15 = ₹1.5 lakh of payments is only worth ₹76k today — that's discounting.)

**Row 12 — `#NUM!` ← the classic error, here's the fix**
You asked: *"₹1,00,000 grew to ₹3,45,000 in 15 years — what rate?"* but typed both amounts **positive**. Excel reads that as "I received ₹1,00,000 AND ₹3,45,000" — no interest rate can do that, so it errors.
✅ **Fix: flip one sign** → `=RATE(15, 0, -100000, 345000)` = **8.61%**.
Check via CAGR: (3,45,000 ÷ 1,00,000)^(1/15) − 1 = 3.45^0.0667 − 1 = 8.61% ✓

**Row 13 — PMT = ₹13,147.38** → `=PMT(10%, 15, -100000, 0)`
*"Borrow/free up ₹1,00,000 today at 10% — what equal payment clears it in 15 years?"*
Logic: PMT = 1,00,000 × 0.10 ÷ [1 − 1.10⁻¹⁵] = **₹13,147/yr**. Same function, with FV as the target instead, gives "how much to save per year for a goal."

---

## 🔑 The 5 functions (memorise this block)

```
=FV(rate, nper, pmt, pv, [type])    what money becomes later
=PV(rate, nper, pmt, fv, [type])    what future money is worth today
=PMT(rate, nper, pv, fv, [type])    the equal instalment (SIP/EMI)
=NPER(rate, pmt, pv, fv, [type])    how long it takes
=RATE(nper, pmt, pv, fv, [type])    what return links them
```

**The 3 rules that prevent every error:**
1. **Signs:** money **out of your pocket = negative**, money **into your pocket = positive**. One of PV/FV/PMT must usually be opposite-signed to the others — `#NUM!` almost always means your signs don't tell a possible story.
2. **Periods must match:** monthly problem → `rate = 10%/12`, `nper = 15*12`. (Mixing yearly rate with monthly periods is the #1 silent wrong-answer.)
3. **`type`:** `0` (or omitted) = payments at period **end** (ordinary annuity); `1` = at period **beginning** (SIP on the 1st). Beginning-of-period grows one extra period.

---

## 🧪 Exam-style drills (type these into your sheet)

| Question | Formula | Answer |
|---|---|---|
| ₹5,000/month SIP, 12% p.a., 20 yrs → corpus? | `=FV(12%/12, 240, -5000, 0)` | **₹49,46,277** |
| Need ₹1 cr in 25 yrs @10% — invest today? | `=PV(10%, 25, 0, 10000000)` | **−₹9,22,960** |
| Need ₹50 L in 15 yrs @9% — save per year? | `=PMT(9%, 15, 0, 5000000)` | **−₹1,70,294** |
| ₹2 L → ₹8 L in 12 yrs — CAGR? | `=RATE(12, 0, -200000, 800000)` | **12.25%** |
| ₹30 L corpus @8%, withdraw ₹3 L/yr — lasts? | `=NPER(8%, 300000, -3000000, 0)` | **≈ 20 yrs** |

*(Negative answers just mean "you pay this out" — the magnitude is your answer.)*

---

## ⚠️ Error decoder

| You see | It means | Fix |
|---|---|---|
| `#NUM!` | Signs make the cashflow impossible (or RATE can't converge) | Make PV negative (or PMT), keep FV positive |
| Answer looks 10× off | Mixed monthly/yearly | Divide rate by 12 **and** multiply years by 12 |
| Slightly low SIP corpus | `type` left at 0 but SIP is start-of-month | Add `,1` as the last argument |
| `#VALUE!` | Typed `10%` as text or comma in number | Enter `10%` in the cell, or `0.1` in formula |

---

> 🎯 **Test-day routine:** the moment the exam starts, open the spreadsheet and type the 5 function names into a corner. Then every numerical becomes: *identify which of FV/PV/PMT/RATE/NPER they're asking → fill the four knowns → mind the signs.* Practise this with the **📐 Financial Maths Primer** (the formulas behind these functions) and the **🔢 Financial Maths Lab** (unlimited questions), and check workings on the **🧮 calculator** — its TVM tab matches these Excel functions exactly.
