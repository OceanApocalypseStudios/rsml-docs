---
id: "OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md"
managed-by: python-postprocessor
---

# Class DiagnosticCollector

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

A list of RSML toolchain errors.

```csharp
public sealed record DiagnosticCollector : IEnumerable<Diagnostic>, IEnumerable, IEquatable<DiagnosticCollector>
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

#### Implements

[IEnumerable<Diagnostic\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), 
[IEquatable<DiagnosticCollector\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DiagnosticCollector\(Severity\)

Creates a new diagnostic collector.

```csharp
public DiagnosticCollector(Severity minimumCriticalSeverity = Severity.Error)
```

#### Parameters

`minimumCriticalSeverity` [Severity](OceanApocalypseStudios.RSML.Diagnostics.Severity.md)

The minimum diagnostic severity for a diagnostic to be considered critical.

## Properties

### HasCriticalErrors

A property that indicates whether there are critical diagnostics.
The toolchain should break if this is <code>true</code>.

```csharp
public Boolean HasCriticalErrors { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### MinimumCriticalSeverity

The minimum diagnostic severity for a diagnostic to be considered critical.

```csharp
public Severity MinimumCriticalSeverity { get; }
```

#### Property Value

 [Severity](OceanApocalypseStudios.RSML.Diagnostics.Severity.md)

## Methods

### Add\(Diagnostic\)

Adds an error to the list of errors.

```csharp
public DiagnosticCollector Add(Diagnostic diagnostic)
```

#### Parameters

`diagnostic` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

#### Returns

 [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### Clear\(\)

Clears the <xref href="OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector" data-throw-if-not-resolved="false"></xref>, leaving it fully empty.

```csharp
public DiagnosticCollector Clear()
```

#### Returns

 [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

### GetAll\(\)

Returns all

```csharp
public ImmutableArray<Diagnostic> GetAll()
```

#### Returns

 [ImmutableArray](https://learn.microsoft.com/dotnet/api/system.collections.immutable.immutablearray\-1)<[Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)\>

### GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<Diagnostic> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)\>

An enumerator that can be used to iterate through the collection.

### IEnumerable.GetEnumerator\(\)

Returns an enumerator that iterates through a collection.

```csharp
IEnumerator IEnumerable.GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

An <xref href="System.Collections.IEnumerator" data-throw-if-not-resolved="false"></xref> object that can be used to iterate through the collection.

