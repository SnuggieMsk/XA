# Mock Paper 3 — NISM Series X-B (Investment Adviser Level 2)
**Total: 100 marks · 70 questions · Suggested time: 2 hours · Negative marking: 25% of the marks for a wrong answer.**

> This paper is numerical and case-heavy, with a strong focus on insurance computations (HLV, needs-based cover, term vs endowment vs ULIP, health-claim mechanics, motor/property claims). Keep a calculator or spreadsheet handy and work each calculation step by step before locking in your answer.

## Section A — Numerical MCQs (40 questions × 1 mark = 40 marks)

**Q1.** A 30-year-old earns ₹12,00,000 p.a. (net of his own expenses, all available to dependents). His income is assumed to grow at 6% p.a. and the post-tax return on the sum assured is 8% p.a. He has 30 years to retirement. Using the simple HLV thumb rule (discount at the inflation-adjusted rate, payments at the beginning of each year), the discounting rate to use is closest to:
A) 2.00%  B) 6.00%  C) 14.00%  D) 1.89%
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The HLV income-replacement method discounts future income at the rate that nets out investment return against income growth. Formula: adjusted rate = ((1 + return)/(1 + growth)) − 1 = (1.08/1.06) − 1 = 1.0188… − 1 = 0.0189 = **1.89%**. A) 2.00% is the crude "8% − 6%" subtraction, which is wrong because returns and growth compound, not subtract. C) 14.00% wrongly adds the two rates. B) 6.00% just uses inflation. The 1.89% figure matches the workbook's needs-based example.
</details>

**Q2.** Using the data in Q1 (annual income ₹12,00,000, adjusted rate 1.89%, 30 years, beginning-of-year payments), the Human Life Value (present value of income) is closest to:
A) ₹3,60,00,000  B) ₹1,80,00,000  C) ₹2,68,00,000  D) ₹2,73,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — HLV = PV of an annuity-due: PV = PMT × [(1 − (1+r)^−n)/r] × (1+r), with PMT = ₹12,00,000, r = 1.89%, n = 30. The annuity factor (1 − 1.0189^−30)/0.0189 ≈ 22.34; × (1.0189) ≈ 22.76. PV ≈ 12,00,000 × 22.76 ≈ **₹2,73,00,000**. A) ₹3.6 cr is simply income × 30 (ignores discounting). C) ₹2.68 cr forgets the annuity-due (beginning-of-year) adjustment. B) ₹1.8 cr uses only 15 years. So roughly ₹2.73 crore.
</details>

**Q3.** Anil's needs-based calculation: income to replace ₹9,96,000 p.a., adjusted rate 1.89%, period 31 years (payments at beginning of year) gives a corpus of ₹2,36,43,984. He has a loan outstanding of ₹40,00,000, existing life cover of ₹1,00,00,000 and investments of ₹50,00,000. Additional insurance cover required is:
A) ₹2,76,43,984  B) ₹1,86,43,984  C) ₹1,26,43,984  D) ₹2,36,43,984
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Needs-based steps: Total need = corpus + loan = 2,36,43,984 + 40,00,000 = ₹2,76,43,984. Then deduct existing cover (₹1 cr) and investments (₹50 lakh): 2,76,43,984 − 1,00,00,000 − 50,00,000 = **₹1,26,43,984**. A) ₹2.76 cr forgets to deduct existing cover/investments. B) ₹1.86 cr deducts only the ₹1 cr cover. D) ₹2.36 cr is just the corpus before adding the loan. This is the exact workbook answer.
</details>

**Q4.** A 30-year-old's HLV is calculated assuming income grows at exactly the same rate as the post-tax return (both 8%). His current income available to dependents is ₹10,00,000 and 27 years remain to retirement. The HLV equals:
A) ₹1,80,00,000  B) ₹2,16,00,000  C) ₹3,00,00,000  D) ₹2,70,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — When income growth = investment return, the discounting rate = (1.08/1.08) − 1 = 0. With a zero discount rate, present value = income × number of years = 10,00,000 × 27 = **₹2,70,00,000**. This is the workbook's "Question 1" thumb rule: HLV = current income × years to retirement. A) ₹1.8 cr uses 18 years. C) ₹3 cr uses 30 years. B) ₹2.16 cr uses 21.6. So ₹2.70 crore.
</details>

**Q5.** A pure term plan of ₹1 crore for 30 years costs ₹9,416 p.a. The same insurer's "return of premium" term plan costs ₹17,473 p.a. and returns ₹5,24,190 at maturity. The implied return on the EXTRA premium (₹17,473 − ₹9,416 = ₹8,057), invested for 30 years, is closest to:
A) 4.61%  B) 8.00%  C) 2.50%  D) 11.00%
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Treat the extra premium of ₹8,057 p.a. (beginning of year) as an investment whose future value after 30 years is ₹5,24,190. Solving the RATE function (Nper 30, PMT 8,057, FV −5,24,190, type 1) gives **4.61% p.a.** Quick check: 30 × 8,057 = ₹2,41,710 contributed; growing to ₹5,24,190 implies a low single-digit compound return. B) 8% and D) 11% are far too high for that maturity value. C) 2.50% is too low. This is the workbook's exact figure: a poor 4.61% "investment" return on the extra cost.
</details>

**Q6.** An endowment plan for ₹1 crore over 30 years costs ₹3,16,332 p.a.; the pure term plan costs ₹9,416 p.a. The extra premium of ₹3,06,916 p.a. produces a maturity value of ₹2,14,00,000. The inherent investment return on the savings portion is approximately:
A) 8%  B) 12%  C) 5%  D) 3%
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Extra premium = 3,16,332 − 9,416 = ₹3,06,916 p.a. invested 30 years (beginning of year) to yield ₹2,14,00,000. RATE function gives ≈ **5% p.a.** The workbook notes inherent returns on such investment-cum-insurance plans are typically only 3–5% and not guaranteed. A) 8% and B) 12% overstate it; D) 3% is at the low end of the range but the calculation here resolves to 5%. The lesson: endowment "investment" returns are low versus buying term + investing the difference.
</details>

**Q7.** A health claim is assessed at ₹2,00,000. The policy has a co-pay of 15%. How much does the insurer pay?
A) ₹30,000  B) ₹1,85,000  C) ₹2,00,000  D) ₹1,70,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Co-pay is the share the insured bears. Insured pays 15% × 2,00,000 = ₹30,000; the insurer pays the balance = 2,00,000 − 30,000 = **₹1,70,000**. A) ₹30,000 is the insured's share, not the insurer's. C) ₹2,00,000 ignores the co-pay entirely. B) ₹1,85,000 wrongly applies a flat ₹15,000. Matches the workbook example exactly.
</details>

