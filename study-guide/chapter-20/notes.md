# Chapter 20: Case Studies — Short Notes

## 🎯 What you'll learn
- The **practical aspects** of giving financial advice through worked case studies.
- How to build **comprehensive financial planning solutions** for a household.

> ⚠️ **This is the most important chapter for the exam.** The NISM X-B exam has **60 marks of case studies**. The cases pull together everything: tax, retirement corpus, insurance need, asset allocation, and health-insurance mechanics. Get comfortable with the **MS Excel functions** used below — they are the whole game.

---

## 🛠️ How to attack a case study (the method)

**Step 0 — Read twice and list the givens.** Write down every number: current cost, inflation, return, years, existing cover, etc. Note the **timing** ("end of year" vs "beginning of year") — it changes the formula.

**Step 1 — Identify what's being asked.** Is it a **future value** (grow a number forward), a **present value / corpus** (how much you need today), an **insurance need**, a **return**, or an **allocation %**?

**Step 2 — Pick the right Excel function.** This table is your toolkit:

| Function | What it does | Typical use |
|---|---|---|
| **FV(rate, nper, pmt, pv)** | Future value — grows money **forward** | "What will Rs.X cost / be worth after n years?" Use `FV(infl, n,, -C0)` for future cost. |
| **PV(rate, nper, pmt, fv, type)** | Present value — the **corpus needed today** to fund a stream | Retirement corpus, insurance corpus. `type=1` = payments at **start** of period. |
| **PMT(rate, nper, pv)** | The level instalment | **EMI** of a loan. |
| **RATE(nper, pmt, pv, fv)** | The implied **return** | "What return is this product giving?" |
| **NPER** | Number of periods | How long money lasts. |

**Step 3 — Inflation-adjusted (real) return.** When an income stream **rises with inflation** every year (e.g., living expenses), you must discount with the **real return**, NOT the nominal return:

$$\text{Real return} = \frac{1 + \text{investment return}}{1 + \text{inflation}} - 1$$

💡 This single formula appears in almost every retirement/insurance case. Memorise it.

**Step 4 — Solve and sanity-check.** Does the answer make sense? A corpus should be much bigger than one year's expense. A future cost should be bigger than today's cost.

**Excel sign convention:** money you *pay out* is entered as **negative**; money you *receive* is **positive**. That's why you'll see `-600000` inside the functions.

---

## 📚 Fully Worked Case Studies

### CASE A — Mr. Z (Retirement corpus + asset allocation) [Source Case 1]

**Scenario.** Mr. Z, **52**, retires at **60**. Net savings **Rs.50,000/month**, growing 20% p.a. (this excludes retirement contributions). Monthly retirement contributions **Rs.9,000** (own Rs.4,000 + employer Rs.5,000), growing 20% p.a. Existing **retirement corpus Rs.12 lakh** (all debt, 8% p.a.). Other savings/investments **Rs.50 lakh**, 30% in equity. Each year he invests disposable savings into **debt:equity = 80:20**. Long-run: **equity 15%, debt 8.5%**. At age 55, an **outflow of Rs.5 lakh** met from annual savings. Inflation **10%**, post-retirement return **11%**. Current expenses **Rs.40,000/month**. Zero date = end of age 52; annual calculations; ignore tax & interest on within-year savings.

**Q1. Retirement corpus at 60?**
The Rs.9,000/month = **Rs.1,08,000/year**, growing 20%. So each year's contribution is grown to age 60 at 8%, and the existing Rs.12 lakh is grown 8 years at 8%.
- Each annual contribution's future value uses `=FV(8%, years-to-retirement,, -contribution)`.
- Existing corpus: `=FV(8%, 8,, -1200000)` = **Rs.22,21,116**.
- Summing the future values of all contributions + the grown corpus gives **Rs. 48,65,914**. ✅ **Answer (d)**

