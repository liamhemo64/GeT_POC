---
description: Backend
---

1. Minimalist Domain Design
Primary Constructors & Records: Use C# record types to define data structures. This reduces boilerplate for DTOs and internal models, making the code "float" with less weight.

Avoid Primitive Obsession: Instead of using strings or integers for everything, wrap them in specialized types (Value Objects). This ensures that an Email cannot be accidentally treated as a Username, improving type safety.

Immutable by Default: Favor init-only properties. Keeping your state immutable prevents side effects that usually drag down large-scale applications.

2. High-Velocity & Clean Code Flow
Ultra-Clean Controllers: Controllers should ONLY handle Dependency Injection and route requests to the logic layer (CQRS handlers/Services). Zero business logic should live in the controller.

Validation via Action Filters/Middleware: Never write validation logic inside the controller. Use Action Filters or tools like FluentValidation pipeline behaviors to validate DTOs before the request even hits the controller.

The Guard Clause Rule: Return early. Check for nulls or invalid states at the very beginning of your inner domain/service methods to avoid deeply nested if statements.

End-to-End Asynchrony: Use async/await for every I/O operation (from Controller to Repository). This prevents thread-blocking "gravity" that slows down scalability.

3. Robust API Design (התוספות החשובות ל-API)
Descriptive Attribute Routing: Use explicit attribute routing (e.g., [Route("api/catalog/{categoryId}/items/{id}")]) to make the API self-documenting and strictly structured.

Resource Management (Paging, Filtering, Sorting): Never return raw, unpaginated collections. Always implement paging, searching, and sorting for list queries (like fetching inventory records) to protect server memory and database performance.

API Versioning: Implement API versioning from day one (e.g., via URL path or headers). This allows your microservices to evolve without breaking existing client contracts.

4. Zero-Friction Architecture
Modular Monolith First: Build your system in distinct modules within a single project before splitting into microservices. This allows you to refactor without the "gravity" of network latency and complex deployment.

CQRS (Command Query Responsibility Segregation): Separate your read logic from your write logic. This prevents the domain model from becoming bloated with query-specific requirements.

Feature-Based Folder Structure: Organize your code by feature (e.g., Features/Inventory/UpdateStock) rather than by technical type (Controllers/, Services/). This makes the project much easier to navigate as it grows.

5. Infrastructure, Observability & Quality
EF Core Optimization: Use .AsNoTracking() for read-only operations to bypass the overhead of the change tracker.

Global Exception Handling: Use a centralized middleware or .NET 8 IExceptionHandler to catch errors. This entirely removes the need for try-catch blocks in controllers.

Native AOT (Ahead-of-Time): For microservices, use AOT compilation. This eliminates the JIT compilation lag, resulting in near-instant startup times and minimal memory usage.

Structured Logging: Use Serilog (or NLog) to log data in JSON format. This makes your logs searchable and actionable rather than just a wall of text.

OpenTelemetry Integration: Implement tracing from day one to visualize how requests move through your system, ensuring you can spot bottlenecks immediately.