**Q8.** A health policy has a compulsory deductible of ₹30,000. The hospital bill is ₹80,000. The insurer pays:
A) ₹80,000  B) ₹30,000  C) ₹50,000  D) ₹24,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — A deductible is the first slice the insured pays before the claim becomes admissible. Insurer pays bill − deductible = 80,000 − 30,000 = **₹50,000**; the insured bears ₹30,000. A) ₹80,000 ignores the deductible. B) ₹30,000 is the insured's portion. D) ₹24,000 confuses this with a ₹1,000-deductible motor example. This matches the workbook.
</details>

**Q9.** Policy 1 has a deductible of ₹1,000 AND a co-pay of 10%. The ascertained claim is ₹40,000. How much does Policy 1 pay?
A) ₹35,000  B) ₹36,000  C) ₹35,100  D) ₹39,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Apply the deductible first, then the co-pay on the remainder. Step 1: 40,000 − 1,000 (deductible) = ₹39,000. Step 2: co-pay = 10% × 39,000 = ₹3,900, so insurer pays 39,000 − 3,900 = **₹35,100**. A) ₹35,000 is the answer to a different policy (₹5,000 deductible, no co-pay). B) ₹36,000 applies only the 10% co-pay on the full ₹40,000. D) ₹39,000 forgets the co-pay. Exact workbook figure.
</details>

**Q10.** Policy 2 has only a deductible of ₹5,000 and no co-pay. On the same ₹40,000 claim, the insurer pays:
A) ₹40,000  B) ₹36,000  C) ₹35,100  D) ₹35,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — With only a deductible and no co-pay, insurer pays 40,000 − 5,000 = **₹35,000**. A) ₹40,000 ignores the deductible. C) ₹35,100 is Policy 1's answer. B) ₹36,000 wrongly applies a 10% co-pay. The comparison shows deductible-only Policy 2 (₹35,000) pays slightly less than Policy 1 (₹35,100) on this claim.
</details>

**Q11.** Two indemnity flood policies of ₹5,00,000 each (Company A and Company B) cover the same property. The ascertained loss is ₹30,000 and Company A settles it. Under the contribution principle, Company B's proportionate share is:
A) ₹30,000  B) ₹0  C) ₹5,000  D) ₹15,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Contribution shares the claim between insurers in proportion to their sums insured. Both have ₹5 lakh cover, so the split is 50:50. Company B contributes ½ × 30,000 = **₹15,000**. A) ₹30,000 would mean B pays everything. C) ₹5,000 uses a wrong ratio. B) ₹0 ignores contribution. This is the workbook's property example.
</details>

**Q12.** Base health plan ₹5 lakh + Super Top-up of ₹10 lakh with a ₹5 lakh deductible (threshold applied on the year's TOTAL claims). A single hospitalisation claim of ₹8 lakh occurs. Total amount paid across both policies is:
A) ₹3,00,000  B) ₹5,00,000  C) ₹8,00,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Base plan pays its full ₹5 lakh. The super top-up's ₹5 lakh threshold is met by that ₹5 lakh, so the super top-up pays the remaining 8,00,000 − 5,00,000 = ₹3,00,000. Total = 5,00,000 + 3,00,000 = **₹8,00,000** — the entire claim. A) ₹3 lakh is only the top-up portion. B) ₹5 lakh is only the base. D) ₹10 lakh exceeds the claim. Matches the workbook.
</details>

**Q13.** With a Base plan of ₹5 lakh and a TOP-UP plan of ₹10 lakh (threshold ₹5 lakh applied PER CLAIM), the insured has these claims in a year: ₹3 lakh, then ₹6 lakh, then ₹2 lakh, then ₹4 lakh. Total amount the two policies pay over the year is:
A) ₹15,00,000  B) ₹11,00,000  C) ₹5,00,000  D) ₹6,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Top-up applies its ₹5 lakh threshold to EACH claim. Claim 1 (₹3L): base pays ₹3L (base left ₹2L). Claim 2 (₹6L): base pays its last ₹2L; top-up pays 6−5 = ₹1L (only the excess over the per-claim ₹5L). Claim 3 (₹2L): base empty, ₹2L < ₹5L threshold → top-up pays ₹0. Claim 4 (₹4L): ₹4L < ₹5L threshold → top-up pays ₹0. Total = 3 + 2 + 1 = **₹6,00,000**. A) ₹15L is what a SUPER top-up would pay (aggregate threshold). The per-claim threshold cripples a plain top-up here.
</details>

**Q14.** Same four claims (₹3L, ₹6L, ₹2L, ₹4L) but now with a Base ₹5 lakh + SUPER Top-up ₹10 lakh (₹5 lakh threshold on the year's AGGREGATE). Total paid by both policies is:
A) ₹6,00,000  B) ₹11,00,000  C) ₹15,00,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Super top-up's ₹5 lakh threshold is applied once to the running total. Base pays its ₹5 lakh on the early claims; once the aggregate ₹5 lakh threshold is crossed, the super top-up pays everything above it. Total claims = 3+6+2+4 = ₹15 lakh; base ₹5L + super top-up ₹10L = **₹15,00,000** (fully covered, super top-up exhausted). A) ₹6L is the plain top-up answer. The contrast is the whole point: super top-up covers the full ₹15 lakh, plain top-up only ₹6 lakh.
</details>

**Q15.** A car (engine capacity up to 1600 CC) suffers own-damage assessed at ₹25,000. The policy carries the compulsory deductible. The insurer pays:
A) ₹25,000  B) ₹20,000  C) ₹1,000  D) ₹24,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The compulsory deductible for cars up to 1600 CC is ₹1,000. Insurer pays 25,000 − 1,000 = **₹24,000**, insured bears ₹1,000. A) ₹25,000 ignores the deductible. C) ₹1,000 is the deductible, not the payout. B) ₹20,000 uses a wrong deductible. Exact workbook figure.
</details>

**Q16.** IRDAI rule: a life policy with a term of MORE than 10 years for an individual below 45 must provide a minimum sum assured of how many times the annual premium?
A) 5 times  B) 7 times  C) 10 times  D) 15 times
<details><summary>Answer & Explanation</summary>

**Correct: C)** — For terms over 10 years, the minimum sum assured is **10 times** the annual premium for individuals below 45 (and 7 times if above 45). A) 5 times applies only when the term is LESS than 10 years. B) 7 times is for above-45 with term over 10 years. D) 15 times is not a rule. This 10× threshold also governs tax-free maturity for many life policies.
</details>

