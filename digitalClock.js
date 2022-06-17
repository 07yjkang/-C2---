const clockDiv = document.getElementById("clock");

function getTime() {
  let now = new Date();
  let hour = number(now.getHours()); //시 0-23시
  let minute = number(now.getMinutes()); //분 0-59분
  let second = number(now.getSeconds()); //초 0-59초
  let noon = "오전";
  if(hour > 11) {
      noon = "오후";
      if(hour > 12) {
          hour = hour - 12;
      }
  }
  
  if(now.getHours() == 0) {
      hour = 12;
  }

  clockDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;
}
getTime();
setInterval(getTime, 1000);

function number(num) {
    if(num < 10) {
        return "0" + num;
    }
    return num;
}