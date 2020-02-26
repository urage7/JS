//'use strict';
//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};

//var Person = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//Person.prototype.calculateAge =
//    function () {
//        console.log(2019 - this.yearOfBirth);
//    };
//Person.prototype.lastName = 'Smith';

//var john = new Person('John', 1990, 'teacher');
//john.calculateAge();

//var jane = new Person('Jane', 1969, 'designer');
//var mark = new Person('Mark', 1948, 'retired');
//jane.calculateAge();
//john.calculateAge();
//mark.calculateAge();

//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);


///Object.create///

//var personProto = {
//    calcAge: function () {
//        console.log(2019 - yearOfBirth);
//    }
//};

//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.john = 'teacher';


//var jane=Object.create(personProto,
//    {
//        name: { value: 'Jane' },
//        yearOfBirth: { value: 1969 },
//        job: { value: 'designer' }
//    });

///FUNCTIONS///


//var years = [1990, 1965, 1937, 2005, 1998];

//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//function isFullAges(el) {
//    return el >= 18;
//}

//function maxHeartRate(el) {
//    if (el>=18&&el<=81) {
//        return Math.round(206.9 - (0.67 * el));

//    } else {
//        return -1;
//    }
//}

//function calcAge(el) {
//    return 2019 - el;
//}
//var ages = arrayCalc(years, calcAge);
//var fullAges = arrayCalc(ages, isFullAges)
//var rates = arrayCalc(ages, maxHeartRate);
//console.log(rates);
//console.log(fullAges);
//console.log(ages);

///FUNCTION RETURNING FUNCTION///
//function interviewQestion(job) {
//    if (job === 'designer') {
//        return function (name) {
//            console.log(name + ', can you please explain what UX design is?');
//        }

//    } else if (job === 'teacher') {
//        return function (name) {
//            console.log('What subject do you teach, ' + name);

//        }
//    } else {
//        return function (name) {
//            console.log('Hello ' + name + ' what do you do');
//        }
//    }
//}
//var teacherQuestion = interviewQestion('teacher');
//teacherQuestion('John');



//var designerQuestion = interviewQestion('designer');
//designerQuestion('John');
//designerQuestion('Jane');
//designerQuestion('Mark');

////IIFI

//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
    

////}
//(function () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);

//})();



//(function (goodLuck) {
//    var score = Math.random() * 10;
//    console.log(score >= 5-goodLuck);

//})(5); ///5 is value of goodLuck////



//function retirement(retirementAge) {
//    var a = ' years left until retirement';
//    return function (yearOfBirth) {
//        var age = 2019 - yearOfBirth;
//        console.log((retirementAge - age)+a);
//    }
//}
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(64)
//var retirementUS = retirement(66);
//retirementUS(1990);
//retirementGermany(1990);
//retirementIceland(1990);


//function interviewQuestions(job) {
//    return function (name) {
//        if (job === 'designer') {
//            console.log(name + ' can you please explain what UX design is?')
//        } else if (job === 'teacher') {
//            console.log('What sunject do you teach' + name + '?')
//        } else {
//            console.log('Hello ' + name+' what do you do?');
//        }

//    }
//}

//interviewQuestions('teacher')('John')
//interviewQuestions('designer')('Jane')
//interviewQuestions('demolisher')('Mark')


//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function (style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name + ', I\'m' +
//                this.job + 'and I\'m' + this.age + ' years old');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m' + this.name + ' I\'m  ' +
//                this.job + ' and I\'m  ' + this.age + ' years old.Have a nice ' + timeOfDay+'.');
//        }
//    }
//};
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//};
//john.presentation('formal', 'morning');
//john.presentation.call(emily, 'friendly', 'afternoon');


//var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('morning');
//johnFriendly('night');

//var emilyFormal = john.presentation.bind(emily, 'formal');
//emilyFormal('afternoon');






//var years = [1990, 1965, 1937, 2005, 1998];

//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//function calculateAge(el) {
//    return 2019 - el;
//}

//function isFullAge(limit, el) {
//    return el >= limit;
//}
//var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
//console.log(ages);
//console.log(fullJapan);
//(function () {


//    function Question(question, answers, correct) {
//        this.question = question;
//        this.answers = answers;
//        this.correct = correct;
//    }
//    Question.prototype.displayQuestion =
//        function () {
//            console.log(this.question);
//            for (var i = 0; i < this.answers.length; i++) {
//                console.log(i + ': ' + this.answers[i]);
//            }

//        }
//    Question.prototype.checkAnswer = function (ans,callback) {
//        var sc;
//        if (ans == this.correct) {
//            console.log('Currect Anslwer');
//            sc=callback(true);
//        }
//        else {
//            console.log('Wrong Answer');
//            sc = callback(false);
//        }

//        this.displayScore(sc);
//    }
 
//    Question.prototype.displayScore = function (score) {
//        console.log('Your current score is: ' + score);
//        console.log('---------------------------');
//    }

//    var q1 = new Question('Is JavaScript the coolest progrmaing language in the world',
//        ['yes', 'no'],
//        0);
//    var q2 = new Question('What is the name of your favorite drink',
//        ['Coca Cola', 'Jameson', 'water'],
//        1);
//    var q3 = new Question('What is the best discribe coding',
//        ['boring', 'hard', 'Ez'],
//        1);
//    var questions = [q1, q2, q3];

//    function score() {
//        var sc = 0;
//        return function (correct) {
//            if (correct) {
//                sc++;
//            }
//            return sc;
//        }
//    }
//    var keepScore = score();
    
//   function nextQuestion() {
        
       
//        var n = Math.floor(Math.random() * questions.length);
//        questions[n].displayQuestion();

//        var answers= prompt('Please select the correct answer.');
//       if (answers !== 'exit') {
//           questions[n].checkAnswer(parseInt(answers), keepScore);
//            nextQuestion();
//        }
        
//    }

//    nextQuestion();
    
//})();



//console.log(10 & 9);




