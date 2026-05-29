# Chapter 20: Case Studies — 100-Question Bank (40 MCQs + 12 Full Cases)

> **How case-based questions work in the real exam.** NISM Series X-B (Investment Adviser Level 2) gives **60 marks (40% of the paper) as case studies**. The standard pattern is **6 cases × 5 sub-questions × 2 marks = 60 marks**. Each case is a realistic caselet (a household's data) followed by 5 MCQs that test whether you can pull data out of the story and apply a formula.
>
> **The 5-step method — use it on every sub-question:**
> 1. **Read the data** — write down every number (current cost, inflation, return, years, existing cover, timing "start vs end of year").
> 2. **Identify what's asked** — future value? present value/corpus? insurance need? a return (RATE)? an allocation %? a tax amount?
> 3. **Apply the formula** — pick the Excel function (FV / PV / PMT / RATE) or the tax rule.
> 4. **Compute** — do the arithmetic step by step; mind the Excel sign convention (outflows negative).
> 5. **Pick the option** — match your number to the closest option.
>
> ⚠️ **Negative marking:** the exam deducts **25% of the marks for a wrong answer**. So a wrong case sub-question costs you 0.5 mark on top of the 2 you miss. If you can eliminate two options, an educated guess is usually worth it; a blind guess on a question you cannot narrow is not.
>
> 🔑 **Formula you will reuse constantly — real (inflation-adjusted) return:**
> Real return = (1 + investment return) ÷ (1 + inflation) − 1. Use it whenever an income/expense stream **rises with inflation** every year.

---

## 📝 Standalone MCQs (Q1–Q40)

**Q1.** A loan EMI in MS Excel is calculated using which function? *(Easy)*
A) FV  B) PV  C) PMT  D) RATE
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **PMT(rate, nper, pv)** returns the level periodic instalment that repays a loan, which is exactly what an EMI is. **A) FV** grows a single sum or stream forward in time. **B) PV** discounts a future stream to today (used for corpus). **D) RATE** solves for the implied interest rate, not the instalment.
</details>

**Q2.** Which type of asset allocation depends on the market view at a point in time? *(Easy)*
A) Strategic asset allocation  B) Tactical asset allocation  C) Investor risk profile  D) Goal-based allocation
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Tactical** allocation deliberately tilts the portfolio toward/away from asset classes based on short-term **market** views, then reverts. **A) Strategic** allocation is the long-term policy mix set from the investor's risk profile and goals, not the market. **C)** A risk profile is an investor characteristic, not an allocation method. **D)** Goal-based allocation is driven by goal horizon, again not by market timing.
</details>

**Q3.** The "real" (inflation-adjusted) return used to discount an inflating expense stream is given by: *(Medium)*
A) Return − Inflation  B) Return + Inflation  C) (1+Return)/(1+Inflation) − 1  D) (1+Inflation)/(1+Return) − 1
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The exact real return is **(1+Return)/(1+Inflation) − 1**. Example: return 9%, inflation 8% → (1.09/1.08) − 1 = **0.93%**. **A)** Return − Inflation (the simple difference) is only a rough approximation and the exam uses the exact form. **B)** Adding them is wrong — inflation reduces, not increases, real return. **D)** Inverts numerator and denominator, giving a wrong figure.
</details>

**Q4.** A future cost of education due in 5 years, with current cost ₹15,00,000 and inflation 15% p.a., is found by: *(Easy)*
A) PV(15%,5,,-1500000)  B) FV(15%,5,,-1500000)  C) PMT(15%,5,1500000)  D) RATE(5,,1500000)
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **future cost** means growing today's amount forward, which is **FV**. =FV(15%,5,,−1500000) = 15,00,000 × 1.15⁵ ≈ **₹30,17,036**. **A) PV** would discount it backward (smaller number, wrong direction). **C) PMT** computes an instalment, irrelevant here. **D) RATE** finds an interest rate, not a future value.
</details>

**Q5.** Under Section 112A, long-term capital gains on listed equity shares/equity mutual funds are taxed at what rate, and with what annual exemption? *(Medium)*
A) 10% above ₹1 lakh  B) 12.5% above ₹1.25 lakh  C) 20% above ₹1 lakh  D) 15% with no exemption
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Post the 2024 change, **LTCG u/s 112A is taxed at 12.5%** on gains **exceeding ₹1.25 lakh** in a financial year (no indexation for these listed equity assets). **A)** 10%/₹1 lakh was the old rate before the change. **C)** 20% is the STCG rate u/s 111A, not LTCG. **D)** There is an exemption, and 15% is neither the LTCG nor current STCG rate.
</details>

**Q6.** Short-term capital gains on listed equity shares (held ≤12 months) under Section 111A are taxed at: *(Medium)*
A) 12.5%  B) 15%  C) 20%  D) Slab rate
<details><summary>Answer & Explanation</summary>

**Correct: C)** — **STCG u/s 111A is now taxed at 20%** (raised from the earlier 15%). **A) 12.5%** is the LTCG rate u/s 112A. **B) 15%** was the old STCG rate before the change. **D) Slab rate** applies to STCG on assets *not* covered by 111A (e.g., most debt funds/other assets), not to listed equity STCG.
</details>

**Q7.** For listed equity shares, the holding period that separates short-term from long-term is: *(Easy)*
A) 12 months  B) 24 months  C) 36 months  D) 6 months
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Listed equity shares and equity-oriented mutual fund units become **long-term after 12 months**. **B) 24 months** is the threshold for immovable property and unlisted shares. **C) 36 months** was the old threshold for debt/other assets. **D) 6 months** is not a capital-gains threshold.
</details>

**Q8.** Mr. A sells listed equity shares after 18 months for a gain of ₹3,00,000 (his only such gain). His LTCG tax (ignoring cess) is: *(Hard)*
A) ₹18,750  B) ₹21,875  C) ₹37,500  D) ₹30,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Held 18 months (>12) → **LTCG u/s 112A**. Taxable gain = total gain − ₹1.25 lakh exemption = 3,00,000 − 1,25,000 = **₹1,75,000**. Tax = 12.5% × 1,75,000 = **₹21,875**. **A) ₹18,750** = 12.5% × 1,50,000 (wrongly using a ₹1.5 lakh exemption). **C) ₹37,500** = 12.5% × 3,00,000 (forgot the exemption). **D) ₹30,000** = 10% × 3,00,000 (old rate, no exemption).
</details>

**Q9.** Mr. B has STCG of ₹2,00,000 on listed shares (held 8 months) under Section 111A. His tax (ignoring cess) is: *(Medium)*
A) ₹25,000  B) ₹30,000  C) ₹40,000  D) ₹18,750
<details><summary>Answer & Explanation</summary>

**Correct: C)** — STCG u/s 111A is taxed at a **flat 20%**: 20% × 2,00,000 = **₹40,000**. **A) ₹25,000** = 12.5% (LTCG rate, wrong). **B) ₹30,000** = 15% (old STCG rate). **D) ₹18,750** mixes the LTCG rate and an exemption that does not apply to listed-equity STCG.
</details>

**Q10.** The maximum deduction available under Section 80C in a financial year (old tax regime) is: *(Easy)*
A) ₹1,00,000  B) ₹1,25,000  C) ₹1,50,000  D) ₹2,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Section **80C caps deductions at ₹1,50,000** (LIC premium, PPF, ELSS, principal repayment of home loan, etc.). **A) ₹1,00,000** was the old pre-2014 limit. **B) ₹1,25,000** is the LTCG exemption figure, not 80C. **D) ₹2,00,000** is the home-loan interest cap u/s 24(b), a separate deduction.
</details>

**Q11.** The corpus needed today to fund an inflation-rising annual expense for n years is best found with: *(Medium)*
A) FV using nominal return  B) PV using the real (inflation-adjusted) return  C) PMT using inflation  D) RATE using the return
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A corpus is a **present value**, and because the expense **rises with inflation** every year you discount at the **real return**: =PV(real return, n, −expense). **A)** FV grows forward — wrong direction for a corpus. **C)** PMT gives an instalment. **D)** RATE solves for a rate, not an amount.
</details>