**Q17.** A 25-year endowment policy has sum assured ₹10,00,000 with half-yearly premiums (50 premiums in total). After paying 10 premiums (5 years), it is made paid-up. The reduced (paid-up) sum assured is:
A) ₹5,00,000  B) ₹1,00,000  C) ₹4,00,000  D) ₹2,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Paid-up SA = original SA × (premiums paid ÷ total premiums due) = 10,00,000 × (10/50) = **₹2,00,000**. A) ₹5,00,000 uses 5/10 of years incorrectly. C) ₹4,00,000 uses a wrong ratio. B) ₹1,00,000 halves it again. Exact workbook (Surinder) example.
</details>

**Q18.** A ULIP qualifies for tax-free maturity only if the sum assured is at least 10× the annual premium. For an annual premium of ₹3,13,200, the minimum sum assured needed is:
A) ₹31,32,000  B) ₹3,13,200  C) ₹1,00,00,000  D) ₹2,50,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Minimum SA = 10 × annual premium = 10 × 3,13,200 = **₹31,32,000**. So a ₹1 crore cover comfortably exceeds this and maturity would be exempt under the 10× rule (for pre-1 Feb 2021 policies). A) is the threshold. B) is just the premium. C) ₹1 cr is the actual cover, larger than the minimum required. D) ₹2.5 lakh is the separate ULIP premium ceiling above which ULIP gains become taxable.
</details>

**Q19.** Under the Finance Act 2021, ULIP maturity proceeds are taxed as capital gains if the annual premium exceeds:
A) ₹1,50,000  B) ₹1,00,000  C) ₹5,00,000  D) ₹2,50,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — For ULIPs issued on/after 1 Feb 2021, if annual premium exceeds **₹2,50,000**, maturity proceeds are treated as capital gains and taxed. A) ₹1.5 lakh is the 80C limit. C) ₹5 lakh is the threshold for taxing traditional (non-ULIP) policy maturity as "income from other sources" for policies issued on/after 1 Apr 2023. B) ₹1 lakh is unrelated.
</details>

**Q20.** Listed equity shares are sold for ₹6,00,000 after holding 18 months; cost was ₹4,00,000 (STT paid). This is the only equity gain in the year. The tax under Section 112A is:
A) ₹25,000  B) ₹40,000  C) ₹12,500  D) ₹9,375
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Held > 12 months → long-term. LTCG = 6,00,000 − 4,00,000 = ₹2,00,000. Section 112A exempts the first ₹1,25,000, then taxes the excess at 12.5%. Taxable = 2,00,000 − 1,25,000 = ₹75,000; tax = 12.5% × 75,000 = **₹9,375** (plus cess). A) ₹25,000 forgets the exemption (12.5% × 2,00,000). C) ₹12,500 uses 10% of the gain incorrectly. B) ₹40,000 applies 20% (the STCG rate).
</details>

**Q21.** Listed equity shares are sold for ₹3,00,000 after holding only 8 months; cost ₹2,00,000 (STT paid). The short-term capital gains tax under Section 111A is:
A) ₹10,000  B) ₹15,000  C) ₹12,500  D) ₹20,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Held < 12 months → short-term. STCG = 3,00,000 − 2,00,000 = ₹1,00,000. Section 111A rate = 20%. Tax = 20% × 1,00,000 = **₹20,000** (plus cess). There is NO ₹1.25 lakh exemption for STCG. A) ₹10,000 wrongly uses 10%. C) ₹12,500 uses 12.5% (the LTCG rate). B) ₹15,000 uses 15% (the old STCG rate, now replaced by 20%).
</details>

**Q22.** An employee covered under the Payment of Gratuity Act has last drawn basic+DA of ₹60,000 and 20 years 7 months of service. Gratuity payable (per the Act's formula) is closest to:
A) ₹6,00,000  B) ₹9,00,000  C) ₹6,92,000  D) ₹7,26,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — Formula (covered under Act): (15 × last drawn salary × years)/26. Service over 6 months in the final year rounds up, so 21 years. = (15 × 60,000 × 21)/26 = 18,90,00,000/26 ≈ **₹7,26,923 ≈ ₹7.26 lakh**. A) ₹6,00,000 is the result if NOT covered by the Act (divide by 30, no round-up: 15×60,000×20/30). C) ₹6.92 lakh uses 20 years with /26. B) ₹9 lakh ignores the /26 factor. Workbook example.
</details>

**Q23.** Same employee (₹60,000, 20 years 7 months) but the organisation is NOT covered under the Gratuity Act. Gratuity is:
A) ₹7,26,000  B) ₹5,00,000  C) ₹6,30,000  D) ₹6,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — For employees NOT covered, use (15 × salary × completed years)/30, and partial years are NOT rounded up — so 20 years. = (15 × 60,000 × 20)/30 = 1,80,00,000/30 = **₹6,00,000**. A) ₹7.26 lakh is the covered-employee answer (/26, 21 years). C) ₹6.30 lakh uses 21 years. B) ₹5 lakh is arbitrary. Note: not-covered employees get a lower payout because of /30 and no rounding.
</details>

**Q24.** An NPS subscriber retires at 60 with a corpus of ₹50,00,000. He uses the minimum mandatory annuity portion and withdraws the rest as a lump sum. The lump sum he can withdraw is:
A) ₹20,00,000  B) ₹25,00,000  C) ₹50,00,000  D) ₹30,00,000
<details><summary>Answer & Explanation</summary>

**Correct: D)** — At 60, a minimum of 40% of the NPS corpus must buy an annuity; up to 60% can be taken as a lump sum. Lump sum = 60% × 50,00,000 = **₹30,00,000**, with ₹20,00,000 going to the annuity. A) ₹20 lakh is the annuity portion (40%). C) ₹50 lakh would be the full corpus (only allowed if corpus is small enough for full withdrawal). B) ₹25 lakh uses 50%. Workbook rule: 60% lump sum / 40% annuity.
</details>

**Q25.** An employee with basic+DA of ₹40,000 per month contributes 12% to EPF; the employer also contributes 12%, split as 8.33% to EPS (capped on a wage of ₹15,000) and the balance to EPF. The monthly EPS contribution is:
A) ₹3,332  B) ₹4,800  C) ₹1,800  D) ₹1,250
<details><summary>Answer & Explanation</summary>

**Correct: D)** — The EPS (pension) share is 8.33% but only on the statutory wage ceiling of ₹15,000. EPS = 8.33% × 15,000 = ₹1,249.5 ≈ **₹1,250**. A) ₹3,332 wrongly applies 8.33% on the full ₹40,000. C) ₹1,800 is the employee's-vs-cap confusion. B) ₹4,800 is 12% of ₹40,000 (the employee's own contribution). The EPS ceiling is the key trap.
</details>

**Q26.** Real (inflation-adjusted) return when the nominal return is 10% and inflation is 6%:
A) 4.00%  B) 3.77%  C) 16.00%  D) 1.67%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Real return = (1 + nominal)/(1 + inflation) − 1 = (1.10/1.06) − 1 = 1.03774 − 1 = **3.77%**. A) 4.00% is the crude subtraction 10% − 6%, which overstates the real return because the two compound. C) 16% adds them. D) 1.67% is unrelated. Always use the Fisher relationship, not subtraction.
</details>

