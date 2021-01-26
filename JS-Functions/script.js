//Prob-1 Add-Five
var num = 10;

var addFive = num => num+5

console.log("Add-Five Prob-1")
console.log("Result: "+addFive(num))


//Prob-2 Opposite-num
var num = 5;

var getOpposite = num => {
    if(!isNaN(num)){ return -num }
    return -1
}

console.log("Get-Opposite Prob-2")
console.log("Result: "+getOpposite(num))


//Prob-3 to-Seconds
var min = 5;

var toSeconds = min => min*60

console.log("to-Seconds Prob-3")
console.log("Result: "+toSeconds(min))


//Prob-4 to-Integer
var mystr = "5";

var toInteger = mystr => parseInt(mystr)

console.log("to-Integer Prob-4")
console.log("Result: "+toInteger(mystr))


//Prob-5 next-Number
var myint = 0;

var nextNumber = myint => ++myint

console.log("next-Number Prob-5")
console.log("Result: "+nextNumber(myint))


//Prob-6 get-first-number
var arr = [10, 2, 3];

var getFirstElement = arr => arr[0]

console.log("get-first-number Prob-6")
console.log("Result: "+getFirstElement(arr))

 
//Prob-7 hour-to-seconds
var arr = [1, 2, 3];

var hourToSeconds = arr => arr.map((x)=>x*3600)

console.log("hour-to-seconds Prob-7")
console.log("Result: ", ...hourToSeconds(arr))


//Prob-8 Perimeter-of-rectangle
var findPerimeter = (num1,num2) => 2*(num1+num2)

console.log("Perimeter-of-rectangle Prob-8")
console.log("Result: "+findPerimeter(6,7))


//Prob-9 less-than-100
var lessThan100 = (num1,num2) => { return num1+num2<100?true:false }

console.log("less-than-100 Prob-9")
console.log("Result: "+lessThan100(22,15))


//Prob-10 remainder
var remainder = (num1,num2) => num1%num2

console.log("remainder Prob-10")
console.log("Result: "+remainder(3,4))


//Prob-11 count-animals
var CountAnimals = (tur,horse,pigs) => (tur*2)+(horse*4)+(pigs*4)

console.log("count-animals Prob-11")
console.log("Result: "+CountAnimals(2,3,5))


//Prob-12 frames-per-second
var frames = (num1,num2) => num1*num2*60

console.log("frames-per-second Prob-12")
console.log("Result: "+frames(1,2))


//Prob-13 Divisible-by-five
var divisibleByFive = (num1) => { return num1%5===0?true:false }

console.log("Divisible-by-five Prob-13")
console.log("Result: "+divisibleByFive(-51))


//Prob-14 is-even
var isEven = num => { return num%2===0?true:false }

console.log("is-even Prob-14")
console.log("Result: "+isEven(5))


//Prob-15 are-both-odd
var areBothOdd = (num1, num2) =>{
    return num1%2!==0 && num2%2!==0?true:false
}

console.log("are-both-odd Prob-15")
console.log("Result: "+areBothOdd(1, 4))


//Prob-16 get-full-name 
var getFullName = (firstName="", lastName="") => firstName+lastName

console.log("get-full-name Prob-16")
console.log("Result: "+getFullName("GEEK"))


//Prob-17 length-of-word
var getLengthOfWord = (word1) =>{
    if(isNaN(word1)){ return word1.length }
    else{ return -1 }
}

console.log("length-of-word Prob-17")
console.log("Result: "+getLengthOfWord(9))


//Prob-18 is-same-length
var isSameLength = (word1, word2) => {
    return word1.length === word2.length?true:false
}

console.log("is-same-length Prob-18")
console.log("Result: "+isSameLength('GUVI', 'GEEK'))


//Prob-19 get-distance
var getDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

console.log("get-distance Prob-19")
console.log("Result: "+getDistance(100, 100, 400, 300))


//Prob-20 get-Nth-element
var getNthElement = (array,n) => array[n]

console.log("get-Nth-element Prob-20")
console.log("Result: "+getNthElement([1, 3, 5], 1))


//Prob-21 get-last-element
var getLastElement = (array) => { return array.length!==0?array[array.length-1]:"-1" }

console.log("get-last-element Prob-21")
console.log("Result: "+getLastElement([1, 2, 3, 4]))


//Prob-22 get-property
var obj = { mykey: 'value' };
var getProperty = (obj, key) => { return obj[key]!==undefined?obj[key]:'NA' }

console.log("get-property Prob-22")
console.log("Result: "+getProperty(obj,'dummykey'))


//Prob-23 add-property
var obj = {}
var addProperty = (obj, key) => { obj[key]=true; return obj }

console.log("add-property Prob-23")
console.log("Result: ", addProperty(obj, 'mykey'))


//Prob-24 remove-property
var obj = { name:"sammy" }
var removeProperty = (obj, key) => { delete obj[key]; return obj }

console.log("remove-property Prob-24")
console.log("Result: ", removeProperty(obj,'name'))


//Prob-25 count-of-positives-negatives
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var countPositivesSumNegatives = (arr) =>  [arr.filter(x=>x>=0).length,arr.filter(x=>x<0).length]

console.log("count-of-positives-negatives Prob-25")
console.log("Result: ", countPositivesSumNegatives(arr))


//Prob-26 get-positives
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var getPositives = (arr) => arr.filter(x=>x>=0)

console.log("get-positives Prob-26")
console.log("Result: ", getPositives(arr))


//Prob-27 powers-of-two
var powersOfTwo = (n) => [...Array(n+1).keys()].map(x=>Math.pow(2,x))

console.log("powers-of-two Prob-27")
console.log("Result: ", ...powersOfTwo(2))


//Prob-28 max-num
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var findMax = (ar) => ar.reduce((accum,curr)=>accum=accum>curr?accum:curr)

console.log("max-num Prob-28")
console.log("Result: ", findMax(ar))


//Prob-29 first-n-prime
console.log("first-n-prime Prob-29")
console.log("Result: ", ...printPrimes(5))
function printPrimes(nPrimes){
    var n = 0;
    var i = 2;
    var res = []
 
    while(n < nPrimes){
        if (isPrime(i)){
            res.push(i)
            n++;
        }
        i++;
    }

    return res
}

function isPrime(n){
    if(n<=1){ return false }
    
    for(var i=2;i<n;i++){
        if(n%i===0) { return false }
    }

    return true
}


//Prob-30 prime-between-start-n
console.log("prime-between-start-n Prob-30")
console.log("Result: ", ...printSPrimes(5,5))
function printSPrimes(nPrimes,n){
    nPrimes+=n
    var i = n+1;
    var res = []
 
    while(n < nPrimes){
        if (isPrime(i)){
            res.push(i)
            n++;
        }
        i++;
    }

    return res
}

function isPrime(n){
    if(n<=1){ return false }
    
    for(var i=2;i<n;i++){
        if(n%i===0) { return false }
    }

    return true
}


//Prob-31 reverse-string
var reverseString = (s) => s.split("").reverse().join("")

console.log("prime-between-start-n Prob-31")
console.log("Result: "+ reverseString("JavaScript"))


//Prob-32 merge-arrays
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var  mergeArrays = (ar1, ar2) => [...ar1,...ar2]

console.log("merge-arrays Prob-32")
console.log("Result: ", mergeArrays(ar1, ar2))


//Prob-33 sum-csv
var sumCSV = (s) => s.split(",").reduce((accum,curr)=>accum+=parseFloat(curr),0)

console.log("sum-csv Prob-33")
console.log("Result: ", sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'))
