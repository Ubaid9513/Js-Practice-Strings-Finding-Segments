text = "My name is Ubaid Aslam";
for (var i = 0; i < text.length; i++){
    document.write(text.slice(i,i + 5 ));
}

// // ---X---

var text = "My name is Ubaid Aslam";
for (var i = 0; i < text.length; i++){
    console.log(text.slice(i,i + 5 ) === "Ubaid");
}

// ---USER FINDING---

var text = "A Statement of the meaning of a word or word group or a sign";
var user = prompt("Enter your word");
var flag = false;
var i;
for (i=0; i < text.length; i++){
    if(text.slice(i,i + user.length).toLowerCase() === user.toLowerCase()){
        // console.log("Found");
        flag = true;
    }
}
if(flag){
    console.log("Found");
}else{
    console.log("Not Found");
}

// ---X---

var text = "A Statement of the meaning of a word or word group or a sign";
console.log(text.indexOf("Statement"));

var text = "A Statement of the meaning of a word or word group or a sign";
console.log(text.lastIndexOf("Statement"));

// ---X---

var text = "A Statement of the meaning of a word or word group or a sign";
if(text.indexOf("word") !== -1){
    console.log("Found");
}else{
    console.log("Not Found");
}


// ---REPLACING---

var text = "A Statements of the meaning of a word or word group or a sign";
    document.write(text);
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 13) === "Statements of") {
 text = text.slice(0, 1) + " the Second Statement of" + text.slice(i + 12);
 document.write(text);
 }
 }
    

// SECOND METHOD

var text = "A Statements of the meaning of a word or word group or a sign";
console.log(text.replace("Statements","Methods"));

// MULTIPLE REPLACING

var text = "A Statements of the meaning of a word or word of group or a sign";
console.log(text.replace(/of/g,"at"));

var text = "A Statements of the meaning of a word or word of group or a sign";
console.log(text.replaceAll("of","at"));


// ROUNDING NUMBERS

var num = Math.round(2.3)
console.log(num);

var num = Math.ceil(2.3) // UP
console.log(num);

var num = Math.floor(2.9) //DOWN
console.log(num);


// RANDOM NUMBERS

var num = Math.random();
console.log(num);

var num = Math.round(Math.random() * 10);
console.log(num);

var num = Math.floor(Math.random()*10)+1;
console.log(num);

var num = Math.floor(Math.random()*(20-15+1))+15;
console.log(num);


function randomNum(min,max){
    var x = Math.floor(Math.random()*(max-min+1))+min;
    return x;
}
console.log(randomNum(10,20)); 


// CONVERTING STRING TO NUMBER

var num = ("12324121");
console.log(parseInt(num));

var num = ("2.24235");
console.log(parseInt(num));

var num = ("2.2412125");
console.log(parseFloat(num));

var num = ("2.412125");
console.log(Number(num));


var num = (2.412125);
console.log(num.toString());


// DECIMAL LENGTH CONTROLLLING

var num = (2.412125);
console.log(num.toFixed(5));


var randomVal = "sdnqwiajdbsxq1244jbjb1244nkj7m3b7l8!$C%GY^*(GN(^_)+(&%";
var pass = ("");
for (var i = 0; i<8; i++){
    var randomNum = Math.floor(Math.random() * randomVal.length);
    pass += randomVal[randomNum];
}
console.log(pass,pass.length);