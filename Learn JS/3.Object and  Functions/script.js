                                //function constructor
/*
var john = {
    name: "John",
    birthyear: 1990,
    job: "Nurse"
};

var Person = function(name, birthyear, job) {
    this.name = name;
    this.birthyear = birthyear;
    this.job = job;
    // this.calcAge = function() {
    //     console.log(2018- this.birthyear);
    // }
};
Person.prototype.calcAge =    this.calcAge = function() {
    console.log(2018- this.birthyear);
};

var john = new Person("John", 1995, "nu");

var jane = new Person("jane", 1880, "dead");
john.calcAge();
jane.calcAge();

console.log(john);

*/
                                // Objecct.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - yearOfbirth);
    }
};
var john = Object.create(personProto);
john.name = "john";
john.yearOfbirth = 1990;

var jane = Object.create(personProto, {
    name: {value : "jane"},
    yearOfbirth: {value : 2918}
})
*/
                                                        //Primitives vs Objects
/*
//Primitives
var a = 20;
var b = a;
a = 33;
console.log(a + " " + b);

//Objects
var obj1 = {
    name: "John",
    age: 20
};
var obj2 = obj1;
obj1.age = 2333;
console.log(obj1.age);
console.log(obj2.age);
//functions

function change(a, b) {
    a = 30;
    b.name =" dada";
}
change(a, obj1);
console.log(a + " " + obj1.name);
/// Passing fucntions as arguments

var years = [1991, 1992, 1993, 2016];

function arrayCal(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcaA(el) {
    return 2018 - el;
}

function isFUllage(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCal(years, calcaA);
var fullAge = arrayCal(ages, isFUllage);
var rate = arrayCal(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(rate);


// function interview(job) {
//     switch(job){
//         case "designer":
//         return function(name) {
//             console.log(name + " explain");
//         }
//         case "teacher":
//         return function(name) {
//             console.log(name + " how hard");
//         }
//         default:
//         return function(name) {
//             console.log("Hello " + name);
//         }
//     }
// }

// //gan svarbu
// var question = interview("teacher");
// question("jon");
// interview("designer")("awkward");
*/

        // Immediatly invoked function expressions

// function game() {
//     var score = Math.random * 10;
//     console.log(score>= 5);
// }
// game();

// IIFE
// (function () {
//     var score = Math.random() * 10;
//     console.log(score>= 5);
// })();

// (function (goodLuck) {
//     var score = Math.random() * 10 ;
//     console.log(score + goodLuck>= 5);
// })(1);


//                          CLOSURES

/*
function retirment(retirmentAge) {
    var a = " years left until retirment";
    return function(yearOfbirth) {
        var age = 2018 - yearOfbirth;
        console.log((retirmentAge -  age) + a);
    }
}
var retirmentUSA = retirment(66);
retirmentUSA(1991);

retirment(65)(1987);

function interview(job) {
    return function(name) {
        switch(job){
            case "designer":
                console.log(name + " explain");
                break;
            case "teacher":
                console.log(name + " how hard");
                break;
            default:
                console.log("Hello " + name);
        }
    }
      
    }
    
    //gan svarbu
    var question = interview("teacher");
    question("jon");
    interview("designer")("awkward");
*/

    




                                            //bind, call and apply
/*
var Car = function(a, b, c) {
    this.c = c;
    this.a = a;
    this.b = b;
} 

var audi = new Car("audi", "Marke", 123);
Car.prototype.presintation = this.presintation = function(style, timeOfDay) {
    if (style == "formal") {
        console.log("GOod " +timeOfDay + " I need a " + this.a + " " + this.b);
    } else if(style = "friendly") {
        console.log("yo"  + timeOfDay + this.a);
    }
}
var bmw = new Car("BmW" , "ma", 22);
console.log(audi);
audi.presintation("formal", " morning ")
audi.presintation.call(bmw, "friendly", " evening ");
bmw.presintation( "friendly", " evening ");


var years = [1991, 1992, 1993, 2016];
function arrayCal(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcaA(el) {
    return 2018 - el;
}

function isFUllage(limit, el) {
    return el >= limit;
}
var age = arrayCal(years, calcaA);
var fulLimit = arrayCal(age, isFUllage.bind(this, 20));
console.log(age);
console.log(fulLimit);

*/

                                                                    // CHALLANGE

// (function() {
//     var Question = function(ques , answers , correct) {
//         this.ques = ques;
//         this.answers = answers;
//         this.correct = correct;
//     }
    
//     var q1 = new Question("22+2 = ? ", [1,22,3,24], 24);
//     var q2 = new Question("2+33 = ? ", [31,2,3,35], 35);
//     var q3 = new Question("2+4 = ? ", [1,2,3,6], 6);
    
//     var rand =Math.round(Math.random() * 2);
    
//     Question.prototype.displayQ  = function() {
//         console.log(this.ques);
//         for(var i =0; i <array[rand].answers.length; i++ ) {
//             console.log(i + " Answer: " + array[rand].answers[i]);
//         }
//     }
//     var array = [q1, q2, q3];
    
    
//     array[rand].displayQ();
    
//     var prom = prompt("whats the correct answer?");
//     var right = true;
    
//     Question.prototype.check = this.check = function(prom) {
//         if(prom == this.correct) {
//             console.log("You are correct");

//         } else {
//             console.log("You made a mistake try again");
//         }
//     }
    
//         array[rand].check(prom);
    
// })();



(function() {
    var Question = function(ques , answers , correct) {
        this.ques = ques;
        this.answers = answers;
        this.correct = correct;
    }
    
    var q1 = new Question("22+2 = ? ", [1,22,3,24], 24);
    var q2 = new Question("2+33 = ? ", [31,2,3,35], 35);
    var q3 = new Question("2+4 = ? ", [1,2,3,6], 6);
    var score = 0;
    var right = true;
    Question.prototype.displayQ  = function() {
        console.log(this.ques);
        for(var i =0; i < this.answers.length; i++ ) {
            console.log(i + " Answer: " + this.answers[i]);
        }
    }

    Question.prototype.check = this.check = function(prom) {
        if(prom == this.correct) {
            score++;
            console.log("You are correct Your score " + score);
        } else {
            console.log("You made a mistake try again");
            right = false;
        }
    }
    var array = [q1, q2, q3];
    function nextQuestion() {

        
        var rand =Math.round(Math.random() * 2);
        
        array[rand].displayQ();
        
        var prom = prompt("whats the correct answer?");
        

        if(right) {
            array[rand].check(prom);
            if(right) {
                nextQuestion();
            }
        }
        
    }
    nextQuestion();


})();
