
[Google - DevOps measurement - Monitoring and Observability](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability)


# Anti-Patterns

## Cause-Baed Alerting Anti-Pattern
A common anti-pattern in writing alerts in monitoring systems is to attempt to enumerate all possible error conditions and write an alert for each of them. We call this cause-based alerting, and you should avoid it as much as possible. Instead, you should focus on __symptom-based alerting__, which only alerts you when a user-facing symptom is visible or is predicted to arise soon. You should still be able to observe non-user-facing systems, but they shouldn't be directly alerting on-call engineers if there are no user-facing symptoms. Note that the term user-facing can also include users internal to your organization. [Ref: Google - DevOps measurement - Monitoring and Observability](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability)
