# Chapter 6: Miscellaneous Aspects of Retirement Planning — 100 MCQ Question Bank

> Three difficulty tiers — 🟢 Tier 1 (Easy/Recall), 🟡 Tier 2 (Medium/Application), 🔴 Tier 3 (Hard/Numerical & Scenario) — followed by a worked Case Study. Remember: the NISM Series X-B exam carries **25% negative marking**, so a wrong answer costs you 0.25 of the question's marks — guess only when you can eliminate options.

## 🟢 Tier 1 — Easy: Recall (Q1–Q35)

**Q1.** What is the central role an investment adviser plays in retirement planning?
A) Guaranteeing fixed returns on all investments  B) Fitting together pensions, benefits, home equity and assets into reliable monthly retirement income  C) Filing the client's income tax returns  D) Managing the client's bank account
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook describes the adviser as someone who puts the "pieces of a puzzle" (pensions, Social Security, part-time work, home equity, investments) together to produce reliable monthly income once the client retires.
- A) is wrong — no adviser can guarantee returns; markets fluctuate.
- C) is wrong — filing tax returns is a compliance/accounting task, not the adviser's core retirement role (though tax knowledge helps).
- D) is wrong — operating a bank account is not the adviser's planning function.
</details>

**Q2.** Before making any recommendation, an adviser must understand the client's:
A) Favourite mutual fund house  B) Time horizon, investment experience, goals and risk tolerance  C) Social media following  D) Employer's stock price
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook states an adviser will not recommend anything until they understand the client's expected time horizon, level of investment experience, goals and tolerance for investment risk (plus assets, liabilities and income sources).
- A), C), D) are irrelevant to a suitability assessment and are not mentioned in the workbook.
</details>

**Q3.** Inflation is best defined as:
A) The rate at which interest is paid on deposits  B) The rate at which prices of essential items increase every year  C) The fall in stock prices  D) The tax on income
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook defines inflation as "the rate at which prices of all essential items increase every year," which reduces future purchasing power.
- A) describes a deposit interest rate, not inflation.
- C) describes a market correction.
- D) describes income tax.
</details>

**Q4.** According to the workbook example, an item costing Rs. 100 today will cost how much next year if inflation is 7%?
A) Rs. 100  B) Rs. 105  C) Rs. 107  D) Rs. 117
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Future price = 100 × (1 + 7%) = 100 × 1.07 = Rs. 107. This is the workbook's own illustration of inflation.
- A) ignores inflation entirely.
- B) uses 5%, not the stated 7%.
- D) uses 17%, which is not the given rate.
</details>

**Q5.** The workbook states that Rs. 10,000 per month spent today will become how much per month after 25 years at 7% inflation?
A) Rs. 25,000  B) Rs. 48,847  C) Rs. 54,724  D) Rs. 81,411
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Future Expense = Present × (1 + inflation)^years = 10,000 × (1.07)^25 ≈ Rs. 54,724/month. This is the exact figure in the workbook.
- A) is the original amount roughly, ignoring growth.
- B) is the Scenario-1 figure for Rs. 9,000 today, not Rs. 10,000.
- D) is the Scenario-2 figure for Rs. 15,000 today.
</details>

**Q6.** As a rule of thumb in the workbook, expenses at retirement are roughly what fraction of one's existing expenses (if there are no liabilities)?
A) 20%–30%  B) 50%–60%  C) 75%–85%  D) 100%–110%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says one can estimate retirement expenses at roughly 50%–60% of current expenses if there are no liabilities, though high medical costs at older ages should still be considered.
- A) is too low.
- C) and D) are too high — they ignore the freedom from loan EMIs and children's goals at retirement.
</details>

**Q7.** Which Excel function does the workbook use to calculate the retirement corpus required?
A) =PMT()  B) =FV()  C) =PV()  D) =RATE()
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The workbook states: "For calculating Retirement Corpus, Present Value Formula in excel is used: =PV(rate, nper, pmt, [fv], [type])".
- A) PMT gives the periodic payment (used for monthly savings, not the corpus).
- B) FV gives a future value, the opposite direction.
- D) RATE solves for an interest rate.
</details>

**Q8.** Which Excel function does the workbook use to calculate the monthly savings required to reach the corpus?
A) =PV()  B) =PMT()  C) =NPER()  D) =IRR()
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook uses "=PMT(rate, nper, pv, [fv], [type])" to find the fixed monthly savings needed to reach the corpus target.
- A) PV finds the corpus, not the contribution.
- C) NPER solves for the number of periods.
- D) IRR finds a return from cash flows.
</details>

