//Color Changing theme
document.getElementById("theme-btn").addEventListener("click", function() {
  const colors = ['bg-[#DED7FB]' , 'bg-[#F7E3EE]' , 'bg-[#FBFAF5]' , 'bg-[#FBF4E2]' , 'bg-[#D8F0FA]' , 'bg-[#C7DEFA]' , 'bg-[#E0E5B6]' ,'bg-[#F2E2B1]' ,'bg-[#E8F9FF]' ,'bg-[#FFF2C2]' ,'bg-[#D9DFC6]' ,'bg-[#EABDE6]' ,'bg-[#E8F9FF]' ,'bg-[#FDF7F4]' ,'bg-[#E7CCCC]' ,'bg-[##EDE8DC]' ,'bg-[##F6EACB]' ,'bg-[#CAD0DD]' ,'bg-[#EDF1E9]'] 
  const bodyColor = document.body; 
 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  bodyColor.className = ''; 
  bodyColor.classList.add(randomColor);
});



//Location og next page
document.getElementById("discover").addEventListener('click' , function(event){
event.preventDefault();
 window.location.href="./questions.html"
})


//Time & Date
const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = document.getElementById("current-day").innerText = `${days[today.getDay()]},`;
const date = document.getElementById("current-date").innerText = `${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;

document.getElementById("current-day").innerText = day;
document.getElementById("current-date").innerText = date;


//Button activity


const section = document.getElementById("first-section");
const buttons = section.querySelectorAll("button");
  for(let btn of buttons){
    const button = btn; 
    button.addEventListener("click" ,function(event){    
      alerts = alert('Board updated successfully');
      button.classList.remove('bg-[#3752FD]') ;
      button.classList.add('bg-[#dbe1dd]') ;
      button.disabled=true;      


const numberAdded =document.getElementById("number-tobe-added").innerText;
const convertedNumberAdded =parseInt(numberAdded);
document.getElementById("number-tobe-added").innerText = convertedNumberAdded +1;

const numberDeducted=document.getElementById("number-tobe-deducted").innerText;
const convertedNumberDeducted=parseInt(numberDeducted);

const buttonLimits =document.getElementById("number-tobe-deducted").innerText = convertedNumberDeducted - 1;

if(buttonLimits === 0){
alert("Congrats!!!You have completed all the current tasks")
}






    
    
    })
  }



