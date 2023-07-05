function convertTemperature()
{


  var fromSelect = document.getElementById("fromSelect").value;
  var toSelect = document.getElementById("toSelect").value;
  var inputTemp= document.getElementById("inputTemp").value

  // Perform actions with the form data
//   console.log(fromSelect);
//   console.log(toSelect);
//   console.log(inputTemp);

var result;

if(fromSelect==='farenheit'&& toSelect==='kelvin')
{
    result=`${(inputTemp-32)*(5/9)+273.15} ° K`
}

else if(fromSelect==='farenheit'&& toSelect==='celcius')
{
    result=`${(inputTemp-32)*(5/9)} ° C`
}
else if(fromSelect==='kelvin'&& toSelect==='celcius')
{
    result=`${(inputTemp-273.15)} ° C`
}
else if(fromSelect==='kelvin' && toSelect==='farenheit')
{
    result=`${(inputTemp-273.15)*(9/5)}  ° F`
}
else if(fromSelect==='celcius'&& toSelect==='farenheit')
{
    result=`${inputTemp*(9/5)+32}  ° F`
}

else if(fromSelect==='celcius'&& toSelect==='kelvin')
{
    result=`${inputTemp+273.15}  ° K`
}
else

{
     result= `${inputTemp} °`
}

document.getElementById("outputTemp").textContent=result
}
