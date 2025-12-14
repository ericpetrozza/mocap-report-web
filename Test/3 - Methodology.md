# **Our Methodology**

## **Research Approach**

The research was designed to build a complete picture by examining the MOCAP digital experience from multiple angles. No single research method can capture the full complexity of a platform serving four brands, multiple regions, diverse customer types, and varied internal workflows. By combining quantitative behavioral data with qualitative stakeholder insight, competitive benchmarking with direct customer feedback, we established findings that are both measurable and meaningful.

The research was conducted between September and December 2025, involving 12 stakeholders through live call interviews (10 sessions, including two paired interviews), 18 through written feedback surveys, and 20 who provided preliminary input (with some overlap across groups). Additionally, 26 customers from North American markets participated in surveys. Behavioral data spans 12 months of platform activity. In total, 16 distinct research inputs inform this report.

Our guiding principle: treat each source as partial truth. Analytics reveal what users do but not why. Stakeholder interviews reveal internal perspective but may miss customer reality. Customer surveys capture stated preferences but not observed behavior. Competitive analysis shows what's possible but not what's appropriate for MOCAP specifically. The synthesis draws on all sources, prioritizing findings that appear across multiple inputs.

### **Research Timeline**

| Phase | Timing | Activities |
| :---- | :---- | :---- |
| Foundation | Sep 2025 | Project brief development, stakeholder identification, analytics access setup |
| Discovery | Oct 2025 | Analytics analysis, competitive audit, sitemap inventory, catalog auditing |
| Stakeholder Research | Nov 2025 | Preliminary feedback, written surveys, live call interviews |
| Synthesis | Nov \- Dec 2025 | MoSCoW prioritization, customer surveys, cross-channel analysis |
| Reporting | Dec 2025 | Final synthesis and documentation |

## 

## **Sources Summary**

| Research Input | Type | Sample/Scope | Primary Contribution |
| :---- | :---- | :---- | :---- |
| **GA4 Analysis** | Quantitative | 12 months, all properties | Behavioral baseline, channel performance |
| **Search Logs** | Quantitative | 1,000 queries, 1 week | Search failure quantification |
| **CrazyEgg Heatmaps** | Quantitative | 13 pages | Interaction patterns, friction points |
| **Competitive Analysis** | Qualitative | 14 competitors | Market positioning, UX patterns |
| **Sitemap Inventory** | Structural | 4 brand properties | Information architecture baseline |
| **MOCAP Catalog** | Structural | 85 series, 2,195 SKUs | Product data assessment |
| **Cleartec Catalog** | Structural | 21 series, 328 SKUs | Product data assessment |
| **Beckett Catalog** | Structural | 18 series, 440 SKUs | Product data assessment |
| **X-Treme Tape Catalog** | Structural | 3 types, 24 SKUs | Product data assessment |
| **Personas** | Qualitative | Workshop synthesis | Audience segmentation |
| **Preliminary Feedback** | Qualitative | 20 stakeholders | Initial problem inventory |
| **Written Surveys** | Qualitative | 18 responses | Operational pain points |
| **Live Interviews** | Qualitative | 12 stakeholders (10 sessions) | Strategic context, complexity assessment |
| **MoSCoW Ratings** | Quantitative | 28 stakeholders, 33 features | Prioritized feature consensus |
| **Customer Survey** | Mixed | 26 US/Canada customers | External validation |
| **Project Brief** | Foundational | Consolidated discovery | Business context, constraints |

## 

## **Behavioral and Analytics Research**

### **Google Analytics Analysis**

**Source**: GA4 data from 12 months (September 2024 to September 2025\)

**Scope**: Complete behavioral dataset for MOCAP and Cleartec/Beckett websites, including traffic patterns, revenue attribution, channel performance, device usage, geographic distribution, and page-level engagement.