**Q12.** Today's annual expense is ₹4,80,000; retirement is 8 years away; inflation 10%. The expense in the first year of retirement is closest to: *(Medium)*
A) ₹8,64,000  B) ₹10,28,923  C) ₹9,60,000  D) ₹11,31,815
<details><summary>Answer & Explanation</summary>

**Correct: B)** — =FV(10%,8,,−480000) = 4,80,000 × 1.10⁸ = 4,80,000 × 2.1436 = **₹10,28,923**. **A) ₹8,64,000** = only one period of growth. **C) ₹9,60,000** = simply doubling, no compounding. **D) ₹11,31,815** = 9 years of growth (1.10⁹), one year too many.
</details>

**Q13.** Continuing Q12 (expense ₹10,28,923 at retirement, beginning-of-year), retirement return 11%, inflation 10%, for 15 years — the corpus required is closest to: *(Hard)*
A) ₹1,38,61,919  B) ₹1,44,96,632  C) ₹1,52,39,389  D) ₹1,52,54,894
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real return = (1.11/1.10) − 1 = **0.91%**. Corpus = PV(0.91%, 15, −10,28,923, , 1), where **type=1** means the expense is drawn at the **beginning** of each year → **₹1,44,96,632**. **A), C), D)** are distractors arising from using a wrong return, the wrong type flag, or 14/16 years instead of 15.
</details>

**Q14.** In Excel financial functions, money you **pay out** is entered as: *(Easy)*
A) Positive  B) Negative  C) Zero  D) Either, it makes no difference
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Outflows (premiums, contributions, the expense you fund) are entered as **negative**; inflows are positive. That is why functions show =FV(8%,8,,−1200000). **A)** Positive is for money received. **C)** Zero means no cash flow. **D)** It does matter — a wrong sign flips the result.
</details>

**Q15.** A retirement corpus is built from annual contributions, each grown at the **investment** rate for the years remaining to retirement, then summed. This is an application of: *(Medium)*
A) PV of an annuity  B) FV of each cash flow then summing  C) RATE  D) PMT
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Each contribution is moved **forward** to retirement at the investment rate (FV) and all the future values are **added**. **A) PV** discounts backward — wrong direction for accumulating a corpus. **C) RATE** finds a rate. **D) PMT** finds a level instalment, but here the contributions grow each year, so they are not level.
</details>

**Q16.** An existing retirement corpus of ₹12,00,000 invested at 8% for 8 years grows to (use FV): *(Medium)*
A) ₹19,33,000  B) ₹22,21,116  C) ₹24,00,000  D) ₹20,57,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — =FV(8%,8,,−1200000) = 12,00,000 × 1.08⁸ = 12,00,000 × 1.8509 = **₹22,21,116**. **A)** uses too few years/lower factor. **C)** is just doubling. **D)** uses roughly 7 years of growth.
</details>

**Q17.** Mr. C, 45, single earning member, has a home loan and a car loan and goals due soon. Based only on his circumstances, his **capacity** to take risk is best described as: *(Medium)*
A) Conservative  B) Moderate  C) Liquidity seeker  D) Aggressive
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A good income but a sole earner with two loans and near-term goals balances out to a **moderate** risk capacity — neither very safe nor very aggressive. **A) Conservative** understates his good income and growth need. **C) Liquidity seeker** is not a standard risk-profile label. **D) Aggressive** ignores his liabilities and dependent family.
</details>

**Q18.** Money that must be parked for a **short period** until a daughter's education fee is paid should go into: *(Easy)*
A) Large-cap equity  B) A current account  C) Alternative investments  D) Short-term fixed deposit
<details><summary>Answer & Explanation</summary>

**Correct: D)** — A **short-term FD** preserves capital and gives some return for a near-term, must-pay goal. **A) Equity** can fall just when the money is needed. **B) Current account** earns nothing. **C) Alternatives** are illiquid/risky and unsuitable for a short horizon.
</details>

**Q19.** A Will made by a living person comes into legal effect: *(Easy)*
A) On registration  B) On the testator's death  C) When the first beneficiary claims  D) On the executor's appointment
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A Will is a declaration that takes effect **only on the death** of the testator and can be revised any time before then. **A)** Registration is optional and does not make it operative. **C)** A beneficiary cannot claim while the testator lives. **D)** The executor acts only after death.
</details>

**Q20.** A mother wants to give her daughter money immediately from her own mutual funds (which a Will bequeaths to the daughter). The cleanest, tax-free way is: *(Medium)*
A) Hand over a copy of the registered Will to redeem the units  B) Make the daughter a joint holder first  C) The mother redeems the units herself and gifts the cash to the daughter  D) Nothing can be done while the mother is alive
<details><summary>Answer & Explanation</summary>

**Correct: C)** — A Will is inoperative while the mother lives, so **she (the holder) redeems and gifts** the cash; a gift from mother to daughter is a **relative**, hence **tax-free**. **A)** A Will gives no current redemption right. **B)** Adding a joint holder is slow and unnecessary. **D)** Is too absolute — a gift solves it immediately.
</details>

**Q21.** A target-maturity debt fund is recommended for a goal because it gives the investor: *(Medium)*
A) Guaranteed equity-like returns  B) Visibility on likely returns if held to maturity  C) Daily capital protection  D) Tax-free income
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A target-maturity fund holds bonds maturing around a set date, so an investor holding to maturity has reasonable **visibility on the likely yield**. **A)** Debt funds do not promise equity-like returns. **C)** NAV still fluctuates day to day. **D)** Returns are taxable.
</details>

**Q22.** For a goal that is **15+ years** away, even an investor in her late 60s can suitably use: *(Medium)*
A) A liquid fund only  B) A short-term debt fund only  C) A large-and-mid-cap equity fund  D) A current account
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Suitability is driven by **goal horizon**, not just age. A 15-year horizon justifies **equity** (large-and-mid-cap) for growth. **A), B)** Pure debt under-delivers over 15 years and risks falling short. **D)** A current account erodes value to inflation.
</details>

**Q23.** A health **top-up** policy (as opposed to a super top-up) is triggered when: *(Medium)*
A) The aggregate of all claims in the year crosses the deductible  B) A single claim crosses the deductible  C) The base policy is exhausted, regardless of amount  D) The insured turns 60
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A plain **top-up** considers each claim **individually**; it pays only when **one single claim** exceeds the deductible. **A)** describes a **super top-up** (aggregate basis). **C)** Exhausting the base does not by itself trigger a top-up. **D)** Age is irrelevant to the trigger.
</details>

**Q24.** A health **super top-up** policy is triggered when: *(Medium)*
A) A single claim crosses the deductible  B) The aggregate of all claims in the year crosses the deductible  C) The base policy is renewed  D) The first hospitalisation occurs
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **super top-up** adds up **all claims in the policy year**; once that **aggregate** crosses the deductible, it pays — which is why it is more useful than a plain top-up. **A)** is the plain top-up rule. **C), D)** are not triggers.
</details>

**Q25.** A claim of ₹50,000 on a policy with a ₹10,000 deductible and 5% co-pay is reimbursed as: *(Hard)*
A) ₹38,000  B) ₹40,000  C) ₹37,500  D) ₹42,500
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Reimbursement = Claim − Deductible − Co-pay, where co-pay is **5% of (claim − deductible)**. = 50,000 − 10,000 − 5%×(40,000) = 50,000 − 10,000 − 2,000 = **₹38,000**. **B)** forgets the co-pay. **C)** applies 5% to the full 50,000 then subtracts wrongly. **D)** subtracts only the co-pay, ignoring the deductible.
</details>

