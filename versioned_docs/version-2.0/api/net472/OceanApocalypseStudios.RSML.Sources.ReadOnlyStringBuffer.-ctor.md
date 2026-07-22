# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_String_"></a> Constructor ReadOnlyStringBuffer

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_String_"></a> ReadOnlyStringBuffer\(String\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a string.

```csharp
public ReadOnlyStringBuffer(String content)
```

### Parameters

`content` [String](https://learn.microsoft.com/dotnet/api/system.string)

The string that the buffer will wrap.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_ReadOnlySpan_System_Char__"></a> ReadOnlyStringBuffer\(ReadOnlySpan<Char\>\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
by allocating a string from a <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public ReadOnlyStringBuffer(ReadOnlySpan<Char> content)
```

### Parameters

`content` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span pointing to the string's data.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_Char___"></a> ReadOnlyStringBuffer\(Char\[\]\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of characters.

```csharp
public ReadOnlyStringBuffer(Char[] content)
```

### Parameters

`content` [Char](https://learn.microsoft.com/dotnet/api/system.char)\[\]

The array of characters to use for the buffer.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_Byte___System_Text_Encoding_"></a> ReadOnlyStringBuffer\(Byte\[\], Encoding?\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of bytes and the encoding to use when decoding them.

```csharp
public ReadOnlyStringBuffer(Byte[] content, Encoding? encoding = null)
```

### Parameters

`content` [Byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The array of bytes to use for the buffer.

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)?

The encoding to use when decoding <code class="paramref">content</code>.
Use <code>null</code> for the <xref href="System.Text.Encoding.Default" data-throw-if-not-resolved="false"></xref> encoding.

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer__ctor_System_Byte__System_Int32_System_Text_Encoding_"></a> ReadOnlyStringBuffer\(Byte\*, Int32, Encoding?\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a pointer referencing an array of bytes and the encoding
to use when decoding them.

```csharp
[CLSCompliant(false)]
public ReadOnlyStringBuffer(Byte* contentPtr, Int32 byteCount, Encoding? encoding = null)
```

### Parameters

`contentPtr` [Byte](https://learn.microsoft.com/dotnet/api/system.byte)\*

The pointer referecing the array of bytes to use for the buffer.

`byteCount` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The amount of bytes in the array referenced by <code class="paramref">contentPtr</code>.

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)?

The encoding to use when decoding <code class="paramref">contentPtr</code>.
Use <code>null</code> for the <xref href="System.Text.Encoding.Default" data-throw-if-not-resolved="false"></xref> encoding.

### Remarks

This method is not CLS-compliant due to the unsafe context and the use of pointers.

