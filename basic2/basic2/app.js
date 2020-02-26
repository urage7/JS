





////var whatDoYouDo = function (job, firstName) {
////    switch (job) {
////        case 'teacher':
////            return firstName + ' teaches kids';
////        case 'driver':
////            return firstName+' drives a cab in Lisabon: ';
////        default:
////            return firstName + ' does something';

////    }
////}
////console.log(whatDoYouDo('teacher','John'))
////console.log(whatDoYouDo('driver','Mary'))
////console.log(whatDoYouDo('retired','Jane'))


////var name = ['John', 'Mark', 'Jane'];
////var years = new Array(1990, 1969, 1948);
////console.log(name);
////console.log(name.length);
////console.log(name);
////var John = ['John', 'Smith', 1990, 'teacher', false];
////John.push('blue');
////console.log(John);
////John.unshift('Mr.')
////John.pop();


////var computeTip = function (bill) {
////    var procentTip = 0;

////    if (bill < 50) {
////        procentTip = 0.2;
////    } else if (bill >= 50 && bill <= 200) {
////        procentTip = 0.15;
////    } else {
////        procentTip = 0.1;
////    }

////    var tip = bill * procentTip;
////    var result = parseFloat(tip.toFixed(2));
////    return result;
////}

////var bills = [124, 48, 268];
////var tips = [];

////for (var i = 0; i < bills.length; i++) {
////    var bill = bills[i];
////    var tip = computeTip(bill);
////    tips.push(tip);
////}

////console.log(bills);
////console.log(tips);
////var Bills = [124, 48, 268];
////var BillsAndTips = function (Bills) {
////    var procentTip;
////    if (Bills < 50) {
////        procentTip = 0.2;
////    } else if (Bills => 50 && Bills <= 200) {
////        procentTip = 0.15;
////    } else {
////        procentTip = 0.1;
////    }
////    var result = procentTip * Bills;
////    return result;


////}
////var Tips = [];

////var FinalBill = [];
////for (var i = 0; i < Bills.length; i++) {
////    Tips[i] = BillsAndTips(result);
////    FinalBill = Tips[i] + Bills[i];
////}
////console.log(Tips);
////console.log(FinalBill);

////function factorial(n) {

////    var result=0;
////    for (let i = 0; i < n; i++) {
////        result = result * (n - i);
////    }
////    return (result);
////}

////function main() {
////    const n = +(readLine());

////    console.log(factorial(n));
////}


////if (score > 25 && score <= 30) {
////    console.log('grade=A');
////} else if (score>20&&score<=25) {
////    console.log('grade=B')
////}} else if (score > 15 && score <= 20) {
////    console.log('grade=C')
////}} else if (score > 10 && score <= 15) {
////    console.log('grade=D')
////}} else if (score > 5 && score <= 10) {
////    console.log('grade=E')
////}} else if (score => 0 && score <= 5) {
////    console.log('grade=F')
////}




//function getLetter(s) {
//    let letter;

//    switch (s[0]) {
//        case 'a', 'e', 'i', 'o', 'u':
//            letter = 'A';
//            break;
//        case 'b', 'c', 'd', 'f', 'g':
//            letter = 'B';
//            break;
//        case 'h', 'j', 'k', 'l', 'm':
//            letter = 'C';
//            break;
//        case 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z':
//            letter = 'D';
//    }
//    return letter;
//}
//function main() {
//    const s = readLine();

//    console.log(getLetter(s));
//}






//var letters = '';
//for (let i = 0; i < s.length; i++) {
//    if (s[i] == 'a' || 'e' || 'i' || 'o' || 'u') {
//        letters = letters + s[i];
//    }
//}
//for (let i = 0; i < s.length; i++) {
//    if (s[i] == 'b' || 'c' || 'd' || 'f' || 'g' || 'h' || 'j' || 'k' || 'l' || 'm' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y') {
//        letters = letters + s[i];
//    }
//}
//for (let i = 0; i < letters.length; i++) {
//    console.log(letters[i]);
//}


//var john = {
//    fullname:'john Smith',
//    mass:90,
//    height:1.60,
//    calcBMI: function () {
//        this.BMI = john.mass / (john.height * john.height);
//        return this.calcBMI;
//    }
//};

//var mark = {
//    fullname:'Mark Smith',
//    mass:80,
//    height:1.90,
//    calcBMI: function () {
//        this.BMI = mark.mass / (mark.height * mark.height);
//        return this.calcBMI;
//    }
//};

//john.calcBMI();
//mark.calcBMI();
//if (john.BMI > mark.BMI) {
//    console.log('John have bigger BMI: ' + john.BMI);
//} else if (john.cBMI < mark.BMI) {
//    console.log('Mark have bigger BMI: ' + mark.BMI)
//} else {
//    console.log('John= ' + john.BMI + ' ' + "Mark= " + mark.BMI);
//}
//console.log(mark);
//console.log(john);




//var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function getSecondLargest(nums) {
//    // Complete the function
//    nums.sort(function (a, b) { return a - b });
//    let second = 0;
//    let biggest = nums[0];
//    for (let i = 1; i < nums.length; i++) {
//        if (nums[i] > biggest) {
//            second = biggest;
//            biggest = nums[i];
//        }
//    }
//    return second;
//}

//var result = getSecondLargest(nums);
//console.log(result);


//var vowels = {
//    a: true,
//    i: true,
//    u: true,
//    e: true,
//    o: true
//};
//function vowelsAndConsonants(s) {
//    var letters = [];
//    for (let i = 0; i < s.length; i++) {
//        if (vowels[s[i]]) {
//            letters.push(s[i]);
//        }
//    }
//    for (let i = 0; i < s.length; i++) {
//        if (!vowels[s[i]]) {
//            letters.push(s[i]);
//        }
//    }
//    var result = letters.join('\n');
//    return result;
//    console.log(result);

//} 


//function main() {
//    const s = 'javascriptloops';

//    vowelsAndConsonants(s);
//}




//function isPositive(a) {
//    var e = {
//        y: 'YES',
//        x: 'Negative Error',
//        o: 'Zero Error',
//        message: function () {
//            for (let i = 0; i < n; i++) {
//                if (a > 0) {
//                    return y;
//                } else if (a = 0) {
//                    return o;
//                } else {
//                    return x;
//                }
//            }
//        }
//    };
//}


//    const n = 3;

   
//        const a = [1, 2, 3];

//        try {
//            console.log(isPositive(a));
//        } catch (e) {
//            console.log(e.message);
//        }
    

// FUNKCIQ ZA KALKULACIQ NA SREDNIQ TIP
//ARRAY WITH TIPS
//VARIABLE FOR SUM OF ALL TIPS
//AVERAGE TIP
//PRINT LARGEST TIP
//
var Average = function () {
    var result=0;
    for (var i = 0; i < markTips.length; i++) {
        result = result + markTips[i];
    }
    var res2 = result /( markTips.length);
    return res2;
}
var markProcentTips=0;
var markTips = [];
var markBills = [77, 375, 110, 45];
for (var i = 0; i < markBills.length; i++) {
    let payMark = markBills[i];
    if (payMark < 100) {
        markProcentTips = markBills[i] * 0.2;
        markTips.push(markProcentTips);
    } else if (markBills[i] >= 100 && markBills < 300) {
        markProcentTips = markBills[i] * 0.1;
        markTips.push(markProcentTips);
    } else {
        markProcentTips = markBills[i] * 0.25;
        markTips.push(markProcentTips);
    }
} Average();


console.log(markProcentTips);
console.log(markTips);
console.log(Average());