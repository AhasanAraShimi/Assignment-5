function currentDate() {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayOfWeek = days[today.getDay()];  
  const month = months[today.getMonth()];  
  const date = today.getDate();            
  const year = today.getFullYear(); 
  const formattedDate = `${month} ${date} ${year}`;
  return formattedDate;
}

function currentDay() {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayOfWeek = days[today.getDay()];  
  const formattedDay = `${dayOfWeek},`;
  return formattedDay;
}
const dateElement = document.getElementById("current-date");
const dayElement = document.getElementById("current-day");

dateElement.innerText = currentDate();
dayElement.innerText = currentDay();

