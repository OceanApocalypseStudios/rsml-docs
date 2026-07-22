---
id: net472-bufferlexer
title: BufferLexer
sidebar_label: BufferLexer
---

# BufferLexer

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

An implementation of a RSML lexer backed by a read-only or read-and-write buffer.

```csharp
public class BufferLexer : Lexer, ILexer, OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [Lexer](./oceanapocalypsestudios/rsml/language/lexing/lexer.md) → [BufferLexer](./oceanapocalypsestudios/rsml/language/lexing/bufferlexer.md)<br>
Implements [ILexer](./oceanapocalypsestudios/rsml/language/lexing/ilexer.md), [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)<br>
Attributes [NullableContextAttribute](./system/runtime/compilerservices/nullablecontextattribute.md), [NullableAttribute](./system/runtime/compilerservices/nullableattribute.md)

## Properties

### **Configuration**

```csharp
public virtual ToolchainConfiguration Configuration { get; protected set; }
```

#### Property Value

[ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

## Constructors

### **BufferLexer(IReadOnlyBuffer, DiagnosticCollector)**

An implementation of a RSML lexer backed by a read-only or read-and-write buffer.

```csharp
public BufferLexer(IReadOnlyBuffer buffer, DiagnosticCollector diagnostics)
```

#### Parameters

`buffer` [IReadOnlyBuffer](./oceanapocalypsestudios/rsml/sources/ireadonlybuffer.md)<br>
A buffer. Can be read-only ([IReadOnlyBuffer](./oceanapocalypsestudios/rsml/sources/ireadonlybuffer.md)) or read and write ([IBuffer](./oceanapocalypsestudios/rsml/sources/ibuffer.md)).

`diagnostics` [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>
A collector for all emitted diagnostics.

## Methods

### **Lex()**

Tokenizes a source passed to the lexer.

```csharp
public override IEnumerable<Token> Lex()
```

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.
