# Mock Paper 9 — NISM Series X-B (Investment Adviser Level 2)
**Total: 100 marks · 70 questions · Suggested time: 2 hours · Negative marking: 25% of the marks for a wrong answer.**

> This paper is heavily numerical and case-driven, focused on time-value-of-money and goal planning. Keep a calculator or a spreadsheet (Excel FV/PV/PMT functions) handy, and read each scenario carefully — most marks come from setting up the right formula and plugging in the right rate and number of periods.

## Section A — Numerical MCQs (40 questions × 1 mark = 40 marks)

**Q1.** A lump sum of Rs. 1,00,000 is invested for 10 years and earns 8% per annum, compounded annually. What is the maturity value?
A) Rs. 1,80,000  B) Rs. 2,15,892  C) Rs. 2,00,000  D) Rs. 1,93,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Use the future-value of a lump sum: **FV = PV × (1 + r)ⁿ**, where PV = present amount (1,00,000), r = rate per period (0.08), n = number of periods (10). FV = 1,00,000 × (1.08)¹⁰ = 1,00,000 × 2.158925 = **Rs. 2,15,892**. Option A (1,80,000) is simple interest (1,00,000 × 8% × 10 = 80,000 interest) which ignores compounding — interest earning interest. C just doubles the money (wrong rule). D is a rounded guess. The key idea: compounding makes money grow on the growth, so the answer beats the simple-interest figure.
</details>

**Q2.** An item costs Rs. 50,000 today. If inflation is 6% per annum, what will the same item cost in 20 years?
A) Rs. 1,10,000  B) Rs. 1,06,000  C) Rs. 1,40,000  D) Rs. 1,60,357
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Inflation-adjusted future cost uses the same compounding formula: **Future Cost = Present Cost × (1 + inflation)ⁿ**. = 50,000 × (1.06)²⁰ = 50,000 × 3.207135 = **Rs. 1,60,357**. Option A roughly applies simple inflation (50,000 + 6% × 20 = 1,10,000) and is wrong because prices compound. Option B is only one year's inflation; C is a guess. Lesson: inflation quietly compounds, so future costs are much higher than a "rate × years" guess.
</details>

**Q3.** A mutual fund investment grew from Rs. 2,50,000 to Rs. 6,00,000 over 5 years. What is the CAGR (compound annual growth rate)?
A) 28.0%  B) 19.14%  C) 14.0%  D) 24.0%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — CAGR smooths growth into one annual rate: **CAGR = (End ÷ Start)^(1/n) − 1**. = (6,00,000 ÷ 2,50,000)^(1/5) − 1 = (2.4)^(0.2) − 1 = 1.19136 − 1 = 0.19136 = **19.14%**. Option C (14%) is the simple average ((2.4 − 1) ÷ 5 = 28% total ÷... ) miscalculation; A (28%) is the total growth divided incorrectly per year ignoring compounding; D is a guess. CAGR answers "what single steady rate would turn 2.5 lakh into 6 lakh in 5 years?"
</details>

**Q4.** A portfolio earns a nominal return of 12% in a year when inflation is 6%. What is the real (inflation-adjusted) return?
A) 6.00%  B) 6.36%  C) 5.66%  D) 18.00%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The real return uses the Fisher relation: **Real return = [(1 + nominal) ÷ (1 + inflation)] − 1**. = (1.12 ÷ 1.06) − 1 = 1.056604 − 1 = 0.056604 = **5.66%**. Option A (6%) is the rough shortcut "nominal − inflation = 12% − 6%", which slightly overstates the real return; D adds them (nonsense); B is a guess. Real return tells you how much your purchasing power actually grew after prices rose.
</details>

**Q5.** Reema invests Rs. 5,000 at the end of every month for 20 years in a fund earning 12% per annum (1% per month). What is the maturity corpus (future value of an ordinary annuity)?
A) Rs. 49,46,277  B) Rs. 12,00,000  C) Rs. 24,00,000  D) Rs. 41,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — FV of an ordinary annuity (payments at period-end): **FV = PMT × [((1 + r)ⁿ − 1) ÷ r]**. PMT = 5,000, r = 0.01 per month, n = 240 months. FV = 5,000 × [(1.01)²⁴⁰ − 1] ÷ 0.01 = 5,000 × [10.892554 − 1] ÷ 0.01 = 5,000 × 989.2554 = **Rs. 49,46,277**. Option B is just the money put in (5,000 × 240 = 12,00,000) — no growth. C double-counts; D is a guess. The huge gap between the deposits and the corpus is the power of compounding over 20 years.
</details>

**Q6.** What single amount must you invest today to have Rs. 10,00,000 in 5 years, if the money earns 8% per annum?
A) Rs. 6,80,583  B) Rs. 7,50,000  C) Rs. 6,00,000  D) Rs. 9,25,926
<details><summary>Answer & Explanation</summary>

**Correct: A)** — This is the present value of a future goal: **PV = FV ÷ (1 + r)ⁿ**. = 10,00,000 ÷ (1.08)⁵ = 10,00,000 ÷ 1.469328 = **Rs. 6,80,583**. Option D discounts for only 1 year (10,00,000 ÷ 1.08); B and C are guesses. PV tells you the lump sum needed now so it grows exactly to the target.
</details>

**Q7.** A goal requires Rs. 5,00,000 in 10 years. How much must be saved at the END of each year, earning 9% per annum, to reach it (sinking fund)?
A) Rs. 50,000  B) Rs. 28,000  C) Rs. 40,000  D) Rs. 32,910
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Sinking-fund payment (rearranged FV-annuity formula): **PMT = FV × r ÷ [(1 + r)ⁿ − 1]**. = 5,00,000 × 0.09 ÷ [(1.09)¹⁰ − 1] = 45,000 ÷ [2.367364 − 1] = 45,000 ÷ 1.367364 = **Rs. 32,910**. Option A simply divides 5,00,000 ÷ 10 = 50,000, ignoring the interest the savings earn; B and C are guesses. Because your deposits earn interest, you need to set aside less than the straight-line amount.
</details>

