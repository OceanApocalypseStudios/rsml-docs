---
id: oceanapocalypsestudios-rsml-sources-ireadonlystream
title: IReadOnlyStream
sidebar_label: IReadOnlyStream
---

# IReadOnlyStream

Namespace: OceanApocalypseStudios.RSML.Sources

Represents a read-only sequential stream.

```csharp
public interface IReadOnlyStream : ISource, System.IDisposable, System.IEquatable`1[[OceanApocalypseStudios.RSML.Sources.IReadOnlyStream, RSML, Version=3.0.0.0, Culture=neutral, PublicKeyToken=null]]
```

Implements [ISource](./oceanapocalypsestudios/rsml/sources/isource.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable), [IEquatable&lt;IReadOnlyStream&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)

## Properties

### **CursorIndex**

The current index of the cursor.

```csharp
int CursorIndex { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
