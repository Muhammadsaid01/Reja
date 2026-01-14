//TASK A


// function countLetter(letter, word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }

//     console.log(`Letter "${letter}" appears ${count} times.`);
// }

// countLetter("o", "Komiljonov");


//TASK B
// function countDigits(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             count++;
//         }
//     }

//     console.log(`The string contains ${count} digit(s).`);
// }

// countDigits("Hello123World456");
// countDigits("Muhammadsaid20Nurddinov09 Siddikjon15 Ugli04 !");



//TASK C
// class MsNSHop {

//      time = new Date().toLocaleTimeString();

//     constructor(bread, cola, ramen) {
//         this.bread = bread;
//         this.cola = cola;
//         this.ramen = ramen;
//     }

//     qoldiq() {
//         console.log(` hozir ${this.time} da  ${this.bread} dona non, ${this.cola}dona kola va ${this.ramen}dona ramen mavjud`);
//     }

//     sotish(breadSold, colaSold, ramenSold) {
//         this.bread -= breadSold;
//         this.cola -= colaSold;
//         this.ramen -= ramenSold;
        
//         console.log(`hozir${this.time} vaqtda  ${breadSold} dona non, ${colaSold} dona kola, ${ramenSold} dona ramen sotildi.`);
//     }

//     qabul (breadBought, colaBought, ramenBought) {
//         this.bread += breadBought;
//         this.cola += colaBought;
//         this.ramen += ramenBought;

//         console.log(`hozir${this.time} Yangi mahsulotlar olindi: ${breadBought} dona non, ${colaBought} dona kola, ${ramenBought} dona ramen.`);
//     }
// }
// let shop = new MsNSHop(6, 4, 5);
// shop.qoldiq();
// shop.sotish(5, 3, 2);
// shop.qoldiq();
// shop.qabul(10, 5, 5);
// shop.qoldiq();

// //Task D
//  function checkContent(word1, word2) {
//         let arr1 = word1.toLowerCase().split("").sort();
//         let arr2 = word2.toLowerCase().split("").sort();

//         if (arr1.join("") === arr2.join("")) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//      const result1 = checkContent("Musaidhammad", "saidMuhammad");
//         console.log(result1); // true
//         const result2 = checkContent("Hello", "World"); 
//         console.log(result2); // false

// Task E
// function reverseWords(words) {
//      words.split(" ");
//     let reversedWords = words.map(word => word.split("").reverse().join(""));
//     return reversedWords.join(" ");
// }

// console.log(reverseWords("Hello muhammadsaid")); 

// function getReverse(word) {
//     return word.split("").reverse().join("");

// }
// console.log( getReverse("Hello"));
// console.log( getReverse("diasdammahuM"));


// //Task F
// function findDoublers(word) {
//   for (let i = 0; i < word.length; i++) {
//     for (let j = i + 1; j < word.length; j++) {
//       if (word[i] === word[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(findDoublers("hello")); 
// console.log(findDoublers("muhammadsaid"));   

//Task h

// function getPositive (arr) {
//   let result = "";
//      for( let i = 0; i < arr.length; i ++) {
//          if (arr[i] > 0){
//             result += arr[i];
//          }
  
//      }
//      return result;
// }
// console.log(getPositive([1, -4, 2])); 


// console.log(getPositive([5, -4, 110])); 



/* 21 chi Dars Nodejs event Loop va callback */
// console.log("JACK MA maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling ",
//     "To'g'ri boshliq tanlang va ko'p xatolar qiling ",
//     "O'zingiz uchun ishlashni boshlang",
//     "Siz kuchli bo'lgan narsalarni qiling va etibor bering",
//     "Yoshlarga sarmoya kiriting",
//     "Endi dam oling, Foydasi yo'q"
// ];

// function giveAdvice(a, callback) {
//     if(typeof a !== 'number') callback("Plese provide a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {callback(null, list[5]);}, 5000);
// }
// }
// console.log("Passed here 0:");
// giveAdvice(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("ADVICE:", data);
//     }
// });
// console.log("Passed here 1:");


 /* 22-DARS Asynchronous  functionlarni qo'llash */
// console.log("JACK MA maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling ",
//     "To'g'ri boshliq tanlang va ko'p xatolar qiling ",
//     "O'zingiz uchun ishlashni boshlang",
//     "Siz kuchli bo'lgan narsalarni qiling va etibor bering",
//     "Yoshlarga sarmoya kiriting",
//     "Endi dam oling, Foydasi yo'q"
// ];

// async function giveAdvice(a) {
//     if(typeof a !== 'number') throw new Error("Plese provide a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
// }
// }
// console.log("Passed here 0:");
// giveAdvice(20).then((data) => {
//     console.log("ADVICE:", data);
// }).catch((err) => {
//     console.log("ERROR:", err);
// });

// console.log("Passed here 1:");


 // then catch 
// async function run() {
//     let advice =  await giveAdvice(65);
//     console.log("ADVICE:", advice);
//     advice = await giveAdvice(55);
//     console.log("ADVICE:", advice);
//     advice = await giveAdvice(45);
//     console.log("ADVICE:", advice);
     
// }
// run();





// function giveAdvice(a, callback) {
//     if(typeof a !== 'number') callback("Plese provide a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval
//         (function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }
// console.log("Passed here 0:");
// giveAdvice(70, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("ADVICE:", data);
//     }
// });
// console.log("Passed here 1:");