**Q26.** Base health policy ₹3 lakh + top-up ₹10 lakh with ₹5 lakh deductible. A **single** bill of ₹4 lakh arrives. Out-of-pocket cost is: *(Hard)*
A) NIL  B) ₹1 lakh  C) ₹3 lakh  D) ₹4 lakh
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Base pays ₹3 lakh; the remaining ₹1 lakh is borne by the insured because the **single** claim (₹4 lakh) is **below the ₹5 lakh deductible**, so the top-up does not trigger → **₹1 lakh out of pocket**. **A)** wrongly assumes the top-up pays. **C)** ignores the base policy. **D)** ignores the base entirely.
</details>

**Q27.** Base ₹3 lakh + **super** top-up ₹10 lakh with ₹3 lakh deductible. Three bills in the year: ₹2L, ₹3L, ₹4L. Out-of-pocket cost is: *(Hard)*
A) ₹6 lakh  B) ₹3 lakh  C) ₹1 lakh  D) NIL
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Base ₹3L covers the first claims up to ₹3L; once **aggregate** claims cross the ₹3L deductible, the **super top-up** pays the rest of all bills → **NIL** out of pocket. **A) ₹6 lakh** is the answer for a *plain* top-up (no single bill ≥ deductible). **B), C)** mis-track the aggregate logic.
</details>

**Q28.** A person resident in India under FEMA who already holds a life insurance policy bought abroad: *(Medium)*
A) Must surrender it immediately  B) May continue it and pay premiums from foreign income or by remitting from India  C) Cannot pay any further premiums  D) Must convert it to an Indian policy
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Indian law permits a returning resident to **keep an existing foreign life policy**, paying premiums from foreign income (e.g., rent) or by remitting funds. **A), C)** wrongly force surrender or block premiums. **D)** No such conversion requirement exists.
</details>

**Q29.** After becoming a resident of India, an individual's **rental income from a US property** is: *(Medium)*
A) Not taxable in India at all  B) Taxable in India with credit for tax paid in the US  C) Taxable in India with no foreign tax credit  D) Taxable only in the US
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A resident is taxed on **global income** in India, but **double taxation is relieved** by a foreign tax credit for the US tax paid. **A)** ignores global-income taxation. **C)** denies the credit that the DTAA provides. **D)** ignores Indian residence.
</details>

**Q30.** Income accruing in a US tax-deferred retirement account, where the account is **notified under Section 89A**, is taxed in India: *(Hard)*
A) Every year as it accrues  B) Only in the year of withdrawal, with credit for US tax  C) Never  D) At a flat 30% on accrual
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Section 89A** lets a specified person defer Indian tax on such an account to the **year of withdrawal**, matching the US timing, with **credit for US tax**. **A)** describes the mismatch 89A removes. **C)** It is taxed, just deferred. **D)** No such flat rate applies.
</details>

**Q31.** The government scheme offering senior citizens a high fixed rate of interest is: *(Easy)*
A) Public sector bank FD  B) Senior Citizen Savings Scheme (SCSS)  C) Equity Linked Savings Scheme  D) Unit Linked Insurance Plan
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **SCSS** is a **government** small-savings scheme for those 60+ offering an attractive fixed rate. **A)** A PSU-bank FD is a bank product, not a government scheme. **C) ELSS** is an equity tax-saver, not fixed income. **D) ULIP** is an insurance-investment product, not a fixed-income scheme.
</details>

**Q32.** Ms. T invests ₹60,000 in a 10% asset using **1.4× leverage**, borrowing at 9%. Her **own funds** are: *(Hard)*
A) ₹35,000  B) ₹25,000  C) ₹42,857  D) ₹17,143
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Leverage 1.4× means total exposure = 1.4 × own funds. So own funds = total ÷ 1.4 = 60,000 ÷ 1.4 = **₹42,857**. **A), B)** do not satisfy 1.4× of own funds = 60,000. **D) ₹17,143** is the **borrowed** part (60,000 − 42,857), not own funds.
</details>

**Q33.** Continuing Q32, the **interest** Ms. T pays (borrowing ₹17,143 at 9%) is closest to: *(Medium)*
A) ₹2,250  B) ₹5,400  C) ₹1,543  D) ₹3,500
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Borrowed amount = 60,000 − 42,857 = ₹17,143; interest = 9% × 17,143 = **₹1,543**. **A), B), D)** use wrong borrowed amounts (e.g., applying 9% to 60,000 gives 5,400, which double-counts own funds as borrowed).
</details>

**Q34.** Continuing Q32–Q33, Ms. T's **net return in rupees** (asset earns 10% on ₹60,000, less interest of ₹1,543) is closest to: *(Hard)*
A) ₹6,000  B) ₹4,457  C) ₹2,850  D) ₹3,750
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Gross earning = 10% × 60,000 = ₹6,000; net = 6,000 − 1,543 = **₹4,457**. **A) ₹6,000** ignores interest. **C), D)** use the wrong interest figure (e.g., borrowing 25,000–42,857 instead of 17,143).
</details>

**Q35.** Continuing Q32–Q34, Ms. T's **return on equity** (net ₹4,457 on own funds ₹42,857) is closest to: *(Hard)*
A) 1%  B) 10.4%  C) 10.9%  D) 11.4%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Return on equity = net return ÷ own funds = 4,457 ÷ 42,857 = **10.4%**. Leverage lifted the 10% asset return slightly because the asset yield (10%) exceeds the borrowing cost (9%). **A) 1%** is the spread per rupee, not ROE. **C), D)** overstate the lift.
</details>

**Q36.** The recommended insurance-need formula (income-replacement / HLV method) is: *(Medium)*
A) PV of future income (real return) + liabilities + lump-sum goals − existing cover  B) Annual income × age  C) 10 × annual premium  D) Sum of all past incomes
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The **need** is the present value of the income to be replaced (discounted at the real return), **plus** outstanding liabilities and lump-sum goals (children's corpus), **minus** existing cover/earmarked assets. **B), C), D)** are arbitrary rules of thumb with no actuarial basis.
</details>

**Q37.** Adil's spouse needs ₹3,00,000/year (today's value) for 30 years; inflation 6%, return 8%. The corpus to fund this income (PV at the real return) is closest to: *(Hard)*
A) ₹68,24,712  B) ₹90,00,000  C) ₹50,00,000  D) ₹37,50,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Real return = (1.08/1.06) − 1 = **1.89%**. Corpus = PV(1.89%, 30, −3,00,000) = **₹68,24,712**. **B)** overstates by ignoring discounting. **C), D)** are far too low (they undercount the 30-year stream).
</details>

**Q38.** Continuing Q37, Adil also wants ₹10 lakh for his child and has a ₹30 lakh home loan; existing cover is ₹50 lakh. **Additional** cover needed is closest to: *(Hard)*
A) ₹44 lakh  B) ₹58 lakh  C) ₹69 lakh  D) ₹81 lakh
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Total need = income corpus 68,24,712 + child corpus 10,00,000 + loan 30,00,000 = **₹1,08,24,712**; less existing cover ₹50,00,000 = **₹58,24,712 ≈ ₹58 lakh**. **A)** forgets a component. **C), D)** double-count or omit the existing cover deduction.
</details>

**Q39.** Bose pays ₹6,000/year for 20 years; a pure term plan of the same cover costs ₹150/year. Maturity value ₹2,00,000. The return on the **investment portion** (₹5,850/year → ₹2,00,000) using RATE is closest to: *(Hard)*
A) 1.7%  B) 3.6%  C) 5.3%  D) 6.1%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Strip out the insurance cost: investment premium = 6,000 − 150 = ₹5,850/year. =RATE(20, −5850, , 200000) = **5.3%**. **A), B)** understate (they use the full ₹6,000 or wrong nper). **D)** overstates the implied yield.
</details>

