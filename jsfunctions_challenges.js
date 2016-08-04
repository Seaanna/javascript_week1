function reverseCharAt(a,b) {
  return a.charAt(a.length - b - 1);
}

function supply (a,b) {
  console.log(a*b*365);
}
//a = current age, b = amount consumed per day

function supply (a,b,c) {
  console.log((b-a)*365*c);
}
//a = current age, b = max age, c = amount consumed per day

function celsiusToFahrenheit (c) {
  var K = c + 273.15;
  console.log (
    c + " degrees Celsius is " + K + " Kelvin."
  );
}

function fahrenheitToCelsius (K) {
  var c = K + 273.15;
  console.log (
    K + " degrees Kelvin is " + c + " Celsius."
  );
}
