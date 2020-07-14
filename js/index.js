const bucket = document.getElementById('bucket');
const countDown = document.getElementById('count');
let count = 0;
let countBonus = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showtender() {
    let tender = document.createElement('img');
    tender.src = 'img/tender.png';
    tender.className = 'tender';
    tender.style.top = getRandomInt(80) + '%';
    tender.style.left = getRandomInt(80) + '%';
    document.body.appendChild(tender);
    setTimeout(() => {
        tender.remove();
    }, 900);
}

function refreshDisplayCount(count) {
    countDown.innerText = count;
}

const improvements = document.querySelectorAll('.improvement');
improvements.forEach((improvement) => {
    improvement.addEventListener('click', function(event) {
        if (count >= improvement.dataset.expense) {
            count = count - improvement.dataset.expense;
            refreshDisplayCount(count);
            countBonus = countBonus + parseInt(improvement.dataset.clicker);

            const newExpense = Math.floor(parseInt(improvement.dataset.expense) * 1.1);
            improvement.dataset.expense = newExpense;
            improvement.querySelector('.improvement-expense').innerText = newExpense;
        }
    });
});


bucket.addEventListener('click', function(event) {
    const rando = getRandomInt(9);
    if (rando === 5) showtender();
    count = count + 1 + countBonus;
    refreshDisplayCount(count);
});