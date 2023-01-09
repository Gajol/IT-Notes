
# Principles
Ux
Employee Self Service

# Measure
Reduction in "HR Service Email" address
Increase in Employee Self Service

# Process
## AS-IS
Today when an employee's address changes they:
1. try to figure out the process to do this?  Can they use HRMIS, or, do they send an email to an HR distribution list?  (for sure phone-number/supervisor is HRMIS and a nightly job syncs to *identity management solution*)
1. HR updates address.
1. Employee is notified

## TO-BE
Questions:
Which domain-application is the source-or-truth for employee-address?
[ ] Low-Workday
[ ] High-HRMIS
[ ] High-Other

### With PII-Address in Workday
A simple task completed within Workday providing a modern user experience
1. Employee goes to Workday -> Personal Information -> Contact Information and changes their address.
Change is immediately visible to the user.

### With DCI Mitigated Address (*Maksed Address*) in Workday
Knowns:
1. Employee's true-address is only on the high-side.
1. Employee goes to service management portal on high-side (ServicePlus)
1. Employee completes a change-address service.
1. "Change of Address" event traverses DCI & CDS to update Workday
1. Employee is notified of successful update


Unknowns:
Address
1. How much of the address is needed for business processes and business-insights.  For example, does department/HR need true-province or something more granular (e.g. 4-digits of postcal-code)?
1. Can the WD "Contact Information" edit be disabled?
1. Should the employee directory / identity management contain both addresses (high & low address)?  This directory is exposed to applications like The Source "Person Search", Outlook Contact Cards, ... [ CCD indicated there is a limit to fields in Contact Card]

Identity
- [Microsoft - Plan Cloud HR Application to AAD User Provisioning](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/plan-cloud-hr-provision)
  - What Identity fields are owned by HR?   Where will CRUD operations take place on these fields (high or low)?


Assumptions:
There are many options to solve this.   The assumption is the high-side is "as-simple-as-possible" to get the job done (leverage enterprise service management (ServiceNow) with integrations into high-side-HR-internal-application).

# identity
LDAP:
- Name:  FN, LN, username, preferred name, legal name
- Telephone: Desk1, Desk2, Mobile, Home-Fixed, Home-Mobile
- Email Address:
- userCertification:  
- OU:


[NetIQ Identity](https://www.netiq.com/documentation/identity-manager-48/)
- data analysis, data cleansing, data reconciliation, and data monitoring/reporting. Analyzer lets you analyze, enhance, and control all data stores throughout the enterprise. [NetIQ Analyze for IDM](https://www.netiq.com/documentation/identity-manager-48/analyzer_admin/data/overview.html)

[Azure IDM Overview](https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview)
## tooling
- high-side AD Quest, low-side (?)
