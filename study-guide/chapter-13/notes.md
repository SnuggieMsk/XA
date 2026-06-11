# Chapter 13: Tax Provisions for Special Cases — Short Notes

## 🎯 What you'll learn
- How **corporate actions** are taxed: bonus issues, share splits/consolidation, **buyback** (new post-Oct-2024 rule), rights issues, mergers/amalgamations.
- **Stock Lending and Borrowing (SLB)**.
- Conversion of **preference shares into equity**.
- Mutual fund special cases: **segregated portfolios, consolidation of schemes, winding up**.
- Plus the **Annexure tax rates** (slabs, surcharge, special rates, CII).

---

## 13.1 Bonus Shares

**Bonus shares** = extra free shares given to existing shareholders, proportionate to holdings. No cost paid.

**Key tax rules (held as capital asset):**
- **No tax at allotment** — gains arise only at sale.
- **Period of holding** counted from **date of allotment of the bonus shares** (listed: short-term if ≤12 months; unlisted: ≤24 months).
- **Cost of acquisition = NIL** (unless allotted before 01-04-2001 → FMV on 01-04-2001 at the assessee's option).
- If bonus shares qualify under 112A, the deemed cost = lower of (FMV on 31-01-2018) and (sale consideration) — since actual cost is nil.
- **Sale consideration:** amount received; for *unquoted* shares, if consideration < FMV, FMV is used.

**Tax rates:** STCG @20% (111A, STT) else slab; LTCG @12.50% over ₹1.25 lakh (112A) / 12.50% (112 if no STT).

**If held as stock-in-trade:** gains are **business income** (PGBP). Per ICDS-VIII, bonus shares are recorded at cost (nil), so stock value isn't enhanced.

**💡 Worked example:** 10,000 shares @₹105 (01-04-2020); 1:2 bonus → 5,000 bonus shares (01-09-2023); all 15,000 sold @₹120 (01-08-2024).
- **Original 10,000:** held >12 months → LTCG = (120−105)×10,000 = **₹1,50,000** (12.50% on amount over ₹1.25 lakh, Sec 112A).
- **Bonus 5,000:** cost nil, held 01-09-2023 to 01-08-2024 (11 months ≤12) → **STCG = ₹6,00,000 @20% (Sec 111A)**.

⚠️ Bonus shares are a classic STCG trap: their **own** clock starts at allotment, and their cost is **nil**.

---

## 13.2 Share Split & Consolidation

- **Split** = one share divided into more smaller shares (number up, market cap same).
- **Consolidation** = many shares merged into fewer (number down, price up).

**Tax:** Neither split nor consolidation is a **"transfer"** (Section 2(47)), so **no tax at the time** — tax only on later sale.
- **Cost of acquisition:** original cost **apportioned** over the new shares.
- **Period of holding:** counted from the **original acquisition date**.

**💡 Consolidation example:** 2,000 shares @₹100 (₹2,00,000) consolidated 2:1 → 1,000 shares → cost = ₹2,00,000 / 1,000 = **₹200/share**.

**💡 Split example:** 1,000 shares @₹150 (₹1,50,000) split 1:2 → 2,000 shares → cost = ₹1,50,000 / 2,000 = **₹75/share**.

**Stock-in-trade (PGBP):** e.g., 10,000 shares @₹400 split 1:2 → 20,000 shares, cost ₹200 each; sold @₹207 → business income = 20,000 × (207−200) = **₹1,40,000**.

---

## 13.3 Buyback of Shares — **NEW RULE from 01-10-2024**

**Buyback** = a company purchasing its own shares.

| Period | Company | Shareholder |
|---|---|---|
| **Until 30-09-2024** | Pays **20% (+12% surcharge + 4% cess)** on distributed income | Proceeds **exempt** (Sec 10(34A)) |
| **From 01-10-2024** | **No tax** | Proceeds taxed as **DIVIDEND** under *Income from Other Sources*; **no deduction** for cost or expenses; the **cost of acquisition becomes a capital loss** (LT/ST per holding), eligible for set-off |

**💡 Worked example (post-Oct-2024):** 10,000 shares @₹100 (30-08-2019); company buys back 500 @₹125 (20-02-2025).
- **Shareholder:** ₹62,500 (500×125) taxed as **dividend** (Other Sources); the ₹50,000 (500×100) cost becomes a **long-term capital loss** (held >2 years), available for set-off/carry-forward.
- **Company:** no tax (buyback after 01-10-2024).

⚠️ **Big shift:** post-Oct-2024 the *whole buyback amount* is dividend (not just the gain), and the cost is a capital loss — not netted.

---

## 13.4 Rights Issue

A **rights issue** lets existing shareholders buy new shares (usually cheaper than market) in proportion to holdings. The shareholder may **subscribe** or **renounce** (sell the right to someone else).

### 13.4.1 Renouncing the right
- The right is a **capital asset**. **Cost of acquisition = nil.**
- Period of holding = from the company's offer date to renouncement; almost always **short-term** (listed ≤12 months / unlisted ≤24 months).
- Gain = sale consideration − nil. Taxed at **slab rates** (NOT 111A — a right is not a listed equity share).

**💡 Worked example:** Mr. Paul, 1,000 shares; 2:1 rights @₹250; renounces right to buy 500 shares to Mr. X @₹200 (01-09-2024). Held 1 month → **STCG = ₹1,00,000 (500×200), cost nil, at slab rates.**

### 13.4.2 Selling the shares (after exercising the right)
- **Cost of the right shares** = price paid to the company (plus, for a buyer, any amount paid to the renouncer).
- Holding period from **date of allotment** of the right shares.

**💡 Worked example:** Mr. Paul exercises, gets 500 shares @₹250 (01-12-2024), FMV ₹510 at allotment, sells @₹520 (25-01-2025, listed, STT). Held <12 months → **STCG = (520−250)×500 = ₹1,35,000 @20% (Sec 111A)**.

**Stock-in-trade:** profit on right shares / renunciation = **business income**; cost of renounced right = nil.

---

## 13.5 Mergers & Amalgamations

**Amalgamation** (Income Tax Act): one or more companies merge into another such that all property and liabilities pass to the amalgamated company, and ≥**75%** in value of the amalgamating company's shareholders become shareholders of the amalgamated company.

### Tax treatment
- **At allotment of new shares (capital asset):** **not a transfer** (Section 47(vii)) → no tax. (Stock-in-trade → taxed as business income at exchange.)
- **At later sale:**
  - **Cost of acquisition = amount paid for the ORIGINAL shares** in the amalgamating company.
  - **Period of holding = from the original acquisition date.**

**💡 Worked example:** Mr. X bought 10,000 shares of A Ltd. @₹58 (01-04-2023); A merged into AB Ltd. (01-08-2024), got 8,000 AB shares; sold @₹100 (01-09-2024, listed, STT).
- Holding from 01-04-2023 → 17 months (>12) → **LTCG**.
- Sale = 8,000×100 = ₹8,00,000; Cost = 10,000×58 = ₹5,80,000 → **LTCG ₹2,20,000 @12.50% (Sec 112A)** over ₹1.25 lakh. (STT-on-acquisition condition is waived for shares acquired via Section 47 modes.)

---

## 13.6 Stock Lending and Borrowing (SLB)

**SLB** = a lender temporarily lends securities to a borrower (via an Authorised Intermediary — Clearing Corp of NSE/BSE) for a **fee**, and gets equivalent securities back later. Tenure 1 day to 12 months (usually 1 month, rollover allowed but ≤12 months total). Only F&O-eligible securities and liquid index ETFs qualify.

Margins: lender deposits 25% of lending price (nil if lent on transaction date); borrower deposits 100% + fees + margins.

### 13.6.1 Lender's tax
- **Lending is NOT a transfer (Section 47(xv))** → **no capital gain**, even if the exact same scrips don't come back.
- The **lending fee** is taxable under **PGBP** (if a business) or **Other Sources**. Expenses deductible.

**💡 Example:** Lender earns ₹2,00,000 fee, paid ₹2,000 transaction charges → taxable income = **₹1,98,000**.

### 13.6.2 Borrower's tax
- The borrower buys/sells the stocks → gains/losses are **capital gains or PGBP**.
- The **lending fee paid** is deductible against that income.

**💡 Worked example (Mr. B, short-sell + hedge):** Borrowed 10,000 Reliance @₹5 fee, short-sold @₹1,600, bought call (strike ₹1,600, premium ₹30).
- *Price falls to ₹1,500:* Futures profit (1,600−1,500)×10,000 = ₹10,00,000; call loss (30−10)×10,000 = −₹2,00,000; fee −₹50,000 → **net profit ₹7,50,000** (slab rate).
- *Price rises to ₹1,700 (exercised call to settle):* premium paid ₹3,00,000 + fee ₹50,000 → **total loss ₹3,50,000**.

---

## 13.7 Conversion of Preference Shares into Equity Shares

Normally a conversion = "exchange" = transfer. **But Section 47(xb)** says conversion of preference shares into equity of the **same company** is **NOT a transfer** → no capital gain at conversion.

On later sale of the equity shares:
- **Cost of acquisition = cost of the preference shares.**
- **Period of holding = from the date the preference shares were acquired.**

**💡 Worked example:** 20,000 pref shares @₹10 (01-01-2010), converted 2:1 → 10,000 equity (01-01-2023, FMV ₹25), sold @₹35 (25-08-2024, listed, STT).
- No tax at conversion (47(xb)).
- Holding from 01-01-2010 → 14+ years (>12 months) → **LTCG**.
- Sale = 10,000×35 = ₹3,50,000; Cost = 20,000×10 = ₹2,00,000 → **LTCG ₹1,50,000 @12.50% over ₹1.25 lakh (Sec 112A)**.

---

## 13.8 Segregated Portfolios of Mutual Funds (Side-pocketing)

When a debt/money-market instrument in an MF suffers a **credit event**, SEBI allows creating a **segregated portfolio** ("side pocket"). Unit-holders then hold the same number of units in **two** schemes (main + segregated).

Taxed like normal MF units, but:
- **Period of holding:** the original units' holding period in the **main portfolio is included** for the segregated units.
- **Cost of acquisition (formula):**
  > Cost of segregated units = Cost of total portfolio × (NAV of asset transferred to segregated portfolio ÷ NAV of total portfolio just before segregation).
- This cost is **subtracted** from the main portfolio's cost.

**💡 Worked example:** 1,000 units @₹15 (cost ₹15,000); segregated 01-06-2022, segregated NAV ₹2/unit, total NAV before ₹12/unit.
- Segregated cost = 15,000 × (2 ÷ 12) = **₹2,500** (₹2.5/unit).
- Main portfolio cost = 15,000 − 2,500 = **₹12,500**.

---

## 13.9 Consolidation of Mutual Fund Schemes / Plans

Merging two schemes/plans (both equity-oriented, or both non-equity) is **NOT a transfer** → no tax on the swap of units.
- **Cost of acquisition** of consolidated units = cost of units in the consolidating scheme/plan.
- **Period of holding** includes the time held in the consolidating scheme/plan.

## 13.10 Winding Up of Mutual Fund Schemes
A scheme may be wound up on expiry (close-ended), on a trustee-opinion event, on a **75%** unit-holder resolution, or on SEBI direction. After "shutting" (newspaper notice), no business/units are created or redeemed; assets are sold, liabilities paid, balance distributed to unit-holders in proportion to units.

**Tax:** the amount received on winding up is **treated like a normal redemption** (capital gains as usual).

---

## 📚 Annexure highlights (tax rates you must know)

### Old-regime slabs (Individual/HUF, FY 2024-25 & 2025-26)
| Income | Rate |
|---|---|
| Up to ₹2,50,000 | Nil |
| ₹2,50,001–₹5,00,000 | 5% |
| ₹5,00,001–₹10,00,000 | 20% |
| Above ₹10,00,000 | 30% |

### New regime (Sec 115BAC) — FY 2024-25
| Income | Rate |
|---|---|
| Up to ₹3,00,000 | Nil |
| ₹3,00,001–₹7,00,000 | 5% |
| ₹7,00,001–₹10,00,000 | 10% |
| ₹10,00,001–₹12,00,000 | 15% |
| ₹12,00,001–₹15,00,000 | 20% |
| Above ₹15,00,000 | 30% |

**Surcharge on capital gains (111A/112/112A):** capped at **15%** (nil ≤₹50L, 10% ₹50L–1cr, 15% above ₹1cr). Other income can reach 25%/37% (37% only old regime). **Cess: 4%** health & education on tax+surcharge.

### Special rates (selected)
| Section | Income | Rate |
|---|---|---|
| 111A | STCG on equity/equity-MF/business-trust (STT) | **20%** |
| 112 | LTCG on listed securities/zero-coupon bonds | 12.50% |
| 112A | LTCG on equity etc. over ₹1.25 lakh (STT) | 12.50% |
| 115E | NRI LTCG on specified foreign-currency asset | 12.50% |
| 115A | NR dividend | 20% (10% if from IFSC) |
| 115BBH | Virtual Digital Assets (VDA) | **30%** |
| 115BBE | Undisclosed income (68/69 etc.) | **60%** |
| 115BBJ | Online game winnings | 30% |

💡 **No indexation** on any asset now (Finance Act 2024), except immovable property in certain cases (12.5% without indexation vs 20% with indexation, for property bought before 23-07-2024).

---

## 📌 One-Page Recap
- **Bonus shares:** cost nil, holding from allotment; classic STCG trap.
- **Split/consolidation:** not a transfer; cost apportioned, holding from original date.
- **Buyback (from 01-10-2024):** full proceeds = **dividend** to shareholder; cost = **capital loss**; company pays nothing.
- **Rights — renouncement:** cost nil, slab rate (not 111A). **Exercised shares:** cost = price paid, holding from allotment.
- **Amalgamation:** allotment not a transfer (47(vii)); on sale, cost & holding from original shares.
- **SLB:** lending not a transfer (47(xv)); fee = PGBP/Other Sources; borrower's gains = capital gains/PGBP.
- **Pref → equity (47(xb)):** not a transfer; cost & holding carry over.
- **Segregated portfolio:** cost split by NAV ratio, holding includes original.
- **Scheme consolidation:** not a transfer, cost & holding carry over.
- **Winding up:** treated as normal redemption.

## 🔑 Key Numbers & Terms
| Term/Number | Meaning |
|---|---|
| **Cost nil** | Bonus shares & renounced rights |
| **01-10-2024** | Buyback rule change — proceeds taxed as dividend |
| **Sec 10(34A)** | Old buyback exemption for shareholders (pre-Oct-2024) |
| **75%** | Shareholder threshold for amalgamation / MF winding-up resolution |
| **Section 47(vii) / (xv) / (xvi) / (xb)** | Amalgamation / SLB / reverse mortgage / pref-to-equity = not transfer |
| **Section 2(47)** | Definition of "transfer" (split/consolidation excluded) |
| **20% (111A) / 12.50% (112/112A)** | STCG / LTCG rates on equity |
| **₹1,25,000** | 112A LTCG annual exemption |
| **30% / 60%** | VDA / undisclosed income special rates |
| **4% cess** | Health & education cess |
| **15% surcharge cap** | On 111A/112/112A capital gains |
