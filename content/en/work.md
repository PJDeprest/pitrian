---
title: "Work"
description: "Portfolio of software projects: TenderWolf - European tender aggregation platform, and Fiscalo - Belgian payroll tax calculator for accountants and self-employed."
---

## TenderWolf

TenderWolf aggregates governmental tenders from across Europe into one search engine. Thousands of tenders come in daily from Belgium, France, Luxembourg, and the Netherlands, including Belgian municipality decisions that precede formal tenders. The rest of the EU is covered through the European tender platform.

Search is fuzzy and extends into specification documents. Filters are plentiful: location, deadline, procedure, sector, selection criteria, and dozens of other combinations. Results are sorted based on tenders you follow or mark as interesting. For a quick overview: AI summaries of specifications are available.

Companies use TenderWolf to find tenders to bid on. Governments use it to find inspiration from similar tenders by other agencies.

Technically, the platform runs on scraping cycles that must execute reliably every hour. Tenders arrive in all kinds of formats. An elaborate parsing system with factories assigns the correct process based on file type. The challenge lies in processing that multitude of formats in a structured, maintainable way.

**[tenderwolf.com](https://tenderwolf.com)**

## Fiscalo

Fiscalo calculates taxes for self-employed consultants who pay themselves a salary from their own company. The full fiscal situation is taken into account: salary configuration with all its components, social contributions, company tax, personal income tax, pension accrual. The tool shows different scenarios, allowing users to compare and optimize their situation.

The target audience is accountants and self-employed, with an emphasis on accountants. The subject matter is complex.

Technically, the challenge is translating Belgian tax law into maintainable code. The legislation is complex, and the calculations are not always logically structured. The art is keeping that complexity from bleeding into the code.

**[fiscalo.be](https://fiscalo.be)**