**Q40.** Jaspreet spends ₹50,000/month now, retires in 20 years, wants 25 years of inflation-adjusted income; inflation 8%, retirement return 9%. The corpus required at retirement is closest to: *(Hard)*
A) ₹1.5 crore  B) ₹6.2 crore  C) ₹4.8 crore  D) ₹3.5 crore
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Annual expense now = ₹6,00,000. At retirement: FV(8%,20,,−600000) = **₹27,96,574**. Real return = (1.09/1.08) − 1 = **0.93%**. Corpus = PV(0.93%, 25, −27,96,574) = **₹6.22 crore**. **A), C), D)** result from skipping the FV step or using nominal instead of real return.
</details>

---

## 🧩 Full Exam-Style Case Studies

> Each case has **5 sub-questions of 2 marks each (10 marks per case)**. Read the caselet, list the data, then work each sub-question with the 5-step method.

### Case Study 1 — Mr. Rao: Pure Income-Tax Computation (old regime)

Mr. Rao (42), a salaried resident, has the following for the financial year (old tax regime):

| Item | Amount |
|---|---|
| Gross salary | ₹14,00,000 |
| Standard deduction (salary) | ₹50,000 |
| PPF + ELSS + EPF (80C eligible) | ₹2,10,000 invested |
| Health insurance premium for self/family (80D) | ₹22,000 |
| NPS own contribution (80CCD(1B)) | ₹50,000 |
| Interest on self-occupied home loan (Sec 24b) | ₹2,40,000 paid |

Ignore cess and surcharge. Use FY slabs (old regime): up to ₹2.5L nil; ₹2.5L–₹5L at 5%; ₹5L–₹10L at 20%; above ₹10L at 30%.

**Q1.1.** What is Mr. Rao's income from salary after the standard deduction? *(Easy)*
A) ₹14,00,000  B) ₹13,50,000  C) ₹13,00,000  D) ₹12,90,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Salary income = Gross − standard deduction = 14,00,000 − 50,000 = **₹13,50,000**. **A)** forgets the standard deduction. **C), D)** subtract the wrong amount (₹1,00,000 / ₹1,10,000), but the standard deduction is fixed at ₹50,000.
</details>

**Q1.2.** What is the **maximum** deduction allowable under Section 80C here? *(Easy)*
A) ₹2,10,000  B) ₹2,00,000  C) ₹1,50,000  D) ₹1,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Although he invested ₹2,10,000, **80C is capped at ₹1,50,000**, so only ₹1,50,000 is deductible. **A)** wrongly allows the full invested amount. **B), D)** are not the statutory cap (the cap is ₹1.5 lakh).
</details>

**Q1.3.** Including 80C (₹1,50,000), 80CCD(1B) NPS (₹50,000) and 80D (₹22,000), the total of these three Chapter VI-A deductions is: *(Medium)*
A) ₹2,00,000  B) ₹2,22,000  C) ₹2,32,000  D) ₹2,82,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — 80C 1,50,000 + 80CCD(1B) 50,000 + 80D 22,000 = **₹2,22,000**. The NPS ₹50,000 under 80CCD(1B) is **over and above** the 80C cap, so it is added in full; 80D health premium ₹22,000 is within its ₹25,000 limit. **A)** omits the 80D amount. **C)** adds ₹10,000 too much. **D)** wrongly counts the full ₹2,10,000 of 80C.
</details>

**Q1.4.** After also claiming the home-loan interest (Sec 24b, self-occupied, capped at ₹2,00,000), Mr. Rao's **net taxable income** is: *(Hard)*
A) ₹9,28,000  B) ₹9,50,000  C) ₹9,28,000 + cess  D) ₹10,28,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Salary 13,50,000 − Chapter VI-A 2,22,000 = 11,28,000; less Sec 24b interest (capped at **₹2,00,000**, not the ₹2,40,000 paid, for a self-occupied house) = **₹9,28,000**. **B)** ignores part of the deductions. **C)** is the same figure but cess was told to be ignored. **D)** uses only ₹1,00,000 of interest.
</details>

**Q1.5.** On taxable income of ₹9,28,000 (old-regime slabs), the income tax before cess is: *(Hard)*
A) ₹98,100  B) ₹1,00,600  C) ₹1,11,100  D) ₹92,600
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Slab tax: first ₹2.5L nil; next ₹2.5L (₹2.5L–₹5L) at 5% = ₹12,500; next ₹4.28L (₹5L–₹9.28L) at 20% = ₹85,600. Total = 12,500 + 85,600 = **₹98,100**. **B), C)** wrongly tax part of the income at 30% (income is below ₹10L, so no 30% slab applies). **D)** under-taxes the 20% band.
</details>

---

### Case Study 2 — Ms. Mehta: Capital Gains Across Asset Classes

In FY 2024-25 Ms. Mehta (resident) made the following sales (these are her only capital transactions):

| Asset | Holding period | Capital gain |
|---|---|---|
| Listed equity shares (STT paid) | 20 months | ₹2,00,000 |
| Listed equity shares (STT paid) | 7 months | ₹1,00,000 |
| Equity mutual fund units | 15 months | ₹40,000 |

Assume the LTCG ₹1.25 lakh exemption (Sec 112A) applies once across all eligible long-term equity gains. Ignore cess.

**Q2.1.** Which of Ms. Mehta's gains are **long-term**? *(Easy)*
A) Only the 20-month shares  B) The 20-month shares and the 15-month MF units  C) All three  D) Only the MF units
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Listed equity and equity MF become long-term after **12 months**, so the 20-month shares (₹2,00,000) and 15-month MF units (₹40,000) are LTCG. **A)** omits the MF units. **C)** wrongly includes the 7-month shares (these are short-term). **D)** ignores the 20-month shares.
</details>

**Q2.2.** Her **total long-term** capital gain (before the exemption) is: *(Easy)*
A) ₹2,00,000  B) ₹2,40,000  C) ₹3,00,000  D) ₹3,40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — LTCG = 2,00,000 (shares) + 40,000 (MF) = **₹2,40,000**. **A)** omits the MF gain. **C)** wrongly adds the short-term ₹1,00,000. **D)** adds everything regardless of holding period.
</details>

**Q2.3.** Her **LTCG tax** under Section 112A (12.5% above the ₹1.25 lakh exemption) is: *(Medium)*
A) ₹14,375  B) ₹30,000  C) ₹24,000  D) ₹11,875
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Taxable LTCG = 2,40,000 − 1,25,000 = ₹1,15,000; tax = 12.5% × 1,15,000 = **₹14,375**. **B)** ignores the exemption (12.5% × 2,40,000). **C)** applies 10%/no exemption. **D)** uses only the share gain, forgetting the MF gain.
</details>

**Q2.4.** Her **STCG tax** on the 7-month listed shares (Sec 111A, 20%) is: *(Medium)*
A) ₹15,000  B) ₹20,000  C) ₹12,500  D) ₹10,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — STCG u/s 111A = 20% × 1,00,000 = **₹20,000** (no ₹1.25 lakh exemption — that applies only to LTCG). **A)** uses the old 15% rate. **C)** uses 12.5% (LTCG rate). **D)** uses 10%.
</details>

**Q2.5.** Her **total capital-gains tax** for the year is: *(Hard)*
A) ₹34,375  B) ₹14,375  C) ₹20,000  D) ₹44,375
<details><summary>Answer & Explanation</summary>

**Correct: A)** — LTCG tax ₹14,375 + STCG tax ₹20,000 = **₹34,375**. **B), C)** count only one of the two. **D)** adds an extra ₹10,000 that does not arise.
</details>

---

### Case Study 3 — Mr. Khanna: Property Capital Gain with Indexation

Mr. Khanna sold a residential plot in FY 2024-25. Details:

| Item | Value |
|---|---|
| Sale consideration | ₹95,00,000 |
| Year of purchase | FY 2010-11, cost ₹20,00,000 |
| Cost Inflation Index (CII): FY 2010-11 | 167 |
| CII: FY 2024-25 | 363 |
| Holding period | About 14 years |

For property, the taxpayer may compute LTCG **with indexation at 20%** (the route assumed in this case). Ignore cess.

