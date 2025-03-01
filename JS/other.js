
// //Time
const currentTime = new Date();
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();


let period;
if (hours >= 12) {
  period = "PM";
} else {
  period = "AM";
}


if (hours >= 12) {
  hours = hours % 12; 
}
if (hours === 0) {
  hours = 12; // 
}
const timeDetails = `${hours}:${minutes}:${seconds} ${period}`; 