**Q27.** An investment grows from ₹2,00,000 to ₹3,38,000 over 4 years. The CAGR is closest to:
A) 17.25%  B) 14.04%  C) 13.92%  D) 69.00%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — CAGR = (End/Start)^(1/n) − 1 = (3,38,000/2,00,000)^(1/4) − 1 = (1.69)^0.25 − 1. 1.69^0.5 = 1.30; 1.30^0.5 = 1.1402, so CAGR ≈ **14.04%**. A) 17.25% is the simple average (69%/4). C) 13.92% is a slight miscalc. D) 69% is the total return, not annualised. CAGR smooths growth across years compounding.
</details>

**Q28.** A goal costs ₹5,00,000 today. With education inflation of 8% p.a., its cost in 6 years (future value) is closest to:
A) ₹7,40,000  B) ₹7,93,000  C) ₹6,40,000  D) ₹9,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — FV = PV × (1 + inflation)^n = 5,00,000 × 1.08^6. 1.08^6 ≈ 1.5869, so FV ≈ 5,00,000 × 1.5869 = **₹7,93,000**. A) ₹7.4 lakh undercounts compounding. C) ₹6.4 lakh uses ~5% simple growth. D) ₹9 lakh overstates. Inflation compounds, so use the power, not simple interest.
</details>

**Q29.** A property (a residential plot) is sold after holding 30 months. For an immovable property to qualify as a long-term capital asset, the minimum holding period is:
A) 12 months  B) 24 months  C) 36 months  D) 48 months
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Immovable property and unlisted securities are long-term if held more than **24 months**. (Listed equity/securities use 12 months.) Since 30 > 24 months, this sale is long-term. A) 12 months is for listed equity. C) 36 months is the old pre-amendment property period. D) 48 months is not a rule.
</details>

**Q30.** Under the new tax regime (FY 2025-26), a salaried individual gets a standard deduction of:
A) ₹50,000  B) ₹75,000  C) ₹1,50,000  D) ₹40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The new regime standard deduction for salaried individuals is **₹75,000** (FY 2025-26). A) ₹50,000 is the old-regime standard deduction. C) ₹1,50,000 is the 80C limit. D) ₹40,000 was the pre-2019 figure. So gross salary is reduced by ₹75,000 before applying the new-regime slabs.
</details>

**Q31.** Under the new tax regime FY 2025-26 slabs (Nil up to ₹4,00,000; 5% ₹4–8 lakh; 10% ₹8–12 lakh; …), the income tax (before cess and rebate) on a net taxable income of ₹10,00,000 is:
A) ₹60,000  B) ₹40,000  C) ₹52,000  D) ₹50,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Build the tax slab by slab: ₹0–4L → nil; ₹4–8L (₹4 lakh) @ 5% = ₹20,000; ₹8–10L (₹2 lakh) @ 10% = ₹20,000. Total = 20,000 + 20,000 = **₹40,000**. A) ₹60,000 over-taxes (treats more income at 10% or ignores the nil slab). C) ₹52,000 and D) ₹50,000 are miscalculations. Note: the ₹10 lakh stops part-way into the 10% band, so only ₹2 lakh is taxed at 10%.
</details>

**Q32.** Health and education cess is levied at what rate on (income tax + surcharge)?
A) 2%  B) 4%  C) 3%  D) 5%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Health and education cess is **4%** of (income tax + applicable surcharge). A) 2% and C) 3% were older cess rates (education cess + SHEB). D) 5% is incorrect. So on a tax of ₹40,000 (no surcharge), cess = 4% × 40,000 = ₹1,600, making total ₹41,600.
</details>

**Q33.** A single-premium traditional policy is surrendered in year 2. The guaranteed surrender value is at least what percentage of total premium paid (within the first three years)?
A) 30%  B) 70%  C) 50%  D) 90%
<details><summary>Answer & Explanation</summary>

**Correct: B)** — For single-premium policies, the guaranteed surrender value ranges from **70%** of total premium (if surrendered within the first three years) up to 90% in the last two years. A) 30% is the minimum for regular-premium (non-single) policies. C) 50% is not the rule. D) 90% applies only in the last two years. So a single-premium surrender in year 2 returns at least 70%.
</details>

**Q34.** A ULIP is surrendered before completing 5 years. The maximum discontinuance charge that may be levied is:
A) ₹3,000  B) ₹6,000  C) ₹10,000  D) ₹1,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — On surrendering a ULIP within the 5-year lock-in, a discontinuance charge of a maximum of **₹6,000** applies; the balance moves to a discontinuance fund and is paid after the lock-in. A) ₹3,000 and D) ₹1,000 understate the cap. C) ₹10,000 overstates it. After 5 years there are no surrender charges at all.
</details>

**Q35.** A health insurance policy becomes non-contestable (except for proven fraud / permanent exclusions) after a continuous moratorium period of:
A) 3 years  B) 5 years  C) 4 years  D) 8 years
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The health insurance moratorium is **5 continuous years** of premiums without break; after that, no claim is contestable except for proven fraud or specified permanent exclusions. A) 3 years is the life-insurance Section 45 period. C) 4 years is a common pre-existing-disease waiting period, not the moratorium. D) 8 years is incorrect.
</details>

**Q36.** A life insurance policy cannot be called into question on ANY ground (except fraud during the period) after how many years from the policy/revival date, under Section 45 of the Insurance Act?
A) 2 years  B) 3 years  C) 5 years  D) 10 years
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Section 45 bars repudiation on any ground after **3 years** from issue/risk commencement/revival (whichever is later). Within those 3 years a claim can be denied on grounds of fraud. A) 2 years and C) 5 years are wrong. D) 10 years is unrelated. (Health policies separately use the 5-year moratorium.)
</details>

**Q37.** An NRI/resident can use the Liberalised Remittance Scheme to buy foreign insurance up to what annual limit?
A) USD 1,00,000  B) USD 2,50,000  C) USD 2,00,000  D) USD 5,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The LRS limit is **USD 2,50,000 per annum**, which can be used to buy foreign-currency insurance policies. A), C) and D) are not the LRS figure. Note such foreign policies are governed by the foreign country's regulations, so caution is advised.
</details>

**Q38.** A 31-year endowment-style corpus must provide ₹83,000 per month. Converting to an annual figure for the PV computation gives:
A) ₹9,96,000  B) ₹83,000  C) ₹10,00,000  D) ₹9,60,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Annual income = monthly × 12 = 83,000 × 12 = **₹9,96,000**. This is the PMT used in Anil's needs-based PV. B) ₹83,000 is monthly. C) ₹10,00,000 rounds incorrectly. D) ₹9,60,000 uses ₹80,000/month. The monthly net income (₹83,000) came from ₹1,50,000 − (₹10,000 personal + ₹32,000 EMI + ₹25,000 premium).
</details>

