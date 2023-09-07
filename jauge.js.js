const conceptionDate = new Date('2023-08-09');
const dueDate = new Date(conceptionDate);
dueDate.setMonth(dueDate.getMonth() + 9);

const currentDate = new Date();
const totalDuration = dueDate - conceptionDate;
const elapsedDuration = currentDate - conceptionDate;

const percentage = Math.min((elapsedDuration / totalDuration) * 100, 100).toFixed(2);
document.querySelector('.progress').style.width = `${percentage}%`;
document.getElementById('percentage').textContent = `${percentage}%`;
