# MOCAP Website Research Report
## Sections 1-7: Executive Summary through Feature Strategy

---

# 1. Executive Summary

## The Three Universal Failures

28 stakeholders across leadership and frontline roles identified three critical failures with remarkable consistency. These aren't feature requests. They're breakdowns that actively block revenue and erode customer trust.

**Search Dysfunction**  
68% of stakeholders mentioned this. The current search returns zero results for valid part numbers. Customers abandon the site and call instead. Sales reps field 15+ search-help calls daily. The system shows a 100% error rate in logs. IT estimates fixing this could drive a 20-25% sales increase.

**Customer Portal Gap**  
68% of stakeholders mentioned this. The absence of basic self-service drives 50%+ of all customer service calls. People want order status, tracking numbers, invoices. The Global Sales Director calls this "critical to 2030 goals" and warns that failure to deliver would "jeopardize multiple other strategies."

**Data Accuracy Crisis**  
64% of stakeholders mentioned this. Europe sees 40-50% order cancellations due to incorrect stock information. ERP sync delays range from two weeks to three months. Customers must call to verify every piece of information on the website. One product took 13 months to appear after launch.

## What Stakeholders Want (By Consensus)

Out of 900+ feature ratings from 24 stakeholders, five features emerged with 80-100% consensus:

```
Feature                          Consensus  Impact
Customer Portal                  100%       50%+ CS call reduction
Multi-Mode Smart Search          91%        20-25% revenue potential
Real-Time Stock Visibility       74%        40-50% European cancellation recovery
Logged-In Negotiated Pricing     91%        Unlocks repeat buyer self-service
Customer Carrier Accounts        80%        Eliminates shipping barriers
```

Every top-rated feature serves one goal: to enable self-service instead of forcing customer contact.

## The Business Case

**Revenue Recovery Potential:**
- Search fix: 20-25% sales increase
- Europe data accuracy: 40-50% of currently cancelled orders
- China market: Zero online orders despite $3.2M+ combined revenue
- Cart abandonment: 77% current rate indicates a massive conversion opportunity

**Operational Efficiency:**
- 50%+ reduction in customer service calls (order status inquiries)
- 70 manual orders processed daily could become self-service
- Sales teams freed from routine inquiries to focus on growth

**Strategic Risk:**
- Current site described as "barrier to growth" for new customers
- Competitive disadvantage as the industrial B2B market modernizes
- Foundation required for 2030 strategic objectives

## The Path Forward
The research reveals a clear priority structure:

**Phase 0: Foundation**  
Fix data quality before building features. Force decisions on brand architecture, regional rollout, MVP scope. No development until these are resolved.

**Phase 1: US MVP**  
Launch with five critical features: portal, search, stock, pricing, carrier accounts. Prove the foundation works. Add two strategic features: interactive tables, multi-path navigation.

**Phase 2: Enhancement**  
Add Cleartec and Beckett catalogs. Build configurators. Deploy Tier 2 features based on usage data.

**Phase 3: International**  
Roll out VAT handling, warehouse selection, translation, regional payment methods.

---

# 2. Business Context & Goals

## Who MOCAP Is

Four brands operate under one roof:

| Brand | Focus | Market Position |
|-------|-------|----------------|
| **MOCAP** | Protective closures, caps, plugs | Largest catalog, 85 series, ~66K variants |
| **Cleartec** | Clear packaging tubes, closures | Design-forward, 21 series, retail/fundraising |
| **Beckett** | Precision tool packaging | Industrial niche, 18 series, telescopic containers |
| **X-Treme Tape** | Silicone masking solutions | Strong brand equity, education-dependent |

The company serves 12+ international markets with 4,000+ active accounts. Revenue is 70% B2B, 30% direct-to-consumer. Customer split: 80% new, 20% returning.

## The Current Technical Reality

**Infrastructure:**
- 12+ year old custom Ajax CMS plus Magento 2
- Not mobile-friendly
- 31 regional domains creating fragmentation
- Three separate ERPs: Sage Fox Pro (32-bit, no API), EFACs (cloud XML-based), KingDee (China)

**Product Complexity:**
- Around 180 size chart column types
- Individual products with 320+ variants
- Kit items with dependencies
- Four-decimal pricing requirements

**Analytics Breakdown:**
- 100% cross-domain attribution failure
- No enhanced ecommerce tracking
- Search tracking completely broken
- Can't measure what matters

**Revenue Stats:**
- MOCAP main site: $2.5M revenue, 6,305 transactions
- 77% cart abandonment rate
- ~15 sample requests daily
- 70 manual orders processed daily by four-person CS team

## Regional Variations That Matter

