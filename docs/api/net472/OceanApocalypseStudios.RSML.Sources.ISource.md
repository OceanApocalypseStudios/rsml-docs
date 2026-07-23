---
id: "OceanApocalypseStudios.RSML.Sources.ISource.md"
managed-by: python-postprocessor
---

# Interface ISource

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

A data source for RSML's toolchain members.

```csharp
public interface ISource : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### IsEmpty

Whether the source is completely empty.

```csharp
Boolean IsEmpty { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

Whether the source can be mutated.

```csharp
Boolean IsReadOnly { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Length

The length of the source.

```csharp
Int32 Length { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