**Q9.** In the Excel PV/PMT functions, what does the "type" argument indicate when set to 0 (or left blank)?
A) Payments are made at the beginning of each period  B) Payments are made at the end of each period  C) Payments are annual  D) Payments are tax-free
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Per the workbook, type = 0 (or omitted) means payments are made at the *end* of each period; type = 1 means the beginning.
- A) is type = 1, the opposite.
- C) and D) are not what "type" controls — it only flags timing within a period.
</details>

**Q10.** In the corpus calculation, why is the monthly expense (pmt) entered with a minus sign in the PV formula?
A) Because of negative marking  B) Because it is a cash outflow (an expense)  C) To reduce tax  D) Because Excel always needs negatives
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook notes "Since these are cash outflows i.e. expenses, the amounts are prefixed with a 'minus' sign." Excel cash-flow sign convention treats outflows as negative.
- A) is unrelated (negative marking is an exam concept).
- C) is irrelevant to a sign convention.
- D) is false — Excel does not "always" need negatives; the sign reflects direction of cash flow.
</details>

**Q11.** In the workbook's main corpus example, what is the assumed return on the retirement corpus during retirement?
A) 6% p.a.  B) 7% p.a.  C) 8% p.a.  D) 12% p.a.
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The workbook assumes an 8% p.a. return on the corpus during retirement.
- A) 6% is the post-retirement inflation assumption, not the return.
- B) 7% is the pre-retirement inflation rate.
- D) 12% is the accumulation-phase return used in the savings (PMT) example.
</details>

**Q12.** In the workbook's main corpus example, the post-retirement inflation is assumed to be:
A) 6% p.a.  B) 7% p.a.  C) 8% p.a.  D) 1.89% p.a.
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Post-retirement inflation is taken as 6% p.a.
- B) 7% is the pre-retirement inflation used to grow today's expenses to retirement.
- C) 8% is the return on the corpus.
- D) 1.89% is the resulting inflation-adjusted (real) return, not the inflation itself.
</details>

**Q13.** The inflation-adjusted (real) return in the workbook example works out to:
A) 2% p.a.  B) 1.89% p.a.  C) 14% p.a.  D) 0.89% p.a.
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real return = [(1+8%)/(1+6%)] − 1 = (1.08/1.06) − 1 ≈ 1.89% p.a., as stated in the workbook.
- A) 2% is the rough difference (8%−6%) but the formula gives 1.89%, not a simple subtraction.
- C) and D) do not match the formula result.
</details>

**Q14.** In the workbook's corpus example, the individual is aged 35 and wishes to retire at:
A) 55  B) 58  C) 60  D) 65
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The example uses retirement at age 60, giving 25 years to retire (60 − 35).
- A), B), D) are not the ages used; 60 is the workbook's assumption (and the standard retirement age elsewhere in the chapter).
</details>

**Q15.** In the workbook's corpus example, life expectancy is assumed up to age:
A) 75  B) 80  C) 85  D) 90
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Life expectancy is assumed till age 85, giving 25 years post-retirement (85 − 60).
- A) 75 is mentioned only as a "may expect" figure that people often outlive.
- B) and D) are not the assumed life expectancy in the example.
</details>

**Q16.** The number of months used as nper in the corpus PV calculation (25 post-retirement years) is:
A) 25  B) 240  C) 300  D) 360
<details><summary>Answer & Explanation</summary>

**Correct: C)** — 25 years × 12 = 300 months, as stated in the workbook.
- A) is in years, not months.
- B) 240 = 20 years × 12.
- D) 360 = 30 years × 12.
</details>

**Q17.** For Scenario 1 (today's relevant monthly expense Rs. 9,000), the corpus required in the workbook is approximately:
A) Rs. 1.17 crore  B) Rs. 1.95 crore  C) Rs. 3.11 crore  D) Rs. 48,847
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Scenario 1 gives a corpus of about Rs. 1.17 crore.
- B) Rs. 1.95 crore is Scenario 2 (Rs. 15,000).
- C) Rs. 3.11 crore is Scenario 3 (Rs. 24,000).
- D) Rs. 48,847 is the monthly expense at retirement, not the corpus.
</details>

**Q18.** A "step-up" strategy in retirement saving means:
A) Withdrawing money each year  B) Increasing contributions periodically (a % each year or a lump sum)  C) Reducing contributions as income falls  D) Switching to fixed deposits
<details><summary>Answer & Explanation</summary>

