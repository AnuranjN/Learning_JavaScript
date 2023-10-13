function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        return;
    }
    const bmi = weight / (height * height);
    document.getElementById('result').textContent = `Your BMI: ${bmi.toFixed(2)}`;
}