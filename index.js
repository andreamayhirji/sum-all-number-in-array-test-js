function sumItems(array) {

  let sum = 0;
  array.forEach((item) => {
    if(Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  })
  return sum;
}

  // let sum = array.reduce((item1,item2) => {
  //    return item1 + item2;
  // });

  // return sum;


// console.log('1)', sumItems([25])); // to equal 25
// console.log('2)', sumItems([1, 3, 3, 5, 5])); // 17
// console.log('3)', sumItems([[1, 2, [[3], 4]], 5, []])); // 15
// console.log('4)', sumItems(sumItems([[[5], [[[4]]], [[3], 2]], 1, []]))); //15


module.exports = sumItems;


// array.forEach((item) => {
//   if(Array.isArray(item)) {
//     sumItems(item+=item);
//   } return item;
// });