# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_BuildCache"></a> Method BuildCache

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_BuildCache"></a> BuildCache\(\)

Builds the cache if it doesn't exist yet.

```csharp
public void BuildCache()
```

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_BuildCache_System_Boolean_"></a> BuildCache\(Boolean\)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

```csharp
public void BuildCache(Boolean forceRebuild)
```

### Parameters

`forceRebuild` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to force the cache to be built even if it exists.