**Q8.** Mr. Khan needs a monthly income of Rs. 50,000 (today's value) at the start of his 25-year retirement. Ignoring inflation, if his corpus earns 0.157% per month (a real rate), what corpus is needed at retirement? (PV of an annuity, payments at period-end, 300 months.)
A) Rs. 1.50 crore  B) Rs. 1.20 crore  C) Rs. 1.195 crore  D) Rs. 90 lakh
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Retirement corpus = present value of the income stream: **PV = PMT × [1 − (1 + r)⁻ⁿ] ÷ r**. PMT = 50,000, r = 0.00157, n = 300. PV = 50,000 × [1 − (1.00157)⁻³⁰⁰] ÷ 0.00157 ≈ 50,000 × 239.03 = **Rs. 1.195 crore** (≈ Rs. 1,19,51,298). Option A (1.5 cr) is 50,000 × 300 = 1.5 crore — the wrong "no return" total; B and D are guesses. Because the corpus keeps earning a real return while being drawn down, you need less than the simple multiply-out total.
</details>

**Q9.** Anil's last-drawn salary (basic + DA) is Rs. 50,000 per month and he has 20 completed years of service with a firm covered under the Payment of Gratuity Act, 1972. What is his gratuity?
A) Rs. 5,76,923  B) Rs. 6,00,000  C) Rs. 5,00,000  D) Rs. 7,50,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — For employees covered under the Act: **Gratuity = Last drawn salary × 15/26 × completed years of service**. = 50,000 × (15 ÷ 26) × 20 = 50,000 × 0.576923 × 20 = **Rs. 5,76,923**. Option B uses 15/30 (the formula for employees NOT covered under the Act: 50,000 × 15/30 × 20 = 6,00,000); C and D are guesses. The "26" represents working days in a month for covered employees; the "15" is 15 days' salary per year of service.
</details>

**Q10.** On retiring at 60 with an NPS corpus of Rs. 1 crore, what is the MAXIMUM that can be withdrawn as a tax-free lump sum, and how much must compulsorily buy an annuity?
A) Lump sum Rs. 40 lakh; annuity Rs. 60 lakh  B) Lump sum Rs. 60 lakh; annuity Rs. 40 lakh  C) Lump sum Rs. 100 lakh; annuity nil  D) Lump sum Rs. 50 lakh; annuity Rs. 50 lakh
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At exit on/after 60, NPS rules allow up to **60% as a lump sum** (tax-free under Sec 10(12A)) and require a **minimum of 40%** to buy an annuity (whose pension is later taxable). 60% of 1 crore = Rs. 60 lakh; 40% = Rs. 40 lakh. Option A reverses the split; C ignores the mandatory annuitisation; D is a 50:50 guess. (Only if the corpus is ≤ Rs. 5 lakh can the whole amount be withdrawn.)
</details>

**Q11.** An employee with basic + DA of Rs. 30,000 per month contributes 12% to EPF. What is the employee's own monthly EPF contribution?
A) Rs. 3,600  B) Rs. 2,500  C) Rs. 1,101  D) Rs. 3,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The employee contributes **12% of basic + DA**, and the entire amount goes to the EPF account. = 12% × 30,000 = **Rs. 3,600**. Option C (3.67% = 1,101) is the EPF portion of the EMPLOYER's split, not the employee's; B and D are guesses. Note the employee's full 12% goes to EPF, while the employer's 12% is split (3.67% to EPF, 8.33% to EPS, plus admin/EDLIS charges).
</details>

**Q12.** Of the employer's 12% EPF contribution, what percentage goes to the Employees' Pension Scheme (EPS), and on what salary is it capped?
A) 12%, capped on Rs. 21,000  B) 3.67%, capped on Rs. 15,000  C) 8.33%, no cap  D) 8.33%, capped on Rs. 15,000 monthly salary
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The employer's 12% is split: **3.67% to EPF and 8.33% to EPS**, with the **EPS portion subject to a wage ceiling of Rs. 15,000 per month**. Option B swaps the figures; C forgets the cap; A invents wrong numbers. So the maximum monthly EPS contribution is 8.33% × 15,000 = Rs. 1,250.
</details>

**Q13.** Priya buys an equity mutual fund unit set for Rs. 8,00,000, holds it for 3 years, and sells for Rs. 14,00,000 (STT paid both ways). What is her LTCG tax under Section 112A?
A) Rs. 75,000  B) Rs. 59,375  C) Rs. 90,000  D) Rs. 71,250
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Equity MF held > 12 months → long-term. **LTCG = sale − cost = 14,00,000 − 8,00,000 = Rs. 6,00,000.** Under Sec 112A, the first Rs. 1,25,000 of LTCG is exempt, and the excess is taxed at **12.5%**. Taxable = 6,00,000 − 1,25,000 = 4,75,000; tax = 12.5% × 4,75,000 = **Rs. 59,375**. Option A (75,000) is 12.5% on the full 6,00,000 (forgetting the exemption); C and D are guesses. Always subtract the Rs. 1.25 lakh exemption first.
</details>

**Q14.** Rakesh sells listed equity shares within 8 months of buying, making a gain of Rs. 2,00,000 (STT paid). What is his short-term capital gains tax under Section 111A?
A) Rs. 30,000  B) Rs. 25,000  C) Rs. 40,000  D) Rs. 24,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Listed equity held ≤ 12 months → short-term. STCG under **Section 111A is taxed at 20%** (STT paid). = 20% × 2,00,000 = **Rs. 40,000**. Option A applies 15% (the old rate, now superseded); there is no Rs. 1.25 lakh exemption for STCG (that applies only to LTCG under 112A). B and D are guesses. STCG carries a higher rate than LTCG to discourage quick churning.
</details>

**Q15.** A SIP of Rs. 10,000 per month for 10 years earns 1% per month. What is the maturity value (ordinary annuity)?
A) Rs. 23,00,387  B) Rs. 12,00,000  C) Rs. 18,00,000  D) Rs. 20,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — FV ordinary annuity: **FV = PMT × [((1 + r)ⁿ − 1) ÷ r]**. PMT = 10,000, r = 0.01, n = 120. FV = 10,000 × [(1.01)¹²⁰ − 1] ÷ 0.01 = 10,000 × [3.300387 − 1] ÷ 0.01 = 10,000 × 230.0387 = **Rs. 23,00,387**. Option B is just the deposits (10,000 × 120). C and D are guesses. Roughly Rs. 11 lakh of the corpus is investment growth.
</details>

**Q16.** Investing Rs. 1,00,000 per year for 15 years at 10%, what is the difference between an annuity-DUE (start of year) and an ordinary annuity (end of year)?
A) Rs. 3,17,725  B) Rs. 3,17,725 vs 3,49,497 — difference Rs. 31,772  C) Nil  D) Rs. 1,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Annuity due = ordinary annuity × (1 + r), because each deposit gets one extra period of growth. Ordinary FV = 1,00,000 × [(1.10)¹⁵ − 1] ÷ 0.10 = 1,00,000 × 31.77248 = Rs. 31,77,248. Due = 31,77,248 × 1.10 = Rs. 34,94,973. Difference = **Rs. 31,772** (which equals the ordinary FV × 0.10). Option C is wrong because timing matters; A gives only the ordinary figure; D is a guess. Paying at the start of each period always grows the corpus more.
</details>

