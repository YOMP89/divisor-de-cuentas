function calculateSplit() {
    const total = parseFloat(document.getElementById('total').value);
    const people = parseInt(document.getElementById('people').value);
    
    if (isNaN(total) || isNaN(people) || total <= 0 || people <= 0) {
        alert('Por favor, introduce valores válidos');
        return;
    }

    const amountPerPerson = (total / people).toFixed(2);
    document.getElementById('amount').textContent = amountPerPerson;
}
