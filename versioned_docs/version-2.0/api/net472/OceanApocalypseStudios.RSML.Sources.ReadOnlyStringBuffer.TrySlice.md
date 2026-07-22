# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_TrySlice_System_Int32_System_Span_System_Char__"></a> Method TrySlice

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_TrySlice_System_Int32_System_Span_System_Char__"></a> TrySlice\(Int32, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
public Boolean TrySlice(Int32 start, Span<Char> slice)
```

### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered part of any slice.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_TrySlice_OceanApocalypseStudios_RSML_Sources_SourceSpan_System_Span_System_Char__"></a> TrySlice\(SourceSpan, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
public Boolean TrySlice(SourceSpan sourceSpan, Span<Char> slice)
```

### Parameters

`sourceSpan` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span indicating what the slice is.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered part of any slice.