**What it revealed**: The analytics provided baseline metrics and behavioral patterns that stakeholder perception alone could not establish. Key findings included revenue concentration in Direct and Paid Search channels (65% combined for MOCAP), desktop dominance across both brand families (72% and 65% respectively), and the prominence of Search and Cart pages in user journeys. The data also revealed a significant technical issue: Cleartec's 20,000 404 page views represented approximately 19% of homepage view volume, indicating substantial broken link or redirect problems.

**Limitations**: Current analytics implementation has known gaps. Checkout tracking uses fragment-based URLs that break journey analysis. Cross-domain attribution between the storefront and the store is unreliable. Internal staff usage is not segregated from customer behavior.

### **Search Log Analysis**

**Source**: Server-side search logs for a one-week sample period (July 2024\)

**Scope**: 1,000 search queries across all brand sites and language variants, including query strings, response codes, result counts, and latency metrics.

**What it revealed**: This analysis exposed the severity of search dysfunction in quantitative terms. 100% of sampled queries returned error codes (401 responses). 857 of 1,000 queries produced zero results. Valid part numbers, common product terms, and material searches all failed. Search usage was distributed across all regional sites, with mocap.com (359 queries), mocap.co.uk (168), and cleartecpackaging.com (115) leading volume.

**Limitations**: The sample represents one week of activity and may not capture seasonal variation. The 100% error rate suggests a systemic issue rather than edge-case failures, but root cause diagnosis requires technical investigation beyond log analysis.

### **UX Audit via Heatmap Analysis**

**Source**: CrazyEgg heatmap data across 13 pages on MOCAP and Cleartec/Beckett properties

**Scope**: Click distribution, scroll depth, dead clicks (clicks on non-interactive elements), rage clicks (repeated frustrated clicks), and interaction pattern analysis for homepage, category pages, product pages, and checkout flows.

**What it revealed**: Users treated specification tables as interactive tools, clicking column headers expecting sorting functionality (11.6% dead click rate on headers). Rage clicks (4.3%) concentrated on sorting controls where users couldn't determine how to proceed. The MOCAP mobile experience showed 31% of clicks going to the hamburger menu, indicating over-reliance on hidden navigation.

On Cleartec product pages, the configurator pattern showed particular friction: 22 rage clicks and 64 dead clicks on "Configure your Item" headers before users discovered the actual dropdown controls. Users spent 10-20 seconds trying to understand multi-step configurators before making selections.

**Limitations**: Heatmap data shows where users click but requires interpretation to understand intent. The analysis was conducted on a subset of pages and may not represent all user journeys.

## **Competitive and Structural Analysis**

### **Competitive Analysis**

**Source**: Direct evaluation of 14 B2B industrial plastics and protective components competitors

**Scope**: User journey analysis including homepage positioning, navigation patterns, search functionality, product tables, filtering and sorting capabilities, checkout flows, and feature comparison.

**Competitors evaluated**: Caplugs, Essentra, DBI Plastics, Fastenal, Grainger, Pöppelmann, StockCap, Harman Corporation, Polymer Molding, and others in the protective components and industrial packaging space.

**What it revealed**: The market has segmented into three strategic positions: pure transactional (speed and repeat procurement), consultative sales (relationship and margin protection), and hybrid self-serve (discovery combined with efficiency). Successful players in the hybrid category share common patterns: use-case navigation, interactive filterable tables, integrated sampling flows, visible stock status, and multiple entry paths for different buyer types.

The analysis identified specific UX patterns that outperform MOCAP's current approach: Caplugs' filterable product tables with inline add-to-cart, Fastenal's autocomplete search with SKU priority, DBI's samples-as-cart-items flow, and Essentra's expanding row details.

**Limitations**: Competitor websites represent point-in-time snapshots. Features and approaches change.

### **Current Website Sitemap Analysis**

**Source**: Complete URL inventory across all four brand properties

**Scope**: Page counts, content sections, product category structure, and resource downloads for MOCAP (158 pages), Cleartec/Beckett (90 pages), and X-Treme Tape (19 pages).

