console.log("Wellcome to spotify");

//initialize the variables
let songsindex = 1;
let audioElement = new Audio ("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");

 let songs = [
    {songNmae: "Aabic Kuthu", filePath: "songs/1.mp3", coverpath: "img/1.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/2.mp3", coverpath: "img/2.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/3.mp3", coverpath: "img/3.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/4.mp3", coverpath: "img/4.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/5.mp3", coverpath: "img/5.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/6.mp3", coverpath: "img/6.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/7.mp3", coverpath: "img/7.jpeg"},
    {songNmae: "Aabic Kuthu", filePath: "songs/8.mp3", coverpath: "img/8.jpeg"},

 ]
//handle play/pause c
console.log(addEventListener);
 masterPlay.addEventListener('click', () => {
      if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
      }
      else{
         audioElement.pause();
         masterPlay.classList.remove('fa-pause-cricle');
         masterPlay.classList.add('fa-play-circle');
      }
 })
 //listen to events
 myProgressBar.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   //update seekbar
 })
