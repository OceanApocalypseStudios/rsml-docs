# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexBuffer__1___0_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Method LexBuffer<TBuffer\>

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_StaticLexer_LexBuffer__1___0_OceanApocalypseStudios_RSML_ToolchainConfiguration_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> LexBuffer<TBuffer\>\(TBuffer, ToolchainConfiguration, DiagnosticCollector\)

Tokenizes a buffer passed to the lexer.

```csharp
public static IEnumerable<Token> LexBuffer<TBuffer>(TBuffer buffer, ToolchainConfiguration configurations, DiagnosticCollector diagnostics) where TBuffer : IReadOnlyBuffer
```

### Parameters

`buffer` TBuffer

`configurations` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

### Type Parameters

`TBuffer` 

### Remarks

> [!NOTE]
> This method avoids boxing.
> [!NOTE]
> This method accepts ref structs if the target framework is
> .NET 9.0 or higher. Otherwise, you might want to take a look at
> <xref href="OceanApocalypseStudios.RSML.Language.Lexing.StaticLexer.LexSpan(OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer%2cOceanApocalypseStudios.RSML.ToolchainConfiguration%2cOceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector)" data-throw-if-not-resolved="false"></xref>.

