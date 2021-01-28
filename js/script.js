//Navigation
let navItems = document.querySelectorAll(".navigation__link");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".navigation__checkbox").click();
  });
});

//Class Schedule
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const classes = [
  {
    "ClassName": "Cardio",
    "ClassDescription": "Specifically designed to work on conditioning, this class will help you build stamina and develop faster feet as a boxer."
  }, {
    "ClassName": "Kettlebell",
    "ClassDescription": "Focuses on overall strength and conditioning drills as well as explosion drills for the hips, core and glutes, all from the handle of a kettlebell."
  }, {
    "ClassName": "Core Training",
    "ClassDescription": "With non-stop multiple core and sit up exercises, you will predominately work your abs, oblique, lower back, and hip flexor, and strengthen your core through a series of lower body strength and flexibility exercises."
  }, {
    "ClassName": "Boxercise/Technique",
    "ClassDescription": "A heavy bag conditioning class that mixes in plyometric drills with punching and technique drills. An intense combination of a cardio workout with heavy bag drills."
  }, {
    "ClassName": "Strength Training",
    "ClassDescription": "Designed to increase muscle strength and endurance, this class uses moderate dumbbells to exhaust your muscles through an intense non-stop weight training circuit for upper and lower body muscles. And let's not forget pushups."
  }, {
    "ClassName": "BoxStrong",
    "ClassDescription": "This total body conditioning and boxing class will give you the most intense and challenging fitness experience ever. Enjoy strength, core, explosion, speed training, a full boxing circuit with heavy bags, and mitt work with the trainers. At the end of class you will be rewarded with a brutal abdominal workout."
  }, {
    "ClassName": "Heavy Bag Conditioning",
    "ClassDescription": "Focuses on speed and power drills on the heavy bags."
  }, {
    "ClassName": "Sparring Class - Summer Saturdays: June 11 & 25, July 9 & 23, August 13 & 27 ",
    "ClassDescription": "This class is focused on drills and technique and includes light to moderate sparring. Learn defense and counter punching basics as they pertain to sparring. Whether or not you have prior experience in the ring, you will need to pass an assessment before you are permitted to spar. Non-members interested please pay online before arriving in class. Class fee is $15.00."
  }, {
    "ClassName": "Live Stronger: Begins July 6 (free for the summer)",
    "ClassDescription": "This class is for those of you who have fought hard to reclaim your lives after battling cancer. It's a place for you to reclaim your health, your energy, your happiness, and to make friends who are also looking for the support of a strong class that is geared towards helping you reclaim your life."
  },
  {
  "ClassName": "Open Gym",
  "ClassDescription": "90-minute Maximum Workout, 15 Person Capacity"
  }
];

//Weekly Classes
const Weeklyclasses = [
  {
    "DayOfTheWeek": "Monday",
    "ClassName": "Open Gym",
    "Start_Time": "3:00PM",
    "End_Time": "5:30PM"
  },
  {
    "DayOfTheWeek": "Monday",
    "ClassName": "Boxercise/Technique",
    "Start_Time": "5:30PM",
    "End_Time": "6:30PM"
  },
  {
    "DayOfTheWeek": "Monday",
    "ClassName": "BoxStrong",
    "Start_Time": "7:00PM",
    "End_Time": "8:30PM"
  },  
  {
    "DayOfTheWeek": "Tuesday",
    "ClassName": "Open Gym",
    "Start_Time": "3:00PM",
    "End_Time": "5:30PM"
  },
  {
    "DayOfTheWeek": "Tuesday",
    "ClassName": "Boxercise/Technique",
    "Start_Time": "5:30PM",
    "End_Time": "6:30PM"
  },
  {
    "DayOfTheWeek": "Tuesday",
    "ClassName": "BoxStrong",
    "Start_Time": "7:00PM",
    "End_Time": "8:30PM"
  },    
  {
    "DayOfTheWeek": "Wednesday",
    "ClassName": "Open Gym",
    "Start_Time": "3:00PM",
    "End_Time": "5:30PM"
  },
  {
    "DayOfTheWeek": "Wednesday",
    "ClassName": "Boxercise/Technique",
    "Start_Time": "5:30PM",
    "End_Time": "6:30PM"
  },
  {
    "DayOfTheWeek": "Wednesday",
    "ClassName": "BoxStrong",
    "Start_Time": "7:00PM",
    "End_Time": "8:30PM"
  },    
  {
    "DayOfTheWeek": "Thursday",
    "ClassName": "Open Gym",
    "Start_Time": "3:00PM",
    "End_Time": "5:30PM"
  },
  {
    "DayOfTheWeek": "Thursday",
    "ClassName": "Boxercise/Technique",
    "Start_Time": "5:30PM",
    "End_Time": "6:30PM"
  },
  {
    "DayOfTheWeek": "Thursday",
    "ClassName": "BoxStrong",
    "Start_Time": "7:00PM",
    "End_Time": "8:30PM"
  },   
  {
    "DayOfTheWeek": "Friday",
    "ClassName": "Open Gym",
    "Start_Time": "3:00PM",
    "End_Time": "5:30PM"
  },
  {
    "DayOfTheWeek": "Friday",
    "ClassName": "BoxStrong",
    "Start_Time": "5:30PM",
    "End_Time": "7:00PM"
  },
  {
    "DayOfTheWeek": "Saturday",
    "ClassName": "BoxStrong",
    "Start_Time": "10:00AM",
    "End_Time": "11:30AM"
  }

];

