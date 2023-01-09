

| Industry Term | Description | Relevance |
|--|--|--|
|Multi-Channel Publishing|The idea is to get similar or related content onto multiple platforms in order to reach more people. In other words, Multichannel Publishing helps the user to publish the content to different channels.|Two channels, high and low side|



#Terms:
- WCM : Web Content Management
- DXP : Digital Experience Platform
- Headless :  The "head" makes the web-pages (HTML, CSS, JS).  With headless CMS, the concept is the content is authored and stored in the backeng, and you can support multiple front-ends. [sanity.io Headless CMS in 2-minutes](https://www.youtube.com/watch?v=-Uor3I0n_vQ)
- SSG - In the most basic of terms they apply data and content to templates and create a view of a webpage. Aim is for better perforamnce, security and scalability.

# Gartner

Business Goals ? features
- Content Management
- Multiexperience Delivery "Create Once, Publish Everywhere"



Market Segments
- Web Content management
  - [Gartner Market Guide for Web Content Management](https://www.gartner.com/document/3988492?ref=solrAll&refval=293964028) - [Personal Onedrive](https://1drv.ms/b/s!AkwXSmFk-_xpgoMnrwbb-xNqLTmjfQ?e=8peqhI)

# Technology Components
## Content creation
- Authoring : edit, review, approve, ...
- Publishing
- Targetting (?) : Regions, Audience, ..
- Analytics : Clickstream, ...([piwik/matomo](https://matomo.org/)...)

## Site Creation - Webmaster
- content components,
- pages,
- websites,
- microsites and
- landing pages.

## End-User Experience
- interactivity
- findability, searchabilty
- discoverability, recommendations, ...
- notifications

# Open Source

| Technology Component | Open Source | Comment |
|--|--|--|
|CMS|[Druapl]()||
|Analytics|[matomo/piwik](https://matomo.org/)|Powerful - Voisin||



# Drupal

## History of CMS's
https://drupalsun.com/gurpreet-kaur/2021/01/18/cms-and-static-site-generators-explained

|Year|CMS Technology Introduced|Other Tech|
|--|--|--|
|1980|[Timex Sinclair](https://www.computerhistory.org/timeline/computers/) - [1980](https://www.computerhistory.org/timeline/1980/#169ebbe2ad45559efbc6eb357206378e)||
|1989|[Beners-Lee IM A Proposal](https://www.w3.org/History/1989/proposal.html)|
|1991|First Website||
|1994|Netscape||
|2000|Drupal|Bluetooth|
|2003|Wordpress||
|2005|Joomla||
|2007||iPhone|
|2009||IOT|
|2013|Contentful||
|2016|Strapi||

# API
[PHP SDK for the Digital Collections DC-X Digital Asset Management system](https://github.com/digicol/dcx-sdk-php): The DcxApiClient class helps your custom PHP code connect to your DC-X system via the HTTP-based [DC-X JSON API](http://wiki.digicol.de/x/1oTc) (documented in our partner and customer Wiki).   [DC-X Stibo DAM](https://www.stibodx.com/solutions/digital-asset-management) (DX-X became Stibo)
- seems dated, and suggests to use latest [Guzzle version](https://docs.guzzlephp.org/en/stable/).  Guzzle is a PHP HTTP client.

# Template Engine
TWIG: [TWIG in Drupal](https://www.drupal.org/docs/theming-drupal/twig-in-drupal) is a template engine for PHP and it is part of the [Symfony2 framework](http://symfony.com/).

# Front-End F/W - Bootstrap
[Bootstrap Drupal](https://www.drupal.org/project/bootstrap) This base theme bridges the gap between Drupal and the Bootstrap Framework.

# Options

## Follow GC.
- Drupal plus their authoring, accessibility, etc plugins (Bootstrap, Matomo, Wetkit, ...)
- reuse OGD development (plugins, governance, publishing, [wet kit](https://github.com/wet-boew/wet-boew-drupal), accessibility, ...)

### GC Standards - What is it?

### Drupal Based + React / Publishing
FE - React, BE - Drupal  (Decopuled Drupal)
- https://opensenselabs.com/blog/articles/decoupled-drupal-frontend-technologies

SSG + Drupal - Use Drupal as Headless CMS
- Drupal and Gatsby - [ref](https://opensenselabs.com/blog/articles/gatsby-decoupling-drupal)
  - Datasources : CMS (Contentful, Drupal, Wordpress, etc),
  - Markdown (Documentation, Posts, ..),
  - Data (API, Database, YAML, JSON, CSV, )
  - Building
  - -> GraphQL -> HTML, CSS, React
  - Deploy

- Drupal and Metalsmith - [ref](https://opensenselabs.com/blog/articles/metalsmith-drupal)

- Drupal, Gatsby, Next - [ref](https://colorfield.be/blog/drupal-gatsby-next-and-friends) - Not, TWIG, jQuery!
  - A way better DX: jQuery in 2021 is not so awesome when we have EcmaScript 6+ and TypeScript available for the whole frontend stack
  - Schema stitching is quite powerful when multiple sources are needed
  - React / Node stack is popular, so a larger developer base can join the project and team
  - Drupal might not even be needed for smaller projects: decoupled content services like Prismic, Contentful, Cosmic, Sanity, or   - Wordpress can perfectly fit. Some platforms are also providing their own CMS (e.g. Netlify)

  - When shall we use a Drupal backend (instead of any other decoupled CMS)?  The following non exhaustive cases could lead to the use of Drupal for the backend:

   - A rather complex content model
   - A requirement for workflows (content moderation) or    workspaces
   - Translation systems: Drupal 8 and 9 are coming with a mature translation system for content, locale, and configuration
   - The TMGMT module integrates with many translation providers (e.g. DeepL, Google or Supertext)
   - Media management: Drupal is powerful when it is about extending / exposing / searching internal or external media
   - When a high level of backend customization is needed

### Also See
https://drupalgutenberg.org/demo  : A new publishing experience for Drupal is in the works: get ready to make your words, pictures, and layout look as good on screen as they do in your imagination, without any code.  (from WordPress Gutenbert - https://wordpress.org/gutenberg/)

mulit-channel publishing (maybe high / low write-once option)
https://opensenselabs.com/blog/articles/drupal-multipublishing

# Roles and Responsibilities
- [TBS Standard on Web Usability](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=24227) : 2013 - Section 6 - Requirements provide a good list of the roles and resonsibilities.
- [GC Digital Design System](https://wiki.gccollab.ca/GCDigital_design_system)
  - Project Leads
  - Ux Researchers
  - Front-End UI Developers
  - Graphic Designers
  - Technical Writers
  - Partnership Liaison
  - Contractors



## MediaWiki
https://www.mediawiki.org/wiki/MediaWiki

# GC

[Drupal DxT](http://drupalwxt.org/)

## Standards
- [Policy on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32603)
  - [TBS Standard on Web Usability](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=24227) : 2013 - Section 6 - Requirements provide a good list of the roles and resonsibilities.

## Drupal WG
https://gccollab.ca/groups/profile/7045625/engovernment-of-canada-drupal-web-content-management-working-groupfrgroupe-de-travail-du-gouvernement-du-canada-sur-le-systu00e8me-de-gestion-du-contenu-drupal

Nick Schonning is member https://gccollab.ca/profile/Nschonni

## StatsCan EARB - Drupal DxT (2020)
Stats Canada - Drupal
https://gcconnex.gc.ca/file/view/59227335/gc-earb-2020-01-17-03-stats-canada-drupal-reference-cloud-architecture-pptx?language=en
- slides promise a presentation in 2021 on Drupal as MWS replacement (MediaWiki??)
- OneGC endorsed CMS Cluster to explore Web Content Management needs for the GC
- [Drupal WxT Distribution](http://drupalwxt.org/) : The Drupal WxT distribution has been tailored for organizations that need to comply with standards for accessibility and bilingualism, and integrates extensively with the WET-BOEW jQuery Framework.

## Design System - Aurora Design System (for GCtools)
- [Aurora Github](https://github.com/gctools-outilsgc/aurora-design-system): Aurora design system is created to standardize the visual language and user experience of the Digital Enablement’s (GCTools) online applications and tools.  Using Aurora is complementary to the Web Experience Toolkit (WET), Canada.ca Style Guide, the Federal Identity Policy (FiP) and WCAG 2.1.
- [Gov UK Design System](https://gds.blog.gov.uk/2017/10/30/building-the-gov-uk-design-system/) - [Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)