**Q39.** A whole-life / investment policy acquires a surrender value only after premiums have been paid for at least how many years (for a policy of term 10 years or more)?
A) 1 year  B) 2 years  C) 3 years  D) 5 years
<details><summary>Answer & Explanation</summary>

**Correct: C)** — A traditional investment-cum-insurance policy (term ≥ 10 years) acquires a surrender/cash value after at least **3 years** of full premiums (2 years if term < 10 years). A) 1 year — too early. B) 2 years is only for shorter (<10 year) policies. D) 5 years is the ULIP lock-in, not the surrender-value trigger for traditional policies.
</details>

**Q40.** A traditional (non-ULIP) life policy issued after 1 April 2023 loses its tax-exempt maturity (becomes taxable as "income from other sources") if the annual premium exceeds:
A) ₹2,50,000  B) ₹1,50,000  C) ₹5,00,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — For traditional policies issued on/after 1 Apr 2023, if the annual premium exceeds **₹5,00,000**, the maturity proceeds are taxable. A) ₹2.5 lakh is the ULIP threshold (different product). B) ₹1.5 lakh is the 80C cap. D) ₹10 lakh is incorrect. Different rules apply to ULIPs (₹2.5 lakh) versus traditional plans (₹5 lakh).
</details>

## Section B — Case Studies (6 cases × 5 sub-questions × 2 marks = 60 marks)

### Case 1 — Rohan's Human Life Value & Needs-Based Cover (Insurance)

Rohan is 35 and earns a net income available to dependents of ₹15,00,000 p.a. He expects income to grow at 6% p.a.; the post-tax return on any sum assured is 8% p.a. He plans to retire at 60 (25 years of working life left). He has an outstanding home loan of ₹50,00,000, existing life cover of ₹1,00,00,000, and investments worth ₹40,00,000. His personal residence (₹80,00,000) is NOT to be sold. Use beginning-of-year annuity timing.

| Item | Value |
|---|---|
| Net income to dependents | ₹15,00,000 p.a. |
| Income growth | 6% |
| Post-tax return | 8% |
| Years to retirement | 25 |
| Home loan outstanding | ₹50,00,000 |
| Existing life cover | ₹1,00,00,000 |
| Investments | ₹40,00,000 |

**Q41.** The inflation-adjusted discount rate Rohan should use is:
A) 1.89%  B) 1.96%  C) 14.00%  D) 2.00%
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Adjusted rate = (1.08/1.06) − 1 = 0.018867 = **1.89%** (to 2 decimals, as the workbook does). D) 2.00% is the crude 8−6 subtraction. C) 14.00% adds the rates. B) 1.96% is a miscalculation. The same 1.89% rate appears throughout the workbook's HLV examples.
</details>

**Q42.** The present value (corpus) of Rohan's income stream over 25 years, at 1.89%, beginning-of-year, is closest to:
A) ₹3,75,00,000  B) ₹3,05,00,000  C) ₹3,02,00,000  D) ₹2,80,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Annuity-due PV = PMT × [(1 − (1+r)^−n)/r] × (1+r). With PMT = 15,00,000, r = 0.0189, n = 25: ordinary factor (1 − 1.0189^−25)/0.0189 ≈ 19.79; × 1.0189 ≈ 20.16. PV ≈ 15,00,000 × 20.16 ≈ **₹3,02,00,000**. A) ₹3.75 cr is income × 25 (no discounting). B) ₹3.05 cr slightly overstates the factor. D) ₹2.80 cr understates the factor.
</details>

**Q43.** Adding the home loan to the corpus, the total funds required (before deductions) are closest to:
A) ₹3,52,00,000  B) ₹3,32,00,000  C) ₹3,82,00,000  D) ₹3,02,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Total need = income-replacement corpus + loan outstanding = 3,02,00,000 + 50,00,000 = **₹3,52,00,000**. D) ₹3.02 cr forgets the loan. C) ₹3.82 cr wrongly adds the residence value too (the residence is NOT to be sold, so it is excluded from assets and need not be liquidated). B) ₹3.32 cr uses a ₹30 lakh loan.
</details>

**Q44.** Deducting existing cover and investments, Rohan's ADDITIONAL insurance requirement is closest to:
A) ₹2,12,00,000  B) ₹2,52,00,000  C) ₹1,32,00,000  D) ₹3,52,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Additional cover = total need − existing cover − investments = 3,52,00,000 − 1,00,00,000 − 40,00,000 = **₹2,12,00,000**. B) ₹2.52 cr deducts only the existing cover. C) ₹1.32 cr also wrongly subtracts the ₹80 lakh residence (which is not an available asset). D) ₹3.52 cr forgets all deductions. The residence is excluded because the family will keep living in it.
</details>

**Q45.** Rohan buys ₹2 crore of term cover by taking 2 policies of ₹1 crore each from one insurer rather than a single ₹2 crore policy. The MAIN benefit of splitting is:
A) He can give up one policy later as his insurance need falls  B) It avoids the contribution clause on death claims  C) It guarantees a higher claim settlement ratio  D) Lower total premium because premiums are not telescopic
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Splitting a large cover into multiple policies lets the insured **surrender individual policies as future insurance needs reduce** (e.g., loan repaid, goals met). D) is wrong — life premiums ARE telescopic (larger SA = lower rate per ₹1,000), so splitting does not lower premium. C) the claim ratio is the insurer's, unaffected by splitting. B) contribution does not apply to defined-benefit life policies anyway. The flexibility to drop cover is the workbook's stated rationale.
</details>

### Case 2 — The Mehta Family Health Claims (Insurance)

The Mehtas hold a family floater base health policy of ₹5,00,000 with a co-pay of 10%, plus a Super Top-up of ₹15,00,000 with a deductible (aggregate threshold) of ₹5,00,000. Mr. Mehta also has an employer group policy of ₹3,00,000 with no co-pay. During the year, two hospitalisations occur (figures are the admissible amounts before any co-pay/deductible):

| Event | Admissible amount |
|---|---|
| Hospitalisation 1 (Mrs. Mehta) | ₹4,00,000 |
| Hospitalisation 2 (Mr. Mehta) | ₹9,00,000 |

