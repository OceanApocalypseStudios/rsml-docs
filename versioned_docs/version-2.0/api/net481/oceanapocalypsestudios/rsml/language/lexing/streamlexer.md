---
id: net481-streamlexer
title: StreamLexer
sidebar_label: StreamLexer
---

# StreamLexer

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

```csharp
public class StreamLexer : Lexer, ILexer, OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [Lexer](./oceanapocalypsestudios/rsml/language/lexing/lexer.md) → [StreamLexer](./oceanapocalypsestudios/rsml/language/lexing/streamlexer.md)<br>
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

### **StreamLexer(IReadOnlyStream, DiagnosticCollector)**

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

```csharp
public StreamLexer(IReadOnlyStream stream, DiagnosticCollector diagnostics)
```

#### Parameters

`stream` [IReadOnlyStream](./oceanapocalypsestudios/rsml/sources/ireadonlystream.md)<br>
A stream. Can be read-only ([IReadOnlyStream](./oceanapocalypsestudios/rsml/sources/ireadonlystream.md)) or read and write ([IStream](./oceanapocalypsestudios/rsml/sources/istream.md)).

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
