# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLineFromIndex_System_Int32_"></a> Method GetLineFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLineFromIndex_System_Int32_"></a> GetLineFromIndex\(Int32\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
public Result<String> GetLineFromIndex(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line, as an array of items.