**Q3.1.** Is this gain long-term or short-term? *(Easy)*
A) Short-term (held < 24 months)  B) Long-term (held > 24 months)  C) Short-term (held < 36 months)  D) Cannot be determined
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Immovable property becomes **long-term after 24 months**; held ~14 years → **long-term**. **A), C)** misstate the threshold or the facts. **D)** is wrong — the holding period is clearly given.
</details>

**Q3.2.** The **indexed cost of acquisition** is closest to: *(Medium)*
A) ₹20,00,000  B) ₹43,47,305  C) ₹36,30,000  D) ₹29,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Indexed cost = Cost × (CII sale year ÷ CII purchase year) = 20,00,000 × (363 ÷ 167) = 20,00,000 × 2.1737 = **₹43,47,305**. **A)** ignores indexation. **C)** applies the CII ratio to the sale price by mistake. **D)** uses an arbitrary factor.
</details>

**Q3.3.** The **long-term capital gain** (after indexation) is closest to: *(Medium)*
A) ₹75,00,000  B) ₹51,52,695  C) ₹58,70,000  D) ₹43,47,305
<details><summary>Answer & Explanation</summary>

**Correct: B)** — LTCG = Sale − Indexed cost = 95,00,000 − 43,47,305 = **₹51,52,695**. **A)** subtracts the raw (un-indexed) cost. **C)** uses a wrong indexed cost. **D)** mistakes the indexed cost itself for the gain.
</details>

**Q3.4.** The **tax at 20%** (indexation route) on this LTCG is closest to: *(Hard)*
A) ₹10,30,539  B) ₹6,44,087  C) ₹15,00,000  D) ₹8,69,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Tax = 20% × 51,52,695 = **₹10,30,539**. **B)** applies 12.5% (the no-indexation route, used here only for comparison). **C)** taxes the un-indexed gain. **D)** uses a wrong gain figure.
</details>

**Q3.5.** Which Section lets Mr. Khanna **save this LTCG** by investing the gain in another residential house? *(Medium)*
A) Section 54EC  B) Section 54  C) Section 80C  D) Section 112A
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Section 54** exempts LTCG on a residential house if reinvested in another residential house within the prescribed time. **A) 54EC** is for reinvestment in specified bonds (and applies to land/building gains, capped at ₹50 lakh) — not "another house". **C) 80C** is an income deduction, not a capital-gains exemption. **D) 112A** is the charging section for equity LTCG, not an exemption.
</details>

---

### Case Study 4 — The Sharmas: Retirement Corpus Planning

Mr. Sharma (50) plans to retire at **60**. Today the household spends **₹70,000/month**. He wants the **same lifestyle, inflation-adjusted**, for **22 years** in retirement (drawn at the **beginning** of each year). Inflation is **7%**; expected return in retirement is **9%**. He already has a retirement corpus of **₹40,00,000** today, invested in debt at **8%**.

**Q4.1.** The household's **current annual expense** is: *(Easy)*
A) ₹7,00,000  B) ₹8,40,000  C) ₹9,60,000  D) ₹70,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — 70,000 × 12 = **₹8,40,000**. **A)** multiplies by 10. **C)** uses ₹80,000/month. **D)** is the monthly figure, not annual.
</details>

**Q4.2.** The annual expense in the **first year of retirement** (10 years away, inflation 7%) is closest to: *(Medium)*
A) ₹14,00,000  B) ₹16,52,000  C) ₹12,00,000  D) ₹8,40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — FV(7%,10,,−840000) = 8,40,000 × 1.07¹⁰ = 8,40,000 × 1.9672 = **₹16,52,000** (approx). **A)** under-compounds. **C)** uses too few years. **D)** forgets to inflate at all.
</details>

**Q4.3.** The **real (inflation-adjusted) return** to use for the retirement-years corpus is: *(Medium)*
A) 2.00%  B) 1.87%  C) 16.00%  D) 0.93%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real return = (1.09/1.07) − 1 = 1.0187 − 1 = **1.87%**. **A)** is the simple difference (9% − 7%), only an approximation. **C)** wrongly adds. **D)** would be correct only if return/inflation were 9%/8%.
</details>

**Q4.4.** The **corpus required at retirement** (PV of ₹16,52,000 for 22 years, beginning-of-year, at 1.87%) is closest to: *(Hard)*
A) ₹2.97 crore  B) ₹3.63 crore  C) ₹1.65 crore  D) ₹5.00 crore
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Corpus = PV(1.87%, 22, −16,52,000, , 1). The annuity factor for 22 years at 1.87% (beginning-of-year) is about 18.0, so corpus ≈ 16,52,000 × 18.0 ≈ **₹2.97 crore**. **B)** over-states by using a wrong rate. **C)** counts far too few years. **D)** ignores discounting almost entirely.
</details>

**Q4.5.** His existing ₹40,00,000 corpus grown at **8% for 10 years** will be closest to: *(Hard)*
A) ₹64,00,000  B) ₹86,36,000  C) ₹80,00,000  D) ₹1,00,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — FV(8%,10,,−4000000) = 40,00,000 × 1.08¹⁰ = 40,00,000 × 2.1589 = **₹86,36,000**. **A)** uses ~1.6×. **C)** simply doubles. **D)** over-states. (Comparing ₹86.36 lakh against the ₹2.97 crore need shows a large shortfall to be filled by fresh savings.)
</details>

---

### Case Study 5 — Mr. Verma: Life-Insurance Need (Human Life Value)

Mr. Verma (38) earns **₹1,00,000/month**. He wants his family to keep receiving his income (rising with inflation) for the **22 years** he would have worked until age 60. Inflation **6%**, long-term investment return **10%**. He has an outstanding **home loan of ₹35,00,000**, wants to leave a **₹15,00,000** corpus for his child's higher education, and currently holds **₹60,00,000** of life cover. He also has ₹10,00,000 in liquid investments earmarked for emergencies (not for these needs).

**Q5.1.** His **current annual income** to be replaced is: *(Easy)*
A) ₹10,00,000  B) ₹12,00,000  C) ₹1,00,000  D) ₹14,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — 1,00,000 × 12 = **₹12,00,000**. **A)** multiplies by 10. **C)** is the monthly figure. **D)** uses the wrong monthly base.
</details>

**Q5.2.** The **real (inflation-adjusted) return** for the income-replacement PV is: *(Medium)*
A) 4.00%  B) 3.77%  C) 16.00%  D) 0.93%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real return = (1.10/1.06) − 1 = 1.0377 − 1 = **3.77%**. **A)** is the simple difference (10% − 6%). **C)** wrongly adds. **D)** corresponds to 9%/8%, not these figures.
</details>

**Q5.3.** The **corpus to replace 22 years of income** (PV of ₹12,00,000 at 3.77%) is closest to: *(Hard)*
A) ₹1,82,00,000  B) ₹2,64,00,000  C) ₹1,20,00,000  D) ₹95,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — PV(3.77%, 22, −12,00,000). The 22-year annuity factor at 3.77% is about 15.16, so corpus ≈ 12,00,000 × 15.16 ≈ **₹1,82,00,000**. **B)** ignores discounting (just 22 × 12 lakh). **C), D)** use far too few years or a wrong rate.
</details>

**Q5.4.** Adding the home loan and the child's corpus, his **total insurance need** before existing cover is closest to: *(Medium)*
A) ₹1,82,00,000  B) ₹2,07,00,000  C) ₹2,32,00,000  D) ₹2,17,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Total need = income corpus 1,82,00,000 + home loan 35,00,000 + child corpus 15,00,000 = **₹2,32,00,000**. **A)** omits both liabilities/goals. **B)** omits the child corpus. **D)** omits the home loan.
</details>

