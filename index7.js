// let number = 0

// // while (number <= 10){
// // console.log(`number saat ini: ${number}`);
// // number += 3;
// // }

// do {
//     console.log(`number saat ini: ${number}`)
//     number += 3;
// }

// for (var i=0; i<2; i++){
//     console.log(`nilai i: ${i}`);
//     for (var j=0; j<3; j++){
//         console.log(`nilai j: ${j}`);
//         for (var k=0; k<2; k++)
//         console.log(`nilai k: ${k}`);
//     }
// }

// let z='';
// for (let j=1; j<=5; j++){
// for (let i=1; i<=j ;i++){
//             z += ' * '
//         }
//         z += '\n'
//     }
    
// console.log(z)

// var string1 = "";
// for (var k=0; k<5; k++){
//     for (var l=k; l<5; l++){
//         string1 += ' * ';
//     }
//     string1 += '\n';
// }
// console.log(string1);

// var string = "";
// for (var j=1; j<5; j++){
//     for (var i=0; i<j+1; i++){
//     string += ' * ';
// }
// string += '\n';
// }
// console.log(string);

// var string1 = "";
// for (var i = 0; i<5; i++){
//     for (var j = 0; j <(5-i-1); j++){
//         for (var k = 1; k <= 2*i + 1; k++)
//         string1 += ' * ';
//     }
//     string1 += '\n';
// }
// console.log(string1);

// function pyramid() {
//     var n = 5;
//     var output="";
//     for (var i = 0; i <n; i++) {
//     var myspace = "";   
//     for(let s = 0; s <(n-i-1); s++) {
//         myspace += " ";
//     }
//         for (var j = 1; j <= 2*i + 1; j++) {
//             output+="*";

//         }
//         console.log(myspace+output);
//         output="";
//     }
// }

// function pyramid(n) {
//     for (var i = 1; i <= n; i++) { 
//       var s = ""; 
//       for (var j = 1; j <= (2 * n - 1); j++) {
//          (j >= n + 1 - i && j <= n - 1 + i) ? s += "* " : s += "  ";
//        } 
//       console.log(s); 
//      } 
//  } 
//  pyramid(10); 

  
// var n = 10; { 
//     for (var i = 0; i < n; i++) { 
//       var string = ''; 
//       for (var j = 1; j < n-i; j++) { 
//         string = string + '  '; 
//       } 
//       for (var k = 1; k <= (2*i+1); k++) { 
//         string = string + '* '; 
//       } 
//       console.log(string); 
//     } 
//   } 


// var n = 10; { 
//     for (var i=0; i<n; i++) { 
//       var string = ''; 
//       for (var j=1; j<n-i; j++) { 
//         string = string + '  '; 
//       } 
//       for (var k=1; k<=(2*i+1); k++) { 
//         string = string + '* ' ; 
//       } 
//       console.log(string); 
//     } 
//   } 



function createDimondShape(size){
    for(var i=1;i<=size;i++){
       for(var s=size-1;s>=i;s--){
          process.stdout.write(" ");
       }
       for(var j=1;j<=i;j++){
          process.stdout.write("* ")
       }
       console.log();
    }
    if(i==size+1){
       for(var i=1;i<=size-1;i++){
          for(var s=1;s<=i;s++){
             process.stdout.write(" ");
          }
          for(j=i;j<=size-1;j++){
             process.stdout.write("* ");
          }
          console.log();
       }
    }
 }
 createDimondShape(8);

 
// var n = 10; { 
//     for (var i=0; i<n; i--) { 
//       var string = ''; 
//       for (var j=1; j<n-i; j++) { 
//         string = string + '  '; 
//       } 
//       for (var k=1; k<=(2*i+1); k++) { 
//         string = string + '* ' ; 
//       } 
//       console.log(string); 
//     } 
//   } 

// var n = 10; {
//     var str = '';
//     for(var i=n; i>=1; i--){
//         for(var k=n; k>=i; k--){
//             str += " ";
//         }
//         for(var j=i; j>=1; j--){
//             str += j+"* ";
//         }
//         console.log(str);
//         str = " ";
//     }
// }