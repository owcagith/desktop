//F5 ask

// function F5ask() {
//   return "Wychodzisz?"
// }

// Clock script

  function clock() {
    let date = new Date();
    let hrs = ('00' + date.getHours()).slice(-2);
    let mins = ('00' + date.getMinutes()).slice(-2);
    let secs = ('00' + date.getSeconds()).slice(-2);
    document.getElementById('clock').innerHTML = hrs + ':' + mins + ':' + secs;
    setInterval(clock, 1000)
  }
  clock()

  function date () {
    let date = new Date();
    let mth = date.getMonth() + 1;
    let day = date.getDate();
    let yr = date.getFullYear();
    document.getElementById('date').innerHTML = day + '.' + mth + '.' + yr;
  }
  date()
// Drag & drop script

  function allowDrop(ev) {
      ev.preventDefault();
  }
    
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
    
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

//   

