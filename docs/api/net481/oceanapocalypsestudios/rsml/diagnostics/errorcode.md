---
id: oceanapocalypsestudios-rsml-diagnostics-errorcode
title: ErrorCode
sidebar_label: ErrorCode
---

# ErrorCode

Namespace: OceanApocalypseStudios.RSML.Diagnostics

Represents a code specific to an error.

```csharp
public record struct ErrorCode
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [ErrorCode](./oceanapocalypsestudios/rsml/diagnostics/errorcode.md)<br>
Implements [IEquatable&lt;ErrorCode&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)

## Fields

### **LanguagePrefix**

The prefix for all error codes related to RSML.

```csharp
public static char LanguagePrefix;
```

## Properties

### **Category**

The category of the error.

```csharp
public ErrorCategory Category { get; set; }
```

#### Property Value

[ErrorCategory](./oceanapocalypsestudios/rsml/diagnostics/errorcategory.md)<br>

### **Code**

The error code.

```csharp
public int Code { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **CategoryPrefix**

The specific prefix for each error category.

```csharp
public char CategoryPrefix { get; }
```

#### Property Value

[Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>

## Constructors

### **ErrorCode(ErrorCategory, Int32)**

Represents a code specific to an error.

```csharp
public ErrorCode(ErrorCategory Category, int Code)
```

#### Parameters

`Category` [ErrorCategory](./oceanapocalypsestudios/rsml/diagnostics/errorcategory.md)<br>
The category of the error.

`Code` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The error code.