**Q17.** Mr. E withdraws Rs. 75,000 from his EPF when he still has 30 years to retirement. If EPF earns 8.5% per annum, roughly how much future corpus does he forgo?
A) Rs. 2.25 lakh  B) Rs. 5.00 lakh  C) Rs. 75,000  D) Rs. 8.66 lakh
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The forgone corpus is the future value of the withdrawn amount: **FV = 75,000 × (1.085)³⁰** = 75,000 × 11.5582 = **Rs. 8.66 lakh**. Option A treats it as simple interest; C ignores compounding entirely; B is a guess. A small early withdrawal costs far more in retirement because 30 years of compounding is lost — this is why pre-retirement withdrawals are so damaging.
</details>

**Q18.** A child-education goal costs Rs. 20,00,000 today and is 12 years away; education inflation is 8%. What will it cost at the time of the goal?
A) Rs. 39,20,000  B) Rs. 21,60,000  C) Rs. 50,36,340  D) Rs. 44,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **Future cost = present cost × (1 + inflation)ⁿ** = 20,00,000 × (1.08)¹² = 20,00,000 × 2.518170 = **Rs. 50,36,340**. Option A applies simple inflation (20,00,000 × (1 + 0.08 × 12) = 39.2 lakh) and is wrong because costs compound; B is one year's inflation; D is a guess. Education costs typically rise faster than general inflation, so planners use a higher rate.
</details>

**Q19.** A goal needs a corpus of Rs. 50,36,340 in 12 years (144 months). What monthly SIP at 11% per annum (about 0.9167% per month) reaches it?
A) Rs. 16,967  B) Rs. 25,000  C) Rs. 35,000  D) Rs. 12,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Sinking-fund payment: **PMT = FV × r ÷ [(1 + r)ⁿ − 1]**. r = 0.11/12 = 0.0091667, n = 144. PMT = 50,36,340 × 0.0091667 ÷ [(1.0091667)¹⁴⁴ − 1] = 46,167 ÷ [3.72095 − 1] = 46,167 ÷ 2.72095 = **Rs. 16,967**. Option B and C are too high (treating it almost like no-growth saving); D too low. Compounding does most of the heavy lifting, so the required SIP is modest.
</details>

**Q20.** Comparing simple vs compound interest: Rs. 3,00,000 invested for 10 years at 8%. By how much does compound interest exceed simple interest?
A) Rs. 1,07,678  B) Rs. 2,40,000  C) Nil  D) Rs. 3,47,678
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Compound FV = 3,00,000 × (1.08)¹⁰ = 3,00,000 × 2.158925 = Rs. 6,47,678. Simple-interest value = 3,00,000 × (1 + 0.08 × 10) = 3,00,000 × 1.8 = Rs. 5,40,000. Difference = 6,47,678 − 5,40,000 = **Rs. 1,07,678**. Option B is the simple interest itself (2,40,000); D is the total compound interest; C is wrong. The gap is the "interest on interest" that simple interest misses.
</details>

**Q21.** A retirement plan targets Rs. 2 crore in 20 years at 12% per annum. What monthly SIP is required (sinking fund, 240 months at 1% per month)?
A) Rs. 83,333  B) Rs. 10,000  C) Rs. 20,217  D) Rs. 40,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **PMT = FV × r ÷ [(1 + r)ⁿ − 1]** = 2,00,00,000 × 0.01 ÷ [(1.01)²⁴⁰ − 1] = 2,00,000 ÷ [10.892554 − 1] = 2,00,000 ÷ 9.892554 = **Rs. 20,217**. Option A is the no-growth saving (2 cr ÷ 240); B and D are guesses. Over 20 years compounding turns about Rs. 48.5 lakh of contributions into Rs. 2 crore.
</details>

**Q22.** Continuing Q21, if the same Rs. 2 crore goal is started only 5 years later (15 years left, 180 months at 12%), what monthly SIP is now needed?
A) Rs. 20,217  B) Rs. 26,000  C) Rs. 1,11,111  D) Rs. 40,034
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **PMT = 2,00,00,000 × 0.01 ÷ [(1.01)¹⁸⁰ − 1]** = 2,00,000 ÷ [5.995802 − 1] = 2,00,000 ÷ 4.995802 = **Rs. 40,034**. Option A is the 20-year figure (Q21); B and C are guesses. Delaying just 5 years nearly DOUBLES the required monthly saving (Rs. 20,217 → Rs. 40,034) — the cost of procrastination is dramatic because you lose the most powerful early compounding years.
</details>

**Q23.** What is the effective real rate when nominal return is 10% and inflation is 5%?
A) 4.76%  B) 5.00%  C) 5.25%  D) 15.00%
<details><summary>Answer & Explanation</summary>

**Correct: A)** — **Real = (1 + nominal)/(1 + inflation) − 1** = 1.10 ÷ 1.05 − 1 = 1.047619 − 1 = **4.76%**. Option B is the rough subtraction (10% − 5%), which overstates the real return slightly; D adds; C is a guess. The proper formula divides because inflation erodes both the principal and the returns.
</details>

**Q24.** If inflation equals the investment return (both 7%), what is the real rate of return on the corpus?
A) 7%  B) 0%  C) 14%  D) 1%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real = (1.07 ÷ 1.07) − 1 = 1 − 1 = **0%**. When returns just match inflation, purchasing power stays flat — money grows in rupees but not in real value. This is the same principle behind the workbook's HLV note: when income growth equals the discount return, the discount rate is 0. Options A, C, D ignore that the two rates cancel.
</details>

**Q25.** A person wants Rs. 60,000 per month (today's value) at retirement. With 6% inflation, what monthly amount will be needed in 10 years to maintain the same lifestyle?
A) Rs. 96,000  B) Rs. 1,07,451  C) Rs. 1,20,000  D) Rs. 63,600
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Future expense = 60,000 × (1.06)¹⁰** = 60,000 × 1.790847 = **Rs. 1,07,451**. Option A applies simple inflation (60,000 × 1.6); D is one year's inflation; C is a guess. This is the exact workbook illustration — 6% inflation nearly doubles the monthly requirement in 10 years.
</details>