**Q46.** For Hospitalisation 1 (₹4,00,000) claimed under the base floater (₹5 lakh, 10% co-pay), how much does the base insurer pay?
A) ₹3,60,000  B) ₹3,50,000  C) ₹40,000  D) ₹4,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Co-pay 10% means the insured bears 10% × 4,00,000 = ₹40,000; insurer pays 4,00,000 − 40,000 = **₹3,60,000**. The claim (₹4 lakh) is within the ₹5 lakh base, so the super top-up isn't triggered (aggregate ₹5 lakh threshold not crossed). D) ₹4 lakh ignores the co-pay. C) ₹40,000 is the insured's share. B) ₹3.5 lakh uses a wrong ₹50,000 co-pay.
</details>

**Q47.** After Hospitalisation 1, how much of the base floater's ₹5,00,000 sum insured remains?
A) ₹1,00,000  B) ₹1,40,000  C) ₹0  D) ₹5,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The base sum insured is consumed by the admissible amount applied to it (₹4,00,000), regardless of how the co-pay is split. Remaining = 5,00,000 − 4,00,000 = **₹1,00,000**. (The co-pay is who pays, not how much of the sum insured is used.) B) ₹1.4 lakh wrongly adds back the ₹40,000 co-pay. C) ₹0 over-consumes. D) ₹5 lakh ignores the claim.
</details>

**Q48.** Hospitalisation 2 is ₹9,00,000. The base floater has ₹1,00,000 left (10% co-pay still applies on amounts it pays). After exhausting the base, how much remains for the super top-up to consider, and is its ₹5 lakh aggregate threshold now met?
A) ₹8,00,000 remains; threshold met because aggregate claims now ₹13 lakh > ₹5 lakh  B) ₹9,00,000 remains; threshold not met  C) ₹4,00,000 remains; threshold not met  D) ₹0 remains; threshold met
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The base pays its remaining ₹1,00,000 (insured bears 10% co-pay = ₹10,000 of that). That leaves 9,00,000 − 1,00,000 = **₹8,00,000** of this bill unfunded by the base. Aggregate admissible claims for the year = 4,00,000 + 9,00,000 = ₹13,00,000, which exceeds the super top-up's ₹5,00,000 aggregate threshold, so the super top-up is now active. B) and C) miscount the base's remaining limit; D) wrongly says nothing remains.
</details>

**Q49.** The super top-up (₹15,00,000 limit, ₹5,00,000 aggregate deductible) now pays toward Hospitalisation 2. Given ₹5,00,000 of aggregate claims have already been "used" against the threshold by the base payouts, how much does the super top-up pay on this event?
A) ₹8,00,000  B) ₹5,00,000  C) ₹4,00,000  D) ₹3,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The threshold is on aggregate claims. By the time the base's ₹5,00,000 sum insured is fully consumed (₹4L + ₹1L), the entire ₹5,00,000 aggregate threshold has been met. So everything above the threshold is payable by the super top-up: the remaining ₹8,00,000 of Hospitalisation 2 is within the super top-up's ₹15 lakh limit, so it pays **₹8,00,000**. D) ₹3 lakh wrongly re-applies a fresh deductible. C) ₹4 lakh and B) ₹5 lakh misapply the threshold.
</details>

**Q50.** If instead this had been a plain TOP-UP (₹5 lakh threshold applied PER CLAIM) rather than a super top-up, how much would the top-up pay on Hospitalisation 2's unfunded ₹8,00,000 (claim size ₹9,00,000)?
A) ₹4,00,000  B) ₹3,00,000  C) ₹0  D) ₹8,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — A plain top-up applies its ₹5 lakh threshold to EACH claim. For Hospitalisation 2 (a single ₹9,00,000 claim), it pays the excess of that one claim over ₹5,00,000 = 9,00,000 − 5,00,000 = **₹4,00,000**. (It ignores what the base paid; the per-claim threshold is measured against the claim itself.) D) ₹8 lakh is the super top-up answer. C) ₹0 would apply if the claim were below ₹5 lakh. B) ₹3 lakh is a miscalc. This shows the super top-up (₹8 lakh) beats a plain top-up (₹4 lakh) here.
</details>

### Case 3 — Sunita's Retirement (Gratuity, EPF & NPS)

Sunita retires at 60 from a private company that IS covered under the Payment of Gratuity Act. Her last drawn basic+DA is ₹80,000 per month and she completed 28 years 8 months of service. Her NPS corpus at retirement is ₹80,00,000. Her monthly basic+DA during service was ₹50,000, on which she contributed 12% to EPF and the employer 12% (8.33% to EPS on the ₹15,000 ceiling).

| Item | Value |
|---|---|
| Last drawn basic+DA | ₹80,000/month |
| Service | 28 years 8 months |
| NPS corpus | ₹80,00,000 |
| Monthly basic+DA (service) | ₹50,000 |
| EPS wage ceiling | ₹15,000 |

**Q51.** Sunita's gratuity (covered under the Act) is closest to:
A) ₹13,38,462  B) ₹12,92,308  C) ₹20,00,000  D) ₹11,07,692
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Formula = (15 × last drawn salary × years)/26. Service is 28 years 8 months; since 8 months > 6, round up to 29 years. = (15 × 80,000 × 29)/26 = 3,48,00,000/26 = **₹13,38,462**. B) ₹12.92 lakh uses 28 years (no round-up). C) ₹20 lakh is the tax-exemption ceiling, not the computed amount. D) ₹11.07 lakh uses /26 with wrong years. Always round the final part-year up if > 6 months.
</details>

**Q52.** The maximum tax-exempt gratuity ceiling (for the least-of-three test) referenced for retirement gratuity is:
A) ₹20,00,000  B) ₹13,38,462  C) ₹25,00,000  D) ₹10,00,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — The statutory maximum gratuity / exemption ceiling is **₹20,00,000**. Since Sunita's computed gratuity (₹13.38 lakh) is below ₹20 lakh, the actual amount is fully within the ceiling. D) ₹10 lakh was the older limit. C) ₹25 lakh is incorrect. B) ₹13.38 lakh is her computed gratuity, not the ceiling.
</details>

**Q53.** During service, Sunita's monthly EPS (pension) contribution was:
A) ₹4,166  B) ₹600  C) ₹6,000  D) ₹1,250
<details><summary>Answer & Explanation</summary>

**Correct: D)** — EPS = 8.33% of the wage ceiling ₹15,000 = 0.0833 × 15,000 = ₹1,249.5 ≈ **₹1,250**. A) ₹4,166 wrongly applies 8.33% on her full ₹50,000 basic. C) ₹6,000 is 12% of ₹50,000 (her own EPF contribution). B) ₹600 is unrelated. The EPS contribution is capped because it is computed only on the ₹15,000 statutory wage.
</details>

