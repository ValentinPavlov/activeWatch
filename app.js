let watchTimeSet = () => {
    let currentTime = new Date()
    let hours = (currentTime.getHours() < 10) ? '0' + currentTime.getHours() : currentTime.getHours()
    let minutes = (currentTime.getMinutes() < 10) ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    document.querySelector('.hour').innerHTML = hours + ':' + minutes;

}
let watchYearSet = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear()
    document.querySelector('.watch_year').innerHTML = 'since. ' + year

}
setInterval(watchTimeSet, 100);
setInterval(watchYearSet, 100);