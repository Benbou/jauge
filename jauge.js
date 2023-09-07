const conceptionDate = new Date('2023-08-09');
const dueDate = new Date(conceptionDate);
dueDate.setMonth(dueDate.getMonth() + 9);

const currentDate = new Date();
const totalDuration = dueDate - conceptionDate;
const elapsedDuration = currentDate - conceptionDate;

const percentage = Math.min((elapsedDuration / totalDuration) * 100, 100).toFixed(2);

// Animation de la jauge
setTimeout(() => {
    document.querySelector('.progress').style.width = `${percentage}%`;
}, 100);

document.getElementById('percentage').textContent = `${percentage}%`;