**Q26.** Continuing Q25, after 20 years at 6% inflation, what monthly amount maintains the same Rs. 60,000 lifestyle?
A) Rs. 1,32,000  B) Rs. 1,07,451  C) Rs. 2,40,000  D) Rs. 1,92,428
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **= 60,000 × (1.06)²⁰** = 60,000 × 3.207135 = **Rs. 1,92,428**. Option B is the 10-year figure; A is simple inflation; C is a guess. Over 20 years the requirement more than triples — illustrating why retirement corpora must account for inflation across the whole horizon, not just up to the retirement date.
</details>

**Q27.** Reema invests Rs. 5,000 per month for 5 years at 1% per month, but at the BEGINNING of each month (annuity due). What is the maturity value?
A) Rs. 4,08,348  B) Rs. 3,00,000  C) Rs. 4,12,432  D) Rs. 5,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Annuity due = ordinary annuity FV × (1 + r). Ordinary FV = 5,000 × [(1.01)⁶⁰ − 1] ÷ 0.01 = 5,000 × 81.66967 = Rs. 4,08,348. Due = 4,08,348 × 1.01 = **Rs. 4,12,432**. Option A is the ordinary (end-of-month) figure; B is contributions only; D is a guess. Investing at the start of each period earns one extra period of return on every deposit.
</details>

**Q28.** A person needs Rs. 6,00,000 per year for 20 years in retirement, drawn at year-end, with the corpus earning a real rate of 7%. What corpus is needed at retirement (PV of ordinary annuity)?
A) Rs. 63,56,409  B) Rs. 1.20 crore  C) Rs. 84,00,000  D) Rs. 50,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — **PV = PMT × [1 − (1 + r)⁻ⁿ] ÷ r** = 6,00,000 × [1 − (1.07)⁻²⁰] ÷ 0.07 = 6,00,000 × [1 − 0.258419] ÷ 0.07 = 6,00,000 × 10.59401 = **Rs. 63,56,409**. Option B is the no-return total (6,00,000 × 20 = Rs. 1.2 crore); C and D are guesses. Because the corpus keeps earning 7% while being drawn, far less than the Rs. 1.2 crore straight total is required.
</details>

**Q29.** Mr. A wants to accumulate Rs. 2 crore in 20 years at 12%. Instead of a flat Rs. 20,217/month SIP, he uses a 7% annual step-up. Which statement is correct?
A) He must start higher than Rs. 20,217  B) Step-up makes no difference  C) He must invest a lump sum  D) He can start LOWER than Rs. 20,217 and increase yearly
<details><summary>Answer & Explanation</summary>

**Correct: D)** — In a step-up SIP the investor **starts with a smaller amount and increases it by a fixed percentage each year** (here 7%), in line with rising income. Because later contributions are larger, the starting amount can be below the flat Rs. 20,217 yet still reach Rs. 2 crore. Option A is the opposite; B ignores the benefit; C is unrelated. Step-up suits people whose income grows over time and who can't afford a large fixed SIP early on.
</details>

**Q30.** Two people target the same Rs. 1.18 crore corpus at 12%: one starts at age 30 (30 years), one at age 40 (20 years). The monthly savings are Rs. 3,376 and Rs. 11,928 respectively. What does this show?
A) Starting age has little effect  B) Starting 10 years earlier cuts the required SIP by more than two-thirds  C) The later starter saves more in total  D) Both pay the same total
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Per the workbook, the age-30 starter needs only Rs. 3,376/month while the age-40 starter needs Rs. 11,928/month for the same Rs. 1.18 crore — a reduction of about 72% just by starting 10 years earlier. Option A contradicts the data; C and D are false (the early starter actually contributes far less in total despite more months, thanks to compounding). The earlier you start, the cheaper the goal.
</details>

**Q31.** A company NOT covered under the Payment of Gratuity Act pays gratuity on Anil's last-drawn salary of Rs. 60,000 for 20 completed years. What is the gratuity?
A) Rs. 6,00,000  B) Rs. 6,92,308  C) Rs. 9,00,000  D) Rs. 20,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — For employees **not covered** under the Act: **Gratuity = last drawn salary × 15/30 × completed years** (half a month's salary per year). = 60,000 × (15 ÷ 30) × 20 = 60,000 × 0.5 × 20 = **Rs. 6,00,000**. Option B wrongly uses 15/26 (the covered formula); C and D are guesses. The divisor is 30 (full month) for uncovered employees versus 26 for covered ones, so uncovered gratuity is slightly lower.
</details>

**Q32.** Under Section 80C, what is the maximum deduction available in a financial year (for instruments like EPF, PPF, life insurance premium, ELSS)?
A) Rs. 2,00,000  B) Rs. 1,00,000  C) Rs. 1,50,000  D) Rs. 50,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The aggregate **Section 80C limit is Rs. 1,50,000** per financial year. Option A (2 lakh) confuses the combined 80C + 80CCD(1B) NPS limit; D (50,000) is the additional NPS deduction under 80CCD(1B) alone; B is the old limit. So an investor's EPF + PPF + insurance + ELSS together qualify only up to Rs. 1.5 lakh under 80C.
</details>

**Q33.** Over and above the Rs. 1.5 lakh Section 80C limit, what extra NPS deduction is available under Section 80CCD(1B)?
A) Rs. 50,000  B) Rs. 1,50,000  C) Rs. 25,000  D) Rs. 2,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Section **80CCD(1B) gives an exclusive additional deduction of Rs. 50,000** for the subscriber's own NPS Tier-I contribution, on top of the 80C limit, taking the total possible self-contribution deduction to Rs. 2 lakh. Option B confuses it with 80C; D is the combined total; C is a guess.
</details>

**Q34.** A holds a residential property bought in March 2022 and sells it in June 2025. Is the gain long-term, and what is the holding-period threshold for property?
A) Short-term; 12 months  B) Long-term; 24 months  C) Long-term; 36 months  D) Short-term; 24 months
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Immovable property (land/building) is long-term if held for **more than 24 months**. Here the holding is about 3 years 3 months > 24 months, so the gain is **long-term**. Option A uses the 12-month rule (that applies to listed equity/securities, not property); C uses the old 36-month rule, now superseded; D has the wrong classification. Different assets have different thresholds: 12 months for listed equity, 24 months for property and unlisted shares.
</details>

**Q35.** A SIP corpus must reach Rs. 10,00,000 in 5 years (60 months) at 12% per annum. What monthly SIP is required?
A) Rs. 16,667  B) Rs. 10,000  C) Rs. 8,000  D) Rs. 12,244
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **PMT = FV × r ÷ [(1 + r)ⁿ − 1]** = 10,00,000 × 0.01 ÷ [(1.01)⁶⁰ − 1] = 10,000 ÷ [1.816697 − 1] = 10,000 ÷ 0.816697 = **Rs. 12,244**. Option A is the no-growth saving (10 lakh ÷ 60); B and C are too low. Even over 5 years, compounding reduces the required monthly deposit below the straight-line figure.
</details>