**Q5.5.** The **additional** life cover Mr. Verma should buy (deduct only the existing ₹60 lakh cover; the ₹10 lakh emergency fund is earmarked elsewhere) is closest to: *(Hard)*
A) ₹1,72,00,000  B) ₹1,62,00,000  C) ₹2,32,00,000  D) ₹1,22,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Additional = total need 2,32,00,000 − existing cover 60,00,000 = **₹1,72,00,000**. The ₹10 lakh emergency fund is **not** netted off because it is earmarked for emergencies, not these needs. **B)** wrongly also subtracts the ₹10 lakh. **C)** forgets to subtract existing cover. **D)** subtracts too much.
</details>

---

### Case Study 6 — Mr. & Mrs. Iyer: Health-Insurance Mechanics

The Iyers hold a **family floater base policy of ₹5,00,000** and a **super top-up of ₹15,00,000 with a ₹5,00,000 deductible** (aggregate basis). During the policy year the family has hospitalisation bills of **₹3,00,000, ₹4,00,000 and ₹6,00,000** (in that order). One claim additionally carries a **10% co-pay** clause on the base policy only. Treat the bills as fully admissible (no other exclusions) unless a deductible/co-pay applies.

**Q6.1.** After the **first bill (₹3,00,000)**, how much of the base sum insured remains? *(Easy)*
A) ₹5,00,000  B) ₹2,00,000  C) NIL  D) ₹3,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Base ₹5,00,000 pays the ₹3,00,000 bill, leaving **₹2,00,000**. **A)** ignores that a claim was paid. **C)** wrongly exhausts the whole base. **D)** confuses the amount paid with the amount remaining.
</details>

**Q6.2.** After the **second bill (₹4,00,000)**, what does the **base** pay, and what is left for the insured to fund before the super top-up triggers? *(Medium)*
A) Base pays ₹4,00,000; nothing left for insured  B) Base pays ₹2,00,000; insured/aggregate must reach the deductible  C) Base pays NIL  D) Super top-up pays the whole ₹4,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Only ₹2,00,000 of base remains, so the base pays **₹2,00,000** of the ₹4,00,000; the other ₹2,00,000 counts toward meeting the ₹5,00,000 **aggregate deductible**. **A)** exceeds the base balance. **C)** wrongly says base pays nothing. **D)** the super top-up cannot pay until the aggregate deductible is met.
</details>

**Q6.3.** Across the first two bills (₹3L + ₹4L = ₹7L), the base paid ₹5L. Has the ₹5,00,000 **aggregate deductible** been met by the time the **third bill** arrives? *(Medium)*
A) No, only ₹3,00,000 has been spent  B) Yes — ₹7,00,000 of claims (≥ ₹5,00,000) has been incurred  C) No, the deductible is per-claim  D) Only partly, ₹4,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **super top-up** works on **aggregate** claims. By the third bill, ₹7,00,000 of claims have been incurred, which **exceeds the ₹5,00,000 deductible**, so the super top-up is now active. **A), D)** undercount the aggregate. **C)** describes a plain top-up, not a super top-up.
</details>

**Q6.4.** For the **third bill (₹6,00,000)**, with base exhausted and the deductible met, how much does the **super top-up** pay? *(Hard)*
A) ₹1,00,000  B) ₹6,00,000  C) ₹5,00,000  D) NIL
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Base is fully used (₹5L) and the aggregate deductible (₹5L) is already met by the first two bills, so the super top-up (₹15L limit) pays the **entire ₹6,00,000** third bill. **A)** wrongly leaves ₹5L to the insured. **C)** confuses the deductible amount with the payout. **D)** ignores that the super top-up is now active.
</details>

**Q6.5.** Ignoring the co-pay, the family's **total out-of-pocket** across all three bills is closest to: *(Hard)*
A) ₹2,00,000  B) ₹5,00,000  C) NIL  D) ₹6,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Total bills ₹13,00,000; base pays ₹5,00,000 and super top-up pays the third bill ₹6,00,000 — but the portion of bills one and two beyond the base (₹7L − ₹5L = ₹2,00,000) fell **inside the deductible window before the super top-up triggered**, so the family bears **₹2,00,000**. **B)** equals the deductible but double-counts. **C)** wrongly assumes full coverage. **D)** over-states the gap.
</details>

---

### Case Study 7 — Mrs. Nair: Estate Planning and Succession

Mrs. Nair (68), a Hindu widow, owns a house and a portfolio of mutual funds and shares. She has two children (a son and a daughter) and three grandchildren. She has made a **registered Will** bequeathing the house to her son and the financial assets to her daughter. She wants the bequests to be smooth and is also considering creating a small fund for a grandchild's education 14 years away.

**Q7.1.** When does Mrs. Nair's Will take legal effect? *(Easy)*
A) On registration  B) On her death  C) When the son occupies the house  D) When probate is applied for
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A Will operates **only on the testator's death** and can be revised any time before then. **A)** Registration merely adds evidentiary value. **C), D)** Occupation or probate application do not make the Will operative.
</details>

**Q7.2.** Her son wants to mortgage the house **now**, showing the bank the Will as proof of future ownership. Is this valid? *(Medium)*
A) Yes, the Will is registered  B) No — the Will is inoperative while Mrs. Nair is alive, so the son is not yet the owner  C) Yes, the son is a Class I heir  D) Yes, with the daughter's consent
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Since the Will takes effect only on death, the son has **no present ownership**; he cannot mortgage a property he does not yet own. **A)** Registration does not advance ownership. **C)** Being a Class I heir matters only on intestate death, and a Will overrides intestacy anyway. **D)** Consent of a sibling does not create ownership.
</details>

**Q7.3.** Her daughter has an **urgent cash need** today and wants the money Mrs. Nair intends her to inherit. The cleanest tax-free route is: *(Medium)*
A) Show the registered Will to the AMC to redeem units  B) Make the daughter a joint holder  C) Mrs. Nair redeems units herself and gifts the cash to her daughter  D) Nothing can be done
<details><summary>Answer & Explanation</summary>

**Correct: C)** — As the living holder, **Mrs. Nair redeems and gifts** the cash; a gift from mother to daughter (a **relative**) is **exempt from tax** in the daughter's hands. **A)** A Will gives no current redemption right. **B)** Adding a joint holder is slower and not needed for an urgent need. **D)** Is too absolute.
</details>

**Q7.4.** To make sure the financial assets pass smoothly to the daughter **without disputes among heirs**, Mrs. Nair should additionally ensure: *(Medium)*
A) The Will alone is enough; nominations are irrelevant  B) Nominations on the folios are aligned with the Will (nominee as trustee for the legatee)  C) She gifts everything away now  D) She converts the Will into a trust deed only at death
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **nominee receives assets as a trustee** for the legal heirs/legatees; aligning nominations with the Will avoids friction at settlement. **A)** Mismatched nominations are a common cause of disputes, so they are not irrelevant. **C)** Gifting everything now defeats her own needs and the plan. **D)** A trust cannot be created after death by the deceased.
</details>

**Q7.5.** For the **grandchild's education 14 years away**, the most suitable investment is: *(Easy)*
A) A liquid fund  B) A short-term debt fund  C) A diversified equity fund  D) A savings bank account
<details><summary>Answer & Explanation</summary>

**Correct: C)** — A **14-year horizon** justifies **equity** for growth, regardless of Mrs. Nair's age, because suitability follows the **goal's horizon**. **A), B), D)** are low-growth options that risk falling short over 14 years.
</details>

---

### Case Study 8 — Mr. Banerjee: Risk Profiling and Asset Allocation

Mr. Banerjee (35), an IT professional, earns well, has **no dependents yet**, a stable job, an emergency fund of 6 months' expenses, no loans, and a **20-year** primary goal (wealth building) plus a **2-year** goal (down-payment for a flat). His questionnaire shows a **high ability and willingness to take risk**. Inflation 6%.

**Q8.1.** How is Mr. Banerjee's overall **risk profile** best classified? *(Easy)*
A) Conservative  B) Moderate  C) Aggressive  D) Liquidity seeker
<details><summary>Answer & Explanation</summary>

