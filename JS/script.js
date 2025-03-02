//Color Changing theme
document.getElementById("theme-btn").addEventListener("click", function() {
  const colors = ['bg-[#DED7FB]' , 'bg-[#F7E3EE]' , 'bg-[#FBFAF5]' , 'bg-[#FBF4E2]' , 'bg-[#D8F0FA]' , 'bg-[#C7DEFA]' , 'bg-[#E0E5B6]' ,'bg-[#F2E2B1]' ,'bg-[#E8F9FF]' ,'bg-[#FFF2C2]' ,'bg-[#D9DFC6]' ,'bg-[#EABDE6]' ,'bg-[#E8F9FF]' ,'bg-[#FDF7F4]' ,'bg-[#E7CCCC]' ,'bg-[##EDE8DC]' ,'bg-[##F6EACB]' ,'bg-[#CAD0DD]' ,'bg-[#EDF1E9]'] 
  const bodyColor = document.body; 
 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  bodyColor.className = ''; 
  bodyColor.classList.add(randomColor);
});


 //Location to next page
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

 document.getElementById('history').addEventListener("click" ,function(event){    
        document.getElementById('notification-container').style.display ="none" ;

})




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




const container = document.getElementById("first-section");
const headings = container.querySelectorAll("h3");
const heading1 = headings[0].innerText;
const heading2 = headings[1].innerText;
const heading3 = headings[2].innerText;
const heading4 = headings[3].innerText;
const heading5 = headings[4].innerText;
const heading6 = headings[5].innerText;

document.getElementById('button-1').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML= `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading1} at ${timeDetails}</p>`
})


document.getElementById('button-2').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML += `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading2} at ${timeDetails}</p>`
})

document.getElementById('button-3').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML+= `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading3} at ${timeDetails}</p>`
})


document.getElementById('button-4').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML+= `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading4} at ${timeDetails}</p>`
})

document.getElementById('button-5').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML+= `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading5} at ${timeDetails}</p>`
})

document.getElementById('button-6').addEventListener('click',function(event){
  event.preventDefault();
  const container =document.getElementById('notification-container');
  container.innerHTML+= `
  <p class="mx-3 bg-[#F4F7FF] rounded-[8px] p-2 my-6">You have completed the task ${heading6} at ${timeDetails}</p>`
})


