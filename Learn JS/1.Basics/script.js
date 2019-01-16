// var name = prompt("Whats your name?");
// console.log(name);

// var MarkMass = 70;
// var MarksHeight = 1.80;
// var John = 90;
// var JohnHeight = 1.70;

// var MarkBmi = MarkMass / (MarksHeight * MarksHeight);
// console.log(MarkBmi);
// var JohnBmi = John / (JohnHeight * JohnHeight);
// console.log(JohnBmi)

// var bigger = MarkBmi > JohnBmi;
// console.log("Marks bmi is bigger then johns"+ " "+ bigger);

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log("\n");

// var AnaTeam = [89, 120, 103, 1];
// var AnaAVG = 0;
// var team = [116, 94, 123];
// var teamAVG = 0;
// var siux = [2,3,4];
// var siuxavg= 0;

// for(var i = 0; i < AnaTeam.length; i++) {
//     AnaAVG += AnaTeam[i];
// }
// for(var i = 0; i < siux.length; i++) {
//     siuxavg += siux[i];
// }
// for(var i = 0; i < team.length; i++) {
//     teamAVG += team[i];
// }
// teamAVG = teamAVG / team.length;
// AnaAVG = AnaAVG / AnaAVG.length;
// siuxavg = siuxavg / siux.length;
// console.log(teamAVG);
// console.log(siuxavg);
// if((AnaAVG > teamAVG)> siuxavg) {
//     console.log("Ana Team wins");
// } else if(AnaAVG == teamAVG) {
//     console.log("Its a draw")
// } else {
//     console.log("Team Wins");
// }




// function calclAge(birt) {
//     return 2018 - birt;
// }
// var age = calclAge(1992);
// console.log(age);

// function retirment(year, name) {
//     var innerAge = calclAge(year);
//     var retr = 65 - innerAge;
//     console.log(name + " retires in " + retr);

// }
// retirment(1990, "Monika");

// var ska = function () {
//     return 2;
// }
// console.log(ska());




// var bill = [124, 48, 268];
// var justTip = [];
// var finalBill  = [];

// for(var i = 0; i < bill.length; i ++) {
//     if(bill[i] < 50) {
//         justTip.push(bill[i] * 0.2);
//         finalBill.push(bill[i] * 0.2 + bill[i]);
//     } else if(bill[i] < 50 && bill[i] > 200) {
//         justTip.push(bill[i] * 0.15);
//         finalBill.push(bill[i] * 0.15 + bill[i]);
//     } else {
//         justTip.push(bill[i] * 0.1 );
//         finalBill.push(bill[i] * 0.1 + bill[i]);
//     }
// }
// console.log(justTip);
// console.log(finalBill);


// var smit = {
//     firstName: 'john',
//     lastname: "jo",
//     birthYear: 100,
//     age: 2,
//     city: [ "al", "kns", "vln"],
//     cAge: function(birthYear) {
//         this.age = 2018 - birthYear;
//         // return 2018 - birthYear;
//     }
// };
// console.log(smit.firstName);
// console.log(smit["city"][2]);
// // console.log(smit.cAge(1922));
// smit.cAge(22);
// console.log(smit.age);


// var jane = new Object();
// jane.lol = "jane";
// jane.last = "is";
// console.log(jane.lol);


// var Mark = {
//     firstName: "Mark",
//     mass: 80,
//     height: 1.70,
//     bmiCalc: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var Tom = {
//     firstName: "Tom",
//     mass: 80,
//     height: 1.90,
//     bmiCalc: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// Mark.bmiCalc();
// Tom.bmiCalc();

// if(Mark.bmi > Tom.bmi) {
//     console.log(Mark.firstName + " bmi is " + Mark.bmi);
// } else if ( Mark.bmi == Tom.bmi) {
//     console.log(Mark.firstName + " equals " + Tom.firstName);
// } else {
//     console.log(Tom.firstName + " bmi is " + Tom.bmi);
// }


var billz = {
    allBills: [124, 48, 268, 180, 42],
    
    calcTip: function() {

        this.jsTip = [];
        this.finalBil = [];
        for(var i = 0; i< this.allBills.length; i++) {
        if(this.allBills[i] < 50) {
            this.jsTip.push(this.allBills[i] * 0.2);
            this.finalBil.push(this.allBills[i] * 0.2 + this.allBills[i]);

        } else if(this.allBills[i] < 50 && this.allBills[i] > 200) {

            this.jsTip.push(this.allBills[i] * 0.15);
            this.finalBil.push(allBills[i] * 0.15 + this.allBills[i]);
        } else {
            this.jsTip.push(this.allBills[i] * 0.1 );
            this.finalBil.push(this.allBills[i] * 0.1 + this.allBills[i]);
                    }
                }
        }
    };
billz.calcTip();
console.log(billz)