**Q36.** A lump sum doubles in 8 years. Using the Rule of 72, what is the approximate annual compound return?
A) 6%  B) 9%  C) 12.5%  D) 16%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The **Rule of 72** estimates doubling time: years ≈ 72 ÷ rate, so rate ≈ 72 ÷ years = 72 ÷ 8 = **9%**. (Exact CAGR = 2^(1/8) − 1 = 9.05%, confirming the rule.) Option A would double in 12 years; C in ~5.8 years; D in ~4.5 years. The Rule of 72 is a handy mental shortcut for compounding.
</details>

**Q37.** Rajeev earns Rs. 1,00,000 per month now and his income grows 10% per annum. If he retires in 10 years and wants 50% of his then-income as pension, what is his first-year monthly pension?
A) Rs. 1,00,000  B) Rs. 50,000  C) Rs. 1,29,687  D) Rs. 2,59,374
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Income at retirement = 1,00,000 × (1.10)¹⁰ = Rs. 2,59,374/month. Replacement pension = 50% × 2,59,374 = **Rs. 1,29,687/month** (the workbook's replacement-ratio example). Option D is the full pre-retirement income (no 50% applied); B applies 50% to today's income (ignoring 10 years of salary growth); A is today's income. The replacement-ratio method grows current income to the retirement date, then applies the chosen percentage.
</details>

**Q38.** Under the Replacement Ratio Method, after the first year of retirement the pension is increased each year by which rate?
A) The investment return  B) The inflation rate  C) It stays fixed  D) The salary growth rate
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The first-year replacement income is then **escalated by the inflation rate every year** to preserve purchasing power (e.g., 1,29,687 × 1.07 in year 2 if inflation is 7%). Option A and D use the wrong rate; C ignores that costs rise during retirement. Forgetting this escalation is a classic under-funding mistake.
</details>

**Q39.** An NPS subscriber exits BEFORE age 60 (premature exit). What minimum percentage of the corpus must be used to buy an annuity?
A) 40%  B) 60%  C) 80%  D) 100%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — On premature exit (before 60/superannuation), **at least 80% of the corpus must be annuitised** and only 20% can be taken as a lump sum. Option A is the rule for normal exit at 60 (minimum 40% annuity); B and D are wrong. The stricter rule discourages early exit and protects the retirement income objective. (If the corpus is ≤ Rs. 2.5 lakh, the whole amount can be withdrawn.)
</details>

**Q40.** Mr. Ashish's total retirement expense today is Rs. 45,000 per month. With 6% inflation and 20 years to retirement, what will it be at retirement?
A) Rs. 99,000  B) Rs. 90,000  C) Rs. 47,700  D) Rs. 1,44,321
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **Future expense = 45,000 × (1.06)²⁰** = 45,000 × 3.207135 = **Rs. 1,44,321** (the workbook's Expense Protection example). Option A applies simple inflation; C is one year's; B is a guess. The Expense Protection Method projects today's budget forward by inflation to size the retirement income.
</details>

## Section B — Case Studies (6 cases × 5 sub-questions × 2 marks = 60 marks)

### Case 1 — Retirement Corpus Planning for Mr. Verma

Mr. Verma is 35 years old and plans to retire at 60. His current monthly household expense is Rs. 50,000, and he expects to maintain this lifestyle in retirement. He expects life until age 85 (25 years post-retirement). Use these assumptions:

| Item | Value |
|---|---|
| Current age / Retirement age | 35 / 60 |
| Years to retirement | 25 |
| Current monthly expense | Rs. 50,000 |
| Pre-retirement inflation | 7% p.a. |
| Post-retirement years (85 − 60) | 25 (300 months) |
| Post-retirement inflation | 6% p.a. |
| Return on corpus during retirement | 8% p.a. |
| Accumulation-phase return | 12% p.a. |

**Q41.** What will Mr. Verma's monthly expense be at the start of retirement (age 60)?
A) Rs. 2,12,500  B) Rs. 2,71,372  C) Rs. 3,00,000  D) Rs. 1,87,500
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Inflate today's expense to retirement: **50,000 × (1.07)²⁵** = 50,000 × 5.427433 = **Rs. 2,71,372 per month**. Option A applies simple inflation (50,000 × (1 + 0.07 × 25)); D is a guess; C is rounded wrongly. Over 25 years, 7% inflation more than quintuples the monthly requirement.
</details>

**Q42.** During retirement, the corpus earns 8% while inflation is 6%. What real (inflation-adjusted) annual rate is used to size the corpus?
A) 1.89%  B) 2.00%  C) 14.00%  D) 8.00%
<details><summary>Answer & Explanation</summary>

**Correct: A)** — **Real rate = (1 + 0.08)/(1 + 0.06) − 1** = 1.08 ÷ 1.06 − 1 = 1.018868 − 1 = **1.89%** (the workbook's standard figure). Option B is the rough subtraction (8% − 6%); D ignores inflation; C adds. Using the real rate lets us value the future inflating income stream as if it were level — a standard planning shortcut.
</details>

**Q43.** Using the monthly real rate of about 0.157% (1.89% ÷ 12), the corpus needed to fund Rs. 2,71,372 per month for 300 months (payments at the START of each month) is approximately:
A) Rs. 4.50 crore  B) Rs. 6.50 crore  C) Rs. 8.14 crore  D) Rs. 3.20 crore
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Corpus = PV of an annuity-due: **PV = PMT × [1 − (1 + r)⁻ⁿ] ÷ r × (1 + r)**. PMT = 2,71,372, r = 0.0015723, n = 300. Ordinary PV = 2,71,372 × 239.03 ≈ Rs. 6.487 cr; × (1.0015723) ≈ **Rs. 6.50 crore** (≈ Rs. 6,49,66,853). Option A and D understate it; C overstates. This is the lump sum needed at 60 to draw an inflation-protected income for 25 years.
</details>