**Correct: B)** — In a step-up strategy one starts with a fixed amount but steps up contributions by a certain percentage every year (or via lump sums) to maximise savings.
- A) describes withdrawals, the opposite.
- C) describes reducing savings.
- D) is unrelated to stepping up.
</details>

**Q19.** Step-up contributions can be made through which of the following per the workbook?
A) Only fixed deposits  B) EPF, NPS or mutual funds  C) Only physical gold  D) Only real estate
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says stepping up can be done through investments in EPF, NPS or mutual funds (e.g., step-up SIPs).
- A), C), D) are not the avenues the workbook lists for stepping up.
</details>

**Q20.** A step-up SIP in mutual funds works by:
A) Stopping the SIP after one year  B) Automatically increasing the SIP contribution after a specific period  C) Paying a one-time amount only  D) Reducing the SIP each year
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A step-up SIP uses an automated feature where contributions increase after a specific period (e.g., Rs. 5,000 in 2023, Rs. 5,000+10% in 2024, and so on).
- A) and D) describe stopping/reducing, the opposite.
- C) describes a lump sum, not a step-up SIP.
</details>

**Q21.** The workbook suggests that if income increases by 10%, the investor can step up the SIP by at least:
A) 1%–2%  B) 5%–7%  C) 15%–20%  D) 50%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook states that if income rises by 10%, one can step up the investment by at least 5% to 7%.
- A) is too small to make a meaningful difference.
- C) and D) exceed the workbook's suggested range and the income increase itself.
</details>

**Q22.** Early (pre-retirement) withdrawal from a retirement fund mainly harms the corpus because it:
A) Increases taxes only  B) Destroys the benefit of compounding on the withdrawn amount  C) Raises inflation  D) Lowers life expectancy
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Withdrawing early removes the amount from years of compounding growth, so the corpus falls short; the workbook stresses this detrimental impact.
- A) tax may apply, but the core harm described is lost compounding.
- C) and D) are unrelated to a withdrawal.
</details>

**Q23.** According to the workbook, common reasons people withdraw EPF before retirement include all EXCEPT:
A) Children's education  B) Marriage  C) Medical emergencies  D) Buying lottery tickets
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The workbook lists children's education, marriage, medical emergencies and house purchase as common early-withdrawal reasons. Lottery tickets are not mentioned.
- A), B), C) are all explicitly listed reasons.
</details>

**Q24.** In the workbook's early-withdrawal example, Mr. E withdraws Rs. 75,000 from EPF with 30 years to retirement, potentially losing:
A) Rs. 75,000  B) Rs. 1.5 lakh  C) Rs. 8.66 lakh  D) Rs. 20,217
<details><summary>Answer & Explanation</summary>

**Correct: C)** — At 8.5% p.a. for 30 years, the lost future value is about Rs. 8.66 lakh.
- A) is just the amount withdrawn, ignoring lost growth.
- B) understates the lost compounding.
- D) is the unrelated Mr. A monthly-savings figure.
</details>

**Q25.** What is the EPF interest rate used in the workbook's early-withdrawal example?
A) 7% p.a.  B) 8% p.a.  C) 8.5% p.a.  D) 12% p.a.
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The example assumes the EPF balance earns 8.5% p.a. over the 30-year period.
- A) 7% is the inflation rate elsewhere.
- B) 8% is the corpus return assumption.
- D) 12% is the accumulation return in the PMT example.
</details>

**Q26.** UAN (Universal Account Number) is:
A) A 10-digit tax ID  B) A 12-digit unique number allotted to each EPF-contributing employee for life  C) An NPS account number  D) A bank IFSC code
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook footnote defines UAN as a 12-digit unique number allotted to each EPF-contributing employee that remains the same throughout life, regardless of how many employers they join.
- A) describes a different length and purpose.
- C) PRAN is the NPS identifier.
- D) IFSC identifies a bank branch.
</details>

**Q27.** With the UAN in force, transferring EPF from an old employer to a new employer can be done:
A) Only by post  B) Completely online  C) Only by visiting the EPFO office  D) It cannot be transferred
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook states that with UAN, an employee can transfer the EPF account from the old to the new employer completely online, provided UAN, KYC and personal details are updated.
- A) and C) are outdated manual methods.
- D) is false — EPF is transferable.
</details>