**What it revealed**: The inventory confirmed the content overlap stakeholders described: pages are 90-95% identical across regional variants, with differences primarily in language and occasional regional widgets. The analysis mapped the current information architecture and identified the scope of redirect planning required for any platform migration.

**Limitations**: URL inventory captures structure but not content quality, accuracy, or user value.

### **Product Catalog Analysis**

Four separate catalog analyses examined the product data underlying each brand's e-commerce experience.

| Brand | Scope | Key Findings |
| :---- | :---- | :---- |
| MOCAP | 85 series, 2,195 SKUs, \~66,000 variants | Well-defined series codes and consistent material taxonomy. Lacks hierarchical organization; has data gaps in thread specifications. |
| Cleartec | 21 series, 328 SKUs | Clear segmentation between tubes and closures. 62% missing material data, 76% missing ID/OD specifications. |
| Beckett | 18 series, 440 SKUs | Specialized industrial focus with telescopic technology. Severely deficient data: 100% missing descriptions, 100% missing application data. |
| X-Treme Tape | 3 types, 24 SKUs | Simple, well-structured catalog. 83.3% dimensional data coverage (highest of all brands). |

**Limitations**: Analysis examined data structure and completeness but could not verify accuracy against physical products.

## **Stakeholder Research**

### **Preliminary Feedback Collection**

**Source**: Written feedback from 20 internal stakeholders responding to IT request for improvement suggestions

**Participants**: Customer service, sales, and operations staff across US, UK, Poland, and China markets

**What it revealed**: Search dysfunction appeared in 8 of 20 responses. Customer portal absence appeared in 7 responses. Size chart usability problems appeared in 6 responses. The feedback identified quick wins (mobile search bar, frozen table headers, row highlighting) that later research validated.

**Limitations**: Self-selected respondents with varying detail levels. Problems identified without quantification of frequency or revenue impact.

### **Written Feedback Surveys**

**Source**: Structured surveys distributed to 23 frontline staff members, with 18 completing responses

**Participants**: Customer service representatives and sales staff across US (9 contacted), UK (8 contacted), Poland (2 contacted), and China (5 contacted). Non-respondents: Ivy Guan, Jakub Madura, Kevin Chen, Lari Alford, and Michelle Xu.

**What it revealed**: Staff use websites for three main activities: answering customer product questions, checking pricing and stock, and processing orders. Every call requiring these lookups represents a website failure. Seven stakeholders identified search as their biggest frustration. Sample ordering process and data accuracy emerged as additional pain points.

**Limitations**: Frontline perspective, while valuable, represents one view. Staff experience consequences of platform dysfunction but may not see full strategic context.

### **Live Call Interviews**

**Source**: 45-60 minute structured interviews across 10 sessions with 12 participants (two sessions were paired interviews)

**Participants**:

* Regional Sales Directors: Honorata Grzebielucha (UK/EU), Linda Yang (China), Ricardo Munoz (Mexico)  
* Division Sales Managers: Jim Boehm (Beckett), Dave Koester (Cleartec)  
* Corporate Leadership: Shawn Halley (Director of Global Sales), Michael Wester (Director of Global Marketing)  
* Operations: Kate Parish (Customer Service Manager), Matt Hull (MOCAP Sales)  
* Technical/Creative: Ildar Khakimov (IT), Shane Flottmann (Art Director)  
* Sales: Cristy Sanchez (Mexico)

Paired interviews: Ricardo Munoz with Cristy Sanchez (Mexico operations), Ildar Khakimov with Shane Flottmann (technical/creative)

**What it revealed**: Leadership interviews connected operational problems to strategic implications. The customer portal emerged as critical to 2030 growth goals. Search fix was identified as technically straightforward with 20-25% expected sales increase. International operations revealed market-specific failures: zero China orders, 40-50% Poland cancellations from incorrect warehouse display, Mexico freight estimation problems.

The interviews surfaced implementation complexity: quick wins (search, checkout UI) versus complex builds (portal, AI advisor, size chart rebuild). Technical constraints from legacy ERP systems (2-week to 3-month update delays) affect all improvement timelines.

