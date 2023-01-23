console.log("Wellcome to spotify");

//initialize the variables
let songsindex = 0;
let audioElement = new Audio ("1.mp3");
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');

 let songs = [
    {songNmae: "Aabic Kuthu", filePath: "songs1.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs2.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs3.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs4.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs5.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs6.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs7.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs8.mp3", coverpath: "img/1.jpeg"},

 ]
//handle play/pause click
 masterPlay.addEventListener('click', ()=>{
      if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.remove('fa-pause-play');
      }
 })
 //listen to events
 myProgressBar.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   //update seekbar
 })
