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
