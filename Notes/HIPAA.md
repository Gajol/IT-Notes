
# HIPAA Safe Harbour

Information relating to HIPAA Safe Harbour with regards to de-indentificaiton and re-identification.[ASF](NETFLIX.COM)

## USA HIPAA Privacy Rule
### HIPAA Privacy Rule
- [USA Health & Human Servces](HHS.gov)
  - [Workshop on HIPAA's Privacy Rule - 2010](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/2010-de-identification-workshop/index.html)

### Guidance - HHS
  - [Guidance - HIPAA](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf)
  - [HHS Guidance for Methods for De-Indentification](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html)

### NIST Guidance
- [NIST Computer Security Resource Center](https://csrc.nist.gov/)
- [NIST Protecting the Confidentiality of PII - 2010](https://csrc.nist.gov/publications/detail/sp/800-122/final)


# Re-Identification Risk Calculation for G-Distinct Datasets

## Definitions
### Safe Harbour
Le Safe Harbor
: Le Safe Harbor, ou la sphère de sécurité, est un ensemble de principes qui permettaient à certaines entreprises américaines − dépendant de l'autorité du département du Commerce des États-Unis, à savoir les principales entreprises sauf les banques et les compagnies d'assurance − de certifier qu'elles respectaient la législation de l'Espace économique européen (EEE) afin d'obtenir l'autorisation de transférer des données personnelles de l'EEE vers les États-Unis. [Wikepedia](https://fr.wikipedia.org/wiki/Safe_Harbor)

Safe Harbor (Law)
: A safe harbor is a provision of a statute or a regulation that specifies that certain conduct will be deemed not to violate a given rule. It is usually found in connection with a more-vague, overall standard. By contrast, "unsafe harbors" describe conduct that will be deemed to violate the rule.

For example, in the context of a statute that requires drivers to "not drive recklessly," a clause specifying that "driving under 25 miles per hour will be conclusively deemed not to constitute reckless driving" is a "safe harbor." Likewise, a clause saying that "driving over 90 miles per hour will be conclusively deemed to constitute reckless driving" would be an "unsafe harbor." In this example, driving between 25 miles per hour and 90 miles per hour would fall outside of either a safe harbor or an unsafe harbor, and would thus be left to be judged according to the vague "reckless" standard. [Wikiepdia](https://en.wikipedia.org/wiki/Safe_harbor_(law)

Safe Harbor (Privacy Law)
: Information privacy, data privacy or data protection laws provide a legal framework on how to obtain, use and store data of natural persons. The various laws around the world describe the rights of natural persons to control who is using its data. This includes usually the right to get details on which data is stored, for what purpose and to request the deletion in case the purpose is not given anymore.[Wikipedia](https://en.wikipedia.org/wiki/Information_privacy_law#%22Safe_Harbor%22_Privacy_Framework)
> GPDR (EU), PIPEDA (Canada), ...

### g-distinct
An individual is said to be unique when he or she has a combination of characteristics that no one else has, and we say an individual is g-distinct if their combination of characteristics is identical to g-1 or fewer other people in the population.

# Papers & Solutions
## GCP
[GCP Estimating Re-Id FR&EN](https://cloud.google.com/dlp/docs/visualizing_re-id_risk) shows the following steps:
1. Calculate k-anonymity on the datasets
1. Connect results to data studio
1. Create the chart

## UK - JAMIA
A Scholary Journal of Informatics in Health and Biomedicine (JAMIA)
- [Evaluating re-identification risks with respect to the HIPAA privacy rule - 2010](https://academic.oup.com/jamia/article/17/2/169/809345)

## UK - Jansen
- [Calculate Risk of Re-Identification](https://lexjansen.com/phuse/2016/dh/DH09.pdf)

## References
- [Estimating Re-Identification - CHEO Authors - 2012](https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/1472-6947-12-66)
- [GCP Estimating Re-Id FR&EN](https://cloud.google.com/dlp/docs/visualizing_re-id_risk)
