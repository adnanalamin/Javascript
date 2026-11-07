const fruits = ["mango", "banana", "apple"]
// console.log(fruits)

// Push() Methode

fruits.push("orange")
// console.log(fruits)


// pop() methode শেষের এলিমেন্ট বাদ দেওয়া

const result = fruits.pop()

// console.log(result)
// console.log(fruits)

// unshift() Methode শুরুতে element যোগ করে।

const addedElement = fruits.unshift("Pinaple")
// console.log(addedElement)
// console.log(fruits)

// shift() Methode শুরুর element remove করে।

const firstElementRemove = fruits.shift()
// console.log(firstElementRemove);
// console.log(fruits)

// includes() Methode কোনো value আছে কিনা check করে।

const haveValue = fruits.includes("mango")
console.log(haveValue);
