document.getElementById('light').style.display = "none";

dark.addEventListener('click', function(){
    document.body.style.backgroundColor = "#343a40";
    document.getElementById('h1').style.display = "#eee";
    document.getElementById('dark').style.display = "none";
    document.getElementById('light').style.display = "inline";
});

light.addEventListener('click', function(){
    document.body.style.backgroundColor = "#f8f9fa";
    document.getElementById('h1').style.display = "#000";
    document.getElementById('dark').style.display = "inline";
    document.getElementById('light').style.display = "none";
});

setInterval(myTimer, 1000);

function myTimer(){
    let my_time = new Date();
    let display_time = my_time.toLocaleTimeString();
    document.getElementById('ctime').innerHTML = display_time;
}
    //let my_time = new Date();
   // let currentMinute = my_date.getMinutes();
   // let currentHours = my_date.getHours();

   //if(currentHours >= 10 && currentMinute <= 40){
   //     document.body.style.display = 'none';
   //     document.getElementsById('body').style.display = 'none';
   // }
