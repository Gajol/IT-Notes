
# Modelling

Modelling software architecture is not standardized.  

[C4 Model](https://c4model.com/) - Simon Brown - created in 2011 - this [2018 article](https://www.infoq.com/articles/C4-architecture-model/) popularized it

https://en.wikipedia.org/wiki/C4_model
- Context diagrams (level 1): show the system in scope and its relationship with users and other systems;
- Container diagrams (level 2): decompose a system into interrelated containers. A container represents an application or a data store;
- Component diagrams (level 3): decompose containers into interrelated components, and relate the components to other containers or other systems;
- Code diagrams (level 4): provide additional details about the design of the architectural elements that can be mapped to code. C4 model relies at this level on existing notations such as __Unified Modelling Language__ (UML), __Entity Relation Diagrams__ (ERD) or diagrams generated by Integrated Development Environments (IDE).

Why use C4:
- C4 model facilitates collaborative visual architecting and evolutionary architecture in the context of agile teams where more formal documentation methods and up-front architectural design are not desired
- The creation of software diagrams has been scaled back as a result of the shift to agile methodologies. When diagrams are created, they are often confusing and unclear.
- The C4 model consists of a hierarchical set of software architecture diagrams for context, containers, components, and code.
- The hierarchy of the C4 diagrams provides different levels of abstraction, each of which is relevant to a different audience.
- Avoid ambiguity in your diagrams by including a sufficient amount of text as well as a key/legend for the notation you use.

[4+1 Architectural View](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model)
4+1 is a view model used for "describing the architecture of software-intensive systems, based on the use of multiple, concurrent views":
1. Logical view : The logical view is concerned with the functionality that the system provides to end-users. UML diagrams are used to represent the logical view, and include class diagrams, and state diagrams.
1. Process view
1. Development view : The development view illustrates a system from a programmer's perspective and is concerned with software management. This view is also known as the implementation view. It uses the UML Component diagram to describe system components. UML Diagrams used to represent the development view include the Package diagram.
1. Physical view / Deployment View : The physical view depicts the system from a system engineer's point of view. It is concerned with the topology of software components on the physical layer as well as the physical connections between these components. This view is also known as the deployment view. UML diagrams used to represent the physical view include the deployment diagram
1. Scenarios : Use Case View : The description of an architecture is illustrated using a small set of use cases, or scenarios, which become a fifth view. The scenarios describe sequences of interactions between objects and between processes. They are used to identify architectural elements and to illustrate and validate the architecture design. They also serve as a starting point for tests of an architecture prototype.

Note: The “4+1” view model is rather “generic”: other notations and tools can be used, other design methods can be used, especially for the logical and process decompositions, but we have indicated the ones we have used with success. - *Philippe Kruchten*


# Tools to build documentation / diagrams
[Structurizr](https://structurizr.com/) - A DSL to draw C4 model architectures.  Caution:  Paid subscription $600/yr - per workspace - Likely following too much of Simon Brown... - alternatives???