**United States:**
- Mix of phone orders (Kate's team handles 70 daily) and online self-service
- Desktop-led (72%) but mobile is approaching one-third of traffic
- Returning buyers want speed, new buyers need education

**Europe (UK/EU/Poland):**
- Website is the primary customer acquisition channel
- 40-50% order cancellations due to data accuracy issues
- Recent warehouse shift (UK to Poland) poorly communicated
- Same-day shipping critical for special pricing customers

**Mexico:**
- Bridge role to US warehouse
- Cross-border complexity
- Consultative sales model
- Portal is essential for workload reduction

**China:**
- Zero online orders despite $3.2M+ combined Taobao/Alibaba revenue
- Relationship-based model dominates
- Cultural expectation for precision search
- KingDee ERP is separate from US systems

## Strategic Imperatives Driving This Project

**From the Global Sales Director:**
> "Critical to meet the company's 2030 goal. Failure to deliver would jeopardize multiple other strategies."

The website must transition from operational burden to revenue driver. Current state forces manual workarounds. New state must enable:

- Thousands of small accounts to self-serve profitably
- Sales team focus on large account acquisition
- 24/7 customer access to order information
- Speed advantage for negotiated pricing customers
- Foundation for international expansion

## What Success Looks Like

**Immediate:**
- Search success rate >95% (vs current 0%)
- Portal adoption >30% within first month
- CS calls down 25%

**Medium-term:**
- CS calls down 50%
- Manual order processing down 70%
- Sales inquiry calls down 80%
- Revenue per visit up 15%
- Conversion rate up 25%

**Long-term:**
- International revenue up 40%
- Small account self-service >80%
- Sales team consultative time up 50%
- Data accuracy complaints down 90%

---

# 3. Research Methodology

## Research Scope

This analysis synthesizes data from seven distinct research activities conducted between October and November 2025.

**Primary Research:**
- Live stakeholder interviews: 10 sessions, 12 participants (leadership, regional directors, IT)
- Written stakeholder feedback: 16 frontline team members (CS, inside sales, sales support)
- Total stakeholders: 28 unique voices across US, UK/EU, Mexico, China

**Product Analysis:**
- MOCAP catalog: 85 series, 2,195 SKUs, ~66,000 variants
- Cleartec catalog: 21 series, 328 SKU variants
- Beckett catalog: 18 series, 440 SKU variants
- X-Treme Tape catalog: 3 product types, 24 SKUs

**Behavioral Research:**
- CrazyEgg heatmap analysis: 13 pages across three brands
- Search log analysis: 1,000 queries sampled
- Google Analytics audit: Full year, three brand properties

**Market Research:**
- Competitor analysis: 14 B2B industrial suppliers
- MoSCoW prioritization: 24 stakeholders, 900+ feature ratings

**Supporting Documents:**
- Project brief and technical specifications
- Persona development (five primary buyer types)
- Stakeholder research synthesis

## Stakeholder Profile

### By Role (28 total):
```
Leadership/Directors:        12 participants (43%)
Customer Service:            8 participants (29%)
Sales (Inside/Field):        9 participants (32%)
IT/Operations:              3 participants (11%)
Marketing:                  1 participant (4%)

*Some participants hold multiple roles
```

### By Region:
```
United States:              14 participants (50%)
United Kingdom/Europe:       8 participants (29%)
Mexico:                     2 participants (7%)
China:                      1 participant (4%)
Regional Directors:         3 participants (11%)
```

### By Customer Proximity:
```
Direct customer interaction:  16 participants (57%)
Leadership/strategic:        12 participants (43%)
```

This split matters. Customer-facing staff rated stock visibility and data accuracy significantly higher than leadership, revealing daily operational realities that executives don't directly experience.

## Data Collection Methods

**Live Interviews (60-90 minutes each):**
- Open-ended discussion of pain points and opportunities
- Screen sharing through current website workflows
- Feature prioritization using 1-5 impact scale
- Technical constraint discussion with IT team

**Written Feedback Surveys:**
- Structured around daily operational challenges
- Top 5 priority feature selection
- Detailed pain point descriptions
- Feature impact rating (personal and customer dimensions)

**MoSCoW Prioritization:**
- 38-50 features rated by each stakeholder
- Two dimensions: Personal Impact (1-5) and Customer Impact (1-5)
- High priority threshold: 4.0+ on both dimensions
- Critical priority: 4.5+ on both, or 4.0+ with 75%+ consensus

**Product Catalog Audits:**
- Completeness analysis (descriptions, specs, dimensions)
- Data quality scoring across 15+ attributes
- Taxonomy structure evaluation
- Variant complexity documentation
- Cross-reference opportunity identification

**Behavioral Analysis:**
- CrazyEgg click heatmaps: Click patterns, dead clicks, rage clicks
- Scroll depth analysis
- Mobile vs desktop behavior comparison
- Search log parsing: Query patterns, error rates, latency

**Competitive Analysis:**
- Feature inventory across 14 competitors
- UX pattern documentation
- Pricing and positioning analysis
- Search and navigation comparison

## What Makes This Research Reliable

**Convergence across sources:**  
The same three failures emerged independently from live interviews, written feedback, analytics data, and behavioral analysis. When 68% of stakeholders mention search dysfunction without prompting, and search logs show 100% error rates, that's not coincidence.

**Quantified impacts:**  
40-50% European order cancellations. 70 manual orders daily. 15+ calls per rep for search help. 50%+ CS calls for order status. These aren't estimates. They're measured operational realities.

**Cross-regional validation:**  
US, Europe, Mexico, and China teams independently identified the same core issues. Regional variations exist (Europe's data accuracy crisis is more severe, China has zero online orders), but the fundamental problems transcend geography.

**Technical evidence:**  
Search logs provide 1,000 real queries with timestamps, error codes, and latency. Google Analytics shows 27K search page views despite broken functionality. CrazyEgg heatmaps reveal 11.6% dead clicks on table headers users expect to be sortable.

**Stakeholder consensus:**  
Out of 900+ individual feature ratings, five features achieved 80-100% consensus. This level of agreement across different roles, regions, and customer proximity levels is statistically significant.

## Research Limitations

**Missing voices:**  
The European Operations Director (Honorata), China Operations Director (Linda), and Cleartec Director (Dave) participated in interviews but didn't complete written MoSCoW surveys. Their feature prioritization data would likely strengthen regional and brand-specific insights.

**Sample size per brand:**  
Beckett and X-Treme Tape had limited stakeholder representation compared to MOCAP. Product catalog analysis partially compensates, but fewer operational voices from these brands means some nuance may be missed.

**No direct customer research:**  
This analysis relies on stakeholder observations of customer behavior rather than direct customer interviews. CrazyEgg and analytics data provide some behavioral validation, but customer voice is filtered through internal perspectives.

**Time constraints:**  
Search log analysis covered 1,000 queries (representative sample) rather than exhaustive analysis. CrazyEgg captured 13 pages rather than full site coverage. These samples reveal patterns but may miss edge cases.

---

# 4. Key Insights

## The Self-Service Imperative

The current website generates work. Customers call because they can't find products, can't see stock, can't track orders, can't see their pricing. Customer service exists to compensate for website failures.

Every top-rated feature (100%, 91%, 91%, 80%, 74% consensus) serves one strategic goal: eliminate the need for customers to contact the company for routine information.

**Current workflow:**
```
The customer needs the order status
  → Calls CS
    → CS looks up in ERP
      → Reads info over phone
        → Customer satisfied but inefficient
```

**Desired workflow:**
```
The customer needs the order status
  → Logs into the portal
    → Views status instantly
      → No call required
```

The math is straightforward. If 50%+ of CS calls are order status inquiries, and portal provides self-service, that's 50%+ call reduction. Kate's team processes 70 manual orders daily with four people. If those customers could place orders online with their carrier accounts and negotiated pricing visible, that's 70 fewer manual orders.

## Search as Foundation

Search dysfunction touches everything else. Can't browse effectively without working search as backup. Can't enable power users who think in part numbers. Can't support dimensional queries ("I need a 3-inch cap"). Can't cross-reference competitor part numbers.

The data is unambiguous:
- 100% error rate in search logs (999 of 1,000 queries)
- 85.7% zero-result queries
- 27K search page views (third highest on site)
- 15+ calls daily per CS rep just for search help

Search is rated the #2 priority with 91% consensus. IT estimates 20-25% sales increase potential from fixing it. The fix is technically straightforward: replace custom code with Magento native Elasticsearch.

Without working search, every other feature improvement hits a ceiling. Interactive tables help, but users still need search. Multi-path navigation helps, but power users still search. Configurators help, but only for new buyers who don't know what they need.

**Search is the foundation. Build it first.**

## Data Accuracy as Blocker

Jim (Beckett Operations) warns:  
> "Without 100% accurate data, automated portals or features could create more problems than they solve."

This isn't theoretical. Europe demonstrates the consequence. 40-50% order cancellations happen because website stock data doesn't match warehouse reality. The site shows Ukrainian warehouse when products ship from Poland. Lead times display 65 days for items manufactured in 14 days. Minimum quantities show 10,000 when customers can order 10.

**The problem has five dimensions:**

1. **Stock level inaccuracy:** Website and ERP show different numbers
2. **Lead time errors:** Manufacturing reality doesn't match site display
3. **Warehouse location confusion:** Recent UK-to-Poland shift poorly communicated
4. **Minimum order quantity issues:** Artificial barriers to sale
5. **Pricing errors:** Box quantities and price breaks inconsistent

**Root cause:** Sage Fox Pro is aged system. Custom sync code creates bottleneck. Updates take 2 weeks to 3 months. One product (RTL Series) took 13 months to appear after launch.

**Implication for this project:**  
Data audit must be Phase 0, not a parallel track. Launch with bad data creates worse experience than current broken site. Bad data means:
- Portal shows wrong order status
- Search returns products that aren't in stock
- Pricing displayed doesn't match checkout
- Customer trust erodes faster than it can be rebuilt

Take 2-4 weeks to audit and fix data before development. It's not a delay. It's a foundation.

## Tables Must Be Interactive

Users click on product tables expecting spreadsheet behavior. They try to sort by diameter. They attempt to filter by material. They click column headers assuming they're clickable.

CrazyEgg data shows:
- 48-54% of all clicks happen on product tables
- 11.6% are dead clicks on non-functional headers
- 4.3% are rage clicks on broken controls

This pattern appears across all three brands:
- MOCAP: 3,257 clicks total, 1,749 on table (53.7%)
- Cleartec: 1,388 clicks total, 667 on table (48.1%)  
- Beckett: 1,157 clicks total, 626 on table (54.1%)

**What users expect:**
- Sortable columns (size, price, availability)
- Filterable rows (show only FDA-approved)
- Searchable content (find "silicone" in table)
- Inline actions (add to cart without leaving)
- Imperial/metric toggle for MOCAP

**Current reality:**
- Static HTML tables
- No sorting
- No filtering
- No search within
- Separate "Add to Cart" page loads

Competitors prove this is table stakes. Caplugs has sortable tables. Fastenal has filterable grids. DBI has inline cart actions. MOCAP is behind market baseline.

## Visual Navigation Dominates

Text-based left sidebar navigation consistently underperforms. Users navigate by clicking images.

**Click distribution:**
```
MOCAP:
  Images: 22-33% of clicks
  Left sidebar: 5-8% of clicks
  Search: 6-7% fallback

Cleartec/Beckett:
  Images: 44-52% of clicks
  Left sidebar: 5-13% of clicks
  Search: 6-8% fallback
```

This reveals mental model: "Show me what it looks like, I'll tell you if it's what I need."

Navigation strategy must prioritize:
1. Visual product tiles with clear images
2. Image-first category pages
3. Mega menu with visual examples
4. Minimize reliance on text-only sidebar
5. Mobile: hamburger currently carries 31% of MOCAP mobile clicks (over-dependency risk)

## Consolidation with Nuance Required

Eight of 28 stakeholders mentioned brand confusion as a problem:
- "Most confusing thing is that the company name is MOCAP, the packaging products are Beckett which can be found on the Cleartec website"
- "Customers aren't aware we have two websites"
- "The split websites confuse customers"

But stakeholders also recognize brand-specific needs:
- MOCAP users want variant tables (show all 320+ variants at once)
- Cleartec users need visual design inspiration
- Beckett users need tool-type taxonomy
- X-Treme Tape buyers expect educational content

**The solution isn't "one size fits all":**

Unified platform ≠ identical experience

Build one technical foundation (codebase, database, ERP middleware) but deliver brand-specific experiences (theming, IA, configurators, navigation).

Think Apple. One company, different product lines (iPhone, Mac, iPad), each with tailored experience but shared infrastructure.

## Configurator Hesitation Reveals Design Opportunity

CrazyEgg shows 61.8% of clicks on Cleartec configurator dropdowns, but users hesitate 10-20 seconds before first selection. They're unsure what each parameter controls.

**Current pattern:**
```
[Dropdown 1: Select Option ▼]
[Dropdown 2: Select Option ▼]
[Dropdown 3: Select Option ▼]
[Dropdown 4: Select Option ▼]
```

Parameters appear without context. Users don't know if they're choosing:
- Functional specifications
- Aesthetic options
- Compatibility requirements
- Pricing variables

**Dead clicks and rage clicks on "Configure your Item" header:**
- 22 rage clicks
- 64 dead clicks
- Users expect help text or explanation

**Recommendation:**  
Step-based wizard with contextual guidance. "First, select your tube diameter." "Now choose your cap style." Progressive disclosure reduces cognitive load.

## Three Buyer Archetypes Drive Different Paths

Competitor analysis identified pattern validated by stakeholder interviews and CrazyEgg data:

**Veteran (30%):**
- Knows exact SKU
- Needs speed above all
- Search by part number, add to cart, checkout
- Desktop-dominant
- Tolerates current broken experience by calling in

**Problem Solver (50%):**
- Knows application ("protect threads during powder coating")
- Needs guided discovery
- Browses by use case, filters options, samples first
- Mix of desktop and mobile
- Gets frustrated and abandons or calls

**Explorer (20%):**
- Researching options
- Needs education
- Reads content, compares products, builds knowledge
- Mobile-friendly browsing
- Long consideration cycle

**Single-path navigation fails two-thirds of users.**

MOCAP currently optimizes for Veterans (part number search, variant tables) but breaks even that experience. Problem Solvers and Explorers get abandoned.

Multi-path IA required:
- "I Know My Part Number" (Veterans)
- Browse by Application (Problem Solvers)  
- Browse by Product Type (Problem Solvers)
- Browse by Industry (Explorers)
- Educational Content (Explorers)

## Mobile Parity, Not Afterthought

Current site isn't mobile-friendly. Yet mobile traffic approaches one-third:
- MOCAP: 27% mobile
- Cleartec: Similar mobile percentage
- Growing steadily

Mobile behavior differs from desktop:
- 31% of MOCAP mobile clicks go to hamburger menu (over-reliance)
- Visual navigation more dominant on mobile
- Form-filling more friction on mobile
- Configuration more difficult on mobile

But mobile users are real buyers, not just researchers. Cart abandonment is 77% overall (device split unknown due to broken analytics), but mobile likely higher.

**Design implication:**  
Not "mobile-first" ideology, but mobile parity. Core features must work equally well on both. Portal on phone. Search on tablet. Checkout on mobile. No degraded experience.

## Regional Feature Polarization Reveals Truth

MoSCoW ratings show dramatic regional splits on certain features:

**International Features:**
- Europe/Mexico/China: 5.0/5.0 average
- US: 1.5-2.0/5.0 average

Why? US team doesn't handle international complexity. VAT calculations, warehouse selection, currency conversion, delivery estimates across borders. These features don't impact US operations but are critical for international success.

**Sample Management Features:**
- Some stakeholders: 5.0/5.0 (desperate for limits)
- Other stakeholders: 2.0/5.0 (don't see abuse)
- Clear divide: those who process samples vs. those who don't

This polarization validates feature relevance. When half rate something 5/5 and half rate it 2/5, that's not mixed consensus. That's "critical for specific use case, irrelevant otherwise."

**Design implication:**  
Build features for those who need them intensely. Don't average scores and assume 3.5/5 means "moderately important to everyone." It means "critical to some, irrelevant to others."

---

# 5. Digital Experience Strategy & Vision

## UX Strategy Overview

The website must transform from operational burden to revenue driver. Current state forces manual workarounds, creates customer frustration, blocks self-service. New state enables independence, transparency, speed.

This requires simultaneous evolution across four layers:

**Foundation Layer: Fix What's Broken**
- Search that returns results
- Data that reflects reality  
- Analytics that measure behavior
- Performance that inspires confidence

**Enablement Layer: Build Self-Service**
- Portal for order visibility
- Pricing transparency for logged-in users
- Stock visibility for planning
- Carrier accounts for seamless ordering

**Optimization Layer: Reduce Friction**
- Interactive tables users can manipulate
- Multi-path navigation for different mental models
- Configurators that guide decisions
- Mobile parity for on-the-go access

**Growth Layer: Drive Value**
- Reorder flows for repeat buyers
- Sample requests integrated with purchase
- Educational content for explorers
- Guided discovery for problem solvers

These layers build on each other. Can't optimize friction until self-service works. Can't enable self-service until foundation is fixed.

## The Consolidation Question

Current state: Three separate websites, 31 regional domains, fragmented customer experience.

Three architectural approaches emerged from research:

### Option A: Complete Separation
**Structure:** MOCAP.com, Cleartec.com, Beckett.com remain independent  
**Pros:** Brand clarity preserved, minimal disruption, independent optimization  
**Cons:** Duplicate development, fragmented customer data, no cross-sell, SEO dilution

**Stakeholder support:** Low. Only 2 of 28 saw this as viable path forward.

### Option B: Full Consolidation  
**Structure:** Single MOCAP.com with all brands, unified navigation, shared cart  
**Pros:** Maximum efficiency, unified data, cross-sell enabled, SEO consolidated  
**Cons:** Brand dilution risk, complex IA, one-size-fits-all UX, navigation overload

**Stakeholder support:** Moderate. 40% favor this approach, especially operations and IT.

### Option C: Hybrid Platform
**Structure:** One technical platform, brand-specific experiences  
**Pros:** Technical efficiency + brand preservation, cross-sell possible, flexible optimization  
**Cons:** More complex to design, requires thoughtful IA, slightly higher initial dev cost

**Stakeholder support:** Strong. 58% prefer this once explained, aligns with Apple model.

## Recommended Approach: Hybrid Platform

**Technical foundation:** One codebase, one database, one ERP middleware, one analytics property

**Experience layer:** Brand-specific theming, IA, configurators, navigation

**Implementation options:**

**Option C1: Brand Subdomains**
```
mocap.domain.com
cleartec.domain.com  
beckett.domain.com
xtreme.domain.com
```
Clear brand separation in URL. Shared backend. Cross-brand search optional. SEO benefit from domain authority.

**Option C2: Brand Paths**
```
domain.com/mocap
domain.com/cleartec
domain.com/beckett
domain.com/xtreme
```
Unified domain. Easier cross-brand navigation. Simpler analytics. Stronger SEO consolidation.

**Recommendation: C1 (Brand Subdomains)**

Provides clearest brand identity. Customers land on "cleartec.domain.com" and experience feels native. Backend sharing invisible to users. Cross-brand search available but not forced. Regional domains can mirror structure (uk.mocap.domain.com).

## What "Hybrid" Means in Practice

### Shared Infrastructure (Invisible to Users):
- Single Magento instance
- Unified product database
- Shared customer accounts (optional single login)
- Consolidated ERP middleware
- One GA4 property (with brand filters)
- Shared payment processing
- Unified order management

### Brand-Specific Experience (Visible to Users):
- Custom theme per brand
- Brand-specific homepage
- Tailored navigation structure
- Custom configurators (Cleartec tubes, Beckett tools)
- Brand voice in copy
- Unique visual design
- Optimized mobile layouts

### Example User Journeys:

**MOCAP User (Veteran Buyer):**
```
Lands on: mocap.domain.com
Sees: Clean industrial design, prominent search
Types: Part number RVC9044
Result: Instant match, variant table, add to cart
Checkout: Uses saved carrier account
```

**Cleartec User (Design Explorer):**
```
Lands on: cleartec.domain.com
Sees: Visual showcase, application categories
Browses: Gift packaging → Clear tubes
Configurates: Diameter, length, cap style
Samples: Adds to cart with main order
```

**Cross-Brand User (Manufacturer):**
```
Lands on: mocap.domain.com
Searches: "Powder coating masking"
Results: MOCAP caps + X-Treme tape
Subtle indication: X-Treme logo on tape results
Adds both: Single cart, single checkout
```

Cross-brand discovery happens organically, not forcibly.

## Main UX Principles

### 1. Speed Over Perfection

Veterans want speed. They know exactly what they need. Every click is friction.

**Design for:**
- Instant part number match in search
- Skip-the-queue "I Know My Part Number" entry
- One-click reorder from history
- Inline cart actions in tables
- Express checkout with saved payment

**Don't force:**
- Guided wizards on users who don't need them
- Required configurators for known parts
- Multiple page navigation for simple purchases
- Account creation when guest checkout works

### 2. Guide the Uncertain

Problem Solvers and Explorers need guidance. They don't know taxonomy. They think in applications, not product codes.

**Design for:**
- Application-based navigation ("Protect during painting")
- Progressive disclosure in configurators
- Educational content at decision points
- "Not sure? Here's what others like you ordered"
- Visual examples showing use cases

**Don't assume:**
- Users know difference between "cap" and "plug"
- Technical specs are meaningful without context
- Product hierarchy is obvious
- Material properties are understood

### 3. Make Tables Tools, Not Displays

Users interact with tables expecting spreadsheet behavior. Current static tables frustrate this mental model.

**Design for:**
- Sortable columns (any attribute)
- Filterable rows (multi-select)
- Searchable content (instant filter)
- Inline actions (cart, sample, compare)
- Visible row count ("Showing 47 of 185 variants")

**Include:**
- Clear active filter indicators
- Reset filters button
- Column visibility toggle (hide/show attributes)
- Export to CSV option for technical buyers
- Imperial/metric toggle for MOCAP

### 4. Mobile Parity, Zero Compromise

Mobile users are buyers, not just researchers. One-third of traffic. Growing.

**Design for:**
- Touch targets 44px minimum
- Thumb-zone primary actions
- No hover-required interactions
- Vertical scrolling over horizontal
- Progressive disclosure (expand/collapse)

**Test for:**
- Forms completable on phone
- Tables usable on tablet
- Search functional with autocomplete
- Images high-res but fast-loading
- Checkout flow mobile-optimized

### 5. Transparency Builds Trust

Data accuracy crisis eroded trust. Every stock display, price, lead time is now suspect. Users call to verify.

**Rebuild trust through:**
- Real-time stock numbers (not cached)
- Clear warehouse location
- Honest lead times
- "Updated 5 minutes ago" timestamps
- "Call us if you need it sooner" options

**Never show:**
- Stock if ERP sync is stale
- Pricing if it might be wrong
- Delivery estimates if warehouse isn't confirmed
- Vague "available soon" without date

**If data is uncertain, say so:**
- "Stock updating, call for current availability"
- "Custom configuration, contact for quote"
- "Lead time varies, we'll confirm after order"

Honesty > false certainty.

### 6. Progressive Disclosure Reduces Overload

MOCAP catalog has 85 series, ~66,000 variants. Showing everything at once overwhelms.

**Design for:**
- Start broad, narrow progressively
- Show 10-20 results, expand with interaction
- Collapse advanced options initially
- Reveal complexity as needed
- Provide escape hatches ("Start over", "View all")

**Avoid:**
- All filters visible on page load
- 320-variant tables without grouping
- Configuration screens with 12 simultaneous choices
- Mega-menus with every possible option

### 7. Self-Service with Safety Net

Enable independence, but never leave users stranded.

**Design for:**
- Clear "Need help? Call us" presence
- Contextual assistance ("What's this?" tooltips)
- Escape to human ("Talk to specialist")
- Sample options when uncertain
- "Recommended for you" based on behavior

**Never force:**
- Self-service on complex custom orders
- Automated responses when call is better
- Configuration when consultation needed
- Account creation to get assistance

Portal and search enable independence. Phone number provides safety.

---

# 6. Information Architecture

## Current IA Problems

### The Flat Taxonomy Trap

MOCAP's 85 product series live in flat list:
```
- Caps, Plastic Protective
- Caps, Round Vinyl
- Caps, Tapered Vinyl  
- Hole Plugs
- Plugs, Button Style
- Plugs, Pull Tab
- Plugs, Universal
- [... 78 more ...]
```

Problems:
- 46 series contain word "Plug"
- 28 series contain word "Cap"
- No clear distinction or hierarchy
- Users must read through entire list
- "Plug" and "Cap" often mean same thing

### The Missing Application Context

Current navigation thinks in product types. Users think in applications.

**Users ask:**
- "What protects threads during powder coating?"
- "What fits a 3/4-inch rod?"
- "What works for outdoor use?"

**Site answers:**
- "Here are 46 types of plugs"
- "Check each product specification"
- "Call us and we'll help you"

Gap between user mental model and IA is why search fails. Taxonomy designed for catalog management, not customer discovery.

### The Brand Confusion

Beckett products appear on Cleartec site. Company name is MOCAP but products on other sites. No unified navigation across brands.

From stakeholders:
> "Most confusing thing is that the company name is MOCAP, the packaging products are Beckett which can be found on the Cleartec website."

Architecture optimized for operational convenience, not customer understanding.

## Recommended IA Structure

### Multi-Path Framework

No single navigation path serves all users. Build multiple entry points for different mental models:

```
┌─────────────────────────────────────────────────────────┐
│              MOCAP.DOMAIN.COM HOMEPAGE                  │
│                                                         │
│   Four Entry Paths (User Choice):                      │
│                                                         │
│   1. I Know My Part Number                            │
│      └─ Search: RVC9044 → Direct result               │
│                                                         │
│   2. Browse by Application                             │
│      └─ Thread Protection → Powder Coating →          │
│          Recommended products                          │
│                                                         │
│   3. Browse by Product Type                            │
│      └─ Caps → Vinyl Caps → Round → Size selection   │
│                                                         │
│   4. Browse by Industry                                │
│      └─ Automotive → Paint Protection → Products      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Path 1: Part Number Search (Veterans - 30%)

**Target user:** Knows exact SKU, needs speed  
**Behavior:** Types part number, expects instant match  
**Design:**

```
┌───────────────────────────────────────┐
│  I KNOW MY PART NUMBER                │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │ RVC9044                      🔍 │ │
│  └─────────────────────────────────┘ │
│                                       │
│  → Instant result with:               │
│     - Product image                   │
│     - Specifications                  │
│     - Stock status                    │
│     - Pricing (if logged in)          │
│     - Add to Cart button              │
│                                       │
│  → Variant table below                │
│     (if multiple sizes/colors)        │
└───────────────────────────────────────┘
```

No navigation chrome. No distractions. Search → Result → Cart.

### Path 2: Application Hierarchy (Problem Solvers - 50%)

**Target user:** Knows what needs protecting, not product names  
**Behavior:** Thinks "I need to protect threads during painting"  
**Design:**

**Level 1: Primary Applications**
```
Thread Protection
Surface Protection  
End Protection
Shipping Protection
```

**Level 2: Use Cases**
```
Thread Protection →
  - Powder Coating
  - Painting
  - Plating/Anodizing
  - Storage/Transit
  - Installation
```

**Level 3: Product Recommendations**
```
Powder Coating →
  Primary: High-temp silicone caps (400°F+)
  Alternative: Tapered vinyl plugs (250°F)
  Related: X-Treme masking tape
```

Each level narrows focus. Educational content explains why certain products fit certain uses.

### Path 3: Product Type Taxonomy (Problem Solvers - 50%)

**Target user:** Knows general category, needs to narrow by specs  
**Behavior:** "I need a cap, probably vinyl, for 1/2-inch diameter"  
**Design:**

**Level 1: Product Categories**
```
Caps & Plugs
  - Caps, Vinyl (round, tapered, flanged)
  - Caps, Plastic (threaded, snap-on, push-on)  
  - Plugs, Button & Pull Tab
  - Plugs, Universal Sizing

Tubes & Closures (Cleartec)
  - Clear Tubes
  - End Caps for Tubes
  - Custom Packaging

Tool Protection (Beckett)
  - End Mills & Inserts
  - Taps & Drills
  - Saws & Cutters
```

**Level 2: Filterable Product Tables**

Land on "Caps, Vinyl" → See interactive table with filters:
- Shape (round, tapered, flanged)
- Size range (ID, OD, length)
- Material (vinyl, silicone, PVC)
- Temperature rating
- Color
- Features (pull tab, flanged, FDA)

### Path 4: Industry/Use Case Pages (Explorers - 20%)

**Target user:** Researching solutions, needs education  
**Behavior:** "What do automotive manufacturers use?"  
**Design:**

**Landing page structure:**
```
AUTOMOTIVE INDUSTRY SOLUTIONS

[Hero image: Automotive assembly line]

Common Challenges:
  - Paint overspray protection
  - Thread damage during transport
  - Parts organization in warehouses
  - Clean room contamination

Our Solutions:

  1. Paint Masking
     Products: High-temp vinyl caps, X-Treme tape
     Use case: Mask threaded openings during paint booth
     Temperature: Up to 400°F
     [View products]

  2. Thread Protection  
     Products: Tapered plugs, flanged caps
     Use case: Protect threads during shipping
     Material: Durable vinyl, various colors
     [View products]

  3. [Additional solutions...]

Case Study: [Customer story]
Downloads: [Application guide PDF]
```

Educational first, transactional second. Build trust through expertise.

## Navigation Model

### Global Navigation (All Brands)

**Desktop mega-menu:**
```
┌──────────────────────────────────────────────────────────┐
│ MOCAP                                    🔍 Search  Cart │
├──────────────────────────────────────────────────────────┤
│ Products | Applications | Industries | Support | Account │
└──────────────────────────────────────────────────────────┘

Hover "Products" →

┌────────────────────┬─────────────────────┬──────────────┐
│ BY PRODUCT TYPE    │ BY APPLICATION      │ QUICK ACCESS │
├────────────────────┼─────────────────────┼──────────────┤
│ Caps & Plugs       │ Thread Protection   │ Best Sellers │
│ • Vinyl Caps       │ Surface Protection  │ New Products │
│ • Plastic Caps     │ Powder Coating      │ Sample Kits  │
│ • Button Plugs     │ Painting & Plating  │              │
│                    │ Shipping            │ [Part Search]│
│ Dip-Molding        │                     │ RVC9044  🔍  │
│ • Vinyl Dip Caps   │ Industry Pages:     │              │
│ • Custom Shapes    │ • Automotive        │              │
│                    │ • Aerospace         │              │
│ View All →         │ • Industrial        │              │
└────────────────────┴─────────────────────┴──────────────┘
```

Visual tiles with product images in mega-menu. Not text-only.

**Mobile navigation:**
```
☰ Menu

Tapping hamburger reveals:

┌──────────────────────────────┐
│ 🔍 Search...                 │
├──────────────────────────────┤
│ → I Know My Part Number      │
├──────────────────────────────┤
│ Products                 ▸   │
│ Applications             ▸   │
│ Industries               ▸   │
│ Support                  ▸   │
├──────────────────────────────┤
│ 👤 My Account                │
│ 🛒 Cart (2)                  │
└──────────────────────────────┘
```

Prominent search at top. Part number entry separate. Expandable categories. Quick access to account and cart.

### Contextual Navigation (Product Pages)

**Breadcrumb examples:**
```
Home > Thread Protection > Powder Coating > Vinyl Caps, Round

Home > Products > Caps & Plugs > Vinyl Caps > RVC Series

Home > Automotive > Paint Masking > High-Temp Caps
```

Multiple valid paths to same product. User understands context of how they arrived.

**Related navigation:**
```
You might also need:
  [Related products visually]
  - Complementary items
  - Alternative solutions
  - Accessories

Frequently bought together:
  [Bundles visually]
  - Main product + tape
  - Cap + plug combo
```

### Search Results Navigation

**Faceted search with visual category indicators:**
```
Showing 47 results for "3 inch cap"

Filters Applied:
  [Vinyl ×] [In Stock ×] [Clear All]

Refine By:
  Material
    ☑ Vinyl (42)
    ☐ Plastic (18)
    ☐ Silicone (12)

  Size
    ☑ 3" ID (47)
    ☐ 3.5" ID (23)

  Features
    ☐ Pull Tab (15)
    ☐ FDA Approved (8)

Sort By: [Relevance ▼]

Results:
  [Grid of products with images]
```

Progressive disclosure. Most common filters visible. "Show more" reveals advanced options.

## Page Types

### 1. Homepage (Brand-Specific)

**MOCAP Homepage:**
- Hero: "Find the perfect protective closure" with part number search prominent
- Four entry paths (tiles): Part Number | Application | Product Type | Industry
- Featured products carousel
- Applications showcase (visual)
- Trust indicators (customers, industries served)
- Quick links (Sample kits, New products, Resources)

**Cleartec Homepage:**
- Hero: Visual showcase of clear packaging in use
- Application tiles (Fundraising, Retail, Industrial, Custom)
- Featured projects/case studies
- Configurator preview
- Trust indicators (design services, quick turnaround)

Different brand priorities, different layouts.

### 2. Category Pages (L1/L2)

**Structure:**
- Page title + description (SEO + clarity)
- Category image/hero
- Subcategory tiles (visual navigation)
- Featured products in category
- Filter preview
- Educational content (use cases, materials guide)

**Example (Thread Protection category):**
```
THREAD PROTECTION SOLUTIONS

Protect threaded components during manufacturing, 
finishing, shipping, and storage.

[Visual tiles:]
┌─────────────┬─────────────┬─────────────┐
│ Powder      │ Painting &  │ Plating &   │
│ Coating     │ E-Coating   │ Anodizing   │
│ 400°F+      │ 250°F       │ Acid-resist │
└─────────────┴─────────────┴─────────────┘

Top Products:
[Carousel of 5-6 best-sellers with images]

Not sure what you need?
[Use our selection guide] [Request samples]
```

### 3. Product Family Pages (L3)

**Structure:**
- Product series name + overview
- Hero image showing product in use
- Key features (bullets)
- Interactive product table (THE main content)
- Specifications section
- Applications section
- Related products
- Downloads (datasheets, CAD files)

**Example (RVC Series - Round Vinyl Caps):**
```
ROUND VINYL CAPS (RVC SERIES)

Flexible vinyl caps protect threads, fittings, and 
tubes from damage during storage and transit.

Features:
• Temperature range: -20°F to 180°F
• Pull-tab option available
• Multiple colors (red, black, blue, yellow)
• FDA-compliant materials available

[INTERACTIVE TABLE]
Filter by size, color, features →
Sort by ID, OD, length, price →
Add to cart inline →
320 variants displayed

Applications:
• Thread protection during shipping
• Paint masking for small fittings
• Furniture leg protection
• Hydraulic fitting protection

[Related Products carousel]
[Technical datasheet download]
```

### 4. Product Detail Pages (L4, if needed)

**When to use:**
- Complex products needing extensive explanation
- Products with multiple configuration options
- Items requiring technical specifications
- Custom/specialty items

Most products don't need separate detail page. Table + specs on family page is sufficient. Detail pages for:
- X-Treme Tape (education-heavy)
- Beckett Telescopic Containers (complex specs)
- Custom configurations (Cleartec)

### 5. Application Landing Pages

**Structure:**
- Application name + hero image
- Problem statement (user pain point)
- Solution overview
- Recommended products
- Case study or testimonial
- Related applications
- CTA (Request samples, Get quote)

**Example (Powder Coating Protection):**
```
POWDER COATING MASKING SOLUTIONS

Problem:
Powder coating creates perfect finish, but overspray 
ruins threaded openings, holes, and precision surfaces.

Our Solutions:

High-Temperature Vinyl Caps
  Up to 400°F continuous
  Available with pull tabs
  Sizes: 1/4" to 6" ID
  [View products]

Silicone Masking Plugs
  Up to 500°F continuous
  Reusable for multiple cycles
  Custom sizes available
  [View products]

X-Treme Masking Tape
  Clean removal after cure
  No residue
  Various widths
  [View products]

[Case Study: Automotive Manufacturer saves 20 hours/week]

[Technical Application Guide PDF]
[Request sample kit]
```

### 6. Customer Portal Pages

**My Account Dashboard:**
```
Welcome back, [Name]

Quick Actions:
  [Reorder] [Track Shipments] [View Invoices]

Recent Orders:
  Order #12345 | Dec 1 | Delivered
  Order #12344 | Nov 28 | In Transit

Saved Items:
  [3 products in watch list]

Account Summary:
  Negotiated pricing active
  Carrier: UPS account #12345
  Payment terms: Net 30
```

**Order History Page:**
```
ORDER HISTORY

Filters:
  Date range: [Last 6 months ▼]
  Status: [All ▼]
  Product: [Search orders...]

Orders:

┌─────────────────────────────────────────────────────┐
│ Order #12345                           Dec 1, 2025  │
│ Status: Delivered                                   │
│ Items: 3 | Total: $487.50                          │
│ [View Details] [Reorder] [Download Invoice]        │
└─────────────────────────────────────────────────────┘

[Load more]
```

**Order Detail Page:**
```
ORDER #12345

Status Timeline:
  ● Delivered - Dec 3, 2025
  ● Out for Delivery - Dec 3, 8:42 AM  
  ● Shipped - Dec 2, 4:15 PM
  ● Processing - Dec 1, 2:30 PM
  ● Placed - Dec 1, 2:15 PM

Tracking: [UPS: 1Z999AA10123456784]

Items Ordered:
┌──────────────────────────────────────────┐
│ RVC9044 - Round Vinyl Caps, Red         │
│ Quantity: 1,000 | Price: $125.00        │
│ [Add to Cart] [Reorder just this item]  │
└──────────────────────────────────────────┘

Shipping Address: [...]
Billing Address: [...]
Payment Method: Net 30 Terms

[Download Invoice PDF]
[Download Packing Slip]
[Contact Customer Service about this order]
```

### 7. Search Results Page

See "Search Results Navigation" above. Key elements:
- Query understanding ("Showing results for...")
- Faceted filters (progressive disclosure)
- Sort options
- Grid/list view toggle
- Pagination or infinite scroll
- Zero-results handling

### 8. Configurator Pages (Cleartec, Beckett)

**Structure:**
- Step-based wizard
- Visual preview updates live
- Progressive disclosure (one parameter at a time)
- Clear "Why this matters" explanation
- Price updates as configured
- Add to cart or request quote
- Save configuration option

**Example (Cleartec Tube Configurator):**
```
CONFIGURE YOUR CLEAR TUBE

Step 1 of 4: Choose Diameter

We'll help you build the perfect tube for your needs.

Select inside diameter:
  ○ 1/2"    ○ 3/4"    ○ 1"
  ○ 1.25"   ○ 1.5"    ○ 2"
  ● 3" [SELECTED]

Why this matters:
Diameter determines what fits inside. Measure your 
product and add 1/8" clearance for easy insertion.

[Visual preview showing 3" tube]

[Continue to Step 2: Length →]
```

Each step narrows options. Users see implications of each choice before proceeding.

## Accessibility Principles

### WCAG 2.1 AA Compliance (Minimum)

**Perceivable:**
- Text contrast 4.5:1 minimum (7:1 for AAA targets)
- Images have descriptive alt text
- Video content has captions
- Color not sole indicator (use icons + text)
- Text resizable to 200% without horizontal scroll

**Operable:**
- All functionality keyboard-accessible
- Skip links to main content
- Focus indicators visible
- No keyboard traps
- Sufficient time to complete forms

**Understandable:**
- Clear, simple language (8th grade reading level)
- Consistent navigation patterns
- Input assistance (helpful error messages)
- Forms with clear labels and instructions

**Robust:**
- Valid HTML5 semantic markup
- ARIA labels where native HTML insufficient
- Compatible with screen readers (JAWS, NVDA, VoiceOver)
- Responsive design works with zoom/magnification

### Specific Implementations

**Search:**
- Autocomplete with ARIA live region announcements
- "Search returned 47 results" screen reader notification
- Keyboard navigation through autocomplete suggestions

**Tables:**
- Proper table markup (thead, tbody, th scope)
- Sortable column headers announce sort state
- Filter controls keyboard-accessible
- Row count announced after filtering

**Configurators:**
- Step progress announced
- Required fields clearly marked
- Error messages descriptive and actionable
- Success confirmation clear

**Portal:**
- Account navigation landmarks
- Order status changes announced
- Table navigation shortcuts
- Invoice downloads accessible

**Mobile:**
- Touch targets 44×44px minimum
- Sufficient spacing between clickable elements
- Form inputs sized for easy tapping
- Zoom enabled (no viewport restrictions)

### Testing Plan

- Automated: aXe, WAVE, Lighthouse
- Manual: Keyboard-only navigation
- Screen readers: Test with JAWS and VoiceOver
- Zoom: Test at 200%, 400% magnification
- Color: Test with color blindness simulation
- User testing: Include users with disabilities

Accessibility isn't checkbox compliance. It's design quality.

---

# 7. Feature Strategy (UX & CRO)

## Prioritization Philosophy

28 stakeholders want 50+ features. Budget and timeline allow 5-7 in MVP. Prioritization must be ruthless and data-driven.

Three factors determine priority:

**1. Stakeholder Consensus (MoSCoW Data)**
- 100% consensus: Customer Portal
- 91% consensus: Search, Pricing
- 80% consensus: Carrier Accounts
- 74% consensus: Stock Visibility

**2. Foundation Dependencies**
- Search enables everything else
- Data accuracy blocks automation
- Portal requires ERP integration
- Tables need database restructure

**3. Impact Potential**
- Search fix: 20-25% sales increase
- Portal: 50%+ CS call reduction
- Data accuracy: 40-50% European order recovery
- Carrier accounts: Unlocks online ordering

Features that score high on all three dimensions are MVP. Features that score high on one or two are Phase 1+.

## Prioritization Matrix

### TIER 1: Critical (MVP Launch Blockers)

These five features represent the non-negotiable foundation. Launch without them creates worse experience than current broken site.

| Feature | Consensus | Why MVP | Quantified Impact |
|---------|-----------|---------|-------------------|
| **Customer Portal** | 100% (22/22) | Order status = 50%+ CS calls | 50%+ call reduction, 24/7 self-service |
| **Multi-Mode Smart Search** | 91% (21/23) | Current 100% error rate blocks discovery | 20-25% sales increase, eliminate 15+ calls/rep/day |
| **Real-Time Stock Visibility** | 74% (17/23) | Europe 40-50% cancellations due to bad data | Trust restoration, order accuracy >98% |
| **Logged-In Negotiated Pricing** | 91% (20/22) | Repeat buyers can't see their prices | Unlocks self-service for price-sensitive customers |
| **Customer Carrier Accounts** | 80% (12/15) | Shipping cost barrier to online orders | Removes friction for established accounts |

**Combined Impact:** These five features together address the three universal failures (search, portal, data accuracy) and unlock self-service for established customers.

### TIER 2: High-Value (Phase 1 Strategic)

These features significantly improve experience and drive conversion but aren't launch blockers. Include if budget/timeline permit, otherwise Phase 1+ enhancement.

| Feature | Consensus | Why High-Value | Experience Impact |
|---------|-----------|----------------|-------------------|
| **Interactive Product Tables** | Strong implicit (48-54% clicks) | Users expect spreadsheet behavior | Reduces friction, enables self-directed discovery |
| **Multi-Path Navigation** | Moderate (competitor validation) | Single path fails 70% of users | Problem Solvers and Explorers enabled |

**Strategic Reasoning:** Tables and navigation dramatically improve UX but aren't blocking. Current static tables work (poorly). Portal and search literally don't function.

### TIER 3: Enhancement (Phase 1+ Addition)

Features with strong stakeholder support or clear conversion benefit but buildable after MVP proves foundation.

| Feature | Consensus | Why Later | Value Timing |
|---------|-----------|-----------|-------------|
| **Bulk Reorder** | 83% (15/18) | Requires portal foundation | Repeat buyer efficiency after portal adoption |
| **Delivery Date Estimates** | 75% (15/20) | Needs accurate lead time data | Trust builder once data accuracy proven |
| **Online Sample Requests** | Polarized (5.0 vs 2.0) | Requires policy decision + abuse controls | Growth driver after sample policy set |
| **Quantity Calculator** | 67% (12/18) | Nice-to-have utility | Reduces calculation errors, not blocking |
| **Product Finder/Wizard** | 56% (14/25) | Duplicates search for some users | Helps Explorers, overlaps with navigation |

**Phase Timing:** Add these 4-8 weeks after MVP launch based on usage data showing which would have highest impact.

### TIER 4: Optimization (Phase 2+)

Features that optimize experience for specific segments or add convenience but low immediate impact.

| Feature | Consensus | Why Phase 2 | Segment Value |
|---------|-----------|-------------|---------------|
| **AI Product Advisor** | Mixed | Technology risk, training needed | Long-term vision, wait for data |
| **Visual Product Preview** | Moderate | Complex for high-variant products | Nice enhancement, not essential |
| **Industry-Specific Pages** | Moderate | Content creation intensive | SEO benefit, build over time |
| **Product Comparison** | Low-Moderate | Limited use case for caps/plugs | Technical buyer tool, niche |
| **Personalization Engine** | Low initial | Requires user behavior data | Optimize after 6+ months data |

**Strategic Note:** Don't build these until MVP succeeds and usage patterns validate investment.

## Experience Impact by Feature

### Customer Portal: Foundation for Self-Service

**What it solves:**
- "Where's my order?" (50%+ of CS calls)
- "Can I get tracking number?" (4-5 tickets daily)
- "What did I pay last time?" (pricing memory)
- "Can you send me invoice?" (document requests)

**Core capabilities:**

```
MY ORDERS

Recent Orders:
┌───────────────────────────────────────────────────┐
│ Order #12345                        Dec 1, 2025   │
│ ● Delivered | UPS: 1Z999AA10123456784             │
│ Items: 3 | Total: $487.50                         │
│ [View Details] [Reorder] [Download Invoice]       │
└───────────────────────────────────────────────────┘

Quick Actions:
  [Reorder Favorites] [Track All Shipments]

Order History:
  [Filter by date/product/status]
  [Export to CSV]
```

**UX Considerations:**
- Mobile-first design (users check orders on phone)
- Real-time tracking integration
- One-click reorder (skip cart)
- Email notifications for status changes
- Invoice download (PDF)

**CRO Impact:**
- Reduces barrier to first online order (trust)
- Enables repeat purchase without CS contact
- Exposes full order history (encourages larger orders)
- Shows negotiated pricing (reinforces value)

**Success Metrics:**
- Adoption rate >30% in first month
- CS calls down 25% in first month, 50% by month 3
- Repeat order time reduced by 60%+
- Invoice download requests eliminated

### Multi-Mode Smart Search: Discovery Foundation

**What it solves:**
- 100% current error rate
- 15+ calls daily per rep for search help
- Veterans can't find parts by SKU
- Problem Solvers can't search by application
- Dimensional queries fail

**Search modes required:**

**1. Part Number Search**
```
User types: RVC9044
Result: Instant exact match
         → Product page or Add to Cart
```

**2. Dimensional Search**
```
User types: 3 inch cap
Result: Parse dimensions → Filter products
         → "47 results for 3" ID caps"
```

**3. Application Search**
```
User types: powder coating masking
Result: Application landing page
         → "Products for Powder Coating Protection"
         → Recommended: High-temp vinyl caps
```

**4. Material/Property Search**
```
User types: FDA approved silicone
Result: Filter by material + certification
         → "12 FDA-approved silicone products"
```

**5. Competitor Cross-Reference**
```
User types: Caplugs 123-456
Result: MOCAP equivalent identified
         → "Our equivalent: RVC9044"
```

**6. Natural Language**
```
User types: What protects 1/2 inch threads
Result: Intelligent parsing
         → "Thread protection for 1/2" diameter"
         → Recommended products
```

**Implementation Requirements:**
- Elasticsearch (Magento native) replaces custom code
- Product data enrichment (applications, use cases)
- Synonym dictionary ("cap" = "plug" = "cover")
- Competitor reference database
- Dimension parsing algorithm
- Autocomplete with product thumbnails

**UX Considerations:**
- Autocomplete shows top 5 results with images
- "Did you mean..." for typos
- Zero-results page offers alternatives
- Search analytics to continuously improve
- Prominent placement (every page header)

**CRO Impact:**
- Eliminates 85.7% zero-result failures
- Reduces search-related CS calls by 80%+
- Increases product discovery and cross-sell
- Converts Veterans who currently call
- Enables mobile search (currently broken)

**Success Metrics:**
- Search success rate >95%
- Search-to-conversion rate >15%
- Zero-result queries <5%
- Average latency <500ms
- Search usage >50% of sessions

### Real-Time Stock Visibility: Trust Restoration

**What it solves:**
- Europe 40-50% cancellations due to bad stock data
- Customers call to verify every stock number
- "Out of stock" when actually available (allocation issues)
- Warehouse location confusion (Ukraine vs Poland)
- Lead time errors (65 days shown, 14 days actual)

**Display requirements:**

```
┌─────────────────────────────────────────────────┐
│ RVC9044 - Round Vinyl Cap, Red, 3" ID          │
│                                                 │
│ Stock Status:                                   │
│ ✓ 15,000 available | Poland warehouse          │
│ ✓ 8,500 available | US warehouse               │
│ ✗ 0 available | UK warehouse                   │
│                                                 │
│ Delivery:                                       │
│ • Poland: Ships today if ordered by 2 PM GMT   │
│ • US: Ships today if ordered by 12 PM EST      │
│                                                 │
│ Lead Time:                                      │
│ Standard items: 14 days                         │
│ Custom colors: 21 days                          │
│                                                 │
│ Updated: 5 minutes ago                          │
└─────────────────────────────────────────────────┘
```

**UX Considerations:**
- Never show stock if ERP sync stale (>15 minutes)
- Clear warehouse location with shipping origin
- Honest lead times (not aspirational)
- "Low stock" warning at <500 units
- "Call for availability" if uncertain
- Timestamp visibility builds trust

**CRO Impact:**
- Eliminates verification calls
- Reduces cart abandonment (trust in numbers)
- Enables quantity planning
- Sets accurate delivery expectations
- Recovers 40-50% of European cancellations

**Success Metrics:**
- Stock accuracy verification calls down 90%
- European order cancellation rate <10%
- Cart abandonment at stock display <30%
- Customer trust score up 40%+

### Logged-In Negotiated Pricing: Repeat Buyer Enabler

**What it solves:**
- Customers don't know their special pricing
- Must call for quote on every reorder
- Can't place same-day orders (waiting for CS)
- Price uncertainty blocks online ordering

**Display patterns:**

**Public (not logged in):**
```
┌─────────────────────────────────────┐
│ List Price: $0.125 each             │
│                                     │
│ [Log In] to see your pricing        │
└─────────────────────────────────────┘
```

**Logged In (standard customer):**
```
┌─────────────────────────────────────┐
│ Your Price: $0.115 each             │
│ (8% discount)                       │
│                                     │
│ Quantity breaks:                    │
│ 1,000-4,999:    $0.115              │
│ 5,000-9,999:    $0.108              │
│ 10,000+:        $0.102              │
└─────────────────────────────────────┘
```

**Logged In (special pricing customer):**
```
┌─────────────────────────────────────┐
│ Your Negotiated Price: $0.095 each  │
│ (Contract pricing through Dec 2026) │
│                                     │
│ Net 30 payment terms                │
│ Free shipping on orders $500+       │
└─────────────────────────────────────┘
```

**UX Considerations:**
- Clear differentiation (your price vs list)
- Quantity break calculator
- Price history visible in portal
- Contract expiration warnings
- "Contact sales" CTA for better pricing

**CRO Impact:**
- Unlocks self-service for repeat buyers
- Removes "call for quote" friction
- Increases average order value (quantity breaks visible)
- Speeds reorder time (no waiting for quote)
- Builds customer loyalty (transparency)

**Success Metrics:**
- Repeat customer online orders up 60%+
- "Request quote" calls down 40%
- Average order value up 15%
- Customer satisfaction with pricing up 50%

### Customer Carrier Accounts: Shipping Barrier Removal

**What it solves:**
- Established customers forced to use MOCAP shipping
- Can't leverage own negotiated carrier rates
- Shipping cost barrier to online ordering
- Freight/international complexity

**Implementation:**

```
CHECKOUT - SHIPPING METHOD

Select carrier:

○ MOCAP Standard Shipping
  Delivery: Dec 5-7
  Cost: $45.50

● Use My UPS Account
  Account: ****1234 [Change]
  Delivery: Dec 5 (estimated)
  Cost: Billed to your account

○ Use My FedEx Account  
  [Enter account number]

[Save carrier preference for future orders]
```

**UX Considerations:**
- Account validation (real-time API check)
- Default to saved preference
- Clear cost comparison
- Delivery estimate for all options
- Freight/LTL option for large orders

**CRO Impact:**
- Removes cost objection for established customers
- Enables immediate order placement (no quote wait)
- Increases order frequency (lower friction)
- Unlocks larger orders (freight options)

**Success Metrics:**
- 60%+ of B2B orders use carrier accounts
- Online orders from established accounts up 80%
- Average order value up 20%
- Shipping-related CS calls down 70%

### Interactive Product Tables: Self-Directed Discovery

**What it solves:**
- 48-54% of clicks on static tables
- 11.6% dead clicks on headers expecting sort
- Can't filter 320-variant products efficiently
- No way to compare specifications
- Imperial/metric confusion

**Functionality required:**

```
ROUND VINYL CAPS - RVC SERIES (47 variants shown)

Filter:  [Color: All ▼] [Temp: All ▼] [Feature: All ▼]
Search within: [     ] 🔍

┌──────┬─────────┬─────┬──────┬────────┬────────┬────────┐
│ SKU  │ ID      │ OD  │ Len  │ Color  │ Temp   │ Action │
│ ⇅    │ ⇅       │ ⇅   │ ⇅    │        │        │        │
├──────┼─────────┼─────┼──────┼────────┼────────┼────────┤
│ 9044 │ 3.00"   │ ... │ ...  │ Red    │ 180°F  │ [Cart] │
│ 9045 │ 3.00"   │ ... │ ...  │ Black  │ 180°F  │ [Cart] │
│ ...  │         │     │      │        │        │        │
└──────┴─────────┴─────┴──────┴────────┴────────┴────────┘

Showing 47 of 320 variants | [Show all]
[⚙ Toggle metric] [↓ Export CSV]
```

**Features:**
- Click any column header to sort (⇅ indicator)
- Multi-select filters (checkbox dropdowns)
- Search within table (instant filter)
- Inline "Add to Cart" (no page reload)
- Imperial/metric toggle (MOCAP only)
- "Compare" checkbox (select 2-5 items)
- Export visible results to CSV

**UX Considerations:**
- Default sort: Most popular first
- Sticky header when scrolling
- Filter count indicators ("Color (5 active)")
- Clear active filters easily
- Mobile: Simplified table, fewer columns

**CRO Impact:**
- Reduces clicks to find correct variant
- Increases confidence in selection
- Enables technical buyer workflows
- Reduces "which size?" CS calls
- Improves mobile usability

**Success Metrics:**
- Table interaction rate >60%
- Time to add item to cart -40%
- "Wrong product" returns down 30%
- Mobile table usage >25%

### Multi-Path Navigation: Mental Model Matching

**What it solves:**
- Single taxonomy fails 70% of users
- Veterans want part number entry
- Problem Solvers think in applications
- Explorers need industry context
- Current flat list overwhelms

**Paths implemented:**

**Path 1: Part Number (Veterans)**
```
Homepage → [I Know My Part Number]
         → Search: RVC9044
         → Product page
```

**Path 2: Application (Problem Solvers)**
```
Homepage → [Browse by Application]
         → Thread Protection
         → Powder Coating
         → Recommended products
```

**Path 3: Product Type (Problem Solvers)**
```
Homepage → [Browse by Product]
         → Caps & Plugs
         → Vinyl Caps
         → Round Vinyl Caps (RVC)
```

**Path 4: Industry (Explorers)**
```
Homepage → [Browse by Industry]
         → Automotive
         → Paint Masking
         → Solutions page
```

**UX Considerations:**
- No forced choice (all paths visible)
- Clear "Which path?" guidance
- Allow path switching mid-flow
- Breadcrumbs show how user arrived
- Search always available as escape

**CRO Impact:**
- Reduces bounce rate (find entry point)
- Increases discovery (multiple routes)
- Serves different buyer types
- Reduces "can't find product" calls
- Improves first-time buyer success

**Success Metrics:**
- Path usage distribution (target 30/50/20)
- Bounce rate down 25%
- Product discovery up 35%
- New customer conversion up 20%

## Feature Dependencies

Some features require others to function properly:

```
┌────────────────────────────────────────────────────┐
│                  FOUNDATION LAYER                  │
│                                                    │
│  Data Accuracy ──────┬──────────────────┐        │
│  (Phase 0)           │                  │        │
│                      ▼                  ▼        │
│              ERP Integration    Analytics        │
│                      │              Foundation    │
│                      ▼                  │        │
│              ┌───────────────┐          │        │
│              │   CUSTOMER    │          │        │
│              │    PORTAL     │          │        │
│              │               │◄─────────┘        │
│              └───────┬───────┘                   │
│                      │                           │
│                      ▼                           │
│              ┌───────────────┐                   │
│              │  NEGOTIATED   │                   │
│              │    PRICING    │                   │
│              └───────┬───────┘                   │
│                      │                           │
│                      ▼                           │
│              ┌───────────────┐                   │
│              │   CARRIER     │                   │
│              │   ACCOUNTS    │                   │
│              └───────────────┘                   │
│                                                    │
└────────────────────────────────────────────────────┘

                        ▼

┌────────────────────────────────────────────────────┐
│                ENABLEMENT LAYER                    │
│                                                    │
│    Search ◄─── Product Data Enrichment            │
│                                                    │
│    Tables ◄─── Database Restructure               │
│                                                    │
│    Navigation ◄─── IA Finalization                │
│                                                    │
└────────────────────────────────────────────────────┘

                        ▼

┌────────────────────────────────────────────────────┐
│              OPTIMIZATION LAYER                    │
│                                                    │
│    Bulk Reorder ◄─── Portal + Usage Data          │
│                                                    │
│    Configurators ◄─── Tables + Product Enrichment │
│                                                    │
│    Sample Requests ◄─── Portal + Policy Decisions │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Critical path:**  
Data accuracy → ERP integration → Portal → Pricing → Carrier Accounts

Can't build portal without ERP integration. Can't show pricing without portal. Can't enable carrier accounts without checkout.

**Parallel development possible:**  
Search and Tables can develop simultaneously with Portal (different data dependencies).