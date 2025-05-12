function updateClockAndDate() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12; 
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
  
    const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeStr;
  

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
  
    const dateStr = `${dayOfWeek}, ${month} ${day}, ${year}`;
    document.getElementById('date').textContent = dateStr;
  }
  

  updateClockAndDate();

  setInterval(updateClockAndDate, 1000);
  