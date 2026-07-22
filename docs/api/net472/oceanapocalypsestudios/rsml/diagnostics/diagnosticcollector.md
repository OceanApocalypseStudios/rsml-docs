---
id: net472-diagnosticcollector
title: DiagnosticCollector
sidebar_label: DiagnosticCollector
---

# DiagnosticCollector

Namespace: OceanApocalypseStudios.RSML.Diagnostics

A list of RSML toolchain errors.

```csharp
public sealed record class DiagnosticCollector : System.Collections.Generic.IEnumerable`1[[OceanApocalypseStudios.RSML.Diagnostics.Diagnostic, RSML, Version=3.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Collections.IEnumerable, System.IEquatable`1[[OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector, RSML, Version=3.0.0.0, Culture=neutral, PublicKeyToken=null]]
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>
Implements [IEnumerable&lt;Diagnostic&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.ienumerable), [IEquatable&lt;DiagnosticCollector&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br>
Attributes [NullableContextAttribute](./system/runtime/compilerservices/nullablecontextattribute.md), [NullableAttribute](./system/runtime/compilerservices/nullableattribute.md)

## Properties

### **HasCriticalErrors**

A property that indicates whether there are critical diagnostics.
 The toolchain should break if this is `true`.

```csharp
public bool HasCriticalErrors { get; private set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **MinimumCriticalSeverity**

The minimum diagnostic severity for a diagnostic to be considered critical.

```csharp
public Severity MinimumCriticalSeverity { get; }
```

#### Property Value

[Severity](./oceanapocalypsestudios/rsml/diagnostics/severity.md)<br>

## Constructors

### **DiagnosticCollector(Severity)**

Creates a new diagnostic collector.

```csharp
public DiagnosticCollector(Severity minimumCriticalSeverity = Severity.Error)
```

#### Parameters

`minimumCriticalSeverity` [Severity](./oceanapocalypsestudios/rsml/diagnostics/severity.md)<br>
The minimum diagnostic severity for a diagnostic to be considered critical.

## Methods

### **Add(Diagnostic)**

Adds an error to the list of errors.

```csharp
public DiagnosticCollector Add(Diagnostic diagnostic)
```

#### Parameters

`diagnostic` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

#### Returns

[DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

### **Clear()**

Clears the [DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md), leaving it fully empty.

```csharp
public DiagnosticCollector Clear()
```

#### Returns

[DiagnosticCollector](./oceanapocalypsestudios/rsml/diagnostics/diagnosticcollector.md)<br>

### **GetAll()**

Returns all

```csharp
public ImmutableArray<Diagnostic> GetAll()
```

#### Returns

[ImmutableArray&lt;Diagnostic&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable.immutablearray-1)<br>

### **GetEnumerator()**

```csharp
public IEnumerator<Diagnostic> GetEnumerator()
```

#### Returns

[IEnumerator&lt;Diagnostic&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1)<br>
