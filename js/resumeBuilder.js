/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Subadhra Srinivasan");
//var awsomeThoughts = "I am Subadhra Srinivasan and I am Awsome!"
//var funThoughts = awsomeThoughts.replace("AWSOME!","FUN");
//$("#main").append(funThoughts)
//var name = "Subadhra Srinivasan"
//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Web Developer"
//var formattedRole = HTMLheaderRole.replace("%data%",role)

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);



//$("#main").append(bio.name);

//$("#main").append(bio.role);

//$("#main").append(bio.contact);

//$("#main").append(bio.welcome_message);

//$("#main").append(bio.skills);


//bio.city = "Mountain View"
//bio.email = "subadhra.srinivas@gmail.com"

//$("#main").append(bio.city);
//$("#main").append(bio.email);


//var work = {};
//work.position = "System Test Engineer";
//work.employer = "Juniper Networks";
//work.years = "3 and half";



//var education = {};

//education["last_school_name"]="upitt";
//education["years_attended"]="2000-2002";
//education["school_city"]="Pittsburgh";
//education["name"] = "MS Telecommunications"

//$("#main").append(work["position"]);
//$("#main").append(education.name);

var bio = {"name": "Subadhra Srinivasan",
           "role": "Web Developer",
           "contacts": {
             "mobile": "408-505-0119",
             "email": "subadhra.srinivas@gmail.com",
             "github": "subadhra-srinivas",
             "facebook": "@subadhra",
             "location": "Sunnyvale"
            },
           "biopic": "/Users/srinivasanjagannadhan/udacity/javascript/frontend-nanodegree-resume/images/subadhra_picture.jpg",
           "welcome_message": "Welcome!",
           "skills":[ "HTML", "JavaScript", "SQL"]
       };

var education = {
    "schools": [
       {
         "name":"University of Pittsburgh",
         "city": "Pittsburgh",
         "degree":"Masters",
         "major":["Telecommunications"],
         "dates":2002,
         "url":"http://example.com"
        },
        {
         "name":"Madras University",
         "city": "Chennai",
         "degree":"Masters",
         "major":["Electrical and Electronics Engineering"],
         "dates": 1997,
         "url":"http://example.com"
        }
      ],
      "onlineCourses": [
         {
           "title": "JavaScript Crash Course",
           "school": "Udacity",
           "dates": 2017,
           "url" : "http://www.udacity.com/course/ud804"
          }

    ]

};
var work = {"jobs" : [{"employer" : "Marconi Communications",
                       "title" : "Web Developer",
                       "location": "Pittsburgh",
                       "dates_worked": "2002 Sept - 2002 Dec",
                       "description" : "worked in developing web pages"},

                      {"employer" : "Robert Half Technology",
                       "title" : "Web Developer",
                       "location": "NC",
                       "dates_worked": "2003 Sept - 2003 Dec",
                       "description" : "worked in developing web pages"}]
            };

var projects = {
    "projects": [
       {
         "title": "Movie Trailer Website",
         "dates": "2017",
         "description": "Wrote a server-side code to store a list of your favorite movies including box art imagery and a movie trailer URL",
         "images" : [
           "https://image.com",
           "https://image2.com"
         ]

        }
    ]

};

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%",bio["role"])
$("#header").append(formattedRole);


//var formattedmobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
//$("#header").append(formattedmobile);


//for (job in work.jobs) {
//       $("#workExperince").append(HTMLworkStart);

//       var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//       var formatttedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//       var formattedEmployerTitle = formattedEmployer + formatttedTitle;

//       $(".work-entry:last").append(formattedEmployerTitle);

//       var formattedDescription = HTMLworkDescription.replace()
//}


work.jobs.forEach(function(job){

       $("#workExperince").append(HTMLworkStart);
       console.log(job.employer);
       console.log(job.title);
       var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
       var formatttedTitle = HTMLworkTitle.replace("%data%", job.title);
       var formattedEmployerTitle = formattedEmployer + formatttedTitle;

       $(".work-entry:last").append(formattedEmployerTitle);

       var formattedDescription = HTMLworkDescription.replace()

})


//var a = []; // Create a new empty array.
//a[5] = 5;   // Perfectly legal JavaScript that resizes the array.

//for (var i = 0; i < a.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
//    console.log(a[i]);
//}

/* Will display:
   undefined
   undefined
   undefined
   undefined
   5
*/

//function updateLabel() {

//    var addend1 = 5;
//    var addend2 = 2;
//   var sum = addend1 + addend2;
//}




