**Correct: C)** — High income, no dependents, no loans, an emergency cushion, a long horizon and high willingness all point to an **aggressive** profile (high ability **and** willingness). **A), B)** understate his capacity. **D)** is not a standard risk-profile category.
</details>

**Q8.2.** For his **20-year wealth-building** goal, the most suitable allocation is: *(Medium)*
A) Mostly debt with a little equity  B) Mostly equity (growth assets)  C) Entirely liquid funds  D) Entirely gold
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A 20-year horizon and aggressive profile favour **mostly equity (growth assets)**, which historically beat inflation over long periods. **A)** is too conservative for the horizon. **C)** Liquid funds barely beat inflation. **D)** Concentrating in one commodity is undiversified.
</details>

**Q8.3.** For the **2-year down-payment** goal, the suitable choice is: *(Medium)*
A) Mid-cap equity for growth  B) A short-term debt fund / FD to protect capital  C) A sectoral equity fund  D) An ELSS for tax saving
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **2-year, must-have** goal needs **capital protection**, so short-term debt/FD is right even for an aggressive investor. **A), C)** Equity can fall just when the money is needed. **D)** ELSS has a 3-year lock-in, longer than the goal.
</details>

**Q8.4.** This illustrates a key principle of asset allocation: *(Medium)*
A) Age alone fixes allocation  B) Goal horizon, not just risk profile, drives the asset choice for each goal  C) Aggressive investors should put everything in equity  D) Liquidity needs are irrelevant
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Even an aggressive investor parks short-horizon money safely: **each goal's horizon** shapes its allocation. **A)** Age is only one input. **C)** Ignores short-term goals' need for safety. **D)** Liquidity always matters.
</details>

**Q8.5.** The allocation set as a **long-term policy mix** from his profile and goals (not from market timing) is called: *(Easy)*
A) Tactical asset allocation  B) Strategic asset allocation  C) Dynamic hedging  D) Rebalancing
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The long-term policy mix derived from risk profile and goals is **strategic** asset allocation. **A) Tactical** is short-term, market-driven tilts. **C)** Hedging manages specific risks, not the policy mix. **D)** Rebalancing restores the mix; it is not the mix itself.
</details>

---

### Case Study 9 — The Guptas: NRI Returning to India (Tax + Insurance)

Mr. and Mrs. Gupta (both 45, Indian citizens) return to India after 20 years in the USA. They own a **US house given on rent**, hold **US tax-deferred retirement accounts** (taxed only on withdrawal in the US), each has a **USD 1 million** US life policy valid 15 more years, and an **employer US health policy** (worldwide cover, including India) that lapses at year-end unless renewed.

**Q9.1.** Once they become **residents** of India, their **US rental income** is: *(Medium)*
A) Not taxable in India  B) Taxable in India with credit for US tax paid  C) Taxable in India with no foreign tax credit  D) Taxable only in the US
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Residents are taxed on **global income**; the DTAA gives a **foreign tax credit** for US tax. **A)** ignores global-income taxation. **C)** denies the available credit. **D)** ignores Indian residence.
</details>

**Q9.2.** Income **accruing** in their US tax-deferred retirement accounts, if **notified under Section 89A**, is taxed in India: *(Hard)*
A) Each year as it accrues  B) Only in the year of withdrawal, with credit for US tax  C) Never  D) At a flat 40%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **Section 89A** aligns the timing with the US, taxing it **on withdrawal** with credit for US tax, removing the accrual-vs-withdrawal mismatch. **A)** is exactly the mismatch 89A removes. **C)** It is taxed, just deferred. **D)** No such flat rate.
</details>

**Q9.3.** Must the Guptas buy **fresh life insurance** in India? *(Medium)*
A) Yes — they cannot remit premiums for the foreign policies after becoming residents  B) Yes — residents cannot hold a foreign life policy  C) No — they may keep the US policies and pay premiums from US rent or by remitting from India  D) Yes — the policies auto-lapse on relocation
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Indian law lets a returning resident **keep an existing foreign life policy**, paying from foreign income or remittance. **A), B), D)** wrongly force fresh policies or block premiums.
</details>

**Q9.4.** Regarding their **health insurance**, the best advice is: *(Medium)*
A) Continue the US policy only; no Indian policy needed since it covers India  B) Continue the US policy and also buy a fresh Indian policy to build a local no-claim history  C) Drop the US policy and rely on a new Indian policy alone  D) Buy nothing; employer cover suffices
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Even though the US policy covers India, buying a **fresh Indian policy builds a local no-claim history** and continuity for the long term, worth the extra cost. **A)** misses the value of a local record. **C)** prematurely drops worldwide cover. **D)** the employer cover lapses at year-end.
</details>

**Q9.5.** For their long-term India investments, which tax point matters most for **equity mutual funds** they may now buy in India? *(Medium)*
A) LTCG after 12 months at 12.5% above ₹1.25 lakh  B) LTCG after 36 months at 20% with indexation  C) Fully tax-free  D) Taxed only in the US
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Indian equity MF: **long-term after 12 months**, taxed at **12.5% on gains above ₹1.25 lakh** (Sec 112A). **B)** is the property/old-debt rule, not equity. **C)** Equity gains are not tax-free. **D)** As residents, India taxes these.
</details>

---

### Case Study 10 — Mr. Smart: Retired Couple, Inflation-Adjustment Shortfall

Mr. Smart (60) retires with a pension of **₹4,80,000/year received yearly in advance**, that adjusts only **50%** with inflation. Mrs. Smart (58) gets the pension for life if he dies first. Retirement dues received: **₹40,00,000 (after tax)**. Living expenses currently equal the pension. Employer provides a lifelong adequate Mediclaim. Inflation **6%**. Life expectancy: Mr. 87, Mrs. 85 → plan for about **27 years**. They also want **₹1,00,000/year** (inflation 6%) for social/leisure spend, plus to make up the pension's inflation shortfall. Expenses arise at the **beginning** of each year; discount at **5%**.

**Q10.1.** Why does the pension leave a growing **shortfall** each year? *(Easy)*
A) The pension is fixed and never rises  B) The pension rises with only 50% of inflation, so real value erodes  C) The pension is taxed away  D) Inflation does not affect expenses
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Expenses rise with **full 6% inflation** but the pension rises with only **half** of it, so a **widening gap** appears yearly. **A)** the pension does partly rise. **C)** taxation is not the issue here. **D)** inflation clearly affects expenses.
</details>

**Q10.2.** Including the lifestyle ₹1,00,000 and the inflation shortfall, the present value of the **inflation adjustment required** (≈27 years, beginning-of-year, discounted at 5%) is closest to: *(Hard)*
A) ₹80,18,710  B) ₹76,36,867  C) ₹1,91,39,462  D) ₹40,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Discounting the growing shortfall plus the lifestyle amount over ~27 years at 5% (payments at the start of each year) gives **≈ ₹80,18,710**. **B)** uses end-of-year timing. **C)** double-counts the full pension instead of just the shortfall. **D)** is merely the available corpus, not the requirement.
</details>

**Q10.3.** Since the required ₹80,18,710 **exceeds** the available ₹40,00,000 corpus, the correct conclusion is: *(Hard)*
A) They cannot meet the need even at higher returns  B) They can meet it only if the ₹40 lakh earns about 9.22% p.a.  C) They can easily meet it at 5% p.a.  D) The corpus is irrelevant
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At 5% the ₹40 lakh is short; the corpus suffices **only if it earns about 9.22% p.a.** (the rate at which ₹40 lakh funds the same stream). **A)** is too pessimistic — a higher return can close the gap. **C)** at 5% it is clearly insufficient. **D)** the corpus is central to the analysis.
</details>

**Q10.4.** The **government scheme** giving senior citizens the highest fixed rate they should consider is: *(Easy)*
A) Public sector bank FD for seniors  B) Senior Citizen Savings Scheme (SCSS)  C) Equity mutual fund  D) ULIP
<details><summary>Answer & Explanation</summary>

