/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
function diagonalDifference(arr: number[][]): number {
  const longitud = arr.length;
  let diago1 = 0;
  let diago2 = 0;
  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud; j++) {
      if(i === j){
        diago1=diago1+arr[i][j]
      }
    }
  }
  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud; j++) {
      if(i + j === longitud-1){
        diago2=diago2+arr[i][j]
      }
    }
  }
  
  return Math.abs(diago2-diago1)
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [[11,2,4],[4,5,6],[10,8,-12]]
  const result = diagonalDifference(a);
  console.log('Result: ', result);
}

main();
