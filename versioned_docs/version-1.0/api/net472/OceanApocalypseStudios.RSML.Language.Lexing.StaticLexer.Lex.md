# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_Lex_OceanApocalypseStudios_RSML_Sources_ISource_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Method Lex

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_Lex_OceanApocalypseStudios_RSML_Sources_ISource_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Lex\(ISource, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a source passed to the lexer.

```csharp
public static IEnumerable<Token> Lex(ISource source, ToolchainConfiguration configurations, DiagnosticCollector diagnostics)
```

### Parameters

`source` [ISource](OceanApocalypseStudios.RSML.Sources.ISource.md)

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