const WeeklyEventDate = function (DayOfTheWeek, Start_Time, End_Time, ClassName, ClassDescription) {
  this.DayOfTheWeek = DayOfTheWeek || "";
  this.Start_Time = Start_Time || "";
  this.End_Time = End_Time || "";
  this.ClassName = ClassName || "";
  this.ClassDescription = ClassDescription || "";
}

//Today's Classes
function loadTodayData() {
  const list = [];
  const today = new Date();
  const currentDayOfTheWeek = today.getDay();
  for (let i = 0; i < Weeklyclasses.length; i++) {
    if (weekday[currentDayOfTheWeek].toLowerCase() === Weeklyclasses[i].DayOfTheWeek.toLowerCase()) {
      let desc = getClassDescription(Weeklyclasses[i].ClassName);
      list.push(new WeeklyEventDate(Weeklyclasses[i].DayOfTheWeek, Weeklyclasses[i].Start_Time, Weeklyclasses[i].End_Time, Weeklyclasses[i].ClassName, desc));
    }

  }
  return list;
}
function loadFullWeekData() {
  const list = [];
  const today = new Date();
  const currentDayOfTheWeek = today.getDay();
  for (let i = 0; i < Weeklyclasses.length; i++) {
    let desc = getClassDescription(Weeklyclasses[i].ClassName);
    list.push(new WeeklyEventDate(Weeklyclasses[i].DayOfTheWeek, Weeklyclasses[i].Start_Time, Weeklyclasses[i].End_Time, Weeklyclasses[i].ClassName, desc));
  }
  return list;
}
function getClassDescription(ClassName) {
  for (let i = 0; i < classes.length; i++) {
    if (ClassName.toLowerCase() === classes[i].ClassName.toLowerCase()) {
      return classes[i].ClassDescription;
    }
  }
  return "";
}
function classesSlideoutHTML() {
  let html = "";
  let todaysClasses = loadTodayData();
  let today = new Date();
  let currentDayOfTheWeek = today.getDay();
  html += "<strong><h2>Today's Classes</h2> " + weekday[currentDayOfTheWeek] + ', ' + monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear() + "</strong><br/><hr>";
  if (todaysClasses.length <= 0) {
    html += "<em>" + "There are no classes today." + "</em>";
  }

  for (let i = 0; i < todaysClasses.length; i++) {
    html += `<p><strong>${todaysClasses[i].ClassName}</strong><br>${todaysClasses[i].Start_Time} - ${todaysClasses[i].End_Time}</p>`;

  }
  return html + `<p></p>See the <a href='#fullClassSchedule' id="classSchedule">full class schedule.</a></p>`;
}
function FullScheduleHTML() {
  let html = "";
  let tempday = "";
  let todaysClasses = loadFullWeekData();
  if (todaysClasses.length <= 0) {
    html += "<strong>" + "There are no classes today." + "</strong>";
  }
  for (let i = 0; i < todaysClasses.length; i++) {
    if (tempday != todaysClasses[i].DayOfTheWeek) {
      html += "<br/><span class='section-sub'>" + todaysClasses[i].DayOfTheWeek + "</span><br/><hr>";
      tempday = todaysClasses[i].DayOfTheWeek
    }
    html += `<div class="classItem"><span> ${todaysClasses[i].Start_Time}-${todaysClasses[i].End_Time} &ndash; ${todaysClasses[i].ClassName}: </span> ${todaysClasses[i].ClassDescription}</div>`;

  }
  return html;
}

$(document).ready(function () {
  $('.fullSched').append(FullScheduleHTML());
  $('.sliderSched').append(classesSlideoutHTML());
});

// Slideout
this.$slideOut = $('.slideOut');

// Close slideout panel
this.$slideOut.find('.slideOutTab').on('click', function() {
  $(".slideOut").toggleClass('hideSlideOut');
  $(".slideOutTab").toggleClass('plusSign');
});

// Get the modal
var modal = document.querySelector('.popup');