**Q28.** PRAN in the context of NPS stands for:
A) Provident Retirement Account Number  B) Permanent Retirement Account Number  C) Pension Refund Account Number  D) Public Retirement Annuity Number
<details><summary>Answer & Explanation</summary>

**Correct: B)** — PRAN is the Permanent Retirement Account Number generated for an NPS subscriber; the same PRAN moves with the subscriber across employers.
- A), C), D) are incorrect expansions of the abbreviation.
</details>

**Q29.** A key difference between NPS and EPF on job change is that:
A) NPS allows multiple accounts; EPF allows only one  B) One cannot have multiple NPS accounts — the same PRAN shifts; EPF can end up with multiple accounts  C) Both must be closed on job change  D) Neither can be transferred
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says NPS shifting is easier because one cannot hold multiple NPS accounts; the same PRAN moves (or continues under the All Citizen Model). EPF, by contrast, can result in multiple accounts when switching jobs.
- A) reverses the facts.
- C) and D) are false — both products continue across jobs.
</details>

**Q30.** If an employee changes employer in less than 5 years and withdraws the old EPF balance, the withdrawal:
A) Is always tax-free  B) Becomes taxable  C) Earns double interest  D) Is forfeited
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook states that withdrawing the old EPF balance on a job change of less than 5 years makes the withdrawal taxable; transferring the balance avoids this tax incidence.
- A) is wrong because the 5-year condition is not met.
- C) and D) are not consequences mentioned in the workbook.
</details>

**Q31.** Transferring the old EPF balance to the new employer's PF account is beneficial because it:
A) Resets the service period to zero  B) Includes the old service period in computing total service period  C) Reduces the interest earned  D) Triggers immediate tax
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says transferring adds the old service period to the total, helping toward the 5-year tax-free threshold, and preserves compounding without tax.
- A) is the opposite — transfer preserves, not resets, service.
- C) and D) describe disadvantages of withdrawing, not transferring.
</details>

**Q32.** During the pre-retirement (accumulation) stage, on which FOUR factors should a retirement product be evaluated?
A) Liquidity, colour, brand, size  B) Cost, Return, Risk, Tax efficiency  C) Inflation, capital protection, heirs, liquidity  D) Cost only
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook lists Cost, Return, Risk and Tax Efficiency as the four evaluation factors in the pre-retirement (accumulation) stage.
- A) lists irrelevant attributes.
- C) lists the retirement/post-retirement criteria.
- D) is incomplete — there are four factors.
</details>

**Q33.** For income-generating products at the retirement stage, the workbook says to evaluate on which two factors?
A) Cost and Return  B) Inflation and Capital Protection  C) Risk and Tax efficiency  D) Liquidity and Brand
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Income-generating products are evaluated on Inflation (income must beat inflation to survive longevity risk) and Capital Protection.
- A) and C) are the accumulation/growth-phase factors.
- D) is not the stated pair.
</details>

**Q34.** In the post-retirement stage (beyond ~75 years), the primary objective shifts to:
A) Maximum growth  B) Generating income with capital protection, low return and least risk  C) Aggressive equity investing  D) Taking high risk for high return
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Beyond ~75, the objective shifts fully to income; priorities are capital protection, low return, least risk, plus leaving money for heirs (where liquidity matters).
- A), C), D) describe accumulation-stage, high-risk approaches unsuitable for very old age.
</details>

**Q35.** Philanthropy, as described in the workbook, is:
A) A tax-avoidance scheme only for the wealthy  B) Giving part of one's income/wealth for the benefit of society and the needy  C) A type of pension product  D) A government loan
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook describes philanthropy as the urge to do for others — contributing part of one's income for noble causes — and notes it is no longer limited to the rich.
- A) is wrong — it is open to all income levels and is not framed as tax avoidance.
- C) and D) are unrelated financial products.
</details>

## 🟡 Tier 2 — Medium: Application (Q36–Q70)

**Q36.** A 32-year-old client with 25+ years to retirement and a high risk appetite asks which type of product fits his accumulation goal. Which is most appropriate?
A) A pure income (annuity) product  B) A growth-oriented product that can ride out market cycles  C) A short-term liquid fund only  D) A reverse mortgage
<details><summary>Answer & Explanation</summary>

**Correct: B)** — In the pre-retirement (accumulation) phase, the workbook advises products that "allow money to grow even though downside risk may be there," because a long horizon lets one ride through downturns.
- A) Income products are for the retirement/post-retirement phases, not accumulation.
- C) A liquid fund won't beat inflation over decades.
- D) A reverse mortgage is an income tool for retirees who own a home, not an accumulation product.
</details>