**Q44.** To accumulate the Rs. 6.50 crore corpus over 25 years (300 months) at 12% per annum (1% per month), what monthly SIP is needed?
A) Rs. 21,667  B) Rs. 50,000  C) Rs. 1,00,000  D) Rs. 34,578
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Sinking fund: **PMT = FV × r ÷ [(1 + r)ⁿ − 1]** = 6,49,66,853 × 0.01 ÷ [(1.01)³⁰⁰ − 1] = 6,49,668 ÷ [19.788466 − 1] = 6,49,668 ÷ 18.788466 = **Rs. 34,578**. Option A is the no-growth saving (6.5 cr ÷ 300); B and C are guesses. Thanks to 25 years of 12% compounding, a Rs. 34,578 monthly SIP grows into a Rs. 6.5 crore corpus.
</details>

**Q45.** If Mr. Verma delays starting until age 45 (only 15 years / 180 months left) for the same Rs. 6.50 crore corpus at 12%, the required SIP rises to about Rs. 1,30,000/month. What is the main lesson?
A) Delay has no impact  B) The corpus target should be reduced  C) Starting late drastically raises the required saving due to lost compounding  D) He should switch to debt
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The required SIP jumps from about Rs. 34,578 (25 years) to roughly Rs. 1,30,000 (15 years) — nearly four times higher — for the same goal. The reason is the **loss of the earliest, most powerful compounding years**. Option A contradicts the maths; B and D are not the lesson (cutting the target or de-risking only worsens or doesn't fix the shortfall). Start early to keep the saving affordable.
</details>

### Case 2 — Funding a Child's Education for Mrs. Iyer

Mrs. Iyer's daughter is 6 years old. The targeted graduation course costs Rs. 20,00,000 in today's terms and will be needed in 12 years (when the daughter is 18). Education-cost inflation is 8% per annum. Mrs. Iyer can invest in an equity-oriented fund expected to return 11% per annum.

| Item | Value |
|---|---|
| Current cost of course | Rs. 20,00,000 |
| Years to goal | 12 |
| Education inflation | 8% p.a. |
| Expected fund return | 11% p.a. |

**Q46.** What will the course cost in 12 years?
A) Rs. 39,20,000  B) Rs. 50,36,340  C) Rs. 44,00,000  D) Rs. 22,40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Future cost = 20,00,000 × (1.08)¹²** = 20,00,000 × 2.518170 = **Rs. 50,36,340**. Option A is simple inflation (20,00,000 × (1 + 0.08 × 12)); D is one year's; C is a guess. Education inflation compounds, so the true target is over Rs. 50 lakh, not Rs. 39 lakh.
</details>

**Q47.** What single lump sum invested TODAY at 11% would grow to the Rs. 50,36,340 target in 12 years?
A) Rs. 14,39,592  B) Rs. 20,00,000  C) Rs. 25,00,000  D) Rs. 10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — **PV = FV ÷ (1 + r)ⁿ** = 50,36,340 ÷ (1.11)¹² = 50,36,340 ÷ 3.498451 = **Rs. 14,39,592**. Option B is just today's course cost (ignores the 11% growth available); C and D are guesses. Because the lump sum grows at 11% (above the 8% cost inflation), far less than the current cost needs to be set aside today.
</details>

**Q48.** If instead she invests via a monthly SIP for 12 years (144 months) at 11% per annum (about 0.9167% per month), what SIP reaches the Rs. 50,36,340 target?
A) Rs. 35,000  B) Rs. 29,000  C) Rs. 12,000  D) Rs. 16,967
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **PMT = FV × r ÷ [(1 + r)ⁿ − 1]** = 50,36,340 × 0.0091667 ÷ [(1.0091667)¹⁴⁴ − 1] = 46,167 ÷ 2.72095 = **Rs. 16,967**. Option A and B are too high; C too low. A SIP of about Rs. 17,000 spreads the burden and still hits the target because of compounding.
</details>

**Q49.** If the fund actually returns 8% (equal to education inflation) instead of 11%, what is the real rate of return relative to education costs?
A) 8%  B) 0%  C) 3%  D) 16%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real = (1.08 ÷ 1.08) − 1 = **0%**. If the fund only matches education inflation, the investment exactly keeps pace with rising costs but provides no real growth — meaning she'd have to fund essentially the full future cost from contributions. Options A, C, D ignore that the matching rates cancel. This shows why beating cost-inflation matters.
</details>

**Q50.** Mrs. Iyer's daughter is only 6, but she keeps postponing the SIP. Which statement best reflects sound goal-planning?
A) Education goals can be delayed 4–5 years like retirement  B) She should wait for a market crash  C) Education goals have a fixed time horizon and cannot be postponed, so funding must start promptly  D) A lump sum at age 17 is just as good
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Per the workbook, goals such as children's education **have a defined, non-negotiable time horizon** (the child turns 18 at a fixed date) — unlike retirement, which people often (wrongly) defer. So the SIP should begin early to harness compounding and keep instalments affordable. Option A is exactly the mistake the workbook warns against; B is market-timing (not planning); D loses years of compounding.
</details>

### Case 3 — Inflation Shortfall for the Nairs

Mr. Nair (age 50) plans to retire at 60 and believes his Rs. 60,000-per-month current lifestyle will be enough. He has saved a corpus that he expects will yield Rs. 60,000 per month at retirement (he has not adjusted for inflation). Inflation is 6% per annum. He will live to 80.

| Item | Value |
|---|---|
| Current monthly need (today's value) | Rs. 60,000 |
| Years to retirement (60 − 50) | 10 |
| Inflation | 6% p.a. |
| Planned post-retirement years | 20 (to age 80) |

**Q51.** What monthly amount will actually be needed at age 60 to match today's Rs. 60,000 lifestyle?
A) Rs. 96,000  B) Rs. 1,07,451  C) Rs. 1,20,000  D) Rs. 63,600
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **60,000 × (1.06)¹⁰** = 60,000 × 1.790847 = **Rs. 1,07,451**. Option A is simple inflation; D is one year's; C is a guess. His "Rs. 60,000 is enough" assumption is the classic inflation error — he'll actually need over Rs. 1 lakh a month on day one of retirement.
</details>

**Q52.** What is his monthly SHORTFALL at age 60 if his corpus only delivers Rs. 60,000 per month?
A) Rs. 47,451  B) Nil  C) Rs. 36,000  D) Rs. 60,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Shortfall = needed − available = 1,07,451 − 60,000 = **Rs. 47,451 per month**. Option B assumes no inflation (his mistake); C and D are wrong arithmetic. Nearly half his required income is missing on the very first day — a serious under-funding caused by ignoring inflation.
</details>

