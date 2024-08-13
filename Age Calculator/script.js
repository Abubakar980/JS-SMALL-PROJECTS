const ageCalculator = () => {
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);

    if (inputDate > today) {
        alert("Not Born Yet!");
        displayResult("-", "-", "-");
        return;
    }

    let years = today.getFullYear() - inputDate.getFullYear();
    let months = today.getMonth() - inputDate.getMonth();
    let days = today.getDate() - inputDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Gets the last date of the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    displayResult(days, months, years);
};

const displayResult = (days, months, years) => {
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
};

// Adding an Event Listener on the Button
document.getElementById("calc-age-btn").addEventListener("click", ageCalculator);
