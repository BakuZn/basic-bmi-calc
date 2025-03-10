function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    let resultText = document.getElementById('result');
    let meterFill = document.getElementById('meterFill');
    
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let categories = [
            { max: 18.5, msg: "You are underweight. Consider a nutritious diet to gain healthy weight." },
            { max: 24.9, msg: "You have a healthy weight. Keep maintaining your balanced diet and active lifestyle!" },
            { max: 29.9, msg: "You are overweight. Regular exercise and a balanced diet can help you stay fit." },
            { max: Infinity, msg: "You are in the obese range. A structured diet and workout plan can improve your health." }
        ];
        
        let message = categories.find(c => bmi < c.max).msg;
        resultText.innerText = `Your BMI is ${bmi}\n${message}`;
        
        let percentage = Math.min((bmi / 40) * 100, 100); // Normalize to max 40 BMI
        meterFill.style.width = `${percentage}%`;
    } else {
        resultText.innerText = "Please enter valid values";
    }
}
