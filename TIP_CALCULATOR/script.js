const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const dollarTip = document.getElementById('dollar_tip');
const dollarTotal = document.getElementById('dollar_total');

const decreaseTip = document.getElementById('decreaseTip');
const increaseTip = document.getElementById('increaseTip');
const decreasePeople = document.getElementById('decreasePeople');
const increasePeople = document.getElementById('increasePeople');

function calculateTip() {
    const bill = parseInt(billInput.value);
    const tipPercent = parseInt(tipInput.value);
    const people = parseInt(peopleInput.value);

    if (bill > 0 && tipPercent > 0 && people > 0) {
        const tipAmount = (bill * (tipPercent / 100)) / people;
        const totalAmount = (bill / people) + tipAmount;
        dollarTip.textContent = `Rs.${tipAmount.toFixed(2)}`;
        dollarTotal.textContent = `Rs.${totalAmount.toFixed(2)}`;
    } else {
        dollarTip.textContent = 'Rs.0.00';
        dollarTotal.textContent = 'Rs.0.00';
    }
}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

decreaseTip.addEventListener('click', () => {
    if (tipInput.value > 1) {
        tipInput.value--;
        calculateTip();
    }
});

increaseTip.addEventListener('click', () => {
    tipInput.value++;
    calculateTip();
});

decreasePeople.addEventListener('click', () => {
    if (peopleInput.value > 1) {
        peopleInput.value--;
        calculateTip();
    }
});

increasePeople.addEventListener('click', () => {
    peopleInput.value++;
    calculateTip();
});

calculateTip(); // Initial calculation