# 📐 Financial Maths Primer — PV, FV, PMT & Friends (one-page glance)

> The exam makes you compute retirement corpus, SIP maturity, loan/EMI, capital-gains growth and inflation. **Almost all of it is the same five-variable "money time-machine."** Learn these once and the numericals become easy. Keep the 🧮 calculator open while you read.

---

## 🎰 The 5 variables (the money time-machine)

Money today and money tomorrow are **not** the same — money grows over time (interest) and prices rise (inflation). Time-Value-of-Money (TVM) links the two. Every TVM problem has these five pieces; if you know any four, you can find the fifth.

| Symbol | Name | In plain words | Excel |
|---|---|---|---|
| **N** (nper) | Number of periods | How many years/months the money sits | `nper` |
| **r / I/Y** | Rate per period | Growth (or interest) each period, as a % | `rate` |
| **PV** | Present Value | The lump of money **now** | `PV` |
| **PMT** | Payment | A **fixed amount added/withdrawn every period** | `PMT` |
| **FV** | Future Value | The money **later** (at the end) | `FV` |
| *(type)* | Timing | Payment at **end** (0) or **beginning** (1) of period | `type` |

> 💡 **The one idea behind all of it:** each period your money is multiplied by **(1 + r)**. Do that `n` times and you get **(1 + r)ⁿ** — that "growth factor" is hiding inside every formula below.

---

## 👀 What each one is & when you use it

### PV — Present Value
- **What:** what a future amount is worth **today**.
- **Use when:** "How much must I invest **now** (one lump sum) to reach a goal?" or "What is this future money worth in today's rupees?"
- **Formula:** `PV = FV ÷ (1 + r)ⁿ` (this is compounding run **backwards** — called *discounting*).
- **Example:** Need ₹10,00,000 in 8 years at 10%. PV = 10,00,000 ÷ 1.10⁸ = **₹4,66,507** to invest today.

### FV — Future Value
- **What:** what money today grows into **later**.
- **Use when:** "I invest ₹X today — what's it worth after n years?"
- **Formula:** `FV = PV × (1 + r)ⁿ`.
- **Example:** ₹2,00,000 at 12% for 10 years → FV = 2,00,000 × 1.12¹⁰ = **₹6,21,170**.

### PMT — Payment (instalment)
- **What:** a **fixed amount paid (or received) every period** — a SIP, a yearly saving, an EMI, an annual pension.
- **Use when:** "How much must I invest **every month/year** to reach a goal?" or "What pension can a corpus pay?"
- **Formula (saving to a goal — sinking fund):** `PMT = FV × r ÷ [ (1 + r)ⁿ − 1 ]`.
- **Example:** Want ₹50,00,000 in 20 years at 9%. PMT = 50,00,000 × 0.09 ÷ (1.09²⁰ − 1) = **₹97,734/year**.

### N — Number of periods
- **What:** how many periods the money compounds.
- **Use when:** "How long to double my money / reach a target?"
- **Tip:** if compounding is **monthly**, N = years × 12 (and r = annual ÷ 12).

### r — Rate per period
- **What:** the growth/interest rate **for one period**.
- **Use when:** finding the return that links a start and end value (see CAGR).
- **Tip:** always match r and N to the **same period** (both yearly, or both monthly).

---

## 🧮 The golden formulas (with worked examples)

