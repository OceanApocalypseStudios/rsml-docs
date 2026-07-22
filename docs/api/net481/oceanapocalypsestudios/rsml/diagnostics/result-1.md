---
id: net481-result-1
title: "Result<TValue>"
sidebar_label: "Result<TValue>"
---

# Result&lt;TValue&gt;

Namespace: OceanApocalypseStudios.RSML.Diagnostics

An operation's result.

```csharp
public readonly struct Result<TValue>
```

#### Type Parameters

`TValue`<br>
The type of the return value when successful.

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Result&lt;TValue&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
Attributes [NullableContextAttribute](./system/runtime/compilerservices/nullablecontextattribute.md), [NullableAttribute](./system/runtime/compilerservices/nullableattribute.md), [IsReadOnlyAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.isreadonlyattribute)

## Properties

### **Value**

The return value. Might be null or an arbitrary default if
 [Result&lt;TValue&gt;.IsSuccessful](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#issuccessful) is `false`.

```csharp
public TValue Value { get; }
```

#### Property Value

TValue<br>

### **Error**

The diagnostic that serves as the error value when an error occurs.
 Might be null or an arbitrary default if [Result&lt;TValue&gt;.IsError](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#iserror) is `true`.

```csharp
public Diagnostic Error { get; }
```

#### Property Value

[Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

### **IsSuccessful**

Set to `true` when the operation is successful. Otherwise, it's set to `false`.
 It also indicates whether [Result&lt;TValue&gt;.Value](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#value) can be safely accessed or not (safe to access if
 [Result&lt;TValue&gt;.IsSuccessful](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#issuccessful) is `true`).

```csharp
public bool IsSuccessful { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

**Remarks:**

[Result&lt;TValue&gt;.IsSuccessful](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#issuccessful) and [Result&lt;TValue&gt;.IsError](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#iserror) are mutually exclusive conditions. When one is true,
 the other is false. This means you can use any of the two to evaluate whether the operation was successful
 and if it's safe to access [Result&lt;TValue&gt;.Value](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#value).

### **IsError**

Set to `false` when the operation is successful. Otherwise, it's set to `true`.
 It also indicates whether [Result&lt;TValue&gt;.Value](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#value) can be safely accessed or not (safe to access if
 [Result&lt;TValue&gt;.IsError](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#iserror) is `false`).

```csharp
public bool IsError { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

**Remarks:**

[Result&lt;TValue&gt;.IsSuccessful](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#issuccessful) and [Result&lt;TValue&gt;.IsError](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#iserror) are mutually exclusive conditions. When one is true,
 the other is false. This means you can use any of the two to evaluate whether the operation was successful
 and if it's safe to access [Result&lt;TValue&gt;.Value](./oceanapocalypsestudios/rsml/diagnostics/result-1.md#value).

## Methods

### **Success(TValue)**

Creates a return result with a successful outcome.

```csharp
public static Result<TValue> Success(TValue value)
```

#### Parameters

`value` TValue<br>
The return value.

#### Returns

[Result&lt;TValue&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The result.

### **Fail(Diagnostic)**

Creates a return result with an unsuccessful outcome.

```csharp
public static Result<TValue> Fail(Diagnostic error)
```

#### Parameters

`error` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>
The error.

#### Returns

[Result&lt;TValue&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The result.
