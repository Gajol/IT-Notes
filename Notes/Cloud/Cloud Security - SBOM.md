# Cloud Security

## Software Supply Chain, SBOM

CNCF:

- [CNCF Github Security](https://github.com/cncf/tag-security/ ) 
- [CNCF Supply Chain Security ](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)) - [One Drive CNCF Software Supply Chain Best Practices](https://1drv.ms/u/s!AkwXSmFk-_xpgrMTTHxwRxSSU7Y_yA?e=zVprf2)

NIST

- [Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations - SP 800-161 Rev. 1](https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final)

USA 

- [Executive Order on Improving the Nation’s Cybersecurity](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/)

# NIST SP 800-161

Five essential aspects of supply chain risk management in the most recently updated version of the NIST Framework: 

1. **Identify**: how to identify where you should manage supply chain risks,
2. **Prioritize**: pinpointing which suppliers are crucial to supply chain risk management, 
3. **Contracts**: developing vendor contracts that minimize supply chain risks, 
4. **Assess Risk**: continually assessing supply chain risk management procedures, and 
5. **Vendor Testing**: testing to make sure vendors are resilient in the event of supply disruptions.

# SBOM

From https://chat.openai.com/chat

SBOM (Software Bill of Materials) is a list of all the software components and their versions that are used in a system or application. It can be an important tool for DevOps teams because it allows them to track the specific versions of software components that are being used, which can be helpful in several ways:

1. Security: By having a complete and accurate SBOM, DevOps teams can identify and address known vulnerabilities in the software components they are using.
2. Reproducibility: An SBOM can help teams reproduce a specific version of an application, which is useful for testing and debugging.
3. Compliance: Some regulations and industry standards require companies to track and disclose the software components they are using. An SBOM can help teams meet these requirements.

Overall, an SBOM can help DevOps teams better understand the software they are using and ensure that it is secure, reliable, and compliant.

## SBOM Best Practices

| Best Practice                   | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| Include all software components | Make sure to include all software components that are used in your system or application, including libraries, frameworks, and other dependencies. |
| Use a standard format           | Use a standard format, such as SPDX, to make it easier to share and parse the SBOM. |
| Use version control             | Use version control to track changes to the SBOM over time and make it easier to roll back to a previous version if needed. |
| Keep the SBOM up to date        | Regularly update the SBOM as new components are added or old ones are removed. This will ensure that the SBOM is accurate and complete. |
| Use automated tools             | Automated tools, such as scanners and dependency managers, can help you create and maintain an accurate SBOM more easily. |
| Share the SBOM                  | Make the SBOM available to relevant parties, such as security teams and compliance departments, to help them better understand the software being used. |

## Top SBOM Tools

Reference: https://www.csoonline.com/article/3667483/8-top-sbom-tools-to-consider.html 

1. ### [Anchore](https://anchore.com/) : Generating a Software Bill of Materials (SBOM) as part of your DevOps process is an essential technique to help secure your software supply chain. SBOMs are becoming critical due to the growing prominence of supply chain attacks such as [Solarwinds](https://www.businessinsider.com/solarwinds-hack-explained-government-agencies-cyber-security-2020-12), maintainers intentionally adding malware like [node-ipc](https://www.theregister.com/2022/03/18/protestware_javascript_node_ipc/)*,* and severe vulnerabilities like [Log4Shell.](https://anchore.com/log4j/)

2. ### FOSSA

3. ### Mend

4. ### Rezilion

5. ### SPDX SBOM Generator

6. ### Tern Project

7. ### TauruSeer 

8. ### Vigilant Ops 

## What are the most famous software supply chain security incidents

There have been several high-profile software supply chain security incidents in recent years, including the following:

1. SolarWinds: In 2020, it was discovered that hackers had compromised the software updates for the SolarWinds Orion IT management software and used it to gain access to the networks of multiple government agencies and companies.
2. CCleaner: In 2017, hackers compromised the software update mechanism for the popular CCleaner utility and used it to install malware on the systems of millions of users.
3. Equifax: In 2017, the credit reporting company Equifax suffered a data breach that was later attributed to a vulnerability in the Apache Struts web framework, which the company had failed to patch in a timely manner.
4. Target: In 2013, the retail giant Target suffered a data breach that was later traced back to a vulnerability in the network of one of its vendors, which had been compromised by hackers.

These incidents highlight the importance of securing the software supply chain and properly maintaining and updating the software components used in systems and applications.

### What has industries response been to the executive order?

> I'm sorry, but I am unable to provide information on current events or anything that may have happened after my knowledge cutoff of 2021. My responses are based on my training data and I am not able to browse the web or access updated information. Is there anything else I can help with?