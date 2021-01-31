//This displays today's date above Today's Classes in the footer.
function todaysDate() {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentTime = new Date();
    var dayOfWeek = weekday[d.getDay()];
    month = month[d.getMonth()];
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    $("#currentDate").html(dayOfWeek + ", " + month + " " + day + ", " + year);
    
    //This is the countdown to New Year's Day
    var newYear = new Date(d.getFullYear()+1, 0, 0);
    if(d.getMonth()==0 && today.getDate()>1){
      newYear.setFullYear(newYear.getFullYear()+1);
    }
    var one_day=1000*60*60*24;
    var newYearsDay = (Math.ceil((newYear.getTime()-d.getTime())/(one_day)));
    document.getElementById("countdown").innerHTML = newYearsDay;
}//This function gets called in index.html


//This displays Today's Classes in the page footer.
function todaysClasses() {
    var html;
    var today = new Date();
    var month = today.getMonth();
    var date = today.getDate();
    var dayOfTheWeek = today.getDay();

    switch (dayOfTheWeek) {
        case 0:
            html = "<strong>" + "The gym is closed on Sundays." + "</strong>";
            break;
        case 1: //Monday
            html =  "4:00-4:30pm | Cardio" + "<br />" +
                    "4:30-5:00pm | Kettlebell" + "<br />" +
                    "5:00-5:30pm | Core Training" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Strength Training" + "<br />" +
                    "7:00-8:30pm | BoxStrong";
            break;
        case 2: //Tuesday
            html =  "4:00-4:30pm | Cardio" + "<br />" +
                    "4:30-5:00pm | Strength Training" + "<br />" +
                    "5:00-5:30pm | Kettlebell" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Core Training" + "<br />" +
                    "7:00-8:30pm | BoxStrong";
            break;
        case 3: //Wednesday
            html =  "4:00-4:30pm | Heavy Bag Conditioning" + "<br />" +
                    "4:30-5:00pm | Cardio" + "<br />" +
                    "5:00-5:30pm | Strength Training" + "<br />" +
                    "5:30-6:00pm | Core Training" + "<br />" +
                    "6:00-6:30pm | Kettlebell" + "<br />" +
                    "6:30-8:00pm | BoxStrong";
            break;
        case 4: //Thursday
            html =  "4:00-4:30pm | Strength Training" + "<br />" +
                    "4:30-5:00pm | Kettlebell" + "<br />" +
                    "5:00-6:00pm | BoxerCise" + "<br />" +
                    "6:00-6:30pm | Core Training" + "<br />" +
                    "6:30-8:00pm | BoxStrong";
            break;
        case 5: //Friday
            html =  "5:00-5:30pm | Strength Training" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Core Training";
            break;
        case 6: //Saturday
            
            /* Uncomment this code when the summer sparring class returns.
            if (
            month == 6 && date == 11 || 
            month == 6 && date == 18 || 
            month == 6 && date == 25 || 
            month == 7 && date == 1 || 
            month == 7 && date == 8 || 
            month == 7 && date == 15 || 
            month == 7 && date == 22 || 
            month == 7 && date == 29) {
                html =  "10:30-12:00pm | BoxStrong" + "<br />" +
                        "12:30-1:30pm | BoxerCise" + "<br />" +
                        "12:30-2:00pm | Sparring Class" + "<br />" +
                        "1:30-2:00pm | Core Training";
                break;
                }else{*/
            
            html =  "10:30-12:00pm | BoxStrong" + "<br />" +
                    "12:30-1:30pm | BoxerCise" + "<br />" +
                    "1:30-2:00pm | Core Training";
            break;            
            /*}*/
    }
    if (month == 11 && date == 25) {
        html = "There are no classes today. <br />Merry Christmas!";
    } else if (month == 11 && date == 26) {
        html = "There are no classes today. <br />Merry Christmas!";
    } else if (month == 0 && date == 1) {
        html = "There are no classes today. <br />Happy New Year!";
    } else if (month == 6 && date == 4) {
        html = "10:30 am BoxStrong only today. <br />The gym will be closing at noon. <br />Happy 4th of July!";
    } else if (month == 6 && date == 3) {
        html = "The gym will be closing at 7pm tonight.<br />We are open tomorrow for 10:30 am BoxStrong, closing at noon. <br />Happy 4th of July!";
    } else if (month == 8 && date == 7) {
        html = "The gym is closed today. <br />Happy Labor Day!";
		}
    document.getElementById("byday").innerHTML = html;
}//This function gets called in index.html

