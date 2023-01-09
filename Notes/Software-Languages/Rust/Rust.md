# Rust

[(23) RustConf 2019 - Bringing Rust Home to Meet the Parents by Jeremy Fitzhardinge - YouTube](https://www.youtube.com/watch?v=kylqq8pEgRs&ab_channel=Rust)



[Rust](https://www.rust-lang.org/): From Mozilla. Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.[Rust - Wikipedia](https://en.wikipedia.org/wiki/Rust_(programming_language))

Rust is intended to be a language for highly concurrent and highly safe systems,[56] and programming in the large, that is, creating and maintaining boundaries that preserve large-system integrity.[57] This has led to a feature set with an emphasis on safety, control of memory layout, and concurrency.

Why use Rust
Rust solves C/C++ troubles like memory errors in concurrent programs.  Three main benefits:

- better memory safety due to compiler
- easier concurrency due to data ownership model that prevents data races [Rust Data Races](https://doc.rust-lang.org/nomicon/races.html)
- zero-cost abstractions

## Data Races and Race Conditions

- [Blog Post](https://cronokirby.github.io/posts/data-races-vs-race-conditions)

Data Races: "Safe Rust" guarantees an absence of data races; which are defined as: [Rust Data Races](https://doc.rust-lang.org/nomicon/races.html)
:two or more threads accessing a location of memory

- one or more of them is a writes
- one or more of them is unsynchronized

# Web Assembly

[WASI: a New Kind of System Interface (infoq.com)](https://www.infoq.com/presentations/wasi-system-interface/)

WASI: WebAssembly System Interface

WASM: WebAssembly Module



