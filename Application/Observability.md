# Observability

[honeycomb](https://www.honeycomb.io/)

Understand the unknown, unknowns.  Rather a new domain.


[observability - Wikipedia](https://en.wikipedia.org/wiki/Observability) : Observability is a measure of how well internal states of a system can be inferred from knowledge of its external outputs. In control theory, the observability and controllability of a linear system are mathematical duals.

[Observability - Splunk 2022 Predications](www.splunk.com) : What’s missing is observability, which allows companies to see how their complex webs of cloud services are actually performing, and diagnose problems that affect customer experience directly and fix them, whether it’s in the application code, the user interface or the infrastructure performance. [Splunk Observability 2022 Predictions](https://1drv.ms/b/s!AkwXSmFk-_xpgp8Y3_yVFyXc5i6t4w?e=ZZubMb)


Observability
: Observability provides deep visibility into modern distributed applications for faster, automated problem identification and resolution.

Cardinality
: In the context of databases, cardinality refers to the uniqueness of data values contained in a set. Low cardinality means that a column has a lot of duplicate values in its set. High cardinality means that the column contains a large percentage of completely unique values. A column containing a single value will always have the lowest possible cardinality. A column containing unique IDs will always have the highest possible cardinality.


[^Observability]: [MAJORS, CHARITY. OBSERVABILITY ENGINEERING: Achieving Production Excellence. S.l.: O’REILLY MEDIA, 2022.](www.worldcat.org/isbn/9781492076445)


For a software application to have observability, the following things must be true. You must be able to:
•
•	Understand the inner workings of your application
•	Understand any system state your application many have gotten itself into
•	Understand the things above, solely by observing that with external tools
•	Understand that state, no matter how extreme or unusual
A good litmus test for determining if those conditions are true is to ask yourself the following questions:
•
•	Can you continually answer open-ended questions about the inner workings of your software to explain any anomalous values?
•	Can you understand what any particular user of your software may be experiencing?
•	Can you determine the things above even if you have never seen or debugged this particular state or failure before?
•	Can you determine the things above even if this anomaly has never happened before?
•	Can you ask arbitrary questions about your system and find answers without needing to predict what those anomalies would be in advance?
•	And can you do these things without having to ship any new code to handle or describe that state (which would have implied that you needed to understand it first in order to ... understand it)?
