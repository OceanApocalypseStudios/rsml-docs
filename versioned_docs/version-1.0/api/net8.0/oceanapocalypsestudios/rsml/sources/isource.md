---
id: net8.0-isource
title: ISource
sidebar_label: ISource
---

# ISource

Namespace: OceanApocalypseStudios.RSML.Sources

A data source for RSML's toolchain members.

```csharp
public interface ISource : System.IDisposable
```

Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **IsEmpty**

Whether the source is completely empty.

```csharp
bool IsEmpty { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **IsReadOnly**

Whether the source can be mutated.

```csharp
bool IsReadOnly { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Length**

The length of the source.

```csharp
int Length { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
