# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexSpan_OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Method LexSpan

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexSpan_OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> LexSpan\(ReadOnlySpanBuffer, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a read-only span buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexSpan(ReadOnlySpanBuffer buffer, ToolchainConfiguration configuration, DiagnosticCollector collector)
```

### Parameters

`buffer` [ReadOnlySpanBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.md)

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`collector` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

