# **Next Steps**

## **Purpose**

This section outlines the path from research to execution. Following alignment between S8 and MOCAP, the work ahead splits into two distinct tracks:

1. **Corporate Website Redesign**: The immediate priority, focused on mocap.com/corp.html as a standalone project  
2. **Main Website Redesign**: The larger platform transformation, building on foundations established during the corporate site work

This phased approach allows both teams to establish shared principles, validate collaboration patterns, and build foundational assets before tackling the complexity of the product catalog and transactional experience.

## **Phase 1: Corporate Website Redesign**

The corporate website (mocap.com/corp.html) will be redesigned as a distinct project, separate from the main product website. This phase serves two purposes: delivering an improved corporate presence and establishing foundations that will inform the larger platform work.

### **Objectives**

**Primary Goal**: Create a modern corporate website that effectively communicates MOCAP's brand, capabilities, and value proposition to prospective customers, partners, and talent.

**Secondary Goal**: Use this project to establish design, UX, and content principles that will carry forward to the main website redesign.

### **Pre-Design Discovery**

Before any design work begins, both teams should align on foundational questions:

**Brand Direction**

* How should MOCAP's brand be positioned relative to competitors?  
* What personality and tone should the corporate site convey?  
* How does the corporate brand relate to the four product brands (MOCAP, Cleartec, Beckett, X-Treme Tape)?  
* What visual direction differentiates MOCAP from the generic industrial supplier aesthetic?

**Purpose and Audience**

* Who are the primary audiences for the corporate site (prospects, partners, investors, job seekers)?  
* What actions should visitors take after landing on the corporate site?  
* How does the corporate site relate to the product site in the customer journey?  
* What content is missing from the current corporate presence?

**Content Strategy**

* What story should the corporate site tell?  
* What proof points and case studies would strengthen credibility?  
* How should the four brands be presented within the corporate context?  
* What industry-specific content would resonate with target segments?

**Structure and Navigation**

* What pages and sections are required?  
* How deep should the information architecture go?  
* What content from the current site should be preserved, revised, or removed?  
* How will the corporate site link to and from the product site?

**Success Criteria**

* How will we measure whether the corporate site achieves its goals?  
* What baseline metrics should be established before launch?  
* What qualitative feedback mechanisms will be in place?

### **Foundation Building**

The corporate website project should establish assets and principles that transfer to the main platform:

**Design System Development**

* Typography, color, spacing, and component standards  
* Responsive behavior patterns  
* Accessibility requirements  
* Brand application guidelines

**Content Principles**

* Voice and tone guidelines  
* Content structure templates  
* Image and media standards  
* SEO content requirements

**UX Patterns**

* Navigation conventions  
* Interaction behaviors  
* Mobile-first responsive patterns  
* Performance standards

### **Deliverables**

| Phase | Deliverable | Purpose |
| :---- | :---- | :---- |
| Discovery | Brand and content strategy document | Alignment on direction |
| Discovery | Information architecture | Structure definition |
| Design | Design system foundations | Reusable component library |
| Design | Page designs | Visual and interaction specification |
| Development | Functional corporate website | Live deliverable |
| Launch | Analytics baseline | Success measurement foundation |

## 

## **Phase 2: Main Website Redesign**

Work on the main product website will follow the corporate site, building on the foundations established in Track 1\. This track addresses the complex product catalog, transactional flows, and customer portal requirements identified throughout this research.

### **Immediate Decisions Required**

Before detailed planning can proceed, several foundational decisions must be made.

**Decision 1: Brand Architecture**

*Question*: How will MOCAP, Cleartec, Beckett, and X-Treme Tape be presented on the main platform?

*Options*:

* **Fully unified**: Single site with brands as product filters  
* **Branded sections**: Single site with distinct brand areas  
* **Separate microsites**: Independent sites with shared backend

*Research finding*: 73% of customers support or are open to consolidation, but 27% are conditional ("depends on organization"). 81% were unaware brands were related. The Strategic Vision section recommends a hybrid approach: consolidated infrastructure with preserved brand entry points.

**Decision 2: Domain Strategy**

*Question*: What URL structure will be used?

*Options*:

* **Subdirectories**: mocap.com/us/, mocap.com/uk/, mocap.com/de/  
* **Subdomains**: us.mocap.com, uk.mocap.com, de.mocap.com  
* **Separate domains**: mocap.com, mocap.co.uk, mocap.de (current approach)

*Research finding*: Analytics preference leans toward subdirectories for easier cross-regional tracking in a single GA4 property.

**Decision 3: ERP Roadmap Clarity**

*Question*: Will ERP systems change during or shortly after the website project?

*Context*: Sage (US/Canada/Mexico) has no API and requires file-based integration. If Sage replacement is planned, the website integration approach changes significantly.

*Required information*:

* Is Sage replacement on the roadmap? What timeline?  
* Are EFACS or KingDee changes planned?  
* What is the preferred integration pattern going forward?

### **Foundation Phase Activities**

These activities should begin during or immediately after the corporate website project.

**Analytics Planning**

Design comprehensive tracking plan before development begins:

* Define KPI framework and success metrics  
* Document required events (e-commerce, search, form, engagement)  
* Specify custom dimensions (region, brand, user type)  
* Plan cross-domain tracking approach  
* Design reporting dashboards  
* Establish baseline metrics from current platform

**URL Inventory and Redirect Mapping**

