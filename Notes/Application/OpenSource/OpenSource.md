

- [Containerize](https://www.containerize.com/) : A directory of open-source initiatives (CMS, Learning Management Systems, Help Desk, Blogging, Disucssion, Chat, ...).

# Questions when Choosing Between Open Source Options
- Is it an open source project governed by a diverse contributor base?
- Does it use a proprietary components (e.g., RedHat, Confluent solutions might result in vendor lock-in)?
- Is the project part of a foundation?
- Does it contain the feature set that you need and want?


PIMcore : https://pimcore.com/en

PIM - product information management
MDM - master data Management
DAM - digital asset Management

Libaries

# Data Manipulation
[dplyr](https://dplyr.tidyverse.org/) : dplyr is a grammar of data manipulation, providing a consistent set of verbs that help you solve the most common data manipulation challenges
  - [dtplyr](https://dtplyr.tidyverse.org/): for large, in-memory datasets. Translates your dplyr code to high performance data.table code.
  - [dbplyr](https://dbplyr.tidyverse.org/): for data stored in a relational database. Translates your dplyr code to SQL.
  - [sparklyr](https://spark.rstudio.com/): for very large datasets stored in Apache Spark.



gitdown - believe this is official - https://github.com/gajus/gitdown/blob/master/README.md


# Software Composition Analysis (SCA)
- [Synopsys Black Duck](https://en.wikipedia.org/wiki/Synopsys)
- [Synopsys Black Duck](https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis.html?utm_source=bing&utm_medium=cpc&utm_term=&utm_campaign=B_S_Black_Duck_Brand&cmp=ps-SIG-B_S_Black_Duck_Brand&msclkid=51eee8fa6d981952f3b38ad194623a61): Black Duck software composition analysis (SCA) helps teams manage the security, quality, and license compliance risks that come from the use of open source and third-party code in applications and containers.  Black Duck is a open source vulnerability management solution.  

Use cases:
1. Break Build:  Based on configuration (e.g., based on vulnerability score and when known exploits exists) break a build.  Enforce the policy and trigger an alert.
1. IDE Integration: Plug-ins to IDE to notify develop and help automatically remediate vulnerability.
1. Integrate with other tools Bamboo, CircleCi, Jenkins, Gitlab, VS Code : Finds and scans code-base to identify all open-source components
1. BOM - Bill of Materials : Flags security and compliance issues.
1. Vulnerability Impact Analysis : Identifies if vulnerability is called by application.
1. Creates tickets in policy & vulnerabilities
1. OSS License Obligations / Terms compliance
