let boolCancelled = false;
let boolPaused = false;
function timer(element){
  let sec = document.getElementById("Timer").value * 60;
  if (sec === 0 ) {
    alert("Please enter a value greater than 0");
  } else {
  element.hidden = true;
  
  createCancel();
  var timer = setInterval(function(){
      document.getElementById('timerDisplay').innerHTML=sec + " Seconds";
      sec--;
      if (boolPaused) {
        
      }
      if (boolCancelled) {
        clearInterval(timer);
        document.getElementById('timerDisplay').innerHTML= "00:00 - Please refresh page to start timer";
      }
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}
}


function createCancel() {
  let btn = document.createElement("button");
  btn.id = "btnCancel";
  btn.innerHTML = "Cancel";
  btn.onclick = function () {
    boolCancelled = true;
    document.getElementById('timerDisplay').innerHTML= "Cancelled";
  };
  document.body.appendChild(btn);

}

