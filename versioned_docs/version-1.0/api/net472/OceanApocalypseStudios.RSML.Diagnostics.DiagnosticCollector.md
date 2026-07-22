# <a id="OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector"></a> Class DiagnosticCollector

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

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

 [DiagnosticCollector\(Severity\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.\-ctor.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_\_ctor\_OceanApocalypseStudios\_RSML\_Diagnostics\_Severity\_)

Creates a new diagnostic collector.

## Properties

 [HasCriticalErrors](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.HasCriticalErrors.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_HasCriticalErrors)

A property that indicates whether there are critical diagnostics.
The toolchain should break if this is <code>true</code>.

 [MinimumCriticalSeverity](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.MinimumCriticalSeverity.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_MinimumCriticalSeverity)

The minimum diagnostic severity for a diagnostic to be considered critical.

## Methods

 [Add\(Diagnostic\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.Add.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_Add\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_)

Adds an error to the list of errors.

 [Clear\(\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.Clear.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_Clear)

Clears the <xref href="OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector" data-throw-if-not-resolved="false"></xref>, leaving it fully empty.

 [GetAll\(\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.GetAll.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_GetAll)

Returns all

 [GetEnumerator\(\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.GetEnumerator.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_GetEnumerator)

Returns an enumerator that iterates through the collection.

 [IEnumerable.GetEnumerator\(\)](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.System\-Collections\-IEnumerable\-GetEnumerator.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_DiagnosticCollector\_System\_Collections\_IEnumerable\_GetEnumerator)

Returns an enumerator that iterates through a collection.

