# **Project Overview & Main Goals**

## **Why This Project Exists**

MOCAP's current website infrastructure is over 12 years old. The platform no longer meets modern standards for user experience, mobile best practices, or analytical capability.

The business has evolved, while the technology has not. MOCAP now operates across 12+ international markets with 4,000+ active customer accounts, processing approximately 15 sample requests per day alongside thousands of transactions annually. The digital presence spans 33 regional storefront domains and 5 web store domains, built on a fragmented architecture of custom systems that resist change and obscure insight.

Leadership identified this redesign as critical to the 2030 growth goals. The current platform blocks not just efficiency but strategy execution itself.

## **The Company and Its Brands**

MOCAP is a global manufacturing company headquartered in the United States, specializing in plastic components such as caps, plugs, and closures. The company operates four distinct brands that serve overlapping but distinct market needs.

### **MOCAP (Primary Brand)**

Protective components and masking products for manufacturing: caps, plugs, grips, and high-temperature masking tapes. Industries served include automotive, medical equipment, appliances, electronics, paint and coating operations, and HVAC-R.

MOCAP customers are typically procurement managers, engineers, and business owners who prioritize process performance. They need extreme temperature and chemical resistance (300-600°F capabilities), fast fulfillment to minimize production line downtime, and accurate specifications to avoid costly returns.

The product catalog contains approximately 85 series with 2,195 SKUs and around 66,000 variants.

### **Cleartec Packaging**

Clear plastic tubes and containers for retail display, mailing, and specialty packaging. This is consumer-facing packaging designed for shelf presentation, serving marketing departments and packaging designers who need premium transparent packaging that adds product value.

Cleartec customers focus on visual merchandising: "sell and ship in the same clear package." They need high-quality product imagery, custom printing capabilities, and guided discovery because they often don't know exactly what product configuration will work best.

The catalog contains approximately 21 series with 328 SKUs.

### **Beckett**

A division under Cleartec offering telescopic tubes, boxes, cases, and paks for industrial B2B storage, shipping, and display of tools and small parts. Beckett serves operations and packaging teams who prioritize protection and durability over aesthetics.

Beckett's value proposition centers on versatility: packaging that works for protection, shipping, and sale. The telescopic technology allows adjustable-length containers that solve multi-size tool storage challenges.

The catalog contains approximately 18 series with 440 SKUs.

### **X-Treme Tape**

Self-fusing silicone tape for repair, sealing, insulation, and high-temperature masking. This brand serves both industrial users (bulk and manufacturing applications) and consumers (MRO technicians, field service professionals, and DIY users seeking quick-fix solutions).

X-Treme Tape represents a different business model: a focused product line with strong brand identity rather than a broad catalog. The self-fusing silicone technology (no adhesive, no residue, \-80°F to 500°F temperature range) differentiates it from commodity tape products.

The catalog contains 3 product types with 24 SKUs. There are plans to merge X-Treme Tape into the main MOCAP platform.

## **Business Context**

### **Revenue and Transaction Profile**

Based on GA4 data from September 2024 through September 2025:

| Metric | MOCAP | Cleartec/Beckett | Combined |
| :---- | :---- | :---- | :---- |
| Total Revenue | $2,534,679 | $670,781 | $3,205,460 |
| Transactions | 6,305 | 1,936 | 8,241 |
| Items Purchased | 7,806,162 | 1,314,563 | 9,120,725 |

### **Customer Composition**

The business operates with a 70% B2B and 30% direct-to-consumer split. 80% of customers are new, while 20% are returning (based on Google Analytics).

The company maintains 4,000+ active customer accounts.

### **Channel Mix**

Traffic and revenue arrive through multiple channels:

| Channel | MOCAP Traffic | MOCAP Revenue Share |
| :---- | :---- | :---- |
| Direct | 27.95% | 34.14% |
| Paid Search | 12.03% | 31.34% |
| Organic Search | 24.86% | 16.72% |
| Cross-network | 18.03% | 14.18% |
| Email | 7.32% | 1.06% |

Direct and Paid Search together drive approximately two-thirds of revenue.

### **Device Usage**

| Device | Mocap | Cleartec/Beckett |
| :---- | :---- | :---- |
| Desktop | 71,8% | 65,3% |
| Mobile | 27,1% | 32,1% |
| Tablet | 1,0% | 2,6% |

###  **Geographic Distribution**

The US dominates traffic with 146,000 users on MOCAP properties, followed by India, Canada, Germany, and China. Cleartec/Beckett shows 81% US concentration.

## **Project Goals**

Stakeholders identified four core objectives for the redesign during discovery workshops and interviews.

### **Revamp Mobile Experience**

