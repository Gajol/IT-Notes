
patterns

Exactly-One Processing - https://www.baeldung.com/kafka-exactly-once

CQRS - Command Query Separation / Command Query Responsibility Segregation
https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#Command_query_responsibility_segregation
It states that every method should either be a command that performs an action, or a query that returns data to the caller, but not both. In other words, asking a question should not change the answer.[1] More formally, methods should return a value only if they are referentially transparent and hence possess no side effects.

Command–query separation (CQS) is a principle of imperative computer programming. It was devised by Bertrand Meyer as part of his pioneering work on the Eiffel programming language.