//Background Slide Show
jQuery(function($) {
    $.supersized({
        // Functionality
        slide_interval: 3000, // Length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700, // Speed of transition
        // Components							
        slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides: [ // Slideshow Images
            {image: 'assets/img/bg-slides/1.jpg'}, 
            {image: 'assets/img/bg-slides/2.jpg'}, 
            {image: 'assets/img/bg-slides/3.jpg'}, 
            {image: 'assets/img/bg-slides/4.jpg'}, 
            {image: 'assets/img/bg-slides/5.jpg'}, 
            {image: 'assets/img/bg-slides/6.jpg'}, 
            {image: 'assets/img/bg-slides/7.jpg'},
            {image: 'assets/img/bg-slides/8.jpg'}, 
            {image: 'assets/img/bg-slides/9.jpg'}, 
            {image: 'assets/img/bg-slides/10.jpg'}
        ]
    });
});


//Brings the classes onto the Class Schedule page
function populateClasses(){

    var classes = [
        {
        "name": "Cardio",
        "description": "Specifically designed to work on conditioning, this class will help you build stamina and develop faster feet as a boxer."
    }, {
        "name": "Kettlebell",
        "description": "Focuses on overall strength and conditioning drills as well as explosion drills for the hips, core and glutes, all from the handle of a kettlebell."
    }, {
        "name": "Core Training",
        "description": "With non-stop multiple core and sit up exercises, you will predominately work your abs, oblique, lower back, and hip flexor, and strengthen your core through a series of lower body strength and flexibility exercises."
    }, {
        "name": "BoxerCise",
        "description": "A heavy bag conditioning class that mixes in plyometric drills with punching drills. An intense combination of a cardio workout with heavy bag drills."
    }, {
        "name": "Strength Training",
        "description": "Designed to increase muscle strength and endurance, this class uses moderate dumbbells to exhaust your muscles through an intense non-stop weight training circuit for upper and lower body muscles. And let's not forget pushups."
    }, {
        "name": "BoxStrong",
        "description": "This total body conditioning and boxing class will give you the most intense and challenging fitness experience ever. Enjoy strength, core, explosion, speed training, a full boxing circuit with heavy bags, and mitt work with the trainers. At the end of class you will be rewarded with a brutal abdominal workout."
    }, {
        "name": "Heavy Bag Conditioning",
        "description": "Focuses on speed and power drills on the heavy bags."
    }, {
        "name": "Sparring Class - Saturdays during July and August",
        "description": "This class is focused on drills and technique and includes light to moderate sparring. Learn defense and counter punching basics as they pertain to sparring. Whether or not you have prior experience in the ring, you will need to pass an assessment before you are permitted to spar. Non-members interested please pay online before arriving in class. Class fee is $15.00." 
    }];

    document.getElementById("Monday").innerHTML =
        "4:00-4:30pm" + " | " + classes[0].name + ": " + classes[0].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[1].name + ": " + classes[1].description + "<hr>" +
        "5:00-5:30pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "7:00-8:30pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Tuesday").innerHTML =
        "4:00-4:30pm" + " | " + classes[0].name + ": " + classes[0].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "5:00-5:30pm" + " | " + classes[1].name + ": " + classes[1].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "7:00-8:30pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Wednesday").innerHTML =
        "4:00-4:30pm" + " | " + classes[6].name + ": " + classes[6].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[0].name + ": " + classes[0].description + "<hr>" +
        "5:00-5:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "5:30-6:00pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "6:00-6:30pm" + " | " + classes[1].name + ": " + classes[1].description + "<hr>" +
        "6:30-8:00pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Thursday").innerHTML =
        "4:00-4:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[1].name + ": " + classes[1].description + "<hr>" +
        "5:00-6:00pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:00-6:30pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "6:30-8:00pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Friday").innerHTML =
        "5:00-5:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[2].name + ": " + classes[2].description;
	
    document.getElementById("Saturday").innerHTML =
        "10:30-12:00pm" + " | " + classes[5].name + ": " + classes[5].description + "<hr>" +
        "12:30-1:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "1:30-2:00pm" + " | " + classes[2].name + ": " + classes[2].description;  
}

populateClasses();









