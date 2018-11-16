// Your code here
console.log('hi');
$(document).ready( () => {

  // const intervals = ["Hours", "Minutes", "Seconds"];

  const clock = $('body #clock');
  let date = new Date;

  // intervals.forEach( interval => {
  //   clock.append('<li>' + interval + ': ' + date.get`${interval}` + '</li>');
  // })

  const myClock = () => {

    clock.append( '<p>' + `${date.getHours()}` + ':' + `${date.getMinutes()}` + ':' + `${date.getSeconds()}` + '</p>');
  };

  let intervalID = window.setInterval(myClock, 1000);

});
