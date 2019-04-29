function mergeSortedArray(arr1, arr2) {
  const mergedArrays = []

  let arrOneIndex = 0
  let arrTwoIndex = 0

  let arrOneItem = arr1[arrOneIndex]
  let arrTwoItem = arr2[arrTwoIndex]

  while (arrOneItem || arrTwoItem) {
    if (arrOneItem > arrTwoItem) {
      mergedArrays.push(arrTwoItem)
      arrTwoIndex++
      arrTwoItem = arr2[arrTwoIndex]
    } else {
      mergedArrays.push(arrOneItem)
      arrOneIndex++
      arrOneItem = arr1[arrOneIndex]
    }
  }

  return mergedArrays
}

const sortedArr = mergeSortedArray([0, 3, 4, 31], [4, 6, 30])
console.log(sortedArr)