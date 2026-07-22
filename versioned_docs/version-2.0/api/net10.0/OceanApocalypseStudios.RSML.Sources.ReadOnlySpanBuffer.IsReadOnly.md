# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_IsReadOnly"></a> Property IsReadOnly

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_IsReadOnly"></a> IsReadOnly

Whether the source can be mutated.

```csharp
public readonly Boolean IsReadOnly { get; }
```

### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remarks

Always returns <code>true</code>, as <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref> only
supports read-only content (hence the name).