**Q37.** A client says: "Inflation doesn't matter — I'll just need the same rupee amount I spend now when I retire." How should the adviser correct this?
A) Agree — expenses stay flat  B) Explain that inflation raises future expenses, so the corpus needed grows  C) Tell him to ignore the corpus entirely  D) Say inflation reduces the corpus needed
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Inflation increases the rupee value of future expenses (Rs. 10,000 → Rs. 54,724 in 25 years at 7%), so the corpus required rises. The corpus must fund inflated, not current, expenses.
- A) is the client's error.
- C) ignores planning altogether.
- D) reverses the relationship — inflation increases, not decreases, the corpus needed.
</details>

**Q38.** Which set of inputs correctly fills the PV(rate, nper, pmt) function for the corpus in the workbook's example?
A) rate = 8%/12, nper = 300, pmt = −48,847  B) rate = 1.89%/12, nper = 300, pmt = −48,847  C) rate = 7%/12, nper = 360, pmt = −9,000  D) rate = 6%/12, nper = 25, pmt = −48,847
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The corpus PV uses the *real* return 1.89% p.a. (i.e., 1.89%/12 per month), nper = 300 months (25 yrs × 12), and pmt = the inflated monthly expense at retirement (Rs. 48,847) entered negative.
- A) wrongly uses the nominal 8% instead of the real return — that would double-count inflation.
- C) uses today's expense and the wrong rate/nper.
- D) uses inflation (6%) as the rate and 25 (years, not months) for nper.
</details>

**Q39.** Why does the corpus calculation use the *real* return (1.89%) rather than the nominal return (8%)?
A) To make the corpus look smaller  B) Because during retirement the corpus grows at 8% but living costs also rise at 6%, so purchasing power grows only ~1.89%  C) Because 8% is illegal  D) Because real return is always higher
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The real return captures that the corpus earns 8% while expenses inflate at 6%; net purchasing-power growth is ~1.89%. Discounting at the real rate builds the rising-cost effect into the corpus automatically.
- A) is not the purpose — accuracy is.
- C) is nonsense.
- D) is false — the real return is lower than the nominal when inflation is positive.
</details>

**Q40.** Two clients need the same Rs. 1.18 crore corpus at age 60. Client X starts at 30, Client Y at 40, both earning 12%. Which statement is correct?
A) Both save the same per month  B) Client Y (starting at 40) must save much more per month  C) Client X must save more per month  D) Neither needs to save
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook table shows Rs. 3,376/month from age 30 vs Rs. 11,928/month from age 40 for the same corpus. Starting later means fewer years of compounding, so the monthly requirement balloons.
- A) is wrong — the amounts differ greatly.
- C) reverses the result.
- D) ignores that a corpus must be funded.
</details>

**Q41.** A client wants to keep his retirement saving easy on cash flow early in his career but still hit a big target. Which strategy fits best?
A) Withdraw early and reinvest  B) A step-up SIP that starts lower and increases each year  C) Stop saving until age 50  D) Keep everything in a savings account
<details><summary>Answer & Explanation</summary>

**Correct: B)** — A step-up strategy lets one start with a lower contribution and raise it yearly as income grows, optimising savings and capturing compounding — exactly the workbook's recommendation.
- A) destroys compounding.
- C) wastes the most valuable early years of compounding.
- D) earns too little to beat inflation.
</details>

**Q42.** Mr. A needs Rs. 2.0 crore in 20 years at 12%. The workbook says a fixed monthly saving of Rs. 20,217 achieves this. If instead he steps up contributions 7% annually, the main advantage is:
A) He pays no tax  B) He can start with a lower amount and increase it as income grows, easing early cash flow  C) He reaches the goal in 10 years  D) He needs no return
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Stepping up lets Mr. A begin below Rs. 20,217 and raise contributions yearly, which is gentler on early finances while still riding compounding.
- A) tax is not the point here.
- C) the horizon is still 20 years.
- D) returns (12%) are still essential.
</details>

**Q43.** A client is tempted to withdraw from EPF 30 years before retirement for a discretionary purchase. The adviser should emphasise that:
A) It has no effect on the corpus  B) The withdrawn amount loses decades of compounding, shrinking the retirement corpus significantly  C) It increases the corpus  D) It reduces inflation
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook's Mr. E example shows Rs. 75,000 withdrawn 30 years early can cost ~Rs. 8.66 lakh of future corpus at 8.5%. Early withdrawal kills compounding.
- A) is false — the impact is large.
- C) reverses it.
- D) is unrelated.
</details>

