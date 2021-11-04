// // function LongestWord(sen) { 
// //   if(sen.length===0) return
// // let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
// // sen=sen.replace(punctuation,'').split(" ")
// // let wordLength=sen.map(e=> e.length).sort((a,b)=>a-b)
// // let array =[]
// //  sen.find(e=>{
// //   if(e.length===wordLength[wordLength.length-1]){
// //     array.push(e)
// //   }
// // })
// // console.log(array[0]);
// // }
// // LongestWord("I love dogs")
// // LongestWord('fun&!! time')
// // LongestWord("Hello world123 567")

// // function reverseString(sen){
// // const array=[]
// // for (let i = sen.length; i >= 0; i--) {
// //   array.push(sen[i])
// // }
// // console.log(array.join(""));
// // }
// // reverseString("Welcome to this Javascript Guide!")

// // TODO:
// // function FindIntersection(strArr) { 
// // let [ele1,ele2] = strArr
// // ele1=ele1.split(",")
// // ele2=ele2.split(",")
// // let result=ele1.filter(e=> ele2.find(a=>a===e))
// // console.log(result);
// //   }
// // const arr=["1,3,4,7,13", "1,2,4,13,15"]
// //   FindIntersection(arr)

// const day=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
// let startDate = new Date("02-01-2017"); //YYYY-MM-DD

// let getDateArray = function(start, end) {
//     let arr = [];
//     let dt = new Date(start);
//     while (dt <= end) {
//         arr.push(new Date(dt));
//         dt.setDate(dt.getDate() + 1);
//     }
//     return arr;
// }

// document.querySelector("button").addEventListener("click",()=>{
//     let endDate = startDate.setDate(startDate.getDate()+6);
//     endDate=new Date(endDate)
//     console.log(endDate);
//     console.log('clicked');
//     // let dateArr = getDateArray(startDate, endDate);
//     // for (let i = 0; i < dateArr.length; i++) {
//     //    console.log(day[dateArr[i].getDay()]);
//     // }
// })

