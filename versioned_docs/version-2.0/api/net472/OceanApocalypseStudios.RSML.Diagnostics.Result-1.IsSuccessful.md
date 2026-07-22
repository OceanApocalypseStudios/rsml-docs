# <a id="OceanApocalypseStudios_RSML_Diagnostics_Result_1_IsSuccessful"></a> Property IsSuccessful

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Diagnostics_Result_1_IsSuccessful"></a> IsSuccessful

Set to <code>true</code> when the operation is successful. Otherwise, it's set to <code>false</code>.
It also indicates whether <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref> can be safely accessed or not (safe to access if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> is <code>true</code>).

```csharp
public Boolean IsSuccessful { get; }
```

### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remarks

<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> and <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> are mutually exclusive conditions. When one is true,
the other is false. This means you can use any of the two to evaluate whether the operation was successful
and if it's safe to access <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref>.

