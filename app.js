// var text = "My name is Ubaid Aslam";
// for (var i = 0; i < text.length; i++){
//     console.log(text.slice(i,i + 5 ));
// }

// // ---X---

// var text = "My name is Ubaid Aslam";
// for (var i = 0; i < text.length; i++){
//     console.log(text.slice(i,i + 5 ) === "Ubaid");
// }

// ---USER FINDING---

// var text = "A Statement of the meaning of a word or word group or a sign";
// var user = prompt("Enter your word");
// var flag = false;
// var i;
// for (i=0; i < text.length; i++){
//     if(text.slice(i,i + user.length).toLowerCase() === user.toLowerCase()){
//         // console.log("Found");
//         flag = true;
//     }
// }
// if(flag){
//     console.log("Found");
// }else{
//     console.log("Not Found");
// }

// ---X---

// var text = "A Statement of the meaning of a word or word group or a sign";
// console.log(text.indexOf("Statement"));

// var text = "A Statement of the meaning of a word or word group or a sign";
// console.log(text.lastIndexOf("Statement"));

// ---X---

var text = "A Statement of the meaning of a word or word group or a sign";
if(text.indexOf("word") !== -1){
    console.log("Found");
}else{
    console.log("Not Found");
}