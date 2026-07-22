# <a id="OceanApocalypseStudios_RSML_Language_Lexing_StreamLexer__ctor_OceanApocalypseStudios_RSML_Sources_IReadOnlyStream_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Constructor StreamLexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_StreamLexer__ctor_OceanApocalypseStudios_RSML_Sources_IReadOnlyStream_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> StreamLexer\(IReadOnlyStream, DiagnosticCollector\)

An implementation of a RSML lexer backed by a read-only or read-and-write stream.

```csharp
public StreamLexer(IReadOnlyStream stream, DiagnosticCollector diagnostics)
```

### Parameters

`stream` [IReadOnlyStream](OceanApocalypseStudios.RSML.Sources.IReadOnlyStream.md)

A stream. Can be read-only (<xref href="OceanApocalypseStudios.RSML.Sources.IReadOnlyStream" data-throw-if-not-resolved="false"></xref>) or read and write (<xref href="OceanApocalypseStudios.RSML.Sources.IStream" data-throw-if-not-resolved="false"></xref>).

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

A collector for all emitted diagnostics.