| # | You want… | Formula | Worked example |
|---|---|---|---|
| 1 | **FV of a lump sum** | FV = PV(1+r)ⁿ | ₹1,00,000 @ 8%, 15y → 1,00,000×1.08¹⁵ = **₹3,17,217** |
| 2 | **PV of a future goal** | PV = FV ÷ (1+r)ⁿ | ₹20,00,000 in 10y @ 9% → 20,00,000 ÷ 1.09¹⁰ = **₹8,44,773** |
| 3 | **FV of a yearly SIP (ordinary annuity)** | FV = PMT·[((1+r)ⁿ−1)/r] | ₹1,20,000/yr, 20y @ 10% → 1,20,000×57.275 = **₹68,73,000** |
| 4 | **Instalment to hit a goal (PMT)** | PMT = FV·r ÷ [(1+r)ⁿ−1] | ₹50,00,000 in 20y @ 9% → **₹97,734/yr** |
| 5 | **Corpus that funds withdrawals (PV of annuity)** | PV = PMT·[1−(1+r)⁻ⁿ]/r | ₹6,00,000/yr for 25y @ 8% → **₹64,06,800** corpus needed |
| 6 | **CAGR (steady growth rate)** | (End/Start)^(1/n) − 1 | ₹1L→₹2.5L in 7y → (2.5)^(1/7)−1 = **13.9%** |
| 7 | **Real (inflation-adjusted) return** | (1+nominal)/(1+inflation) − 1 | 12% return, 6% inflation → 1.12/1.06−1 = **5.66%** |
| 8 | **Future cost with inflation** | Cost × (1+inflation)ⁿ | ₹5,00,000 @ 7%, 10y → 5,00,000×1.07¹⁰ = **₹9,83,576** |
| 9 | **Perpetuity (income forever)** | PV = PMT ÷ r | ₹1,00,000/yr forever @ 8% → 1,00,000 ÷ 0.08 = **₹12,50,000** |

> ⚠️ **Ordinary annuity vs annuity-due:** if payments come at the **beginning** of each period (e.g., SIP on the 1st), multiply the annuity answer by **(1 + r)**. Formulas 3–5 above assume **end-of-period** (ordinary).

---

## 🧭 "Which formula do I use?" — quick decision guide

| The question says… | Reach for… |
|---|---|
| "invest **today**, worth after n years" | **FV lump sum** (#1) |
| "need ₹X in future, invest **one lump sum now**" | **PV** (#2) |
| "invest ₹X **every year/month**, maturity value" | **FV of annuity / SIP** (#3) |
| "how much to save **each year** to reach a goal" | **PMT / sinking fund** (#4) |
| "corpus needed to **withdraw** a pension for n years" | **PV of annuity** (#5) |
| "grew from A to B in n years — what rate?" | **CAGR** (#6) |
| "return after beating inflation" | **Real return** (#7) |
| "what will it **cost** in future" | **Inflation cost** (#8) |
| "income **forever** / no end date" | **Perpetuity** (#9) |

---

## 💻 Excel / OpenOffice Calc (the test machines have a spreadsheet!)

```
=FV(rate, nper, pmt, pv, type)     → future value
=PV(rate, nper, pmt, fv, type)     → present value
=PMT(rate, nper, pv, fv, type)     → the instalment
=NPER(rate, pmt, pv, fv, type)     → number of periods
=RATE(nper, pmt, pv, fv, type)     → the rate
```
- **Sign convention:** money you **pay out** is **negative**; money you **receive** is **positive**. (So a goal-saving PMT comes out negative — that's fine.)
- `type` = **0** for end-of-period (default), **1** for beginning.
- Match the period: monthly problem → `rate = annual/12`, `nper = years×12`.

---

## 🚨 The 6 traps that cost marks

1. **Simple vs compound** — almost always **compound**: use (1+r)ⁿ, not r×n.
2. **Monthly mix-up** — convert BOTH: rate ÷ 12 **and** years × 12.
3. **Annuity timing** — beginning-of-period payments need a ×(1+r).
4. **Real return** — **divide** the growth factors, don't just subtract (12%−6% ≠ real return; the right answer is 5.66%, not 6%).
5. **Excel signs** — a wrong +/− flips the answer; pay-outs are negative.
6. **Rounding too early** — keep full decimals until the final step.

---

> 🔢 **Practice these live:** open the **Financial Maths Lab** for unlimited auto-generated PV/FV/PMT/CAGR/inflation questions with worked solutions, and the **🧮 Financial Calculator** (bottom-right) to check any working — its TVM tab matches these Excel functions exactly.