The current site is not mobile-friendly. A responsive approach is essential. This does not mean mobile-primary purchasing, but it does mean product lookup, specifications reference, and basic navigation must work properly on mobile devices.

### **Improved Conversion Rates**

The goal is to increase completion rates for purchases and sample requests by identifying and removing friction points throughout the customer journey.

### **Modern User Interface**

The visual design must be updated to meet current UX/UI expectations and reflect the company's professional capabilities. The interface should communicate that MOCAP is a sophisticated manufacturing partner.

### **Better User Experience**

The core goal: streamline product discovery and checkout processes to reduce friction and improve customer satisfaction. This encompasses:

* Finding products through multiple paths (search, browse by category, browse by application, browse by industry)  
* Understanding product specifications without requiring phone support  
* Configuring complex products with confidence  
* Completing transactions without unnecessary steps  
* Accessing account information without calling customer service

## **Success Criteria**

The redesign must deliver both immediate improvement and lasting foundation. Stakeholders explicitly stated they want to avoid another major overhaul in 2-3 years.

### **Immediate Requirements**

**Reliable analytics from day one.** The new platform must have comprehensive tracking designed in, not added as an afterthought.

**Seamless ERP integration.** Three separate ERP systems require integration:

* Sage (US/Canada/Mexico): On-premises, no API, file-based integration required  
* EFACs (UK/EU): Cloud-based, XML file flows  
* KingDee (China): API capabilities unclear

**Preservation of sophisticated features.** Stakeholder direction was explicit: "We are not looking to get rid of anything on the site." This includes:

* Size charts with 180 columns across 42 column types  
* Multi-step dependent product configurators  
* Application Advisor tool  
* Item Customizer  
* Catalog downloads  
* ISO certification displays  
* Regional content management

These features exist because they serve real business needs. The goal is to make them usable, not to eliminate complexity that customers actually require.

### **Long-Term Foundation**

The platform architecture should support:

* Content updates without developer intervention for routine changes  
* Regional customization without maintaining separate codebases  
* New product launches without extended delays  
* Feature additions without architectural rework  
* Analytics insights that drive continuous optimization

## **What Must Be Preserved**

### **Product Discovery Tools**

The Application Advisor helps customers find products based on their use case rather than product knowledge. The Item Customizer supports configuration of complex products. Both serve customers who don't know the catalog intimately. These tools need UX improvement, not elimination.

### **Technical Sophistication**

Size charts with extensive dimensional data serve engineers and procurement professionals who need precise specifications. The 180-column structure exists because products have that many relevant attributes.

### **Regional Capabilities**

Content must support seven languages: English, Spanish, Italian, German, French, Polish, and Mandarin. Regional pricing, tax handling, and shipping options must accommodate market differences. ISO certifications must be displayed appropriately for markets where they matter.

### **Existing Workflows**

Sample request processes, quote request flows, and purchase paths all need improvement but represent established customer expectations. Changes should reduce friction within familiar patterns rather than forcing customers to learn entirely new approaches.

## **Target Audiences**

The platform serves distinct audiences whose needs sometimes align and sometimes diverge.

### **External: Procurement and Purchasing**

These customers know what they need. They have part numbers, engineering specifications, or reorder requirements. They value speed and efficiency.

### **External: Engineers and Technical Specifiers**

These customers need to evaluate options and compare specifications. They may be selecting products for new applications or qualifying alternatives to current suppliers. They need detailed technical information, downloadable specifications, and confidence that products will perform as described.

### **External: Marketing and Packaging Designers**

Primarily Cleartec customers, these buyers think visually. They need to see what packaging will look like with their products inside. They value imagery, mockup capabilities, and custom printing options.

### **External: Field Technicians and MRO Buyers**

Primarily X-Treme Tape customers, these buyers need solutions to immediate problems. They search by application ("leaking hose repair") rather than product specification. Speed of finding and speed of shipping both matter.

### **Internal: Customer Service**

This team uses the website to answer customer questions, check pricing and stock, and process orders. They need accurate data and efficient lookup tools.

### **Internal: Sales**

Sales teams use the website to support customer conversations, create quotes, and process orders on behalf of customers. They need accurate pricing (including negotiated rates), reliable inventory data, and shareable product URLs.

## **Technical Constraints**

Several constraints shape platform selection and implementation:

* **Decimal precision:** 4 decimal places required for pricing and quantity (eliminates some platforms)  
* **Product variants:** Some products have 320+ variations; the platform must support this scale  
* **ERP limitations:** Sage has no API; integration requires file-based approaches  
* **Regional requirements:** Multi-currency, multi-language (7 languages), regional tax handling  
* **GDPR compliance:** Cookie consent implementation must fire before tracking