**Q44.** An employee switching jobs in under 5 years asks how to avoid tax on his old EPF balance. The best advice is:
A) Withdraw the full balance now  B) Transfer the EPF balance to the new employer (no tax incidence; old service period counts)  C) Open a new EPF account and leave the old one  D) Convert it to a fixed deposit
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Transferring avoids the tax that a sub-5-year withdrawal would trigger, and adds the old service to total service period, helping cross the 5-year tax-free mark.
- A) Withdrawing under 5 years is taxable.
- C) Leaving an old account loses compounding continuity and can be taxed.
- D) is not a transfer option and breaks the EPF structure.
</details>

**Q45.** A subscriber switches to an employer not registered for NPS. What happens to his PRAN?
A) It is cancelled  B) He must open a new PRAN  C) He can continue the same PRAN under the All Citizen Model  D) The corpus is forfeited
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The workbook says if the new employer isn't registered, the employee can still continue the PRAN under the 'All Citizen Model'.
- A), B), D) contradict the rule that one cannot have multiple NPS accounts and the PRAN is permanent.
</details>

**Q46.** Which scenario is the MOST natural moment for an adviser to raise philanthropy, per the workbook?
A) During a market crash  B) A liquidity event such as the sale of a business or an inheritance  C) When the client is filing a complaint  D) Never
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook lists a liquidity event (business sale, inheritance) as a natural spark, along with drafting a will, a life event, or the annual meeting.
- A) A crash is a stressful, unsuitable moment.
- C) A complaint is not the context.
- D) is wrong — the workbook actively encourages the conversation.
</details>

**Q47.** A 78-year-old retiree wants to choose a product. Which evaluation criterion should dominate?
A) Maximum growth and high risk  B) Capital protection, low return, least risk, with liquidity for heirs  C) Tax efficiency for long-term accumulation  D) Beating inflation through equities
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Beyond ~75 (post-retirement), the objective is pure income with capital protection, low return, least risk, and liquidity to leave money for heirs.
- A), D) are accumulation-stage, high-risk approaches.
- C) suits the pre-retirement phase, not very old age.
</details>

**Q48.** A just-retired client needs both steady income and some continued growth. The adviser should:
A) Put everything into one annuity  B) Use two baskets — income-generating products and growth products (10–15 yr horizon)  C) Put everything into equities  D) Hold only cash
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At the retirement stage the workbook recommends two product types: income-generating (judged on inflation and capital protection) and growth (10–15 year horizon, same four factors as pre-retirement).
- A) ignores the growth need.
- C) is too risky for the income need.
- D) earns too little and loses to inflation.
</details>

**Q49.** Why does the workbook say EPF/NPS may no longer be "viable" for the growth basket once a person has retired?
A) They are illegal after retirement  B) The growth-basket horizon is only ~10–15 years and the product mix shifts (e.g., to PPF, certain mutual funds)  C) They have no returns  D) They are too liquid
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At retirement the growth horizon shrinks to 10–15 years, so the workbook says one may rely on PPF, certain mutual funds and others instead of EPF/NPS.
- A) is false.
- C) is false — they do earn returns.
- D) is not the stated reason.
</details>

**Q50.** A client mistakenly thinks "real return = nominal return − inflation" and computes 8% − 6% = 2%. The precise workbook value is 1.89%. The difference arises because:
A) The workbook made an error  B) The exact formula divides: (1+return)/(1+inflation) − 1, which is slightly less than simple subtraction  C) Inflation should be added  D) Returns are taxed
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The exact real return = (1.08/1.06) − 1 = 0.01887 ≈ 1.89%, slightly below the 2% rough subtraction because of the compounding interaction in the denominator.
- A) the workbook is correct.
- C) inflation is divided/subtracted, not added.
- D) tax is irrelevant to this formula.
</details>

**Q51.** Among the following, which is a service an adviser explicitly offers per the workbook?
A) Predicting exact stock prices  B) Advising whether a reverse mortgage is a good option for the client  C) Guaranteeing pension amounts  D) Running the client's business
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook lists "If a reverse mortgage is a good option for the client" among adviser services.
- A) and C) involve impossible guarantees/predictions.
- D) is outside the adviser's role.
</details>

