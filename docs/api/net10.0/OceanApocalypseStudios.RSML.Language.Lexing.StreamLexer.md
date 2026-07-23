---
id: "OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.md"
managed-by: python-postprocessor
---

# Class StreamLexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

```csharp
public class StreamLexer : Lexer, ILexer, IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Lexer](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md) ← 
[StreamLexer](OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.md)

#### Implements

[ILexer](OceanApocalypseStudios.RSML.Language.Lexing.ILexer.md), 
[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[Lexer.Configuration](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Configuration), 
[Lexer.Inject\(ToolchainConfiguration\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Inject\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_), 
[Lexer.Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Lex), 
[Lexer.Dispose\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Dispose), 
[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### StreamLexer\(IReadOnlyStream, DiagnosticCollector\)

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

```csharp
public StreamLexer(IReadOnlyStream stream, DiagnosticCollector diagnostics)
```

#### Parameters

`stream` [IReadOnlyStream](OceanApocalypseStudios.RSML.Sources.IReadOnlyStream.md)

A stream. Can be read-only (<xref href="OceanApocalypseStudios.RSML.Sources.IReadOnlyStream" data-throw-if-not-resolved="false"></xref>) or read and write (<xref href="OceanApocalypseStudios.RSML.Sources.IStream" data-throw-if-not-resolved="false"></xref>).

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

A collector for all emitted diagnostics.

## Methods

### Lex\(\)

Tokenizes a source passed to the lexer.

```csharp
public override IEnumerable<Token> Lex()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