**Q54.** From her NPS corpus of ₹80,00,000 at age 60, the minimum amount that must be used to buy an annuity is:
A) ₹48,00,000  B) ₹32,00,000  C) ₹80,00,000  D) ₹40,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At 60, at least 40% of the corpus must buy an annuity. 40% × 80,00,000 = **₹32,00,000**. A) ₹48 lakh is the 60% lump-sum portion, not the annuity minimum. C) ₹80 lakh is the whole corpus. D) ₹40 lakh uses 50%. So she annuitises ₹32 lakh and can take ₹48 lakh as a tax-free lump sum.
</details>

**Q55.** If the annuity provider offers 6% p.a. on the ₹32,00,000 annuitised amount, Sunita's approximate annual pension is:
A) ₹1,92,000  B) ₹2,88,000  C) ₹4,80,000  D) ₹96,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — A simple level annuity at 6% on ₹32,00,000 = 0.06 × 32,00,000 = **₹1,92,000 per year** (≈ ₹16,000/month). B) ₹2.88 lakh uses 9%. C) ₹4.80 lakh applies 6% to the full ₹80 lakh corpus, but only ₹32 lakh is annuitised. D) ₹96,000 uses 3%. The annuity income is based only on the annuitised portion.
</details>

### Case 4 — Mr. Iyer's Capital Gains (Capital Gains Tax)

Mr. Iyer made the following sales during FY 2025-26. All equity transactions paid STT. Use Section 112A (LTCG on listed equity 12.5% above ₹1,25,000 exemption), Section 111A (STCG 20%), and property holding period of 24 months.

| Asset | Bought | Sold | Cost | Sale value |
|---|---|---|---|---|
| Listed shares A | held 20 months | — | ₹5,00,000 | ₹8,00,000 |
| Listed shares B | held 7 months | — | ₹3,00,000 | ₹3,90,000 |
| Residential plot | held 20 months | — | ₹30,00,000 | ₹45,00,000 |

**Q56.** The capital gain on Listed shares A is long-term or short-term, and how much?
A) Short-term, ₹3,00,000  B) Long-term, ₹1,75,000  C) Long-term, ₹3,00,000  D) Short-term, ₹1,75,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Listed equity held > 12 months is long-term. Held 20 months → **long-term**. Gain = 8,00,000 − 5,00,000 = **₹3,00,000**. A) calls it short-term (wrong holding period). B)/D) subtract the ₹1.25 lakh exemption from the gain itself — the exemption is applied later when computing tax, not to the gain figure.
</details>

**Q57.** The tax on Listed shares A's gain under Section 112A (ignore other assets, before cess) is:
A) ₹37,500  B) ₹30,000  C) ₹21,875  D) ₹60,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — LTCG ₹3,00,000; exempt first ₹1,25,000; taxable = 3,00,000 − 1,25,000 = ₹1,75,000; tax = 12.5% × 1,75,000 = **₹21,875**. A) ₹37,500 forgets the exemption (12.5% × 3,00,000). B) ₹30,000 uses 10%. D) ₹60,000 applies 20% (the STCG rate). The ₹1.25 lakh exemption is the common trap.
</details>

**Q58.** The capital gain treatment on Listed shares B (held 7 months, gain ₹90,000) and its tax under Section 111A is:
A) Long-term; tax nil (within exemption)  B) Short-term; tax ₹13,500  C) Short-term; tax ₹18,000  D) Long-term; tax ₹11,250
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Held < 12 months → short-term. Gain = 3,90,000 − 3,00,000 = ₹90,000. STCG under 111A = 20%: 20% × 90,000 = **₹18,000**. There is NO ₹1.25 lakh exemption for STCG. A) wrongly treats it as long-term/exempt. B) ₹13,500 uses 15% (old rate). D) ₹11,250 uses 12.5% LTCG rate. STCG on equity is a flat 20%.
</details>

**Q59.** The residential plot was held 20 months. Its capital gain is:
A) Long-term, ₹15,00,000  B) Long-term, ₹13,75,000  C) Short-term, ₹15,00,000  D) Exempt
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Immovable property is long-term only if held more than 24 months. 20 months < 24 → **short-term**. Gain = 45,00,000 − 30,00,000 = **₹15,00,000**, taxed at the individual's slab rates (not 112A/111A). A) wrongly calls it long-term. B) wrongly subtracts a ₹1.25 lakh exemption (which applies only to listed-equity LTCG). D) is wrong — property gains are not exempt.
</details>

**Q60.** Mr. Iyer's TOTAL special-rate capital gains tax (Sections 112A + 111A only, before cess; exclude the slab-taxed property gain) is:
A) ₹39,875  B) ₹21,875  C) ₹55,500  D) ₹18,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Add the 112A and 111A taxes: shares A (LTCG) = ₹21,875 + shares B (STCG) = ₹18,000 = **₹39,875** (before cess). The property's ₹15 lakh STCG is taxed at slab rates and excluded here. B) ₹21,875 counts only LTCG. C) ₹55,500 wrongly mixes rates. D) ₹18,000 counts only STCG.
</details>

### Case 5 — Kavya's Salary & Income Tax (Income Tax, New Regime FY 2025-26)

Kavya, 34, is salaried under the new tax regime for FY 2025-26. Her gross salary is ₹14,75,000. She has no other income. New-regime slabs: Nil up to ₹4 lakh; 5% ₹4–8 lakh; 10% ₹8–12 lakh; 15% ₹12–16 lakh; standard deduction ₹75,000; cess 4%.

| Item | Value |
|---|---|
| Gross salary | ₹14,75,000 |
| Standard deduction | ₹75,000 |
| Regime | New (115BAC), FY 2025-26 |

**Q61.** Kavya's net taxable income after standard deduction is:
A) ₹14,75,000  B) ₹13,25,000  C) ₹14,00,000  D) ₹13,00,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Net taxable = gross − standard deduction = 14,75,000 − 75,000 = **₹14,00,000**. A) forgets the deduction. B) ₹13.25 lakh wrongly uses a ₹1.5 lakh deduction. D) ₹13 lakh uses ₹1.75 lakh. Under the new regime the salaried standard deduction is ₹75,000.
</details>

**Q62.** The income tax on ₹14,00,000 (new-regime slabs, before cess) is:
A) ₹1,00,000  B) ₹90,000  C) ₹1,20,000  D) ₹1,40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Slab-wise: ₹0–4L nil; ₹4–8L (₹4L) @5% = ₹20,000; ₹8–12L (₹4L) @10% = ₹40,000; ₹12–14L (₹2L) @15% = ₹30,000. Total = 20,000 + 40,000 + 30,000 = **₹90,000**. A) ₹1,00,000 over-adds the slabs. C) ₹1.2 lakh over-taxes the top slab. D) ₹1.4 lakh applies a flat rate. Build tax slab by slab.
</details>