**Q52.** A client aged 50 wants to boost retirement savings with tax-exempt returns via an employer avenue. The workbook suggests:
A) Reverse mortgage  B) Voluntary Provident Fund (VPF)  C) Withdrawing EPF  D) A personal loan
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says someone aged 50+ wishing to boost savings can consider the Voluntary Provident Fund, maximising gains because returns are tax-exempt in this avenue.
- A) provides income, not accumulation.
- C) reduces the corpus.
- D) is a liability, not savings.
</details>

**Q53.** For NPS contributions, the workbook notes that beyond the employer's contribution:
A) No further investment is allowed  B) There is no limit to invest — one can add via SIP or lump sum  C) Only Rs. 50,000 per year is allowed  D) Contributions must stop at age 50
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook states that with NPS there is no limit to invest; beyond the employer's contribution one can invest any amount through SIP or lump sum to step up.
- A), C), D) impose limits the workbook does not state in this context.
</details>

**Q54.** Which statement about the *cost* factor in evaluating accumulation-phase products is correct?
A) Higher cost means higher accumulation  B) More cost means less earning and so less accumulation; some products hide total cost  C) Cost is irrelevant in long-term products  D) Cost only matters in the income phase
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook: "More the cost less is the earning and so the accumulation," and warns the total cost may not be clear in some products.
- A) reverses the relationship.
- C) and D) understate cost's importance in long-term accumulation.
</details>

**Q55.** A client asks why transferring the corpus on a job change is "more rewarding." The best workbook-based answer is:
A) It avoids all paperwork  B) It preserves the compounding effect and avoids restarting contributions from scratch  C) It guarantees higher returns  D) It removes the need to save
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Transferring keeps the old corpus compounding and avoids starting over (where the required contribution has already risen), keeping the client on the planned path.
- A) is a minor side effect, not the core benefit.
- C) no return is guaranteed.
- D) is false — saving continues.
</details>

**Q56.** In the savings (PMT) example, what is the assumed annual return during the accumulation years?
A) 8%  B) 12%  C) 6%  D) 1.89%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The PMT example uses 12% p.a. (12%/12 per month) for accumulation.
- A) 8% is the retirement-phase corpus return.
- C) 6% is post-retirement inflation.
- D) 1.89% is the real return for the corpus PV.
</details>

**Q57.** A client retiring soon finds his corpus is inadequate. Per the module-end questions, a valid solution is to:
A) Invest the shortfall in lottery  B) Postpone retirement  C) Reduce periodic savings  D) Ignore it
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook's module-end question lists "Postpone retirement" as a solution to manage corpus inadequacy closer to retirement.
- A) is reckless.
- C) worsens the shortfall.
- D) leaves the problem unsolved.
</details>

**Q58.** Which of these does inflation do to retirement planning (module-end question)?
A) Reduces the periodic savings required  B) Reduces the nominal return generated  C) Increases the retirement corpus required  D) Increases the value of the corpus created
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Inflation raises future expenses, so the corpus required increases.
- A) is the opposite — more saving is needed.
- B) inflation doesn't reduce nominal return; it erodes real value.
- D) inflation erodes, not increases, the corpus's purchasing power.
</details>

**Q59.** When should a retirement corpus be reviewed (module-end question)?
A) Never  B) Only at retirement  C) Every time there is a significant change in financial situation  D) Only once at the start
<details><summary>Answer & Explanation</summary>

**Correct: C)** — The workbook's module-end answer is to review whenever there is a significant change in the financial situation.
- A), B), D) are too rigid; a plan must adapt to life changes.
</details>

**Q60.** Growth-oriented investments are suitable for which stage of retirement saving (module-end question)?
A) Distribution stage  B) Income stage  C) Accumulation stage  D) Withdrawal stage
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Growth investments suit the accumulation stage, when the horizon is long and risk appetite higher.
- A), B), D) are distribution/income phases where capital protection and income dominate.
</details>

**Q61.** A client opened a separate EPF account at each of his four jobs without transferring. The workbook warns this causes:
A) Higher guaranteed returns  B) Operational issues, possible taxation of older balances, and lost compounding  C) Automatic merging by EPFO  D) No consequences
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Multiple EPF accounts bring operational hassle, a cascading tax effect on older balances if conditions aren't met, and lost compounding on the old corpus.
- A) reverses the harm.
- C) accounts don't auto-merge — the employee must transfer.
- D) understates the real downsides.
</details>

