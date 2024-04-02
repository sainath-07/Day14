// *Problem-solving questions for forEach:*


// 1. Write a function that takes an array of numbers and uses forEach to print each element multiplied by 2.

var arr=[1,2,3,4,5,6,7,8,9]
arr.forEach((element)=>{
    console.log(element*2)
})

//2 Create a function that accepts an array of strings and uses forEach to capitalize the first letter of each string.

var arr =[ "hello","computer","world","hyd"]
arr.forEach(captialfirstletter)
function captialfirstletter(element){
      console.log(element.charAt(0).toUpperCase()+element.slice(1))
}

// 3. Implement a function that takes an array of objects representing students (with name and age properties) and uses forEach to print out the names of students who are over 18 years old.

var arr=[{
    name : "veda",
    age  : 20
},
{
    name : "sainath",
    age  : 20
}]
arr.forEach(details)
function details(element){
     console.log(element)
}

// 4. Write a function that takes an array of numbers and uses forEach to calculate the sum of all the numbers in the array.


var a =[1,2,3,4,5,6,7,8,9]
var count=0;
a.forEach((element)=>{
   count +=element
})
console.log(count)

// 5.Create a function that takes an array of words and uses forEach to count the number of letters in each word, then returns an array of these counts.

var a =[ "Hello","oaky","Done","computer","ramesh"]
var count =0;
var array = a.forEach(countwords)
function countwords(element,index,arr){
         return (arr[index]>3)
}
console.log(array)


// 6. Implement a function that takes an array of strings and uses forEach to remove any string longer than 5 characters.

var a =["hello","come","go","hai","okay"]
a.forEach((element,index,array)=>{
    if(element.length<5){
        console.log(element)
    }
})


// 7. Write a function that accepts an array of numbers and uses forEach to find and print the largest number in the array. ---not completed

var arr =[2,5,7,4,1,5,8]
let longestnumber =0
arr.forEach((element,value,array)=>{
        if(longestnumber<element){
             longestnumber=element;
             
        }
})
console.log(longestnumber)

// 8. Create a function that takes an array of objects representing books (with title and author properties) and uses forEach to print out the titles of books written by a specific author.

var a = [
   {
    title : "Oceans",
    author : "Ramesh"
   },
   {
    title : "Waterandsky",
    author : "RR rajesh"
   }

]

a.forEach((element)=>{
     console.log(element.title+" by "+element.author)
})

// 9. Implement a function that takes an array of strings and uses forEach to remove any string that contains the letter 'a'.

var a =["orange","grapes","hello","go","coming"]
a.forEach((element)=>{
     if(!element.includes("a")){
          console.log(element)
     }
})

// 10. Write a function that accepts an array of numbers and uses forEach to find and print the index of the first negative number in the array.

var arr = [ 2,-5,9,-7,8]
arr.forEach((Element)=>{
     if(Element<0){
        console.log(Element)
     }
})



// *Problem-solving questions for map:*

// 1. Write a function that takes an array of numbers and uses map to return an array where each element is multiplied by 2.

var a = [1,2,3,4,5,6,7,8,9]
a.map((element)=>{
    console.log(element*2)
})


// 2. Create a function that accepts an array of strings and uses map to return an array where each string has its first letter capitalized.

var a =[ "hello","computer","world","ramesh"]
var store = a.map((element)=>{
    return (element.charAt(0).toUpperCase()+element.slice(1))
})
console.log(store)


// 3. Implement a function that takes an array of numbers and uses map to return an array where each element is squared.

var a = [2,3,4,5,6,7,8,9]
a.map((element)=>{
  console.log(element*element)
})



// 4. Write a function that takes an array of strings and uses map to return an array where each string is reversed.       ---------> not completed

function rev(a){
  var print=a.map((element,value,array)=>{
          var u= element.split("").reverse().join("")
          return u;
      })
      console.log(print)
       
  }
  rev(["hello","computer"])
  
  
    


// 5. Create a function that takes an array of objects representing students (with name and age properties) and uses map to return an array where each student's name is uppercase.

var a =[{
    name:"sainath",
    age:22
},
{
    name:"veda",
    age:23
}
]

var ret= a.map((element,value)=>{
       return element.name.toUpperCase()
})
console.log(ret)

// 6. Implement a function that takes an array of strings and uses map to return an array where each string is appended with its length.

var a =["hello","computer","outer"]
var out = a.map((element)=>{
           return (element+" "+element.length)
})
console.log(out)


