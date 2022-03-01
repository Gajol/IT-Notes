# Computing k-anonymity for a dataset
A [Google Cloud - Data Loss Preventation](https://cloud.google.com/dlp) article on how to compute k-anonymity.[Article](https://cloud.google.com/dlp/docs/compute-k-anonymity)


## K-Anonymity Definition
- [k-anonymity - wikipedia](https://en.wikipedia.org/wiki/K-anonymity): k-anonymity is a property possessed by certain anonymized data. The concept of k-anonymity was first introduced by Latanya Sweeney and Pierangela Samarati in a paper published in 1998 as an attempt to solve the problem: "Given person-specific field-structured data, produce a release of the data with scientific guarantees that the individuals who are the subjects of the data cannot be re-identified while the data remain practically useful.
- [k-anonymity - google DLP](https://cloud.google.com/dlp/docs/compute-k-anonymity): K-anonymity is a property of a dataset that indicates the re-identifiability of its records. A dataset is k-anonymous if quasi-identifiers for each person in the dataset are identical to at least k – 1 other people also in the dataset.
- [K-Anonymity - Immuta](https://www.immuta.com/articles/k-anonymity-everything-you-need-to-know-2021-guide/): The concept of k-anonymity was introduced into information security and privacy back in 1998. It’s built on the idea that by combining sets of data with similar attributes, identifying information about any one of the individuals contributing to that data can be obscured. k-Anonymization is often referred to as the power of ‘hiding in the crowd.’ Individuals’ data is pooled in a larger group, meaning information in the group could correspond to any single member, thus masking the identity of the individual or individuals in question.  

  k-Anonymity protects against hackers or malicious parties using ‘re-identification,’ or the practice of tracing data’s origins back to the individual it is connected to in the real world.

  For a given person, identifying data (name, zip code, gender, etc.) may exist alongside sensitive data (health records, prescriptions, financial information, passwords, etc.). In the wrong hands, identifying data and sensitive data could be combined to re-identify that person and compromise their privacy. The purpose of k-anonymity is to ensure the two categories of data cannot be connected to one another.


# Using K-Anonymity
To leverage k-anonymity, the system owner must have the ability to support the process of measuring, de-identify and updating the data model.

1. Set Goal: Need to desired k-anonymity goal.
1. Define Model: Need to understand data models; and associate each attribute as a identifier, quasi-identifier and sensitivity.
1. Measure: Need to measure k-anonymity continuously since as data model changes so does k-anonymity.
1. Analyse Risk: Need to understand risk analysis terms and techniques. [[ref: Google](https://cloud.google.com/dlp/docs/concepts-risk-analysis#risk_analysis_terms_and_techniques)].
1. De-Identifying Techniques: Implement techniques to achieve desired k-anonymity.  Generalization and Suppression.   Generalization examples are age-brackets and geographic regions.  Suppression removes attributes value entirely.
1. Advanced: Need to implement additional security technologies to track attacks on k-anonymity.  
  - Privacy-enhancing technologies (PET) dynamically mask and anonymize sensitive data – with mathematical guarantees. [[Immuta Dynamic Data Masking](https://en.wikipedia.org/wiki/Data_masking#Dynamic_data_masking)]
   - [[Anon Tokens](http://arxiv.org/abs/1906.09829.)]

## Common Terms
- Identifiers: Identifiers can be used to uniquely identify an individual. For example, someone's full name or government ID number are considered identifiers.
- Quasi-identifiers: Quasi-identifiers don't uniquely identify an individual, but, when combined and cross-referenced with individual records, they can substantially increase the likelihood that an attacker will be able to re-identify an individual. For example, ZIP codes and ages are considered quasi-identifiers.
- Sensitive data: Sensitive data is data that is protected against unauthorized exposure. Attributes like health conditions, salary, criminal offenses, and geographic location are typically considered sensitive data. __Note__ that there can be overlap between identifiers and sensitive data.
- Equivalence classes: An equivalence class is a group of rows with identical quasi-identifiers.

## Techniques
[Google DLP](https://cloud.google.com/dlp/docs/concepts-risk-analysis#risk_analysis_terms_and_techniques) has four (4) techniques to quantify the level of risk:
__k-anonymity__: A property of a dataset that indicates the re-identifiability of its records. A dataset is k-anonymous if quasi-identifiers for each person in the dataset are identical to at least k – 1 other people also in the dataset.

__l-diversity__: An extension of k-anonymity that additionally measures the diversity of sensitive values for each column in which they occur. A dataset has l-diversity if, for every set of rows with identical quasi-identifiers, there are at least l distinct values for each sensitive attribute.

__k-map__: Computes re-identifiability risk by comparing a given de-identified dataset of subjects with a larger re-identification—or "attack"—dataset. Google Cloud DLP doesn't know the attack dataset, but it statistically models it by using publicly available data like the US Census, by using a custom statistical model (indicated as one or more BigQuery tables), or by extrapolating from the distribution of values in the input dataset. Each dataset—the sample dataset and the re-identification dataset—shares one or more quasi-identifier columns.

__Delta-presence (δ-presence)__: Estimates the probability that a given user in a larger population is present in the dataset. This is used when membership in the dataset is itself sensitive information. Similarly to k-map, Cloud DLP doesn't know the attack dataset, but statistically models it using publicly available data, user-specified distributions, or extrapolation from the input dataset.


# HR Modernization



## Cross-Domain Software Solution (CDSS)
A cross-domain software solution is required for Workday ****

Based on the [A Primer on Data Privacy Protection -2001](https://dspace.mit.edu/handle/1721.1/8589), *the data holder must be held responsible for enforcing privacy protection*.   The data holder is the high-side system which is integrating with the low-side system.



# References
- [Sweeney, Latanya. ‘Computational Disclosure Control : A Primer on Data Privacy Protection’. Thesis, Massachusetts Institute of Technology, 2001.](https://dspace.mit.edu/handle/1721.1/8589)
- [El Emam, Khaled, and Fida Kamal Dankar. ‘Protecting Privacy Using K-Anonymity’. Journal of the American Medical Informatics Association 15, no. 5 (1 September 2008): 627–37.](https://doi.org/10.1197/jamia.M2716) : References Canadian example of privacy breach of anonymized health records.
- [Samarati, Pierangela, and Latanya Sweeney. "Protecting privacy when disclosing information: k-anonymity and its enforcement through generalization and suppression." (1998).](https://scholar.google.com/scholar?q=Protecting+Privacy+when+Disclosing+Information:+k-Anonymity+and+Its+Enforcement+through+Generalization+and+Suppression)
