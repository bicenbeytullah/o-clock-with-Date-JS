setInterval(() => {
let time = document.querySelector("#time");
let day = document.querySelector("#day");

    

let date = new Date();
let current = date.toDateString();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let pm = "PM";

time.textContent = h + ":" + m + ":" + s + " " + pm;
day.textContent = current;
    
});
