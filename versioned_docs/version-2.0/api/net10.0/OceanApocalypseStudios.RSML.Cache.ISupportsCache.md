# <a id="OceanApocalypseStudios_RSML_Cache_ISupportsCache"></a> Interface ISupportsCache

Namespace: [OceanApocalypseStudios.RSML.Cache](OceanApocalypseStudios.RSML.Cache.md)  
Assembly: RSML.dll  

Represents a service or a type that supports cached data.

```csharp
public interface ISupportsCache
```

## Properties

 [CacheExists](OceanApocalypseStudios.RSML.Cache.ISupportsCache.CacheExists.md\#OceanApocalypseStudios\_RSML\_Cache\_ISupportsCache\_CacheExists)

Whether there's cached data.

## Methods

 [BuildCache\(\)](OceanApocalypseStudios.RSML.Cache.ISupportsCache.BuildCache.md\#OceanApocalypseStudios\_RSML\_Cache\_ISupportsCache\_BuildCache)

Builds the cache if it doesn't exist yet.

 [BuildCache\(Boolean\)](OceanApocalypseStudios.RSML.Cache.ISupportsCache.BuildCache.md\#OceanApocalypseStudios\_RSML\_Cache\_ISupportsCache\_BuildCache\_System\_Boolean\_)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

