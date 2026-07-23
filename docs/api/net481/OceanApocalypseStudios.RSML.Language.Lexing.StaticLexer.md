---
id: "OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.md"
managed-by: python-postprocessor
---

# Class StaticLexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

A static lexer for when you don't need to lex from a builder.

```csharp
public static class StaticLexer
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StaticLexer](OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.md)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### Lex\(ISource, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a source passed to the lexer.

```csharp
public static IEnumerable<Token> Lex(ISource source, ToolchainConfiguration configurations, DiagnosticCollector diagnostics)
```

#### Parameters

`source` [ISource](OceanApocalypseStudios.RSML.Sources.ISource.md)

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

### LexBuffer<TBuffer\>\(TBuffer, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexBuffer<TBuffer>(TBuffer buffer, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TBuffer : IReadOnlyBuffer
```

#### Parameters

`buffer` TBuffer

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

#### Type Parameters

`TBuffer` 

#### Remarks

> [!NOTE]
> This method avoids boxing.
> [!NOTE]
> This method accepts ref structs if the target framework is
> .NET 9.0 or higher. Otherwise, you might want to take a look at
> <xref href="OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.LexSpan(OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer%2cOceanApocalypseStudios.RSML.ToolchainConfiguration%2cOceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector)" data-throw-if-not-resolved="false"></xref>.

### LexSpan\(ReadOnlySpanBuffer, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a read-only span buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexSpan(ReadOnlySpanBuffer buffer, ToolchainConfiguration configuration, DiagnosticCollector collector)
```

#### Parameters

`buffer` [ReadOnlySpanBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.md)

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`collector` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

### LexStream<TStream\>\(TStream, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a stream passed to the lexer.

```csharp
public static IEnumerable<Token> LexStream<TStream>(TStream stream, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TStream : IReadOnlyStream
```

#### Parameters

`stream` TStream

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

#### Type Parameters

`TStream` 

#### Remarks

> [!NOTE]
> This method avoids boxing.

