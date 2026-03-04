const unitsInMeter = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    micrometer: 1e-6,
    nanometer: 1e-9,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
    lightyear: 9.461e15
};

function convertLength() {

    const value = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(value)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    // Convert to meters
    const valueInMeters = value * unitsInMeter[fromUnit];

    // Convert from meters to target unit
    const finalValue = valueInMeters / unitsInMeter[toUnit]; 

    resultElement.textContent =
        `${valueInMeters} ${fromUnit} = ${finalValue.toLocaleString()} ${toUnit}`;
}