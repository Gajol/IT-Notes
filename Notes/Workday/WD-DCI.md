

# k-anonymity alternatives

[UK Centre for Data Ethics and Innovation](https://cdeiuk.github.io/pets-adoption-guide/repository)
- [2008 - Danish Sugar Beet Farmers] (https://csrc.nist.gov/csrc/media/events/meeting-on-privacy-enhancing-cryptography/documents/toft.pdf).  First secure multiparty computation (MPC - homomorphic encryption based technology).  (Path towards FHE??)
- [2021 - Enveil & DeliverFund - Enveil ZeroReveal](https://www.globenewswire.com/en/news-release/2021/06/15/2247363/0/en/Enveil-and-DeliverFund-Leverage-Privacy-Enhancing-Technologies-to-Combat-Human-Trafficking.html) : The use of Enveil's technology will allow them and their partner organisations to better access data on counter-human trafficking without exposing PII or other sensitive/regulated data.
There are all multi-party computation problems.   The problem we are faced with is a single party (us) however we are forced to use two networks across a single business process, and key information (PII) is not permitted on one entire system. [Enveil Privacy Technologies](https://www.enveil.com/faq) - protects data in use.  PET - Privacy Enhancing Technologies.  Homomorphic Encryption ( Add / Multiply a Cipher Text).   See [Enveil FAW](https://www.enveil.com/faq)
  - Open Source Libraries - [Microsoft SEAL Homomorphic Encryption](https://en.wikipedia.org/wiki/Microsoft_SEAL) - [SEAL on GitHub](https://github.com/Microsoft/SEAL)
- this pattern does not exist in the real world.

PET Used [UK CEID](https://cdeiuk.github.io/pets-adoption-guide/repository)
- Differential Privacy
- Federated Analytics
- De-Identification Techniques
  - [Medium "The Sugar Beet" - Multi-Part Computation](https://medium.com/applied-mpc)
- Homomorphic Encryption
- Multi-Party Computation
- Trusted Execution Environment

[data intermediaries](https://cdei.blog.gov.uk/2021/07/22/exploring-the-role-of-data-intermediaries-in-supporting-responsible-data-sharing/): Each time data is shared, accessed, used or protected, a number of stewardship activities would typically take place at the intersection of the data sharing and access journeys. They can include, for example, finding data that is fit-for-purpose, managing transfers and usage rights, and ensuring that the right protections are in place.

# DCI - So What?
The DCI proces sis well underway.  Although the DCI is neither finalized, nor is it complete for the full HR business capability model, nor based on the end-state HR data model, many impacts can be derived from the current state of the DCI process.

1. PII information is not permitted on the SaaS (low-side)
1. Technology to mitigate the PII-data on the low-side will be required
1. Technology to allow people to look-up / reverse-lookup PII-data will be required
1. Technology on the high-side (custom coded - non-SaaS) will be required to support HR business processes

The business processes, information flows, and business value streams are not currently shared with IT.  It is foreseeable that:
1. Business processes will likely require a high and low-side component.  
1. Business processes will likely result in KVM switches (low->high and high->low), and, in wait-times/delays in information being available for business processes.
1. The end-user experience of business users will be impacted.

## Decisions
1. Identity:  It is currently unknown what identity will be used on the SaaS-WD module.  The decision is whether the UC-identity is used, or if an alternate-identity is used.   An additional identity to for users to manage will impact many factors of how they interact with the HR modernization solution.