**Limitations**: Ten sessions with twelve participants provide strong coverage but cannot capture all regional or role variations.

## **Prioritization and Validation**

### **MoSCoW Prioritization Exercise**

**Source**: Feature rating surveys completed by 28 stakeholders

**Participants**: 18 from written feedback cohort, 10 from live call cohort (all live call participants except Linda Yang (we didn’t receive her on time) and Ildar Khakimov(who wasn’t considered due his role)

**Scope**: 33 distinct website features rated on personal impact and customer impact using 1-5 scale, generating 847 individual ratings

**What it revealed**: Customer portal led with 9.2 combined score. Multi-mode search followed at 8.8. Logged-in negotiated pricing scored 8.6. The ratings revealed leadership-frontline gaps: frontline rated operational efficiency features higher (bulk reorder 9.1 vs 7.3), while leadership showed more enthusiasm for strategic differentiation features.

The prioritization identified 13 must-have features (8.0+), 9 should-haves (7.5-7.99), and lower-priority items. It also revealed genuine strategic disagreement on platform consolidation.

**Limitations**: Ratings capture perceived value but not implementation complexity or technical feasibility.

### **Customer Survey**

**Source**: Online surveys distributed to MOCAP and Cleartec customers

**Participants**: 26 completed responses from US and Canada markets

**What it revealed**: Shipping speed and stock availability topped purchase decision factors (69%), with website experience third (46%). Better search was requested by 73% of customers. Product images matching configurations requested by 58%. Brand consolidation had 73% support or openness despite 81% being unaware brands were related.

The survey revealed desktop preference (58% prefer desktop for everything) and identified mobile use cases focused on product lookup rather than transactions.

**Limitations**: North American responses only. European customer surveys remain pending. 26 responses provide directional insight but limited statistical power.

## **How the Methods Complement Each Other**

The research logic intentionally triangulated findings across methods. When a pattern appears in analytics, stakeholder feedback, and customer surveys, confidence increases substantially.

### **Search Dysfunction: Triangulated Finding**

* **Analytics**: Search among top pages by traffic, indicating heavy usage  
* **Search logs**: 100% error rate, 857 zero-result queries  
* **Heatmaps**: Users clicking search, then navigating manually (fallback behavior)  
* **Stakeholder feedback**: 7 of 10 live call sessions, 7 of 18 written surveys identified as top pain point  
* **Customer survey**: 73% requested better search

Each method reveals a different facet of the same problem. Together, they establish search as the highest-confidence finding.

### **Customer Portal Need: Triangulated Finding**

* **Stakeholder feedback**: 8 of 10 live call sessions, appeared in 7 of 20 preliminary responses  
* **MoSCoW ratings**: Highest-scored feature at 9.2  
* **Customer survey**: Customers don't ask for "portal" directly but do ask for outcomes that require portal functionality (order tracking, history, easy reordering)

### **Data Accuracy Crisis: Triangulated Finding**

* **Analytics**: 20,000 404 views on Cleartec suggest broken links and outdated references  
* **Catalog analysis**: 100% missing descriptions on Beckett, 62% missing material data on Cleartec  
* **Stakeholder interviews**: 40-50% Poland cancellations from wrong warehouse data, zero China orders partly from data trust issues  
* **Customer survey**: Open-ended feedback mentioned pricing and image accuracy concerns

## **What the Research Cannot Tell Us**

**European customer perspective is missing.** The 26 survey responses represent US and Canada only. Findings should be validated against European customer input before finalizing decisions affecting those markets.

**Technical feasibility is estimated, not confirmed.** Development provided implementation complexity assessments during interviews, but detailed technical discovery has not occurred. Estimates should be validated through technical planning.

**Competitive positions change.** The competitive analysis represents a point-in-time snapshot. Patterns identified remain relevant, but specific implementations should be re-verified during design phases.

**Stated preferences may not predict behavior.** Whether improved search actually increases conversion, or whether consolidated navigation actually improves findability, can only be measured after implementation.