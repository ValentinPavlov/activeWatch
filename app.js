const watchTimeSet = () => {
    const currentTime = new Date()
    const year = currentTime.getFullYear()
    const hours = (currentTime.getHours() < 10) ? '0' + currentTime.getHours() : currentTime.getHours()
    const minutes = (currentTime.getMinutes() < 10) ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    document.querySelector('.hour').innerHTML = hours + ':' + minutes;
    document.querySelector('.watch_year').innerHTML = 'since. ' + year

}
setInterval(watchTimeSet, 100);