const calendarDiv = document.getElementById("calendar")

function getDates() {
  let now = new Date();
  let year = number(now.getFullYear()); //년
  let month = number(now.getMonth() + 1); //월 1~12월
  let day = number(now.getDate()); //일 1~31일
  let dayNumber = now.getDay(); //요일 0-6
  const daylist = ["일", "월", "화", "수", "목", "금", "토"];

  calendarDiv.textContent = year + "년 " + month + "월 " + day + "일 " + daylist[dayNumber] + "요일";
}
getDates();

function number(num) {
  if(num < 10) {
      return "0" + num;
  }
  return num;
}