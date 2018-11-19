




$(document).ready( () => {

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

  window.setInterval(myClock, 1000);

});
