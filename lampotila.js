function muunna() {
    var temperatureInput = document.getElementById('temperature').value;
    var temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        document.getElementById('vastaus').textContent = "Virheellinen lämpötila.";
        return;
    }

    var selectedUnit = document.getElementById('unitSelector').value;
    var result;
    
    if (selectedUnit === 'celsiusToFahrenheit') {
        result = (temperature * 9 / 5) + 32;
        if (temperature < -273.15) {
            document.getElementById('vastaus').textContent = "Lämpötila Fahrenheit-asteina: " + formatResult(result) + ". Lämpötila on pienempi kuin absoluuttinen nollapiste.";
            return;
        }
        document.getElementById('vastaus').textContent = "Lämpötila Fahrenheit-asteina: " + formatResult(result);
    } else if (selectedUnit === 'fahrenheitToCelsius') {
        result = (temperature - 32) * (5 / 9);
        if (temperature < -459.67) {
            document.getElementById('vastaus').textContent = "Lämpötila Celsius-asteina: " + formatResult(result) + ". Lämpötila on pienempi kuin absoluuttinen nollapiste.";
            return;
        }
        document.getElementById('vastaus').textContent = "Lämpötila Celsius-asteina: " + formatResult(result);
    }
}

function formatResult(result) {
    var decimals = document.querySelector('input[name="decimals"]:checked').value;
    return result.toFixed(decimals);
}