**Q53.** By age 80 (20 years after retirement), what monthly amount maintains the same Rs. 60,000 (today's) lifestyle, still at 6% inflation from today?
A) Rs. 1,32,000  B) Rs. 1,07,451  C) Rs. 2,40,000  D) Rs. 1,92,428
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Measured from today's value over 20 years: needed = 60,000 × (1.06)²⁰ = 60,000 × 3.207135 = **Rs. 1,92,428**. Option B is the age-60 figure; A is simple inflation; C is a guess. Crucially, the income required keeps RISING throughout retirement — the corpus must fund an escalating, not flat, income.
</details>

**Q54.** Which single adjustment best fixes the Nairs' plan, given inflation?
A) Plan for a fixed Rs. 60,000 income for life  B) Size the corpus on the inflation-adjusted income (Rs. 1,07,451 rising each year), using a real return  C) Withdraw the corpus as a lump sum at 60  D) Stop saving since the corpus already yields Rs. 60,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The corpus must be sized on the **inflation-adjusted first-year income (Rs. 1,07,451) that itself escalates with inflation**, discounted using the real rate (return adjusted for inflation). Option A repeats the inflation error; C and D ignore longevity and rising costs. Proper retirement sizing always accounts for inflation both up to and throughout retirement.
</details>

**Q55.** If Mr. Nair's corpus earns 8% during retirement and inflation is 6%, what real rate should he use to value his retirement income stream?
A) 14%  B) 2%  C) 1.89%  D) 8%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **Real rate = (1.08 ÷ 1.06) − 1 = 1.89%**. Option B is the rough subtraction (8% − 6% = 2%), which slightly overstates it; A adds; D ignores inflation. The real rate captures that part of the 8% return is eaten by 6% inflation, leaving only ~1.89% of true growth to fund rising expenses.
</details>

### Case 4 — Capital Gains for an Investor, Mr. Bose

Mr. Bose made the following transactions during FY 2025–26 (all listed securities, STT paid on purchase and sale):

| Asset | Bought | Cost | Sold | Sale value | Holding period |
|---|---|---|---|---|---|
| Equity MF units | Jun 2022 | Rs. 8,00,000 | Aug 2025 | Rs. 14,00,000 | ~3 years |
| Listed shares (parcel B) | Feb 2025 | Rs. 5,00,000 | Oct 2025 | Rs. 7,00,000 | ~8 months |

**Q56.** Classify the two transactions by holding period.
A) Both long-term  B) MF long-term (>12m); parcel B short-term (≤12m)  C) Both short-term  D) MF short-term; B long-term
<details><summary>Answer & Explanation</summary>

**Correct: B)** — For listed equity/equity MF the threshold is **12 months**. The MF was held ~3 years → long-term; parcel B was held ~8 months → short-term. Option A, C, D misclassify. Holding period determines which tax section applies — 112A for LTCG, 111A for STCG.
</details>

**Q57.** What is the LTCG tax on the equity MF (Section 112A), considering the Rs. 1,25,000 exemption?
A) Rs. 59,375  B) Rs. 75,000  C) Rs. 90,000  D) Rs. 1,20,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — LTCG = 14,00,000 − 8,00,000 = Rs. 6,00,000. Exempt first Rs. 1,25,000 → taxable 4,75,000. Tax = **12.5% × 4,75,000 = Rs. 59,375**. Option B taxes the full gain (forgets the exemption); C and D are guesses. The Rs. 1.25 lakh annual exemption applies once across all 112A gains.
</details>

**Q58.** What is the STCG tax on parcel B (Section 111A)?
A) Rs. 30,000  B) Rs. 11,250  C) Rs. 15,000  D) Rs. 40,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — STCG = 7,00,000 − 5,00,000 = Rs. 2,00,000. Under Section 111A (STT paid), the rate is **20%**. Tax = 20% × 2,00,000 = **Rs. 40,000**. Option A uses the old 15% rate; there is no Rs. 1.25 lakh exemption for STCG; B and C are guesses. Short-term gains are taxed more heavily than long-term.
</details>

**Q59.** What is the CAGR earned on the equity MF (Rs. 8,00,000 to Rs. 14,00,000 over 3 years)?
A) 25.0%  B) 18.0%  C) 20.51%  D) 12.0%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **CAGR = (14,00,000 ÷ 8,00,000)^(1/3) − 1** = (1.75)^(0.3333) − 1 = 1.205071 − 1 = **20.51%**. Option A overstates; B and D understate. CAGR converts the 75% total gain over 3 years into a single annualised rate.
</details>

**Q60.** Mr. Bose's total capital-gains tax for the two transactions is:
A) Rs. 99,375  B) Rs. 1,05,000  C) Rs. 75,000  D) Rs. 59,375
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Total = LTCG tax (Rs. 59,375) + STCG tax (Rs. 40,000) = **Rs. 99,375**. Option B forgets the LTCG exemption (would be 75,000 + 30,000); C is only STCG-related; D is only LTCG. Each gain is taxed under its own section and then summed.
</details>

### Case 5 — Life Insurance Need for Mr. Sharma (HLV / Income Replacement)

Mr. Sharma earns Rs. 1,00,000 per month. Of this, Rs. 40,000 goes to his own personal needs, EMI, and insurance premium, leaving Rs. 60,000 per month to support his family. He wants to protect his wife (currently 45, expected to live to 80 — i.e., 35 years). Inflation is 6% and the corpus will be invested at 8%. He has an outstanding home loan of Rs. 30,00,000, existing life cover of Rs. 50,00,000, and investments of Rs. 20,00,000.

| Item | Value |
|---|---|
| Monthly income | Rs. 1,00,000 |
| Self/EMI/premium portion | Rs. 40,000 |
| Income to replace (monthly) | Rs. 60,000 |
| Wife's age / expected to | 45 / 80 (35 years) |
| Inflation / Return | 6% / 8% |
| Home loan outstanding | Rs. 30,00,000 |
| Existing cover / investments | Rs. 50,00,000 / Rs. 20,00,000 |

**Q61.** What annual income needs to be replaced for the family?
A) Rs. 12,00,000  B) Rs. 7,20,000  C) Rs. 4,80,000  D) Rs. 6,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Income to replace = total − (self + EMI + premium) = 1,00,000 − 40,000 = Rs. 60,000/month → **× 12 = Rs. 7,20,000 per year**. Option A is the full income (doesn't deduct the portion the insured spent on himself); C and D are guesses. Only the income that actually supported dependents needs replacing.
</details>

**Q62.** What real (inflation-adjusted) rate is used to value the income stream?
A) 2%  B) 14%  C) 8%  D) 1.89%
<details><summary>Answer & Explanation</summary>