**Q2. At age 55, % of portfolio in debt (excluding retirement corpus)?**
Track two side-portfolios from the annual savings (split 80% debt : 20% equity each year), with the Rs.5 lakh outflow at age 55 reducing the savings that year:
- Debt portfolio grows at **8.5%**, equity at **15%**.
- At age 55 the debt allocation works out to **69.49%**. ✅ **Answer (a)**

**Q3. If he re-invests the entire retirement corpus in debt, % in debt at retirement?**
At age 60: Total Corpus (A) = **48,65,914**; Total Debt Portfolio (B) = **1,80,37,404**; Total Equity Portfolio (C) = **79,60,886**.
$$\%\text{ Debt} = \frac{A+B}{A+B+C}\times100 = \frac{48,65,914 + 1,80,37,404}{48,65,914+1,80,37,404+79,60,886}\times100 = \mathbf{74.21\%}$$
✅ **Answer (c)** — (the retirement corpus is treated as debt, hence added to B in the numerator).

**Q4. Corpus needed to sustain the same standard of living for 15 years after retirement?**
1. Future living expense at retirement: `=FV(10%, 8,, -480000)` = **Rs.10,28,922.63** (today's Rs.4,80,000/yr grown 8 yrs at 10%).
2. Real (inflation-adjusted) return: `=(1+11%)/(1+10%) - 1` = **0.91%**.
3. Corpus: `=PV(0.91%, 15, -1028922.63,, 1)` (the **1** = payments at the **beginning** of each year) = **Rs. 1,44,96,632**.
✅ **Answer (a)**

💡 Notice the pattern: **FV to bring today's expense to retirement → real return → PV to find the corpus.**

---

### CASE B — Mr. Y (Goal funding) [Source Case 2]

**Scenario.** Mr. Y, **40**. Goal 1: Son's PG education in **Year 5**, current cost **Rs.15,00,000/yr** for **2 years** (paid end of each year), inflation **15%**. Goal 2: Daughter's marriage at end of **Year 7**, current cost **Rs.1,00,00,000**, inflation **10%**. Corpus **Rs.2,00,00,000** invested at **8%**. Ignore tax.

**Q1. Money to set apart at end of Year 5 for the son's education (the set-aside earns 6%)?**
- Cost in Year 5: `=FV(15%, 5,, -1500000)` = **Rs.30,17,035.78** [A].
- Cost in Year 6: `=FV(15%, 6,, -1500000)` = **Rs.34,69,591.15**.
- Amount needed in Year 5 to fund the Year-6 cost (discount 1 year at 6%): `=PV(6%, 1,, -3469591.15)` = **Rs.32,73,199.20** [B].
- Total at Year 5 = A + B = **Rs.62,90,234.98**. ✅ **Answer (b)**

**Q2. Likely outflow on daughter's marriage in Year 7?**
`=FV(10%, 7,, -10000000)` = **Rs.1,94,87,171**. ✅ **Answer (a)**

**Q3. Balance left in corpus after both goals (if he does NOT use the separate 6% account)?**
The Rs.2 crore grows at 8% while the two education outflows (Year 5 and Year 6) and the marriage outflow (Year 7) are deducted at their respective times. Growing 2 crore and netting the outflows leaves **≈ Rs.69,65,820**. ✅ **Answer (b)**

**Q4. How would you describe his investment policy for the corpus (8% return)?**
An 8% blended return on a debt-equity mix is **a little conservative** (heavy on debt). ✅ **Answer (a)**

---

### CASE C — Mr. & Mrs. Gupta (NRI returning to India — tax & insurance) [Source Case 3]

**Scenario.** Both 45, returning to India after 20 years in the USA. They have: a US house **rented out**; **tax-deferred US retirement accounts**; **USD 1 million** life cover each (next 15 years); employer health policy valid till year-end.

**Q1. After becoming Indian residents, is rental income from the US property taxable in India?**
**(a) Yes — taxable in India, but they get credit for tax paid in the USA.** Indian residents are taxed on **global income**; double taxation is relieved by **foreign tax credit**.

**Q2. Tax on income accrued in the US tax-deferred retirement account?**
**(a)** If the account is **notified under Section 89A**, India taxes it **in the year of withdrawal** (matching the US treatment) and gives **credit for US tax**. (Section 89A removes the timing mismatch that would otherwise tax accruals each year in India.)

**Q3. Do they need fresh life insurance in India?**
**(c)** No — they **need not buy fresh** policies; they can **keep the existing US policies** and pay premiums from US rental income or remit from India. (Indian law permits continuing a foreign life policy.)

**Q4. What about health insurance?**
**(b)** Continue the existing (worldwide) policy **and also buy a fresh Indian health policy** to **build a no-claim history** in India, even at extra cost. (A local policy and claim record are valuable for the long term.)

---

### CASE D — Mr. Smart (Retired couple — inflation-adjustment corpus) [Source Case 4]

**Scenario.** Mr. Smart (60) retires; pension **Rs.4,80,000/yr** received **yearly in advance**, adjusting only **50%** with inflation. Mrs. Smart (58) gets the pension for life if he dies first. Retirement dues **Rs.40 lakh (after tax)**. Living expenses = pension amount. Employer Mediclaim for life (adequate). Inflation **6%**. Life expectancy: Mr. 87, Mrs. 85 → plan for **~27 years**. They also want **Rs.1,00,000/yr** (inflation 6%) for social/leisure spend, plus to make up the **inflation-adjustment shortfall** in the pension. Expenses at **beginning of each year**.

**Q1. Inflation adjustment required (discounted at 5%, at beginning of year)?**
Because the pension covers only **50%** of inflation, each year a growing shortfall must be funded, plus the Rs.1 lakh lifestyle amount. Discounting that growing stream over ~27 years at 5% gives **≈ Rs.80,18,710**. ✅ **Answer (a)**

**Q2. The required amount exceeds the Rs.40 lakh corpus. This means:**
**(c)** The couple **can** meet the requirement **only if the Rs.40 lakh earns about 9.22% p.a.** (the rate at which Rs.40 lakh suffices). At a mere 5%, Rs.40 lakh is not enough.

**Q3. Highest-interest government fixed-income option for the couple?**
**(a) Senior Citizen Savings Scheme (SCSS)** — the **government scheme** (PSU bank FDs are bank products, not government schemes).

---

### CASE E (extra practice, my own) — Ms. Rao (Pure retirement-corpus drill)

**Scenario.** Ms. Rao, **45**, currently spends **Rs.60,000/month**. She retires at **60**, wants the **same lifestyle (inflation-adjusted)** for **20 years** in retirement. Inflation **7%**; investment return in retirement **9%**. Solve step by step.

**Solution.**
1. Current annual expense = 60,000 × 12 = **Rs.7,20,000**.
2. Expense at retirement (15 years away): `=FV(7%, 15,, -720000)` = **Rs.7,20,000 × 1.07¹⁵ ≈ Rs.19,86,000**.
3. Real return = `(1+9%)/(1+7%) − 1` = **1.8692%**.
4. Corpus needed at 60: `=PV(1.8692%, 20, -1986000)` ≈ **Rs.3.27 crore**.

💡 Same three-step pattern as Case A Q4: **FV the expense → real return → PV the corpus.**

---

### CASE F (extra practice, my own) — Mr. Iqbal (Life-insurance need / Human Life Value)

**Scenario.** Mr. Iqbal, 40, earns **Rs.80,000/month**. He wants his family to keep receiving his income (rising with inflation) for the **20 years** he'd have worked. Inflation **6%**, investment return **10%**. He has an outstanding **home loan of Rs.40 lakh** and **existing cover of Rs.50 lakh**. How much **additional** life insurance does he need?

**Solution (income-replacement / HLV method).**
1. Current annual income = 80,000 × 12 = **Rs.9,60,000**.
2. Real return = `(1+10%)/(1+6%) − 1` = **3.7736%**.
3. Corpus to replace income for 20 years: `=PV(3.7736%, 20, -960000)` ≈ **Rs.1,32,90,000**.
4. Add the **home loan** to be cleared: + **Rs.40,00,000** → total need ≈ **Rs.1,72,90,000**.
5. Subtract **existing cover Rs.50,00,000** → **additional cover ≈ Rs.1,22,90,000 (≈ Rs.1.23 crore)**.

💡 Insurance-need recipe: **PV of income stream (real return) + liabilities + lump-sum goals − existing cover − existing assets earmarked.**

---

## 🩺 Health-insurance mechanics you MUST know (from the source practice cases)

> The exam loves **Top-up vs Super Top-up** and **deductible / co-pay** questions.

- **Base policy:** pays first, up to its sum insured.
- **Deductible:** the amount **you** pay before a top-up kicks in.
- **Top-up policy:** activates only when a **single claim** exceeds the deductible.
- **Super Top-up policy:** activates when the **total of all claims in the year** exceeds the deductible (aggregate). This is why Super Top-up is more useful.
- **Co-pay:** a **% of the claim** the insured bears, applied **after** the deductible.

**Worked examples:**
- *Top-up (Rs.10L, Rs.5L deductible), single bill Rs.4L, base Rs.3L:* Base pays 3L, you pay **Rs.1L**; top-up doesn't trigger (single bill < 5L deductible).
- *Top-up, three bills 2L/3L/4L (base 3L exhausted, deductible 5L per single claim):* No single bill ≥ 5L → top-up never triggers → out-of-pocket **Rs.6L**.
- *Super Top-up (Rs.10L, Rs.3L deductible), three bills 2L/3L/4L:* Base 3L covers the first 3L; once **aggregate** crosses the 3L deductible, super top-up pays the rest → out-of-pocket **NIL**.
- *Co-pay 5% + deductible Rs.10,000 on a Rs.50,000 claim:* Reimbursement = 50,000 − 10,000 − 5%×(50,000−10,000) = 50,000 − 10,000 − 2,000 = **Rs.38,000**.

---

## 📌 One-Page Recap
- **Method:** list givens → identify ask → pick Excel function → use **real return** for inflating streams → sanity-check.
- **Real return = (1+return)/(1+inflation) − 1.** Used in nearly every retirement/insurance corpus.
- **Retirement corpus:** FV today's expense to retirement → PV with real return for the retirement years (use `type=1` if payments at start).
- **Life-insurance need:** PV of income (real return) + liabilities + lump goals − existing cover.
- **Goal funding:** FV the goal cost at its own inflation; discount back where money is set aside early.
- **NRI returning:** global income taxable in India with **foreign tax credit**; **Sec 89A** defers retirement-account tax to withdrawal; can keep foreign life policy; build local health-insurance no-claim history.
- **Health insurance:** Top-up = per single claim; **Super Top-up = aggregate**; co-pay applied after deductible.
- **Excel sign rule:** outflows negative, inflows positive.

## 🔑 Key Numbers & Terms
| Term / Number | Meaning |
|---|---|
| **FV** | `FV(rate,nper,pmt,pv)` — grow money forward |
| **PV** | `PV(rate,nper,pmt,fv,type)` — corpus needed today; `type=1` = start of period |
| **PMT** | Loan **EMI** function |
| **RATE** | Implied return of a product |
| **Real return** | `(1+return)/(1+inflation) − 1` |
| **Top-up** | Triggers when a **single** claim > deductible |
| **Super Top-up** | Triggers when **aggregate** claims > deductible |
| **Co-pay** | % of claim the insured pays (after deductible) |
| **Section 89A** | Defers Indian tax on foreign retirement accounts to year of withdrawal |
| **SCSS** | Senior Citizen Savings Scheme (a government scheme) |
