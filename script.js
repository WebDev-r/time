function time(){
mydate =new Date();
document.getElementsByClassName("time-box")[0].innerHTML=mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds()
}
setInterval(time,100)