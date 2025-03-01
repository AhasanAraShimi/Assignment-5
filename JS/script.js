document.getElementById("theme-btn").addEventListener("click", function() {
  const colors = ['bg-[#DED7FB]' , 'bg-[#F7E3EE]' , 'bg-[#FBFAF5]' , 'bg-[#FBF4E2]' , 'bg-[#D8F0FA]' , 'bg-[#C7DEFA]' , 'bg-[#E0E5B6]' ,'bg-[#F2E2B1]' ,'bg-[#E8F9FF]' ,'bg-[#FFF2C2]' ,'bg-[#D9DFC6]' ,'bg-[#EABDE6]' ,'bg-[#E8F9FF]' ,'bg-[#FDF7F4]' ,'bg-[#E7CCCC]' ,'bg-[##EDE8DC]' ,'bg-[##F6EACB]' ,'bg-[#CAD0DD]' ,'bg-[#EDF1E9]'] 
  const bodyColor = document.body; 
 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  bodyColor.className = ''; 
  bodyColor.classList.add(randomColor);
});


document.getElementById("discover").addEventListener('click' , function(event){
event.preventDefault();
 window.location.href="./questions.html"
})


