---
id: "OceanApocalypseStudios.RSML.Sources.IReadOnlyStream.md"
managed-by: python-postprocessor
---

# Interface IReadOnlyStream

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

Represents a read-only sequential stream.

```csharp
public interface IReadOnlyStream : ISource, IDisposable, IEquatable<IReadOnlyStream?>
```

#### Implements

[ISource](OceanApocalypseStudios.RSML.Sources.ISource.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IEquatable<IReadOnlyStream?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

## Properties

### CursorIndex

The current index of the cursor.

```csharp
Int32 CursorIndex { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