**Q62.** Which is the correct order of the three life stages used to evaluate retirement products?
A) Retirement → Pre-retirement → Post-retirement  B) Pre-retirement → Retirement → Post-retirement  C) Post-retirement → Retirement → Pre-retirement  D) Pre-retirement → Post-retirement → Retirement
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook orders the stages: Pre-retirement (accumulate), Retirement (income + growth), Post-retirement (pure income).
- A), C), D) scramble the natural sequence.
</details>

**Q63.** Why does the workbook say "any income benefit product may not be a viable option" in the pre-retirement phase?
A) Income products are illegal  B) The focus is on accumulation/growth; income products don't grow money for the long horizon  C) They are too risky  D) They have no taxes
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Pre-retirement aims to accumulate and grow; pure income products don't suit a 15–20 year growth horizon.
- A) is false.
- C) income products are typically lower-risk, not riskier.
- D) is irrelevant to suitability here.
</details>

**Q64.** An adviser raising philanthropy should, after the first conversation:
A) Drop it forever  B) Follow up with resources and next steps if the client showed genuine interest  C) Invest the client's money in charity without asking  D) Charge a fee for talking
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook stresses following up — philanthropy can slip down a busy person's list, so the adviser should provide resources and next steps.
- A) abandons an interested client.
- C) acts without consent.
- D) is not the workbook's guidance.
</details>

**Q65.** A client says retirement expenses will be higher than current expenses. The workbook's general view is:
A) Expenses are usually higher  B) Expenses are generally lower (≈50–60%) once liabilities/children's goals end, but rising medical costs must be considered  C) Expenses are exactly the same  D) Expenses fall to zero
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says retirement expenses are generally lower (roughly 50–60% of current) as loans and children's goals end, while flagging higher medical costs at older ages.
- A) overstates.
- C) and D) are extremes the workbook doesn't support.
</details>

**Q66.** For the corpus PV calculation, the "fv" argument in the workbook example is:
A) Set to the corpus value  B) Left blank (assumed 0)  C) Set to a negative number  D) Set to 8%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook leaves fv blank, so Excel assumes 0 — the plan is to draw the corpus down to zero over retirement.
- A) confuses fv with the result (PV).
- C) and D) are not how fv is used here.
</details>

**Q67.** Which combination correctly matches the savings PMT inputs in the workbook (start age 30 case)?
A) rate = 12%/12, nper = 360, pv = 1.18 crore  B) rate = 8%/12, nper = 300, pv = 1.18 crore  C) rate = 7%/12, nper = 240, pv = 2 crore  D) rate = 1.89%/12, nper = 360, pv = 1.18 crore
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Starting at 30 gives 30 years × 12 = 360 months; rate = 12%/12; pv (target corpus) = Rs. 1.18 crore.
- B) uses the wrong rate (8%) and nper (300 = 25 yrs).
- C) uses inflation as rate and the wrong corpus/horizon.
- D) uses the real return instead of the 12% accumulation return.
</details>

**Q68.** Why does delaying retirement contributions "strain finances in later years"?
A) Because inflation falls  B) Because the required monthly saving balloons due to less time for compounding, colliding with other goals/liabilities  C) Because returns rise  D) Because taxes disappear
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Delay shrinks the compounding window, so the monthly requirement jumps (Rs. 3,376 at 30 vs Rs. 11,928 at 40), straining later finances when other goals and liabilities also compete.
- A), C), D) are unrelated or false.
</details>

**Q69.** A client asks whether NPS or EPF is easier to carry across jobs. Correct answer:
A) EPF, because it auto-transfers  B) NPS, because the same PRAN moves and one cannot hold multiple NPS accounts  C) Both are equally hard  D) Neither can move
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook calls NPS easier to shift — the same PRAN moves with the subscriber (or continues under All Citizen Model), and multiple accounts aren't possible.
- A) EPF has more stringent clauses and can create multiple accounts.
- C) and D) contradict the workbook.
</details>

**Q70.** An adviser wants to "optimize the portfolio to produce a steady stream of retirement income." The workbook says the adviser should first:
A) Sell all assets  B) Know where all the client's investments are, so the whole portfolio makes sense  C) Buy only one product  D) Ignore liabilities
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook says the adviser will want to know where all the client's investments are so the portfolio as a whole can be optimised for steady retirement income.
- A) is destructive.
- C) ignores diversification.
- D) contradicts the need to understand the full financial picture.
</details>

