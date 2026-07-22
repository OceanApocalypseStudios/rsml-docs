---
id: net8.0-staticlexer
title: StaticLexer
sidebar_label: StaticLexer
---

# StaticLexer

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

A static lexer for when you don't need to lex from a builder.

```csharp
public static class StaticLexer
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [StaticLexer](./oceanapocalypsestudios/rsml/language/lexing/staticlexer.md)<br>
Attributes [NullableContextAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.nullablecontextattribute), [NullableAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.nullableattribute)

## Methods

### **Lex(ISource, ToolchainConfiguration, DiagnosticCollector)**

Tokenizes a source passed to the lexer.

```csharp
public static IEnumerable<Token> Lex(ISource source, ToolchainConfiguration configurations, DiagnosticCollector diagnostics)
```

#### Parameters

`source` [ISource](./oceanapocalypsestudios/rsml/sources/isource.md)<br>

`configurations` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

`diagnostics` [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.

### **LexSpan(ReadOnlySpanBuffer, ToolchainConfiguration, DiagnosticCollector)**

Tokenizes a read-only span buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexSpan(ReadOnlySpanBuffer buffer, ToolchainConfiguration configuration, DiagnosticCollector collector)
```

#### Parameters

`buffer` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>

`configuration` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

`collector` [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.

### **LexBuffer&lt;TBuffer&gt;(TBuffer, ToolchainConfiguration, DiagnosticCollector)**

Tokenizes a buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexBuffer<TBuffer>(TBuffer buffer, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TBuffer : IReadOnlyBuffer
```

#### Type Parameters

`TBuffer`<br>

#### Parameters

`buffer` TBuffer<br>

`configurations` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

`diagnostics` [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.

**Remarks:**

&gt; [!NOTE]
 &gt; This method avoids boxing.
 &gt; [!NOTE]
 &gt; This method accepts ref structs if the target framework is
 &gt; .NET 9.0 or higher. Otherwise, you might want to take a look at
 &gt; [StaticLexer.LexSpan(ReadOnlySpanBuffer, ToolchainConfiguration, DiagnosticCollector)](./oceanapocalypsestudios/rsml/language/lexing/staticlexer.md#lexspanreadonlyspanbuffer-toolchainconfiguration-diagnosticcollector).

### **LexStream&lt;TStream&gt;(TStream, ToolchainConfiguration, DiagnosticCollector)**

Tokenizes a stream passed to the lexer.

```csharp
public static IEnumerable<Token> LexStream<TStream>(TStream stream, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TStream : IReadOnlyStream
```

#### Type Parameters

`TStream`<br>

#### Parameters

`stream` TStream<br>

`configurations` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

`diagnostics` [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.

**Remarks:**

&gt; [!NOTE]
 &gt; This method avoids boxing.
