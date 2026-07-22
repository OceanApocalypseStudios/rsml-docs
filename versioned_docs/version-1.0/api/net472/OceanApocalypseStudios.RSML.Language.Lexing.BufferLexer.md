# <a id="OceanApocalypseStudios_RSML_Language_Lexing_BufferLexer"></a> Class BufferLexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

An implementation of a RSML lexer backed by a read-only or read-and-write buffer.

```csharp
public class BufferLexer : Lexer, ILexer, IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Lexer](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md) ← 
[BufferLexer](OceanApocalypseStudios.RSML.Language.Lexing.BufferLexer.md)

#### Implements

[ILexer](OceanApocalypseStudios.RSML.Language.Lexing.ILexer.md), 
[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[Lexer.Configuration](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Configuration.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Configuration), 
[Lexer.Inject\(ToolchainConfiguration\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Inject.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Inject\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_), 
[Lexer.Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Lex), 
[Lexer.Dispose\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Dispose.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Dispose), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

 [BufferLexer\(IReadOnlyBuffer, DiagnosticCollector\)](OceanApocalypseStudios.RSML.Language.Lexing.BufferLexer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_BufferLexer\_\_ctor\_OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_)

An implementation of a RSML lexer backed by a read-only or read-and-write buffer.

## Methods

 [Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.BufferLexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_BufferLexer\_Lex)

Tokenizes a source passed to the lexer.

