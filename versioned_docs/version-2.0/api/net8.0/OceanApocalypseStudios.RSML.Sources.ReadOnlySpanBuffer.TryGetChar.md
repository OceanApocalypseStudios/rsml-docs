# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_TryGetChar_System_Int32_System_Char__"></a> Method TryGetChar

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_TryGetChar_System_Int32_System_Char__"></a> TryGetChar\(Int32, out Char\)

Tries to return the item at <code class="paramref">index</code>.

```csharp
public readonly Boolean TryGetChar(Int32 index, out Char item)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the character.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

### Remarks

> [!NOTE]
> This method follows the EOF convention where the EOF character
> is 0 (<code>'\0'</code>) and the return value is <code>false</code>, due to EOF
> not being an actual buffer location.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_TryGetChar_OceanApocalypseStudios_RSML_Sources_SourceLocation_System_Char__"></a> TryGetChar\(SourceLocation, out Char\)

Tries to return the item at the specified <code class="paramref">location</code>.

```csharp
public readonly Boolean TryGetChar(SourceLocation location, out Char item)
```

### Parameters

`location` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The item's location.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

### Remarks

> [!NOTE]
> This method follows the EOF convention where the EOF character
> is 0 (<code>'\0'</code>) and the return value is <code>false</code>, due to EOF
> not being an actual buffer location.

