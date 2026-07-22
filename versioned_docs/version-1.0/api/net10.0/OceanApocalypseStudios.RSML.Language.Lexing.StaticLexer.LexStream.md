# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexStream__1___0_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Method LexStream<TStream\>

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexStream__1___0_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> LexStream<TStream\>\(TStream, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a stream passed to the lexer.

```csharp
public static IEnumerable<Token> LexStream<TStream>(TStream stream, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TStream : IReadOnlyStream, allows ref struct
```

### Parameters

`stream` TStream

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

### Type Parameters

`TStream` 

### Remarks

> [!NOTE]
> This method avoids boxing.

