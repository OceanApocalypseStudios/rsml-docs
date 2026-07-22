---
id: net10.0-isupportscache
title: ISupportsCache
sidebar_label: ISupportsCache
---

# ISupportsCache

Namespace: OceanApocalypseStudios.RSML.Cache

Represents a service or a type that supports cached data.

```csharp
public interface ISupportsCache
```

## Properties

### **CacheExists**

Whether there's cached data.

```csharp
bool CacheExists { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

## Methods

### **BuildCache()**

Builds the cache if it doesn't exist yet.

```csharp
void BuildCache()
```

### **BuildCache(Boolean)**

Builds the cache. If `forceRebuild` is set to `true`,
 the cache will be built even if it already exists.

```csharp
void BuildCache(bool forceRebuild)
```

#### Parameters

`forceRebuild` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
Whether to force the cache to be built even if it exists.
