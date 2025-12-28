function countLetter(letter, word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    console.log(`Letter "${letter}" appears ${count} times.`);
}

countLetter("o", "Komiljonov");





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