**Correct: B)** — **SCSS** is the **government** scheme (high fixed rate for 60+). **A)** A PSU-bank FD is a bank product, not a government scheme. **C), D)** are not fixed-income government schemes.
</details>

**Q10.5.** If Mr. Smart dies first, Mrs. Smart's pension continues, but the **plan should still provide** for: *(Medium)*
A) Nothing further — her risk ends  B) The continuing inflation shortfall and lifestyle spend over her remaining life  C) A fresh life cover on Mrs. Smart  D) Repaying a loan they do not have
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The same **inflation shortfall and lifestyle needs continue** for Mrs. Smart's lifetime, so the corpus plan must cover her remaining years. **A)** understates her need. **C)** Life cover on a retiree with no dependents adds little. **D)** There is no loan.
</details>

---

### Case Study 11 — Mr. Desai: Integrated Plan (Tax + Goal Funding + Insurance)

Mr. Desai (45) earns ₹18,00,000/year. Goals: (1) **Daughter's MBA** in **4 years**, current cost **₹25,00,000**, education inflation **10%**; (2) **Retirement** at 60. He sells **listed shares** held 26 months for an LTCG of **₹4,00,000** (his only equity LTCG this year). He has a ₹50 lakh term cover and a ₹40 lakh home loan. Investment return on goal corpus **9%**. Ignore cess.

**Q11.1.** The **future cost of the MBA** (₹25,00,000 inflated at 10% for 4 years) is closest to: *(Medium)*
A) ₹33,00,000  B) ₹36,60,000  C) ₹30,25,000  D) ₹27,50,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — FV(10%,4,,−2500000) = 25,00,000 × 1.10⁴ = 25,00,000 × 1.4641 = **₹36,60,250 ≈ ₹36,60,000**. **A)** under-compounds. **C)** uses ~2 years. **D)** uses 1 year of growth.
</details>

**Q11.2.** His **LTCG tax** on the ₹4,00,000 equity gain (Sec 112A) is: *(Medium)*
A) ₹40,000  B) ₹34,375  C) ₹50,000  D) ₹37,500
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Held 26 months (>12) → LTCG. Taxable = 4,00,000 − 1,25,000 = ₹2,75,000; tax = 12.5% × 2,75,000 = **₹34,375**. **A)** uses 10%. **C)** ignores the exemption (12.5% × 4,00,000). **D)** uses 12.5% on ₹3,00,000 (wrong exemption).
</details>

**Q11.3.** To fund the ₹36,60,250 MBA cost in 4 years, the **lump sum to invest today at 9%** (PV) is closest to: *(Hard)*
A) ₹25,93,000  B) ₹30,00,000  C) ₹33,57,000  D) ₹22,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — PV = 36,60,250 ÷ 1.09⁴ = 36,60,250 ÷ 1.4116 = **₹25,93,000** (approx). **B), C)** under-discount. **D)** over-discounts using a wrong rate.
</details>

**Q11.4.** If instead he saves an **equal annual amount** for 4 years at 9% (end of year) to reach ₹36,60,250, the annual saving (PMT) is closest to: *(Hard)*
A) ₹9,15,000  B) ₹8,02,000  C) ₹7,00,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The future-value annuity factor for 4 years at 9% is [(1.09⁴ − 1)/0.09] = 4.5731. PMT = 36,60,250 ÷ 4.5731 = **₹8,00,400 ≈ ₹8,02,000**. **A)** simply divides by 4 (ignores growth). **C)** under-saves. **D)** over-saves using a wrong factor.
</details>

**Q11.5.** On his ₹50 lakh cover against a ₹40 lakh home loan plus a family income need, the planner should note: *(Medium)*
A) Cover is more than enough  B) Cover barely clears the loan, leaving little for family income — likely under-insured  C) He needs no cover since he has assets  D) Term cover cannot repay a loan
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A ₹50 lakh cover against a ₹40 lakh loan leaves only ₹10 lakh for the family's income replacement and the daughter's goal — clearly **under-insured**. **A)** ignores the income/goal needs. **C)** dependents still need income protection. **D)** term proceeds can certainly clear a loan.
</details>

---

### Case Study 12 — The Rahmans: Comprehensive Household Plan

Mr. Rahman (40) and Mrs. Rahman (38) have one child (8). Household expenses **₹80,000/month**. Mr. Rahman is the sole earner (₹20,00,000/year). They hold: equity MF **₹30,00,000**, debt/FD **₹20,00,000**, EPF **₹15,00,000**, a home loan of **₹50,00,000** (EMI ₹45,000/month), term cover **₹1,00,00,000**, and a base health policy of **₹5,00,000**. They want: child's college in **10 years** (current cost ₹40,00,000, edu-inflation 8%) and retirement at 60. General inflation **6%**, long-term return **10%**.

**Q12.1.** The household's **emergency fund** target (commonly 6 months of expenses + EMIs) is closest to: *(Medium)*
A) ₹4,80,000  B) ₹7,50,000  C) ₹2,70,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Monthly outgo = expenses ₹80,000 + EMI ₹45,000 = ₹1,25,000; six months = 1,25,000 × 6 = **₹7,50,000**. **A)** uses expenses only, 6 months. **C)** ignores expenses/EMI scope. **D)** is an arbitrary round figure.
</details>

**Q12.2.** The **future cost of the child's college** (₹40,00,000 at 8% for 10 years) is closest to: *(Medium)*
A) ₹64,00,000  B) ₹86,36,000  C) ₹72,00,000  D) ₹80,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — FV(8%,10,,−4000000) = 40,00,000 × 1.08¹⁰ = 40,00,000 × 2.1589 = **₹86,36,000**. **A)** uses ~1.6×. **C)** under-compounds. **D)** simply doubles.
</details>

**Q12.3.** Mr. Rahman's life-insurance adequacy: with a ₹50 lakh loan and an income-replacement need, is **₹1 crore** cover clearly sufficient? *(Hard)*
A) Yes, ₹1 crore always suffices  B) No — after clearing the ₹50 lakh loan, only ₹50 lakh remains for income replacement and the child's goal, likely a shortfall  C) Yes, because they have MF and FD assets  D) Cover is irrelevant since EPF exists
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Cover ₹1 crore less the ₹50 lakh loan leaves ₹50 lakh, far below the present value of replacing a ₹20 lakh income for ~20 years plus the ₹86 lakh future college cost — a **likely shortfall**. **A)** is an unjustified rule of thumb. **C)** liquid assets are partly earmarked elsewhere. **D)** EPF alone cannot replace lifelong income.
</details>

**Q12.4.** Their **₹5,00,000 base health policy** for a family of three is best strengthened by: *(Medium)*
A) Doing nothing, it is adequate  B) Adding a super top-up with a deductible equal to the base, for cost-effective higher cover  C) Cancelling it and self-funding  D) Buying three separate ₹1 lakh policies
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A **super top-up** (aggregate deductible ≈ base sum insured) cheaply lifts total cover to handle large or multiple bills in a year. **A)** ₹5 lakh is thin for a family today. **C)** Self-funding large bills is risky. **D)** Tiny separate policies leave big gaps.
</details>

**Q12.5.** Given a **10-year** horizon for the college goal, the suitable asset mix to fund it is: *(Medium)*
A) Entirely FD/debt  B) A growth-tilted mix (substantial equity) shifting to debt as the goal nears  C) Entirely small-cap equity throughout  D) A savings account
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A 10-year goal supports an **equity-tilted** start for growth, then **de-risking into debt** as the date approaches to lock in the corpus. **A)** Pure debt likely falls short over 10 years. **C)** All small-cap is too volatile, especially near the goal. **D)** A savings account erodes to inflation.
</details>

---

> ✅ **Bank complete:** 40 standalone MCQs + 12 full case studies × 5 sub-questions = **100 questions**. Practise under time pressure, always writing out the formula and the step-by-step calculation before choosing — and remember the 25% negative marking when deciding whether to guess.