**Q63.** Adding 4% health & education cess, Kavya's total tax liability is:
A) ₹91,800  B) ₹90,000  C) ₹93,600  D) ₹92,700
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Cess = 4% × 90,000 = ₹3,600. Total = 90,000 + 3,600 = **₹93,600**. A) ₹91,800 uses 2% cess. B) ₹90,000 forgets cess. D) ₹92,700 uses 3%. The cess is always 4% of (tax + surcharge).
</details>

**Q64.** Why does Kavya NOT get the Section 87A rebate (which makes tax nil) that a colleague earning ₹12,00,000 taxable would get?
A) Because rebate applies only to the old regime  B) Because her taxable income (₹14,00,000) exceeds the ₹12,00,000 new-regime rebate threshold  C) Because she is below 60  D) Because she has only salary income
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The new-regime 87A rebate makes tax nil only up to a taxable income of **₹12,00,000** (FY 2025-26). Kavya's ₹14,00,000 exceeds that, so no rebate and she pays full slab tax. A) is wrong — the rebate exists in the new regime. C) age is irrelevant to 87A. D) the source of income doesn't matter. The colleague at ₹12 lakh exactly qualifies; Kavya doesn't.
</details>

**Q65.** If Kavya could reduce her TAXABLE income to exactly ₹12,00,000 (e.g., via employer NPS 80CCD(2)), her tax (with 87A rebate) would be:
A) ₹60,000  B) ₹0  C) ₹62,400  D) ₹40,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — At a taxable income of ₹12,00,000 in the new regime FY 2025-26, the Section 87A rebate makes the tax liability **₹0**. A) ₹60,000 / C) ₹62,400 would be the pre-rebate slab tax + cess, but the rebate wipes it out. D) ₹40,000 is incorrect. This is why the ₹12 lakh threshold is a powerful planning target — but note 80CCD(2) deductions help reach it.
</details>

### Case 6 — Verma Household: Integrated Protection Plan (Integrated Case)

Mr. Verma (40) is reviewing his family's protection. He owns a home (structure ₹60,00,000) insured under a property policy with an 80% under-insurance condition (he insured it for ₹48,00,000). His car (1400 CC) has own-damage cover with a ₹1,000 compulsory deductible plus a voluntary deductible of ₹2,000 he chose to lower premium. He compares term insurance (₹1 crore, ₹12,000 p.a.) vs an endowment plan (₹1 crore, ₹3,20,000 p.a.). He also holds a health policy of ₹10,00,000 with a 10% co-pay.

| Item | Value |
|---|---|
| Home structure value | ₹60,00,000 |
| Home insured for | ₹48,00,000 |
| Car deductibles | ₹1,000 compulsory + ₹2,000 voluntary |
| Term premium (₹1 cr) | ₹12,000 p.a. |
| Endowment premium (₹1 cr) | ₹3,20,000 p.a. |
| Health cover / co-pay | ₹10,00,000 / 10% |

**Q66.** A fire damages the home structure causing a loss of ₹20,00,000. Under the average (under-insurance) clause — claim = loss × (sum insured ÷ full value) — the insurer pays:
A) ₹20,00,000  B) ₹16,00,000  C) ₹15,00,000  D) ₹48,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The average clause penalises under-insurance. Insured for ₹48 lakh against ₹60 lakh value = 80% covered. Claim = 20,00,000 × (48,00,000/60,00,000) = 20,00,000 × 0.8 = **₹16,00,000**. A) ₹20 lakh ignores under-insurance. C) ₹15 lakh uses a wrong 75% ratio. D) ₹48 lakh is the sum insured, not the claim. Under-insurance means the insured self-bears a proportionate share.
</details>

**Q67.** Mr. Verma's car suffers own-damage assessed at ₹18,000. With a ₹1,000 compulsory + ₹2,000 voluntary deductible, the insurer pays:
A) ₹18,000  B) ₹17,000  C) ₹15,000  D) ₹16,000
<details><summary>Answer & Explanation</summary>

**Correct: C)** — Both deductibles are borne by the insured before the claim is admissible. Total deductible = 1,000 + 2,000 = ₹3,000. Insurer pays 18,000 − 3,000 = **₹15,000**. A) ₹18,000 ignores deductibles. B) ₹17,000 applies only the compulsory ₹1,000. D) ₹16,000 applies only the voluntary ₹2,000. Choosing a voluntary deductible lowers premium but raises the insured's out-of-pocket share at claim time.
</details>

**Q68.** Over a 20-year horizon, how much MORE does the endowment plan cost in premiums than the term plan, for the same ₹1 crore cover?
A) ₹61,60,000  B) ₹64,00,000  C) ₹3,08,000  D) ₹2,40,000
<details><summary>Answer & Explanation</summary>

**Correct: A)** — Annual extra = 3,20,000 − 12,000 = ₹3,08,000. Over 20 years = 3,08,000 × 20 = **₹61,60,000**. A) is correct. B) ₹64 lakh multiplies the endowment premium difference incorrectly (uses ₹3.2 lakh × 20). C) ₹3,08,000 is just one year's extra. D) ₹2.4 lakh is the wrong base. The huge gap is why term + separate investing usually beats endowment.
</details>

**Q69.** Mr. Verma incurs a ₹6,00,000 hospitalisation under his ₹10 lakh health policy (10% co-pay). The insurer pays:
A) ₹6,00,000  B) ₹5,40,000  C) ₹60,000  D) ₹5,00,000
<details><summary>Answer & Explanation</summary>

**Correct: B)** — Co-pay 10% means insured bears 10% × 6,00,000 = ₹60,000; insurer pays 6,00,000 − 60,000 = **₹5,40,000**. The claim is well within the ₹10 lakh sum insured. A) ₹6 lakh ignores co-pay. C) ₹60,000 is the insured's share. D) ₹5 lakh is a wrong flat figure. Co-pay always reduces the insurer's payout by the agreed percentage.
</details>

**Q70.** Given Mr. Verma needs life cover and is choosing how to deploy a fixed budget, which recommendation best fits the workbook's "insurance before investment / decouple" principle?
A) Buy the endowment plan because it returns money at maturity  B) Buy the ₹1 crore term plan and invest the ₹3,08,000 annual difference separately in mutual funds  C) Buy a smaller endowment cover of ₹40 lakh to keep premiums affordable  D) Skip life insurance and invest the whole amount since he has health and property cover
<details><summary>Answer & Explanation</summary>

**Correct: B)** — The workbook's principle is to secure ADEQUATE protection cheaply (term insurance), then invest the difference separately where it is transparent and flexible. Buying ₹1 cr term (₹12,000) and investing the ₹3,08,000 difference gives full cover plus a better, more transparent investment. A) endowment locks money into a low (~5%) inherent return. C) reducing cover to ₹40 lakh under-insures him — protection comes first. D) skipping life cover leaves dependents exposed. Decouple insurance from investment, cover the need fully, then invest the rest.
</details>
</content>
</invoke>
