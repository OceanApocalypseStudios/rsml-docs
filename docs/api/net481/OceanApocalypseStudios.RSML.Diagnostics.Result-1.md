---
id: "OceanApocalypseStudios.RSML.Diagnostics.Result-1.md"
managed-by: python-postprocessor
---

# Struct Result<TValue\>

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

An operation's result.

```csharp
public readonly struct Result<TValue>
```

#### Type Parameters

`TValue` 

The type of the return value when successful.

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Properties

### Error

The diagnostic that serves as the error value when an error occurs.
Might be null or an arbitrary default if <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> is <code>true</code>.

```csharp
public Diagnostic Error { get; }
```

#### Property Value

 [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

### IsError

Set to <code>false</code> when the operation is successful. Otherwise, it's set to <code>true</code>.
It also indicates whether <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref> can be safely accessed or not (safe to access if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> is <code>false</code>).

```csharp
public Boolean IsError { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> and <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> are mutually exclusive conditions. When one is true,
the other is false. This means you can use any of the two to evaluate whether the operation was successful
and if it's safe to access <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref>.

### IsSuccessful

Set to <code>true</code> when the operation is successful. Otherwise, it's set to <code>false</code>.
It also indicates whether <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref> can be safely accessed or not (safe to access if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> is <code>true</code>).

```csharp
public Boolean IsSuccessful { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> and <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> are mutually exclusive conditions. When one is true,
the other is false. This means you can use any of the two to evaluate whether the operation was successful
and if it's safe to access <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref>.

### Value

The return value. Might be null or an arbitrary default if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> is <code>false</code>.

```csharp
public TValue? Value { get; }
```

#### Property Value

 TValue?

## Methods

### Fail\(Diagnostic\)

Creates a return result with an unsuccessful outcome.

```csharp
public static Result<TValue> Fail(Diagnostic error)
```

#### Parameters

`error` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

The error.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<TValue\>

The result.

### Success\(TValue\)

Creates a return result with a successful outcome.

```csharp
public static Result<TValue> Success(TValue value)
```

#### Parameters

`value` TValue

The return value.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<TValue\>

The result.

