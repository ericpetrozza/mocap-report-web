# **Main Findings**

## **Overview**

The research surfaced patterns that appeared repeatedly across different methods, stakeholder groups, and customer segments. This section organizes those findings thematically, drawing connections between behavioral data, stakeholder experience, and customer feedback. Where findings appeared in multiple sources, confidence is higher. Where sources conflict, we note the tension.

Three findings dominate the research: search is broken, self-service does not exist, and data cannot be trusted. These three dysfunctions appeared in every research category and were identified by nearly every stakeholder interviewed. They represent the minimum viable scope for any meaningful improvement.

Beyond these critical failures, the research revealed patterns in navigation and discovery, checkout and conversion, mobile experience, international operations, and brand perception.

## **Search: The Highest-Impact Failure**

### **The Quantitative Reality**

Search log analysis during a one-week sample period (July 2024\) revealed complete functional failure:

| Metric | Finding |
| :---- | :---- |
| Total queries sampled | 1,000 |
| Queries returning errors | 100% (401 response codes) |
| Zero-result queries | 857 (85.7%) |
| Queries with 1+ results | 143 (14.3%) |

The failure is not partial or intermittent. Search does not work. Valid part numbers return nothing. Common product terms like "silicone," "tube," "cap," and "plug" fail to surface relevant products. Material searches, dimension searches, and application searches all fail.

### **Stakeholder Experience**

Search dysfunction appeared in stakeholder feedback with unusual consistency:

* 7 of 10 live call sessions identified search as a top pain point  
* 7 of 18 written survey respondents named search as their biggest daily frustration  
* 8 of 20 preliminary feedback submissions mentioned search problems

Customer service staff described the operational impact: every search failure becomes a phone call. Staff manually look up products that customers should find themselves. The pattern repeats dozens of times daily across the team.

Ildar Zibarov (Development) provided technical context: the search infrastructure uses custom code instead of Magento's native functionality. The fix is technically straightforward but requires replacing custom code. Development estimates suggest a 20-25% sales increase from search remediation alone.

### **Customer Demand**

The customer survey confirmed external alignment with internal priorities:

* 73% of surveyed customers (19 of 26\) requested "better search that finds exact part numbers"  
* Open-ended feedback specifically mentioned inability to find products by part number  
* Customers described workarounds: calling instead of searching, browsing entire categories manually

### **Behavioral Evidence**

CrazyEgg heatmap analysis showed search-related patterns:

* Search pages rank among the highest-traffic pages across all properties  
* Users who fail at search don't leave immediately; they attempt manual navigation  
* Click patterns suggest repeated search attempts before abandoning to phone or browse

The behavioral data suggests customers want to use search. They try repeatedly. They fail, then compensate. The demand exists; the capability does not.

### **The Opportunity**

Search represents the highest-ROI quick win in the entire research dataset. The problem is severe, the solution is technically understood, stakeholder consensus is complete, and customer demand is explicit.

## **Self-Service: The Missing Foundation**

### **What Does Not Exist**

There is no customer portal. This is not a feature gap; it is an architectural absence. Customers cannot:

* View their negotiated pricing  
* Check order history  
* Track shipment status  
* Reorder previous purchases  
* Manage shipping account numbers  
* Download invoices or documentation  
* Update their own contact information

Every interaction that should be self-service requires a phone call or email. The 4,000+ active customer accounts exist only for internal order processing, not customer access.

### **Operational Load**

Customer service staff described the daily reality during interviews:

| Task | Volume | Self-Service Potential |
| :---- | :---- | :---- |
| Order tracking inquiries | 4-5 daily | 100% could be self-service |
| Shipping account processing | 60% of new customers | Could be customer-entered |
| Return requests | 2-7 weekly | Could be form-initiated |
| Documentation requests | Constant | Could be downloadable |
| Reorder assistance | Multiple daily | Could be one-click from history |

The customer service team covering all brands spends substantial time on tasks that modern e-commerce platforms handle automatically. This is not a staffing problem; it is a capability gap.

### **Stakeholder Priority**

The MoSCoW prioritization exercise produced the clearest signal in the entire research program:

* Customer portal scored 9.2 out of 10, the highest of all 33 features rated  
* Portal appeared as a top priority in 8 of 10 live call sessions  
* Shawn Halley (Director of Global Sales) called it "critical to 2030 growth goals"

