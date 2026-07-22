# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetChar_System_Int32_System_Char__"></a> Method TryGetChar

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetChar_System_Int32_System_Char__"></a> TryGetChar\(Int32, out Char\)

Tries to return the item at <code class="paramref">index</code>.

```csharp
Boolean TryGetChar(Int32 index, out Char item)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the character.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetChar_OceanApocalypseStudios_RSML_Sources_SourceLocation_System_Char__"></a> TryGetChar\(SourceLocation, out Char\)

Tries to return the item at the specified <code class="paramref">location</code>.

```csharp
Boolean TryGetChar(SourceLocation location, out Char item)
```

### Parameters

`location` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The item's location.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

