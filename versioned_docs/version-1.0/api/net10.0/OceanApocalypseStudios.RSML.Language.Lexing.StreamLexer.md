# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StreamLexer"></a> Class StreamLexer

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

[Lexer.Configuration](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Configuration.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Configuration), 
[Lexer.Inject\(ToolchainConfiguration\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Inject.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Inject\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_), 
[Lexer.Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Lex), 
[Lexer.Dispose\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Dispose.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Dispose), 
[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

 [StreamLexer\(IReadOnlyStream, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StreamLexer\_\_ctor\_OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyStream\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

## Methods

 [Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_StreamLexer\_Lex)

Tokenizes a source passed to the lexer.