The strategic logic is clear: self-service for routine transactions frees sales capacity for strategic relationships. Small accounts that require manual processing consume resources that should be used to pursue large accounts. The current model cannot scale.

### **Customer Perspective**

Customer survey results showed indirect demand. When asked directly about "customer portal," response was muted. However, when asked about desired capabilities:

* Order tracking was highly valued  
* Easy reordering was frequently mentioned  
* Price visibility was a consistent theme

Customers describe problems and desired outcomes, not solutions. The gap between stated feature preference and implied capability need reflects typical user research patterns.

### **The Opportunity**

Portal development is more complex than search remediation, requiring integration with three ERP systems (Sage, EFACs, KingDee), authentication infrastructure, and careful UX design. However, the payoff justifies the investment: reduced support load, improved customer satisfaction, scalable growth capacity, and competitive parity with modern B2B platforms.

## **Data Accuracy: The Trust Blocker**

### **Where Data Fails**

Product data inaccuracy manifests across multiple dimensions:

**Images**: Product photographs do not update to reflect selected configurations. A customer selecting a red cap in size X sees an image of a blue cap in size Y. The disconnect between selection and visualization breaks confidence.

**Stock levels**: Inventory displays reference incorrect warehouses. Honorata Grzebielucha (Sales Director UK/EU) reported that Polish customers see Ukrainian warehouse inventory, leading to 40-50% order cancellations or delays when expected stock is unavailable.

**Pricing**: Price displays contain errors that break customer trust. When quoted prices don't match checkout prices, or when displayed prices don't reflect negotiated terms, customers lose confidence in the entire transaction.

**Specifications**: Technical data has gaps and inconsistencies. Catalog analysis revealed:

| Brand | Data Gap |
| :---- | :---- |
| Beckett | 100% missing product descriptions, 100% missing application data |
| Cleartec | 62% missing material specifications, 76% missing ID/OD data |
| MOCAP | 34 instances of missing NPT thread data |

### **The Update Delay Problem**

The technical architecture creates a 2-week to 3-month delay between data changes and website updates. This delay window means:

* Discovered errors persist long after identification  
* New products cannot launch quickly  
* Price changes lag behind business decisions  
* Inventory adjustments don't reflect reality

Ildar Zibarov (Development) explained the constraint: the custom synchronization between ERP systems and the website requires manual processes and has limited automation. The Sage ERP system's lack of API forces file-based integration approaches.

### **Regional Impact**

Data accuracy problems hit international operations hardest:

**Poland**: 40-50% of orders are cancelled or delayed because the displayed inventory doesn't match the actual Polish warehouse stock. Customers order based on website information, only to discover that fulfillment cannot occur as expected.

**China**: Linda Yang (Sales Director China) reported zero online orders generated this year. While multiple factors contribute (checkout flow, payment methods, trust signals), data confidence is part of the equation.

**Mexico**: Ricardo Munoz (Sales Director Mexico) described freight estimation problems. Displayed shipping charges don't match actual quotes, causing payment delays and customer disputes.

### **The Compounding Effect**

Data inaccuracy compounds other problems. When search fails and customers call, staff must verify data before providing answers. When portal doesn't exist and customers can't self-serve, they depend on staff to interpret potentially incorrect information. Every dysfunction cascades through the system.

## **Navigation and Discovery**

### **Current State Problems**

The existing information architecture organizes products by internal logic rather than customer need:

* Navigation uses product codes and internal nomenclature  
* Categories reflect manufacturing organization, not use cases  
* 46 product series include "Plug" and 28 include "Cap," creating disambiguation challenges  
* No clear path from "I have a problem" to "here's the solution"

CrazyEgg heatmap analysis revealed the consequences:

* 11.6% dead click rate on table headers (users expect sorting functionality)  
* 4.3% rage click rate on sorting controls (users cannot determine how to proceed)  
* 31% of MOCAP mobile clicks go to the hamburger menu (over-reliance on hidden navigation)

### **What Customers Want**

Customer survey responses and stakeholder observations point toward multi-path navigation. Competitive analysis identified three buyer archetypes:

