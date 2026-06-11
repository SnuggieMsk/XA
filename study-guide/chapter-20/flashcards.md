# Chapter 20: Case Studies — Flashcards

> **How to use:** Cover the answer, recall it, then check. These cards drill the **METHOD and formulas** the case studies use.

**Q1.** Which Excel function grows a present amount into the future?
> **A:** **FV(rate, nper, pmt, pv).** E.g., future cost of education = `FV(inflation, years,, -current_cost)`.

**Q2.** Which Excel function gives the corpus needed today to fund a stream?
> **A:** **PV(rate, nper, pmt, fv, type).** `type=1` means payments at the **beginning** of each period.

**Q3.** Which Excel function gives a loan's EMI?
> **A:** **PMT(rate, nper, pv).** (Not "EMI" — there is no EMI function.)

**Q4.** Which Excel function finds the implied return of a product?
> **A:** **RATE(nper, pmt, pv, fv).** E.g., return on a ULIP investment portion = `RATE(20, -5850,, 200000)`.

**Q5.** State the inflation-adjusted (real) return formula.
> **A:** **Real return = (1 + investment return) / (1 + inflation) − 1.** Used to discount an income stream that rises with inflation.

**Q6.** Why must you use the real return (not nominal) for retirement-corpus / insurance-need calculations?
> **A:** Because the income/expense stream **rises with inflation each year**. Discounting at the real return correctly nets the growth against the earning rate.

**Q7.** What is the Excel sign convention?
> **A:** **Money paid out = negative; money received = positive.** That's why current cost is entered as `-C0`.

**Q8.** Give the three-step recipe for a retirement corpus.
> **A:** (1) **FV** today's annual expense to the retirement date at inflation; (2) compute **real return**; (3) **PV** that future expense over the retirement years at the real return (use `type=1` if expenses are at the start of the year).

**Q9.** Give the recipe for life-insurance (income-replacement) need.
> **A:** **PV of annual income** (using real return) over the working years + **outstanding liabilities** (loans) + **lump-sum goals (e.g., child's corpus)** − **existing life cover** = additional cover required.

**Q10.** In Case A, what was Mr. Z's retirement corpus at 60?
> **A:** **Rs.48,65,914** — sum of the future values of growing contributions plus the existing Rs.12 lakh grown 8 years at 8%.

**Q11.** In Case A Q3, how is the % debt at retirement computed when the corpus is reinvested in debt?
> **A:** `(A+B)/(A+B+C)×100` where A = retirement corpus, B = debt portfolio, C = equity portfolio → **74.21%**.

**Q12.** In Case A Q4, what were the three steps to the Rs.1,44,96,632 corpus?
> **A:** `FV(10%,8,,-480000)=10,28,922.63`; real return `(1+11%)/(1+10%)-1=0.91%`; `PV(0.91%,15,-1028922.63,,1)=1,44,96,632`.

**Q13.** In Case B, how do you find money to set aside in Year 5 for an education cost incurred in Year 6?
> **A:** Compute the Year-6 cost via FV, then **PV it back one year** at the set-aside rate (6%): `PV(6%,1,,-3469591.15)=32,73,199.20`.

**Q14.** A goal cost of Rs.1 crore today, inflation 10%, due in 7 years — future cost?
> **A:** `FV(10%,7,,-10000000) = Rs.1,94,87,171`.

**Q15.** For an NRI returning to India, is global income (e.g., US rent) taxable in India?
> **A:** **Yes**, once resident — but with **credit for foreign tax paid** (avoids double taxation).

**Q16.** What does Section 89A do for a foreign tax-deferred retirement account?
> **A:** If the account is **notified under Sec 89A**, India taxes the income **in the year of withdrawal** (like the US) and gives **credit for US tax**, removing the timing mismatch.

**Q17.** Must a returning NRI buy fresh life insurance in India?
> **A:** **No** — they can keep the existing foreign policy and pay premiums from foreign income or remit from India.

**Q18.** Best health-insurance advice for a returning NRI with a worldwide policy?
> **A:** Continue it **and** also buy a fresh Indian health policy to **build a no-claim history** locally, even at extra cost.

**Q19.** Difference between a Top-up and a Super Top-up policy?
> **A:** **Top-up** triggers when a **single** claim exceeds the deductible; **Super Top-up** triggers when the **aggregate** of claims in the year exceeds the deductible (so multiple smaller claims add up).

**Q20.** Co-pay of 5% and deductible Rs.10,000 on a Rs.50,000 claim — reimbursement?
> **A:** 50,000 − 10,000 − 5%×(50,000−10,000) = 50,000 − 10,000 − 2,000 = **Rs.38,000**.

**Q21.** Base Rs.3L + Top-up Rs.10L (Rs.5L deductible); single bill Rs.4L — out of pocket?
> **A:** Base pays Rs.3L; you pay **Rs.1L**; top-up does not trigger (single bill below the Rs.5L deductible).

**Q22.** Base Rs.3L + Super Top-up Rs.10L (Rs.3L deductible); bills 2L/3L/4L — out of pocket?
> **A:** **NIL.** Base covers the first Rs.3L; once aggregate crosses the Rs.3L deductible, the super top-up pays the rest.

**Q23.** Leverage caselet: invest Rs.60,000 at 10% using 1.4× leverage, borrowing at 9%. Own funds?
> **A:** Own funds = 60,000 / 1.4 = **Rs.42,857**. (Total exposure is 1.4× own funds.)

**Q24.** Same caselet — interest paid and net return?
> **A:** Borrowed = 60,000 − 42,857 = 17,143; interest = 9% = **Rs.1,543**; gross return 10%×60,000 = 6,000; net ≈ 6,000 − 1,543 ≈ **Rs.4,457** (illustrative — match the workbook's option set).

**Q25.** What return-on-equity does leverage aim to boost, and what's the risk?
> **A:** It boosts **return on own funds (equity)** when the asset return exceeds the borrowing cost; the risk is amplified losses if the asset underperforms the borrowing rate.

**Q26.** A 45-year-old single earner with home + car loans and goals due now — risk profile?
> **A:** **Moderate** (loans and near-term goals limit aggression, but a good income provides some ability).

**Q27.** Where to park matured FD funds needed shortly for a child's education?
> **A:** **Short-term fixed deposit** — ensures liquidity and some return; avoid equity/alternatives for a near-term need.

**Q28.** Best fund for a grandchild's college corpus 13 years away (grandparent in late 60s)?
> **A:** A **large-and-mid-cap (equity) fund** — the long horizon allows equity exposure **irrespective of the investor's age**.

**Q29.** When does a Will take effect, and can the heir borrow against the property beforehand?
> **A:** A Will takes effect **only on death** and can be changed before then; so an heir **cannot** use it to prove ownership/borrow while the testator is alive.

**Q30.** How can a parent give a child immediate access to money meant for them in a Will?
> **A:** The parent (as primary holder) **redeems** the investment and **gifts** the money — a gift to a relative is **tax-free** and gives immediate access (the Will only operates on death).