Catalog all existing URLs across 35+ domains before migration:

* Crawl all current domains programmatically  
* Extract URL patterns and page types  
* Identify high-value pages via analytics (traffic, conversions, revenue)  
* Identify pages with external backlinks  
* Create redirect mapping rules  
* Flag edge cases requiring manual mapping

**ERP Integration Discovery**

Document current integration patterns and future requirements:

* Map data flows between website and each ERP  
* Document order payload structures  
* Identify sync frequencies and triggers  
* Catalog known integration failures and workarounds  
* Clarify KingDee API capabilities for China market  
* Define middleware requirements

**Product Data Model Documentation**

Create comprehensive documentation of product data structure:

* Document all 180 size chart columns and 42 column types  
* Map relationships between products, variants, and configurations  
* Identify kit item and bundle logic  
* Document pricing structures (list, negotiated, regional)  
* Catalog data quality issues requiring cleanup  
* Define minimum data requirements for launch

## **Product Imagery Strategy**

Research identified product imagery as a significant improvement opportunity. 58% of customers requested images matching selected color and size configurations. Internal stakeholders (Jim Boehm, Shane Flottmann) prioritized configuration-specific images. Current thumbnails have caused order errors, including one case where a customer ordered 50 tubes and received the wrong type due to misleading images.

### **The Challenge**

Current product images feel outdated and will significantly impact perception of the new website and brand. The research indicates customers value real product photography over purely 3D renders, as photography feels more trustworthy and helps them better evaluate physical products. At the same time, 3D assets play an important role for 360° views and assembly-level detail visualization.

### **Recommended Approach**

The goal is not to choose between photography and 3D, but to define a clear strategy where both work together:

**Product Photography**

* High-quality studio photography for hero product images  
* Configuration-specific photos showing actual colors and sizes  
* Lifestyle and application context imagery  
* Builds trust and supports product evaluation

**3D Assets**

* 360° rotation views for dimensional understanding  
* Assembly and exploded views for complex products  
* Interactive configuration visualization  
* Scalable asset generation for large catalogs

### **3D Pipeline Exploration**

MOCAP has paused evaluation of Threedium to explore alternative approaches. Shane Flottmann noted that all product files already exist in Blender. The team should explore whether a Blender-to-website pipeline could be developed (potentially via Python-based workflow) that would:

* Enable efficient publishing of new or updated products  
* Improve 360° product view quality  
* Support assembly-level detail visualization  
* Reduce dependency on external 3D services

**Next steps for 3D exploration**:

* Audit existing Blender asset library (formats, quality, completeness)  
* Evaluate web-ready export options (glTF, USDZ, etc.)  
* Prototype pipeline for sample product set  
* Assess development effort vs. third-party service cost  
* Define maintenance workflow for ongoing updates

## **AI Capabilities: Future Phase**

The research identified strong interest in AI-driven capabilities, particularly an AI Application Advisor that could guide customers to appropriate products through conversational interaction. The MoSCoW exercise scored AI Advisor at 8.2 combined, with leadership showing particular enthusiasm for its differentiation potential.

### **Recommendation**

AI capabilities should be treated as a later phase, after core foundations are established:

1. **Information architecture** must be defined first (AI needs structured product data to draw from)  
2. **Data quality** must be remediated (AI will amplify data errors if underlying catalog is incomplete)  
3. **UX principles** must be validated (AI interactions should complement, not replace, direct navigation)  
4. **Technical infrastructure** must be stable (AI features add complexity to an already complex platform)

### **Preparation During Earlier Phases**

While AI implementation waits, earlier phases can prepare the foundation:

* Structure product data with AI consumption in mind (clear taxonomies, complete attributes)  
* Document common customer questions and decision paths (training data)  
* Identify high-value AI use cases through customer service analysis  
* Evaluate AI platform options without committing to implementation

## **Research Handoff Reference**

### **For Design Team**

| Item | Location | Purpose |
| :---- | :---- | :---- |
| Personas Analysis | Project files | User archetype reference |
| User Flows | Report | Core journey requirements |
| Navigation Structure | Report | Information architecture foundation |
| Component Specifications | Report | Interaction requirements |
| Competitor Analysis | Project files | Benchmark reference |

### **For Development Team**

| Item | Location | Purpose |
| :---- | :---- | :---- |
| Technical Considerations | Report | Platform requirements |
| Implementation Roadmap | Report | Phase planning |
| Features Inventory | Report | MoSCoW prioritization |
| Catalog Analyses | Project files | Data model reference |
| Search Log Analysis | Project files | Search requirements |

### **For Content Team**

| Item | Location | Purpose |
| :---- | :---- | :---- |
| Content Requirements | Report (Section 12\) | Content specifications |
| Catalog Analyses | Project files | Data gap inventory |
| Customer Survey Analysis | Project files | Customer language reference |

## **Execution Overview**

| Phase | Focus | Key Activities |
| :---- | :---- | :---- |
| Phase 1: Corporate Site | Brand and foundations | Discovery, design system, corporate website delivery |
| Phase 2 Foundation | Decisions and planning | Brand architecture, domain strategy, ERP clarity, analytics planning |
| Phase 2 \- Part 1 | Core platform | Search, navigation, checkout, mobile, analytics |
| Phase 2 \- Part 2 | Customer experience | Portal, pricing, stock visibility, product imagery |
| Phase 2 \- Part 3 | Differentiation | AI advisor, advanced features, optimization |

