//
// Dan's Thing
// // const setupButtons = () => {
// // $('button').click( function() {
// //   const colorClass = $(this).html;
// //   console.log(`you clicked on the ${colorClass} button`);
// // $('#clock').removeClass();
// // $('#clock').addClass();
// // });
// // };
// //
// // setupButtons();


const buttonWhisperer = () => {

  $('.buttons').on( 'click', 'button', function() {
    const divColor = this.innerText.toLowerCase().replace(" ", "");
    const clock = $('body #clock');
    clock[0].style.color = divColor;
    alert(`Change text to ${divColor}!`);
  });
}

const myClock = () => {

  // const intervals = ["Hours", "Minutes", "Seconds"];

  // intervals.forEach( interval => {
  //   clock.append('<li>' + interval + ': ' + date.get`${interval}` + '</li>');
  // })

  const clock = $('body #clock');
  let date = new Date();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();
  let timeofDay = "PM";

  if (hours === 0) {
    hours = 12;
  }

  if (hours < 12 ){
    timeofDay = "AM";
  }

  if (hours > 12) {
    hours -= 12;
  }

  if(hours < 10){
    hours = "0" + hours ;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  clock.html( hours + ' : ' + minutes + ' : ' + seconds + " " + timeofDay );

  let hexColor = '#' + hours + minutes + seconds;
  document.body.style.backgroundColor = hexColor;

};

// let i = 0;
//
// const grayBackground = () => {
//
//   document.body.style.backgroundColor = "rgba("+i+","+i+","+i+",0.1)";
//   console.log("rgba("+i+","+i+","+i+",1)")
//
//   if (i >=250 ) {
//     i = 0;
//   }
//
//   i += 10;
//
// };

$(document).ready( () => {

  window.setInterval(myClock, 1000);
  buttonWhisperer();
  // window.setInterval(grayBackground, 1000);
});
