// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var hour = dayjs().hour();

var hour9 = $("#hour-9");

var allHours = [ $("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17")];

var hour10 = $("#hour-10");

var hour11 = $("#hour-11");

var hour12 = $("#hour-12");

var hour13 = $("#hour-13");

var hour14 = $("#hour-14");

var hour15 = $("#hour-15");

var hour16 = $("#hour-16");

var hour17 = $("#hour-17");

var saveButton = $(".saveBtn")

var userInfo = JSON.parse(localStorage.getItem("Work-Day-Schedule")) || [];

function usefulSaveButton(event) {
  var textArea = document.querySelector(`.textArea${event.target.value}`)
  localStorage.setItem(event.target.value, JSON.stringify(textArea.value));"C:\Users\angel\OneDrive\Pictures\Screenshots\2022-12-10.png"
  return;
}

var getClearButton = document.querySelector(".clearButton")

console.log(getClearButton)

function clearLocalStorage() {
  localStorage.clear();
  alert("Local storage has been cleared.")
  return;
}

getClearButton.addEventListener("click", clearLocalStorage);

// console.log(JSON.parse(localStorage.getItem("Work-Day-Schedule"))[12].myText);

for(var i = 9; i < 18; i++) {
  var textInput = document.querySelector(`.textArea${i}`)
  console.log(textInput)
  textInput.value = JSON.parse(localStorage.getItem(i));
}

for(var i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click",usefulSaveButton)
}

function forTheHours() {
  console.log(hour9);
  if(9 < hour) {
    hour9.addClass("past");
  }
  else if(9 > hour) {
    hour9.addClass("future");
  } 
  else {
    hour9.addClass("present");
  }

  if(10 < hour) {
    hour10.addClass("past");
  }
  else if(10 > hour) {
    hour10.addClass("future");
  } 
  else {
    hour10.addClass("present");
  }

  if(11 < hour) {
    hour11.addClass("past");
  }
  else if(11 > hour) {
    hour11.addClass("future");
  } 
  else {
    hour11.addClass("present");
  }

  if(12 < hour) {
    hour12.addClass("past");
  }
  else if(12 > hour) {
    hour12.addClass("future");
  } 
  else {
    hour12.addClass("present");
  }

  if(13 < hour) {
    hour13.addClass("past");
  }
  else if(13 > hour) {
    hour13.addClass("future");
  } 
  else {
    hour13.addClass("present");
  }

  if(14 < hour) {
    hour14.addClass("past");
  }
  else if(14 > hour) {
    hour14.addClass("future");
  } 
  else {
    hour14.addClass("present");
  }

  if(15 < hour) {
    hour15.addClass("past");
  }
  else if(15 > hour) {
    hour15.addClass("future");
  } 
  else {
    hour15.addClass("present");
  }

  if(16 < hour) {
    hour16.addClass("past");
  }
  else if(16 > hour) {
    hour16.addClass("future");
  } 
  else {
    hour16.addClass("present");
  }

  if(17 < hour) {
    hour17.addClass("past");
  }
  else if(17 > hour) {
    hour17.addClass("future");
  } 
  else {
    hour17.addClass("present");
  }
  return;
}
forTheHours();

var today = dayjs();

var dateTime = document.getElementById("datetime")

// dateTime.innerHTML = (("0"+(dt.getMonth()+1)).slice(-2))+"."+ (("0"+dt.getDate()).slice(-2))  +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

dateTime.innerHTML = today.format("MM-DD-YYYY hh:mm a")