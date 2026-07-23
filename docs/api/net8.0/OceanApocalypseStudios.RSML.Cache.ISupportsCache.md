---
id: "OceanApocalypseStudios.RSML.Cache.ISupportsCache.md"
managed-by: python-postprocessor
---

# Interface ISupportsCache

Namespace: [OceanApocalypseStudios.RSML.Cache](OceanApocalypseStudios.RSML.Cache.md)  
Assembly: RSML.dll  

Represents a service or a type that supports cached data.

```csharp
public interface ISupportsCache
```

## Properties

### CacheExists

Whether there's cached data.

```csharp
Boolean CacheExists { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### BuildCache\(\)

Builds the cache if it doesn't exist yet.

```csharp
void BuildCache()
```

### BuildCache\(Boolean\)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

```csharp
void BuildCache(Boolean forceRebuild)
```

#### Parameters

`forceRebuild` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to force the cache to be built even if it exists.

