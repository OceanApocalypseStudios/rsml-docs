# <a id="OceanApocalypseStudios_RSML_Language_Lexing_Lexer"></a> Class Lexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

The base class for implementations of RSML lexers and tokenizers.

```csharp
public abstract class Lexer : ILexer, IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Lexer](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md)

#### Derived

[BufferLexer](OceanApocalypseStudios.RSML.Language.Lexing.BufferLexer.md), 
[StreamLexer](OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.md)

#### Implements

[ILexer](OceanApocalypseStudios.RSML.Language.Lexing.ILexer.md), 
[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

 [Configuration](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Configuration.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Configuration)

Configurations for the toolchain component.

## Methods

 [Dispose\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Dispose.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Dispose)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

 [Inject\(ToolchainConfiguration\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Inject.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Inject\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_)

Injects a configuration into the toolchain component, modifying it.

 [Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Lexer\_Lex)

Tokenizes a source passed to the lexer.

