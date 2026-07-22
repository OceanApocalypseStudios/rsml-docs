# <a id="OceanApocalypseStudios_RSML_Diagnostics_Result_1"></a> Struct Result<TValue\>

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

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

 [Error](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.Error.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_Error)

The diagnostic that serves as the error value when an error occurs.
Might be null or an arbitrary default if <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> is <code>true</code>.

 [IsError](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.IsError.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_IsError)

Set to <code>false</code> when the operation is successful. Otherwise, it's set to <code>true</code>.
It also indicates whether <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref> can be safely accessed or not (safe to access if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsError" data-throw-if-not-resolved="false"></xref> is <code>false</code>).

 [IsSuccessful](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.IsSuccessful.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_IsSuccessful)

Set to <code>true</code> when the operation is successful. Otherwise, it's set to <code>false</code>.
It also indicates whether <xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.Value" data-throw-if-not-resolved="false"></xref> can be safely accessed or not (safe to access if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> is <code>true</code>).

 [Value](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.Value.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_Value)

The return value. Might be null or an arbitrary default if
<xref href="OceanApocalypseStudios.RSML.Diagnostics.Result%601.IsSuccessful" data-throw-if-not-resolved="false"></xref> is <code>false</code>.

## Methods

 [Fail\(Diagnostic\)](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.Fail.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_Fail\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_)

Creates a return result with an unsuccessful outcome.

 [Success\(TValue\)](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.Success.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Result\_1\_Success\_\_0\_)

Creates a return result with a successful outcome.

