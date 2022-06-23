$(function(){

//시간 재생 - 매 1초마다 재생
setInterval(function(){
    let d = new Date();
let h = d.getHours(); //시간
let m = d.getMinutes(); //분
let s = d.getSeconds(); //초

// 0~9까지는 앞에 0을 표시
if(s < 10) {
    s = '0' + s;
};

if(m < 10) {
    m = '0' + m;
}

//AM, PM 표시
 if(h <= 12) {
    h = 'AM' + h;
 }

 if (h >= 12) {
    h = 'PM' + h;
 }

 if (m == 50 + s == 10) {
    alert('휴식 시간!')
 }

 /*
 1)오전/오후 표시 - 24시간제 if
 2)알람기능: 50분이 되면 '휴식시간' 경고창 띄우기
 */

//시간 표시
$('.hour').html(h);
$('.min').html(m);
$('.sec').html(s);
}, 1000);

})