**The Veteran** (approximately 30% of users): Knows their SKU. Wants to search, find, and reorder. Needs functional search, saved favorites, quick reorder from history.

**The Problem Solver** (approximately 50% of users): Knows the application but not the specific product. Wants to answer questions like "What protects threads during powder coating?" Needs use-case navigation, application guides, filterable discovery tools.

**The Researcher** (approximately 20% of users): Needs to learn before purchasing. Wants educational content and comparison tools. Needs detailed specifications, downloadable resources, side-by-side comparison capability.

The current site serves none of these archetypes well.

### **Competitive Patterns**

Analysis of 14 competitors revealed navigation patterns that outperform MOCAP's current approach:

* Use-case entry points: "Shop by Application" alongside "Shop by Product"  
* Filterable tables: Interactive product tables with column sorting and filtering  
* Multiple paths: Category browse, application browse, search, and visual selection all lead to the same products  
* Breadcrumb clarity: Always knowing where you are and how to backtrack

Caplugs, Essentra, and DBI demonstrate hybrid navigation that accommodates different buyer types within a single interface.

### **Size Chart Complexity**

Size charts present a particular challenge. MOCAP's charts can have 180 columns across 42 column types. This complexity is not arbitrary; products have that many relevant attributes.

CrazyEgg analysis showed users clicking column headers expecting sort functionality. Scroll depth analysis showed users attempting to navigate large tables without adequate tools. The current static presentation fails users who need to find specific specifications within extensive data.

Stakeholder feedback was explicit: "We are not looking to get rid of anything on the site." The size charts serve real customer needs. The goal is making them usable, not eliminating them.

## **Checkout and Conversion**

### **Where Customers Abandon**

Competitive analysis identified an 80% product page bounce rate, suggesting customers arrive with intent but leave without action. Multiple friction points contribute:

**Sample requests**: The current process requires separate forms for each part number. Customers wanting to sample three products must complete three separate workflows. Competitors like DBI integrate samples into the standard cart flow.

**Quote complexity**: Quote requests lack transparency about timeline and process. Customers don't know what happens after submission.

**Checkout confusion**: Honorata Grzebielucha (Poland) reported that unclear VAT and shipping cost presentation causes high bounce rates at checkout. Customers proceed to checkout, see unexpected charges, and abandon.

**Account friction**: No saved information means repeat customers re-enter data every time. Shipping account numbers require manual processing for 60% of new customers.

### **Analytics Gaps**

Current analytics implementation cannot fully diagnose checkout problems:

