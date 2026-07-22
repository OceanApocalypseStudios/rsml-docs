# <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic__ctor_OceanApocalypseStudios_RSML_Diagnostics_ErrorCode_OceanApocalypseStudios_RSML_Sources_SourceSpan_System_String_OceanApocalypseStudios_RSML_Diagnostics_Severity_"></a> Constructor Diagnostic

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic__ctor_OceanApocalypseStudios_RSML_Diagnostics_ErrorCode_OceanApocalypseStudios_RSML_Sources_SourceSpan_System_String_OceanApocalypseStudios_RSML_Diagnostics_Severity_"></a> Diagnostic\(ErrorCode, SourceSpan, String, Severity\)

A diagnostic reported by RSML's API.

```csharp
public Diagnostic(ErrorCode code, SourceSpan span, String message, Severity severity)
```

### Parameters

`code` [ErrorCode](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.md)

The error code.

`span` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span the error relates to.

`message` [String](https://learn.microsoft.com/dotnet/api/system.string)

A brief error message detailing why it has happened.

`severity` [Severity](OceanApocalypseStudios.RSML.Diagnostics.Severity.md)

The error's severity.

