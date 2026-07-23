---
id: "OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.md"
managed-by: python-postprocessor
---

# Struct ErrorCode

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

Represents a code specific to an error.

```csharp
public record struct ErrorCode : IEquatable<ErrorCode>
```

#### Implements

[IEquatable<ErrorCode\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ErrorCode\(ErrorCategory, Int32\)

Represents a code specific to an error.

```csharp
public ErrorCode(ErrorCategory Category, Int32 Code)
```

#### Parameters

`Category` [ErrorCategory](OceanApocalypseStudios.RSML.Diagnostics.ErrorCategory.md)

The category of the error.

`Code` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The error code.

## Fields

### LanguagePrefix

The prefix for all error codes related to RSML.

```csharp
public const Char LanguagePrefix = 'R'
```

#### Field Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)

## Properties

### Category

The category of the error.

```csharp
public ErrorCategory Category { readonly get; set; }
```

#### Property Value

 [ErrorCategory](OceanApocalypseStudios.RSML.Diagnostics.ErrorCategory.md)

### CategoryPrefix

The specific prefix for each error category.

```csharp
public readonly Char CategoryPrefix { get; }
```

#### Property Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)

### Code

The error code.

```csharp
public Int32 Code { readonly get; set; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ToString\(\)

Returns the formatted error code.

```csharp
public override readonly String ToString()
```

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The formatted error code.

