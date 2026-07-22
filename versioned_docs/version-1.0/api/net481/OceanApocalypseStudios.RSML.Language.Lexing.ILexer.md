# <a id="OceanApocalypseStudios_RSML_Language_Lexing_ILexer"></a> Interface ILexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

Represents a lexer for RSML.

```csharp
public interface ILexer : IToolchainComponent, IDisposable
```

#### Implements

[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

> [!TIP]
> If you want to add content on top of a lexer, without overriding
> the extra functionality it adds, you might want to take a look at
> <xref href="OceanApocalypseStudios.RSML.Language.Lexing.Lexer" data-throw-if-not-resolved="false"></xref>.

## Methods

 [Lex\(\)](OceanApocalypseStudios.RSML.Language.Lexing.ILexer.Lex.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_ILexer\_Lex)

Tokenizes a source passed to the lexer.

