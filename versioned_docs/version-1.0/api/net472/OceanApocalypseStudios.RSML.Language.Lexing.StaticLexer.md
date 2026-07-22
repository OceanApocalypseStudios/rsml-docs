# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer"></a> Class StaticLexer

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

 [Lex\(ISource, ToolchainConfiguration, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StaticLexer\_Lex\_OceanApocalypseStudios\_RSML\_Sources\_ISource\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

Tokenizes a source passed to the lexer.

 [LexBuffer<TBuffer\>\(TBuffer, ToolchainConfiguration, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.LexBuffer.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StaticLexer\_LexBuffer\_\_1\_\_\_0\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

Tokenizes a buffer passed to the lexer.

 [LexSpan\(ReadOnlySpanBuffer, ToolchainConfiguration, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.LexSpan.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StaticLexer\_LexSpan\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

Tokenizes a read-only span buffer passed to the lexer.

 [LexStream<TStream\>\(TStream, ToolchainConfiguration, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.LexStream.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StaticLexer\_LexStream\_\_1\_\_\_0\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

Tokenizes a stream passed to the lexer.

