//create your own filter function similar to javascript  builtin function

//teacher variable represents each teacher one by one in the teachers loop
// so that we can loop through all the subjects of each teacher and match with the supplied subject argument.
// If argument subject matches the teacher's subject in the loop, 
// then that teacher is added to filteredTeachers array. 


//create static array object 
const newTeachers = [
    { firstName: "Steve", lastname:"rio",subjects: ["English", "Maths", "History"] },
    { firstName: "Celia", lastname:"dept", subjects: ["Maths", "Science","Physics","Marathi","Hindi"] },
    { firstName: "julia", lastname:"rio", subjects: ["Maths", "Science","Geography"] },
    { firstName: "justin", lastname:"biber", subjects: ["Science", "Science","Greek"] },
    { firstName: "john", lastname:"cena" , subjects: ["English"] },

  ];

//here i create filter function like search method
  var filterSubject = function(teachers, subject) {
    var filteredTeachers = [];
    for (var i=0; i<=teachers.length-1; i++) {
      var teacher = teachers[i];
      for (var j=0; j<=teacher.subjects.length-1; j++) {
        if (teacher.subjects[j].toLowerCase()== subject.toLowerCase()) {
          filteredTeachers.push(teacher);
        }
      }
    }
    return filteredTeachers;
}

console.log(filterSubject(newTeachers, "Science"));

