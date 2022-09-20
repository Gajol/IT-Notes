

Standards:
All phone numbers in E.164 format.
- [+][country code][subscriber number including area/region code]

Address Standard - [ISO 19160 Addressing]https://www.iso.org/standard/61710.html)

Text Fields - clearly document acceptable formats [example OpenReferral](http://docs.openreferral.org/en/latest/hsds/reference/#names-and-descriptions)


# Data Access Microservices Ideas  

## Continuous Replication
1. copy data that's in legacy to new
1. perform data integrity (validation and consistency) checks; comparing legacy and new site
1. setup continuous replication from legacy to new
1. refactor workloads and services to use the new site
   1. wait for the replication to fully synchronize
   1. start workloads and services
1. terminate legacy when no longer needed for fall back

## Y-Pattern
- for Workday following the workloads write and read to both places (legacy and new)

Steps:
1. refactor workloads write in both places (legacy and new)
1. copy legacy data to new (race conditions, plan, ...)
1. perform data integrity (validation and consistency) checks 1. comparing legacy and new site
1. switch read operations from legacy to new site
1. re-validate integrity (validation and consistency)
1. disable writing in the legacy site .
1. retire legacy when no longer needed for fall-back


## Strangler Fig Pattern
...[Microsoft Strangle Fig Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig)
- Hard to do with a disparate HR application landscape like we have.  
- Incrementally replace specific pieces of functionality with new applications and services.
  - Create a façade that intercepts requests going to the backend legacy system.
  - The façade routes these requests either to the legacy application or the new services.
  - Existing features can be migrated to the new system gradually
  - consumers can continue using the same interface, unaware that any migration has taken place.



## Data Access Microservice
Similar to Y-pattern, but focus on the data-access microservice (vs refactor all workloads...). Centralize read-and-write operations, this is the only entry-point for access to the data storage layer. (acts as a proxy for that layer). .
1. refactor data-access microservice to write to both legacy and new.  Reads are @ new site only.
1. refactor workloads and services (applications, interfaces, dlls, ...) to use a data-access microservice
1. perform data integrity (validation and consistency) checks 1. comparing legacy and new site 1.
1. Refactor central-service to read from new
1. retire legacy when no longer needed for fall-back
