 let num = 50;

 // if (num < 49) {
 //     console.log('false')
 // } else if (num > 100) {
 //     console.log('to much')
 // } else {
 //     console.log('true')
 // }

 // (num == 50) ? console.log('true'): console.log('false');

 switch (num) {
     case num < 49:
         console.log('false');
         break;
     case num > 100:
         console.log("to much");
         break;
     case num > 80:
         console.log("still to much");
         break;
     case 50:
         console.log("true");
         break;
     default:
         console.log("something go wrong");
         break;
 }