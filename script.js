// Get elements
const tempInput = document.getElementById('tempInput');
const errorMsg = document.getElementById('errorMsg');
const convertBtn = document.getElementById('convertBtn');
const celsiusResult = document.getElementById('celsiusResult');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');

// Convert button click event
convertBtn.addEventListener('click', convertTemperature);

// Also convert on Enter key press
tempInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertTemperature();
    }
});

function convertTemperature() {
    // Clear previous error
    errorMsg.textContent = '';
    
    // Get input value
    const inputValue = parseFloat(tempInput.value);
    
    // Validation
    if (isNaN(inputValue) || tempInput.value.trim() === '') {
        errorMsg.textContent = '❌ Please enter a valid number';
        clearResults();
        return;
    }
    
    // Get selected input unit
    const inputUnit = document.querySelector('input[name="inputUnit"]:checked').value;
    
    // Variables to store celsius value
    let celsius;
    
    // Convert input to Celsius first
    if (inputUnit === 'celsius') {
        celsius = inputValue;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
    } else if (inputUnit === 'kelvin') {
        celsius = inputValue - 273.15;
    }
    
    // Check for absolute zero
    if (celsius < -273.15) {
        errorMsg.textContent = '⚠️ Temperature cannot be below -273.15°C (Absolute Zero)';
        clearResults();
        return;
    }
    
    // Convert to all units
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    
    // Display results with 2 decimal places
    celsiusResult.textContent = celsius.toFixed(2);
    fahrenheitResult.textContent = fahrenheit.toFixed(2);
    kelvinResult.textContent = kelvin.toFixed(2);
}

function clearResults() {
    celsiusResult.textContent = '-';
    fahrenheitResult.textContent = '-';
    kelvinResult.textContent = '-';
}