---
description: Backend
---

1. Minimalist Domain Design
Primary Constructors & Records: Use C# record types to define data structures. This reduces boilerplate for DTOs and internal models, making the code "float" with less weight.

Avoid Primitive Obsession: Instead of using strings or integers for everything, wrap them in specialized types (Value Objects). This ensures that an Email cannot be accidentally treated as a Username, improving type safety.

Immutable by Default: Favor init-only properties. Keeping your state immutable prevents side effects that usually drag down large-scale applications.

2. High-Velocity Code Flow
The Guard Clause Rule: Return early. Check for nulls or invalid states at the very beginning of your methods to avoid deeply nested if statements that complicate the logic flow.

End-to-End Asynchrony: Use async/await for every I/O operation. This prevents thread-blocking "gravity" that slows down your server's scalability.

Expression-Bodied Members: Use => for simple methods and properties to keep your classes concise and readable.

3. Lightweight Infrastructure
EF Core Optimization: Use .AsNoTracking() for read-only operations to bypass the overhead of the change tracker.

Native AOT (Ahead-of-Time): For microservices, use AOT compilation. This eliminates the JIT (Just-In-Time) compilation lag, resulting in near-instant startup times and minimal memory usage.

Built-in Dependency Injection: Rely exclusively on the native .NET DI container. Avoid complex third-party containers unless strictly necessary to keep the core lean.

4. Zero-Friction Architecture
Modular Monolith First: Build your system in distinct modules within a single project before splitting into microservices. This allows you to refactor without the "gravity" of network latency and complex deployment.

CQRS (Command Query Responsibility Segregation): Separate your read logic from your write logic. This prevents the domain model from becoming bloated with query-specific requirements.

Feature-Based Folder Structure: Organize your code by feature (e.g., Features/Catalog/AddProduct) rather than by technical type (e.g., Controllers/, Services/). This makes the project much easier to navigate as it grows.

5. Observability & Quality
Structured Logging: Use Serilog or similar tools to log data in JSON format. This makes your logs searchable and actionable rather than just a wall of text.

Global Exception Handling: Use a centralized middleware to catch errors. This removes the need for try-catch blocks in every single controller method, keeping the business logic clean.

OpenTelemetry Integration: Implement tracing from day one to visualize how requests move through your system, ensuring you can spot bottlenecks immediately.