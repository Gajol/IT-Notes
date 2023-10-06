# Industrial Cybersecurity

Industrial Cybersecurity *Second Edition*

## Overview

My interest in reading this book is to understand key concepts in industrial cybersecurity.  My background is mostly on information and cyber security.  Recently the zero-trust security architecture (ZTA) has been of interest, and I was curious whether industrial security had similar concepts.   In these domains, I have worked considerably with risk management concepts from ISO and NIST:

- [ISO 31000](https://www.iso.org/iso-31000-risk-management.html/) Risk Management 
- [NIST 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final): Security and Privacy Controls for Information Systems and Organizations

This Industrial Cybersecurity book highlights Information Control System (ICS) architecture concepts: 

- Purdue Model[^Purdue]: Zones 0-5 (Physical Process, Intelligent Devices Process, Control Systems, Manufacturing Operations & Control, *DMZ*, Enterprise)

## My Review

From my perspective, this book did not highlight key areas where ICS differs from an enterprise IT environment.   The book provided some insights into security, risk management and assessments, but overall I believe there must be better books on ICS and Operations Technology (OT) management.

## Book Summary

Like IT and cybersecurity, this book highlights the need to shift security left, and to design with security in mind.

- define security zones (VLANs, DMZ, ), security monitoring: intrusion detection systems, security information and event management (SIEM), packet capture, logging and alerting
- passive and active security monitoring (passive looks at data, whereas active might introduce traffic to monitor security - like vulnerability scanning)
- threat hunting
- visualizing, correlating and alerting

Passive security monitoring: pfsense, configuring firewalls

## Industrial Threat Intelligence

Open Threat Intelligence Community

- OTX Alien Vault: [https://otx.alienvault.com](https://otx.alienvault.com  /) 
- Tactics, Techniques, and Procedures (TTP)

Threat Intelligence:

- Threat intelligence is knowledge 
- Threat intelligence sources:  own incidents, threat hunting efforts, vendor reports, honeypots, peers and sharing communities, 3rd party tools (FireEye, CyberXA, Nozomi)

Cybersecurity Assessments

- Types of assessments: risk, red, blue, penetration
- Risk assessments
- Red team exercises
- Blue team exercises
- Penetration testing
- Compare of ICS security assessments to IT security assessments

> *"The identification, evaluation, and estimation of the levels of risks involved in a situation, their comparison against benchmarks or standards, and determination of an acceptable level of risk." — Risk Assessment definition

### ICS risk assessment steps:

1. asset identifcation
2. system characteristics
3. vulnerability identification
4. threat modelling
5. risk calculation
6. mitigation prioritization and planning

### Red Team Excercises

A red team exercise is an all-encompassing attack engagement of the organization with the intent to try to gain access to a system by any means necessary.

- reconnaissance, public data gathering, OSINT
- cyber pentetration testing
- physical breaching attempt
- testing legacy access points like the plain old telephone system modem (POTS modem)
- testing wireless and radio frequencies
- testing employees training through social engineering and phishing attempts

Blue Team Exercises

Blue team exercises involve a group of cybersecurity experts who assess a system or an organization to identify any potential vulnerabilities that affect devices or critical systems that the organization owns (similar to red team). 

- red team exercises will typically try to exploit the discovered vulnerabilities, 
- blue team exercises aim to find viable ways to improve the ability to avoid, deter, resist, and respond to potential threats that were uncovered.
- blue team exercises can be controlled attack scenarios where the blue team uses existing tools to detect an attack (IDS/IPS, sniffing tools, SIEM, EDR/EDP - event detection response/prevention), honeypots, ..)

### Penetration Testing

Cybersecurity Assessment Types:

- gap analysis
- vulnerability assessment
- risk assessment 
- penetration test (hacking, ethical hacking)

### ICS vs IT security assessments

- IT systems can be rebooted, restored from backup, replaced with little interruption of service
- ICS systems control a physical process
  - security practices (scanning, probing, ..) might impact or interrupt service, create physical damage, or harm human life, or the environment.
  - vulnerability assessments are limited to passive scans

## Vendors

[Claroty](https://claroty.com/): Secure your physical systems

[Fourscout](https://www.forescout.com/): SIEM/XDR

# Terms

ICS: Industrial Cybersecurity

OT: Operations Technology

IT: Information Technology

DID: Defence In Depth

TTP: Tactics, Techniques, and Procedures

Devices:

- PLC: Programmable Logic Controllers
- SCADA: Supervisory Control And Data Acquisition
- DCS: Distributed Control Systems
- SIS: Safety Instrumented Systems

[^Purdue]: Purdue Model: [zscaler overview](https://www.zscaler.com/resources/security-terms-glossary/what-is-purdue-model-ics-security): The Purdue model is a structural model for industrial control system (ICS) security that concerns segmentation of physical processes, sensors, supervisory controls, operations, and logistics. Long regarded as a key framework for ICS network segmentation to protect operational technology (OT) from malware and other attacks, the model persists alongside the rise of edge computing and direct-to-cloud connectivity. Purdue Enterprise Reference Architecture (PERA)