// 7. Write a function that accepts an array of numbers and uses map to return an array containing only the positive numbers.


var a =[-9,5,-6,-4,2,8,6,9,7]
a.map((element)=>{
    if(element>0){
    if(element%2==0){
        console.log(element)
    }
    }
})


// // 8. Create a function that takes an array of objects representing books (with title and author properties) and uses map to return an array containing only the titles of the books.

var a =[
    {
        titles:"Ocean",
        author : "rajesh"
    },
    {
        titles:"E3arth",
        author : "rajesh"
    }
]

var ret = a.map((element)=>{
     return element.titles
})
console.log(ret)



// // 9. Implement a function that takes an array of strings and uses map to return an array containing the lengths of the strings.


var a  =["computer","hello","okay","world"]
var ret = a.map((element)=>{
     return (element+" length is :"+element.length)
})
console.log(ret)



// // 10. Write a function that accepts an array of numbers and uses map to return an array where each negative number is converted to its absolute value.

var a =[-5,-9,-8,6,-10,-1,-9,-7,-8]
var abs = a.map((element)=>{
    return Math.abs(element)
})
console.log(abs)


// *Problem-solving questions for filter:*


// 1. Write a function that takes an array of numbers and uses filter to return an array containing only the even numbers.

var arr = [1,2,3,4,5,6]
var even =arr.filter((element)=>{
    if(element%2==0){
        return element
    }
})
console.log(even)

// // 2. Create a function that accepts an array of strings and uses filter to return an array containing only the strings longer than 5 characters.

var a =["hello","computer","go","hi","hey"]
var ret = a.filter((element)=>{
      return element.length<5
})
console.log(ret)

// // 3. Implement a function that takes an array of numbers and uses filter to return an array containing only the prime numbers.


// 4. Write a function that takes an array of strings and uses filter to return an array containing only the strings that start with a vowel.

var a =["erro","avel","fan","light","under"]
var ret = a.filter((Element)=>{
    //   return Element.startsWith("a","e","i","o","u")
    if(Element.startsWith("a")||Element.startsWith("e")||Element.startsWith("i")||Element.startsWith("o")||Element.startsWith("u") ){
        return Element
    }

})
console.log(ret)


// // 5. Create a function that takes an array of objects representing students (with name and age properties) and uses filter to return an array containing only the students who are over 18 years old.

var a =[
    {
    name :"veda",
    age : 22
   },
   {
    name :"sai",
    age :25
   },
   {
    name :"ganesh",
    age :15
   }
]
var ret = a.filter((element)=>{
    //   return element.age>18
    if(element.age>18){
        return element.age
    }
    //  return element.age
})
console.log(ret)


// // 6. Implement a function that takes an array of strings and uses filter to return an array containing only the strings that contain the letter 'a'.


var a =["hai","vada","string","ball"]
var ret = a.filter((element)=>{
        return element.includes("a")
})

console.log(ret)

// // 7. Write a function that accepts an array of numbers and uses filter to return an array containing only the numbers greater than 10.

var a =[5,8,14,88,7,5,66,99,8]
var ret = a.filter((Element)=>{
      return Element>10
})

console.log(ret)

// // 8. Create a function that takes an array of objects representing books (with title and author properties) and uses filter to return an array containing only the books written by a specific author.


var a =[
    {
        titles:"Ocean",
        author : "rajesh"
    },
    {
        titles:"E3arth",
        author : "rajesh"
    }
]
a.filter((Element)=>{
     console.log( Element.titles+" by "+Element.author)
})


// // 9. Implement a function that takes an array of strings and uses filter to return an array containing only the strings that are palindromes.


var a =["hello","level","mom","computer"] 
var temp=[]
for(i=a.length-1;i>=0;i--){
    temp.push(a[i])
}
console.log(temp)
push=[]
temp.filter((element,value,arr)=>{
      for(i=element.length-1;i>=0;i--){
       
    push.push(element[i])
}
})
console.log(push)


// // 10. Write a function that accepts an array of numbers and uses filter to return an array containing only the numbers that are perfect squares.



var a=[4,25,55,121,169,22]
var get=a.filter((element,value)=>{
var push=[]
     for(i of element.toString()){
    for(j=0;j<i;j++){
        if(i==j*j){
          push.push(i) 
        }
    }
}
return push
})
console.log(get)



var a =[4,25,55,121,169,22]
var push=[]

for(i of a ){
    for(j=0;j<i;j++){
        if(i==j*j){
          push.push(i) 
        }
    }
}
console.log(push)