**Correct: D)** — **Real rate = (1.08 ÷ 1.06) − 1 = 1.89%** (the workbook's standard HLV discount rate). Option A is the rough subtraction; B adds; C ignores inflation. The income to be provided rises with inflation, so it is discounted at the inflation-adjusted return.
</details>

**Q63.** Using PV of an annuity-due at 1.89% for 35 years on Rs. 7,20,000 per year, the corpus required to replace the income is approximately:
A) Rs. 1.87 crore  B) Rs. 2.52 crore  C) Rs. 1.20 crore  D) Rs. 90 lakh
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Corpus = PV annuity-due = 7,20,000 × [1 − (1.0189)⁻³⁵] ÷ 0.0189 × (1.0189) ≈ 7,20,000 × 25.93 ≈ **Rs. 1.87 crore** (≈ Rs. 1,86,68,428). Option B overstates; C and D understate. This corpus, invested at 8%, would pay an inflation-rising income to the wife for 35 years and be fully drawn down by the end.
</details>

**Q64.** Adding the Rs. 30 lakh loan and deducting existing cover (Rs. 50 lakh) and investments (Rs. 20 lakh), what ADDITIONAL life cover does Mr. Sharma need?
A) Rs. 2.17 crore  B) Rs. 1.87 crore  C) Rs. 1.47 crore  D) Rs. 67 lakh
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Total need = corpus (Rs. 1.87 cr) + loan (Rs. 30 lakh) = Rs. 2.17 crore. Deduct existing cover (Rs. 50 lakh) + investments (Rs. 20 lakh) = Rs. 70 lakh. Additional cover = 2,16,68,428 − 70,00,000 = **Rs. 1.47 crore** (≈ Rs. 1,46,68,428). Option A forgets to subtract existing resources; B omits both loan and offsets; D is a guess. Existing assets and cover reduce the new insurance required.
</details>

**Q65.** If instead Mr. Sharma had Rs. 70,00,000 of investments (rather than Rs. 20 lakh), how would his additional insurance requirement change?
A) Increase  B) Decrease (higher existing assets reduce the need)  C) Stay the same  D) Become zero
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Under the needs-based approach, **higher existing investments are deducted from the total need, lowering the additional cover required** (it would fall by an extra Rs. 50 lakh, to about Rs. 96.7 lakh). Option A is the opposite; C ignores the deduction; D overstates (the need wouldn't vanish). More owned assets means less insurance is needed to fill the gap.
</details>

### Case 6 — Integrated Plan for Mr. and Mrs. Kapoor

Mr. Kapoor (40) is building a Rs. 2 crore retirement corpus over 20 years and earns 12% per annum on his SIP. He also wants to evaluate a step-up SIP, examine the impact of an early EPF withdrawal, and check how his NPS corpus at 60 will be split. Assumptions: accumulation return 12% p.a. (1% per month), EPF interest 8.5% p.a.

| Item | Value |
|---|---|
| Retirement corpus target | Rs. 2,00,00,000 |
| Years to retirement | 20 (240 months) |
| Accumulation return | 12% p.a. |
| Considered EPF withdrawal now | Rs. 75,000 (30 years to retirement) |
| Projected NPS corpus at 60 | Rs. 1,00,00,000 |

**Q66.** What flat monthly SIP at 12% for 240 months reaches the Rs. 2 crore target?
A) Rs. 83,333  B) Rs. 20,217  C) Rs. 40,000  D) Rs. 10,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **PMT = FV × r ÷ [(1 + r)ⁿ − 1]** = 2,00,00,000 × 0.01 ÷ [(1.01)²⁴⁰ − 1] = 2,00,000 ÷ 9.892554 = **Rs. 20,217** (the workbook's figure). Option A is the no-growth saving (2 cr ÷ 240); C and D are guesses. Compounding over 20 years does most of the work.
</details>

**Q67.** Mr. Kapoor prefers a step-up SIP rising 7% per year. Compared with the flat Rs. 20,217, his starting SIP will be:
A) Higher than Rs. 20,217  B) Lower than Rs. 20,217, then rising each year  C) Exactly Rs. 20,217  D) A one-time lump sum
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A step-up SIP **starts below the flat amount and increases by 7% annually**, matching rising income, while still reaching Rs. 2 crore. Option A is the opposite; C ignores the step-up's effect; D misreads the strategy. Step-up suits investors who expect their income to grow and want an easier start.
</details>

**Q68.** If Mr. Kapoor withdraws Rs. 75,000 from EPF now (30 years to retirement, 8.5% p.a.), what future corpus does he lose?
A) Rs. 2.25 lakh  B) Rs. 8.66 lakh  C) Rs. 75,000  D) Rs. 5.00 lakh
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Forgone FV = **75,000 × (1.085)³⁰** = 75,000 × 11.5582 = **Rs. 8.66 lakh** (the workbook example). Option A uses simple interest; C ignores compounding; D is a guess. A Rs. 75,000 early withdrawal quietly costs over Rs. 8.6 lakh of retirement money.
</details>

**Q69.** At 60, Mr. Kapoor's NPS corpus is Rs. 1 crore. What is the maximum tax-free lump sum and the minimum annuity portion?
A) Lump Rs. 60 lakh; annuity Rs. 40 lakh  B) Lump Rs. 40 lakh; annuity Rs. 60 lakh  C) Lump Rs. 100 lakh; annuity nil  D) Lump Rs. 50 lakh; annuity Rs. 50 lakh
<details><summary>Answer & Explanation</summary>

**Correct: A)** — On normal exit at 60, NPS allows up to **60% (Rs. 60 lakh) as a tax-free lump sum** and requires a **minimum 40% (Rs. 40 lakh) to buy an annuity**. Option B reverses it; C ignores mandatory annuitisation; D is a 50:50 guess. The annuity income is later taxable in the year received.
</details>

**Q70.** If Mr. Kapoor had instead delayed his Rs. 2 crore SIP plan by 5 years (15 years / 180 months left at 12%), the required monthly SIP becomes about Rs. 40,034. The integrated takeaway is:
A) Delaying is harmless  B) Early start, avoiding withdrawals, and step-ups all protect the retirement goal at lower cost  C) He should reduce the target to Rs. 1 crore  D) NPS alone will fund retirement
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Across the case, the same Rs. 2 crore goal costs Rs. 20,217/month over 20 years but nearly double (Rs. 40,034) over 15 years; an early EPF withdrawal silently drains Rs. 8.66 lakh; and step-ups ease the start. So **starting early, not withdrawing prematurely, and stepping up contributions** keep the goal affordable. Option A contradicts the maths; C abandons the goal; D over-relies on one product. Disciplined, early, uninterrupted saving is the core of sound retirement planning.
</details>