* Fragment-based URLs (\#) break funnel tracking  
* Cross-domain journeys between storefront and store lose attribution  
* Internal staff usage is not segregated from customer behavior

The checkout redesign should include analytics architecture that enables ongoing optimization, not just the fixes identified today.

### **What Customers Value**

When forced to prioritize, customer survey respondents ranked:

1. Faster shipping / better stock availability (69%)  
2. Lower prices (58%)  
3. Better website / easier to find products (46%)

The website ranks third, but 46% is substantial. Nearly half of customers identify website experience as a top-three factor in supplier selection. For that segment, checkout friction directly impacts purchasing decisions.

## **Mobile Experience**

### **Current State**

The website is not mobile-friendly. This is acknowledged by stakeholders and visible in analytics:

* Desktop accounts for 72% of MOCAP traffic and 65% of Cleartec/Beckett traffic  
* Mobile traffic exists, but converts poorly  
* Heatmap analysis shows mobile users struggling with navigation

The 31% of MOCAP mobile clicks going to the hamburger menu indicates over-reliance on hidden navigation. Users cannot find what they need through visible interface elements.

### **Customer Preference**

Customer survey data suggests desktop preference is genuine, not just a response to poor mobile experience:

* 58% of surveyed customers (15 of 26\) prefer desktop for all purchasing activities  
* Among those wanting mobile functionality, product lookup leads demand (12 selections)  
* Full transaction completion on mobile was less frequently requested

This pattern suggests mobile strategy should focus on reference and discovery rather than comprehensive transaction flows:

* Quick product specification lookup  
* Compatibility checking  
* Order status reference  
* Contact and support access

### **The Responsive Imperative**

Despite desktop preference for transactions, mobile-friendly design is non-negotiable:

* Google's mobile-first indexing affects search rankings  
* Quick reference use cases require mobile functionality  
* Field technicians and MRO buyers need on-site product lookup  
* Modern B2B expectations include mobile capability

The redesign should be mobile-first in implementation while acknowledging desktop-primary usage patterns in feature prioritization.

## **International Operations**

### **Market-Specific Failures**

Research revealed that platform dysfunction hits international markets hardest:

**Poland (Honorata Grzebielucha)**:

* 40-50% order cancellations from incorrect warehouse inventory display  
* Checkout bounce from VAT/shipping cost confusion  
* Customers see Ukrainian warehouse stock instead of Polish warehouse stock

**China (Linda Yang)**:

* Zero online orders generated this year  
* Checkout flow doesn't match local expectations (phone verification codes expected)  
* Payment method gaps (Alipay, WeChat Pay not supported)  
* Data trust issues compound other friction

**Mexico (Ricardo Munoz, Cristy Sanchez)**:

* Freight charge estimation errors  
* Payment delays from quote/charge mismatches  
* Currency and shipping complexity

### **Language and Localization**

The platform supports multiple languages: English, Spanish, Italian, German, French, Polish, and Mandarin. However, localization extends beyond translation:

* Date and number formatting conventions  
* Currency display and conversion  
* Measurement system preferences (Imperial vs. Metric)  
* Regional product availability  
* Local shipping and payment expectations

Customer survey feedback specifically mentioned the measurement system display as a friction point. Cleartec customers noted tube nomenclature confusion when the unit presentation doesn't match expectations.

### **Regional Content Duplication**

Sitemap analysis revealed 90-95% content similarity across regional storefronts. The 33 regional domains contain nearly identical content with minimal meaningful differentiation. This creates:

* Maintenance complexity without customer benefit  
* Redirect complexity for any migration  
* SEO complications from duplicate content  
* Inconsistent update timing across regions

The operational case for consolidation includes reducing this duplication while maintaining necessary regional customization for pricing, inventory, language, and regulatory compliance.

## **Brand Perception and Consolidation**

### **Current Brand Awareness**

Customer survey data revealed surprising brand isolation:

* 81% of respondents (21 of 26\) did not know MOCAP, Cleartec, and Beckett were related companies  
* Customers interact with individual brands without awareness of the parent relationship  
* Cross-selling opportunities are not realized because customers don't know that other products exist

### **Consolidation Sentiment**

When asked whether a unified website would help their purchasing experience:

| Response | Percentage |
| :---- | :---- |
| Definitely easier | 46% |
| Maybe, depends on the organization | 27% |
| Prefer separate sites | 8% |
| No opinion | 19% |

The 73% support or openness (combining "definitely" and "maybe") suggests a consolidation opportunity. However, the 27% conditional response is instructive: execution quality determines success.

### **Stakeholder Perspective**

Internal views on consolidation showed more variation than customer data:

* Operational efficiency arguments favor consolidation (reduce maintenance, simplify updates)  
* Brand equity concerns favor separation (established customer navigation patterns)  
* The MoSCoW exercise revealed genuine strategic disagreement among stakeholders

Jim Boehm (Beckett Sales Manager) and Dave Koester (Cleartec Sales Manager) provided division-specific perspective during interviews, noting that brand identity matters differently across customer segments.

### **The Execution Risk**

Consolidation done well creates unified discovery with preserved brand identity. Consolidation done poorly loses established customer relationships and navigation patterns. 

The risk is real:

* Customers with bookmarked product pages need redirects that work  
* Search engine equity requires careful migration  
* Brand-specific terminology and product knowledge must be preserved  
* The 8% who prefer separate sites represent real customers with real preferences

### **Catalog Foundation for Consolidation**

Catalog analysis revealed structural compatibility:

* Taxonomy is brand-agnostic (product type, material, application, dimension)  
* Attribute structures are consistent across brands  
* Cross-selling opportunities exist naturally (protective caps \+ packaging tubes)

However, data quality varies dramatically:

| Brand | Data Quality Assessment |
| :---- | :---- |
| MOCAP | Strongest coverage, some gaps in thread specifications |
| Cleartec | Moderate coverage, 62% missing material data, 76% missing ID/OD |
| Beckett | Weakest coverage, 100% missing descriptions and applications |

Data cleanup should precede consolidation. Merging incomplete data creates larger problems than maintaining separate incomplete catalogs.

## **Feature-Specific Findings**

### **Sampling Process**

Current state requires separate forms for each sample request. Stakeholders and competitive analysis both identified this as unnecessary friction.

Competitive pattern: Samples as cart items. Request multiple samples in a single transaction. Clear visibility into sample availability and shipping expectations.

MoSCoW rating for "Request samples in same process as orders": 8.2 (must-have threshold met)

### **Bulk Ordering**

Repeat customers often reorder the same products in the same quantities. The current process requires rebuilding orders from scratch.

Frontline staff rated bulk reorder capability at 9.1 (highest personal impact score). Leadership rated it lower (7.3), revealing a prioritization gap between daily operational needs and strategic feature investment.

Competitive pattern: Quick-order pads, CSV upload, saved order templates, one-click reorder from history.

### **Product Configuration**

Multi-step dependent configurators exist on the current site and serve real customer needs. However, CrazyEgg analysis showed significant friction:

* 22 rage clicks and 64 dead clicks on Cleartec "Configure your Item" headers  
* 10-20 seconds spent trying to understand configurator mechanics before making selections  
* Users clicking section dividers expecting interaction

The configurator concept is correct. The implementation creates unnecessary friction.

### **ISO Certifications**

20% of the audience (particularly automotive and medical industries) requires ISO certification visibility. The current display exists but may not be optimally surfaced.

MoSCoW rating for enhanced certification display: Moderate priority, recognized as important for specific segments.

## **What the Data Cannot Resolve**

### **Strategic Tensions**

Some findings reveal genuine strategic choices rather than clear problems:

* **Speed vs. Guidance**: Should the platform optimize for repeat purchasers who know exactly what they want (speed) or new customers who need help finding the right product (guidance)? Different stakeholders prioritize differently. The hybrid approach attempts both.  
* **Consolidation vs. Brand Identity**: Customer data supports consolidation; some stakeholders express brand equity concerns. Both perspectives have merit.  
* **Feature Scope vs. Launch Timeline**: 13 features scored as must-haves, 9 as should-haves. Building everything extends the timeline. Launching incomplete frustrates stakeholders. Phasing requires difficult prioritization.

### **Missing Data**

* **European customer perspective**: The 26 survey responses represent only US and Canada. European priorities may differ. Findings should be validated before finalizing decisions affecting those markets.  
* **Actual vs. stated behavior**: Customers said they want better search. Whether improved search actually increases conversion can only be measured after implementation.  
* **Technical feasibility validation**: Development provided complexity estimates during interviews, but detailed technical discovery has not occurred. Estimates should be validated through technical planning.

## **Summary: The Priority Stack**

This prioritization reflects research findings. Implementation sequencing requires additional consideration of technical dependencies, resource constraints, and business timing.

### **Tier 1: Critical Dysfunction (Must Fix)**

| Finding | Evidence Strength | Impact |
| :---- | :---- | :---- |
| Search broken | Quantitative logs \+ stakeholder consensus \+ customer demand | 20-25% sales increase estimate |
| No customer portal | 9.2 MoSCoW score \+ operational load evidence | Scalability prerequisite |
| Data inaccuracy | Regional failures \+ customer trust erosion | Order completion, international growth |

### **Tier 2: Significant Friction (Should Address)**

| Finding | Evidence Strength | Impact |
| :---- | :---- | :---- |
| Navigation by product code | Heatmaps \+ persona research | Discovery failure for 50%+ of users |
| Mobile dysfunction | Analytics \+ heatmaps | Competitive parity, SEO |
| Checkout friction | Stakeholder reports \+ analytics gaps | Conversion rate |
| Sample process | Competitive comparison \+ MoSCoW score | Transaction efficiency |

### **Tier 3: Optimization Opportunity (Could Improve)**

| Finding | Evidence Strength | Impact |
| :---- | :---- | :---- |
| Brand consolidation | Customer survey \+ operational analysis | Efficiency, cross-sell |
| Bulk ordering | Frontline priority (9.1 score) | Power user efficiency |
| ISO display | Segment-specific need | Automotive/medical conversion |

