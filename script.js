//console basics 1 to 5
console.log("Hello World")
console.log("Name:Alex; age:29; city:Hyderabad")
console.warn("Use quotes while typing in console")
console.error("Error:xx")
var Numbers=[1,2,3,4,5]
console.table(Numbers)

//Variables 1 to 7

var studentName="Ayesha"
var age=29
console.log("Age: "+age)
var temp, a, b;
a=10
b=20
temp=a
a=b
b=temp
console.log("Value a after swapping: "+a)
console.log("Value b after swapping: "+ b)
const PI=3.14
console.log("PI : "+ PI)
var test
console.log("Test variable withno value assigned : "+ test)
var score=0
score+=10;
console.log("score :" + score)
var firstName="Alex"
var lastName="Roy"
var fullName=firstName+" "+lastName
console.log("fullname : "+ fullName)

//Data Types  1 to 5

var number=10
var mystring="Hello"
var myboolean=true
var nullvalue=null
var test2

console.log(typeof number)
console.log(typeof mystring)
console.log(typeof myboolean)
console.log(typeof nullvalue)
console.log(typeof test2)

var mobileNo=9345543323
console.log("type of mobile no : " + typeof mobileNo)

var nullvalue2=null

console.log("type of nullvalue : " + typeof nullvalue2)

var bigInt= BigInt(343234567887765890987665433212233445567)
console.log(bigInt)

//Type Conversion & Coercion 

var mystring2="50"
var num=Number(mystring2)
console.log(" converted string into number is " + num +" and its type is : "+ typeof num)

var age=100

var agestring= String(age)
console.log(" converted number into string is " + agestring +" and its type is : "+ typeof agestring)

var isValid="true"
var isValidboolean=Boolean(isValid)
console.log(" converted string into boolean is " + isValidboolean +" and its type is : "+ typeof isValidboolean)

console.log("5" + 2)
console.log("5" - 2)
console.log(true + 1)

var string1="123abc"
var string2num=parseInt(string1)
console.log(" converted string into number is " + string2num +" and its type is : "+ typeof string2num)
var pixel="500px"
var pixelnum=parseInt(pixel)
console.log(" converted string into number is " + pixelnum +" and its type is : "+ typeof pixelnum)

//Operators

var num1=10
var num2=20
var sum= num1+num2
console.log("Sum of num1 and num2 is : "+ sum)

var num25=25
var num4=4
var remainder=num25%4
console.log("Remainder is : "+ remainder)

var square=2**2
console.log(square)
var height=12
height++
console.log("Height increment : "+ height)
 height =height-1
console.log("Height after decrement by 1 : "+ height)
height+=20
console.log("Height increment by 20 : "+ height)

var mynum1=50
var mynum2=78

console.log(mynum1>mynum2)
console.log(mynum1<mynum2)
console.log(mynum1>=mynum2)
console.log(mynum1<=mynum2)

console.log(mynum1===mynum2)
var num11=22
var num22="22"

console.log(num11===num22)

var number1=22
var number2=22
console.log(number1===number2)

var mynumber1="10"
var mynumber2=10
console.log(mynumber1==mynumber2)
console.log(mynumber1===mynumber2)
var boolean1=true
var boolean2=false
console.log(boolean1 && boolean2)
console.log(boolean1 || boolean2)
console.log(boolean1!=boolean2)

//Strings
var country="India"
console.log(country.length)
console.log(country.toUpperCase())
var randomtext="Hello World"
console.log("Substring is : "+ randomtext.substr(6,5))

var sentence="apple and guava are fruits"

console.log("Updated sentence : "+ sentence.replace("apple", "mango"))

var sentence1="I love Javascript"

console.log(sentence1.includes("Javascript"))

var frontend="HTML,CSS,JS"
console.log(frontend.split(","))

var tempstring="   hello"
console.log(tempstring.trim())

console.log(sentence1.repeat(5))
console.log(sentence1.charAt(0))
console.log(`My name is Aman and I am 20 years old`)
console.log(Math.round(4.7))
console.log(Math.sqrt(81))
console.log(Math.max(10, 20, 5, 99))
var randomnum=Math.floor(Math.random() * 10)+1
 console.log(randomnum)
 var stringone="99.99" 
 var numstring=parseInt(stringone) 
 console.log("type is " +typeof numstring)
 console.log(Number.isInteger(25));
 var mynum=3
 if(mynum>=1){
    console.log("Positive number")
 }
 else if(mynum<1 && mynum!=0){
     console.log("Negative number")
 }
 else{
    console.log("Neither positive nor negative")
 }
 if(mynum%2==0){
    console.log("even")
 }
 else{
    console.log("odd")
 }
 var age=18
 if(age>=18){
    console.log("eligible to vote")
 }
 else{
    console.log("Not eligible to vote")
 }
 var numA=100
 var numB=20
 var numC=150
 //greates among 2 no's
 if(numA>numB){
    console.log(numA +" is greater than "+ numB)
 }else{
    console.log(numB +" is greater than "+ numA)
 }

 //greatest among 3 no's
 if(numA>numB && numA>numC){
    console.log(numA +" is greatest")
 }
 else if(numB>numA && numB>numC){
    console.log(numB +" is greatest")
 }
 else{
    console.log(numC +" is greatest")
 }
 var year =2024
 if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("Leap Year")
 }
 else{
    console.log("Not a Leap Year")
 }
var numberd=15
 if(numberd%3==0 & numberd%5==0){
console.log("divisible")
 }
 else{
    console.log("not divisible")
 }

var marks=98
if(marks>90 ){
    console.log("A Grade")
}
else if(marks>75 && marks<=90){
    console.log("B Grade")
}
else if(marks>50 && marks<=75){
    console.log("C grade")
}
else if(marks<50){
    console.log("Fail")
}
else{
    console.log("D grade")
}
var str="p"
if(str==="a"|| str==="e"|| str==="i"|| str==="o" || str==="u"){
    console.log("Vowel")
}
else{
    console.log("Consonant")
}

var day = "Monday"

switch (day.toLowerCase()) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

var username="alex"
var password="8770"
if(username=="admin" && password=="1234"){
console.log("valid username & password")
}
else{
    console.log("Invalid username & password")
}

var a = 20
var b=2
var operator="/"
switch (operator) {
  case '+':
    console.log(a+b)
    break
  case '-':
    console.log(a-b)
    break
  case '*':
    console.log(a*b)
    break
  case '/':
    console.log(a/b)
   break;
  default:
    console.log('operator is not correct')
}

var empty
console.log(empty)
if(0){
    console.log("Truthy")
}
else{
    console.log("falsy")
}
if([]){
    console.log("Truthy")
}
else{
    console.log("falsy")
}
if(empty){
    console.log("Valid")
}
else{
    console.log("Invalid")
}

//Terenary Operator

var eveodd=2;
(eveodd % 2==0)?console.log("even"):console.log("odd")

var myage=19;
(myage>18)&&console.log("age >18");

var munum1=10
var mynum2=14;
(mynum1>mynum2)?console.log("num1 is greater"):console.log("num2 is greater");

let name1 = "Alex";
let age1 = 19;
let city1 = "Hyderabad";
let course1 = "B.Tech";
let hobby1 = "Playing Tennis";

let biodata=`
--------BIO DATA-----------

Name   :${name1}
Age    :${age1}
City   :${city1}
Course :${course1}
Hobby  :${hobby1}

`

console.log(biodata)

var length1=10
var width1=40
var areaofrect=width1*length1
console.log(areaofrect)

var p=100
var r=5
var t=2
var i=(p*t*r)/100;
console.log("Simple Interest : "+ i)

let celsius = 25;

let fahrenheit = (9 / 5) * celsius + 32;

console.log(fahrenheit);

var km=2
var meters=Number(km*1000)
console.log(km +" km = " + meters+ " mtr")
var subj1=90
var subj2=55
var subj3=68
var subj4=97
var subj5=88
var total=Number(subj1+subj2+subj3+subj4+subj5)
var percentage=(total*100)/500
console.log("percentage : "+ percentage)

let units = 250;
let rate = 5;

let elecbill = units * rate;

console.log("Electricity Bill:"+ elecbill);

var firststring="hello world"
var check=firststring.startsWith("o")
if(check){
    console.log("true")
}else{
    console.log("false")
}
var firstname="ayesha"
var dob="15021998"
var first3letters=firstname.substr(0,3)
var first4dob=dob.substr(0,4)
var last2char=dob.substr(6,1)
var username1=first3letters+first4dob+last2char
console.log("UserName : "+username1)
var mytext="I love Javascript"
var count1=0;
for(var i=0; i<mytext.length; i++){
    if(mytext[i]!=" "){
        count1++
    }
}
console.log("Total characters : "+count1)

var firstnum=30
var secondnum=80
if(firstnum>secondnum){
    console.log("First num is greater")
}
else{
    console.log("Second num is greater")
}

if(firstnum>10 && firstnum<30){
    console.log("The number lies between 10 and 30")
}
else{
    console.log("The number doesn't lie between 10 and 30")
}
var mypassword1="dsdssdadd"
if(mypassword1.length>8){
    console.log("Length is greater than 8")
}
else{
    console.log("Length is not greater than 8")
}
var haslicense;
var ageforlicense=23
if(ageforlicense>18){
haslicense=true
console.log("Eligible to drive")
}
else{
    haslicense=false
    console.lo("Not eligible to drive")
}

var date1
date1=new Date()
var hours=date1.getHours()
var minutes=date1.getMinutes()
console.log(hours+" : "+ minutes)
if(hours>=0 && (hours<=11 && minutes<=59)){
    console.log("Good Morning")
}
else if(hours>=12 &&(hours<=17 && minutes<=59)){
console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}
var divisiblenum=4

if(divisiblenum%2==0 && divisiblenum%3==0){
    console.log("Number is divisible by both 2 & 3")
}
else if(divisiblenum%2==0){
    console.log("Divisible by 2")
}
else if(divisiblenum%3==0){
    console.log("Divisible by 3")
}
else{
    console.log("Not divisible by 2 and 3")
}
if(divisiblenum%10==0){
    console.log("The number  is multiple of 10")
}
else{
    console.log("Not a multiple of 10")
}

var billAmount=100
var discount=10
var discountamount=(100*10)/100
console.log(discountamount)
var finalbillamount=billAmount-discountamount
console.log(finalbillamount)
let stock = 5;

if (stock > 0) {
  console.log("Product is in stock");
} else {
  console.log("Product is out of stock");
}
let myamount = 1000;
let gst = 18;

let gstAmount = (myamount * gst) / 100;
let finalBill = myamount + gstAmount;

console.log("Final Bill:"+ finalBill);


var alphabetss="abcdefghijklmnopqrstuvwxyz"
var symbols="!@#$%^&*~"
var randoucno=Math.floor(Math.random()*alphabetss.length)
var randouc=(alphabetss[randoucno]).toUpperCase()
var randomlcno=Math.floor(Math.random()*alphabetss.length)
randolc=alphabetss[randomlcno]
var randomno=Math.floor(Math.random()*10)
var randoucsymno=Math.floor(Math.random()*symbols.length)
var symbolno=symbols[randoucsymno]
var otprandom=randouc+randomno+symbolno+randolc
console.log(otprandom)

var stringtoberev="apple"
var revstring=""
for(var i=((stringtoberev.length)-1); i>=0; i--){
revstring+=stringtoberev[i]
}
console.log("Reverse string : " +revstring)
var charstring="ddsdk"
var charatend= charstring.charAt((charstring.length)-1)
console.log(charatend)
var FullName="Shikha Jay"
var datasplit=FullName.split(" ")
var FullNameinitials=(datasplit[0])[0]+ (datasplit[1])[0]
console.log(FullNameinitials)

var stringone1="Hello"
var stringtwo2="hello"

if(stringone1.toUpperCase()===stringtwo2.toUpperCase()){
    console.log("Equal")
}
else{
    console.log("not equal")
}

var usernamee="Alex"
var passwordd="abc123"

if(usernamee=""|| passwordd==""){
    console.log("Fields cannot be blank")
}
else if(usernamee=="Alex" && passwordd=="abc123"){
    console.log("Login Successfully")
}
else{
    console.log("Invalid username or Password")
}

var mynumfor2or3=2

var checkmynumfor2or3=Math.abs(mynumfor2or3)
if(checkmynumfor2or3>=10 && checkmynumfor2or3<=99){
    console.log("2 digit number")
}
else if(checkmynumfor2or3>=100 && checkmynumfor2or3<999){
    console.log("3 digit number")
}
else{
    console.log("Neither 2 digit nor 3 digit")
}
var pinno="2345"
var atmbal=2000
var options=""
document.getElementById("input").addEventListener("input", function(){
    document.getElementById("msg").innerHTML=""
})
function checkpin(){
    if(document.getElementById("input").value==""){
    document.getElementById("msg").innerHTML="Enter the pin no"
    }
    else if(document.getElementById("input").value==pinno){
     document.getElementById("msg").innerHTML="Choose any option"  
     document.getElementById("balance").style.display="block"
     document.getElementById("deposit").style.display="block"
     document.getElementById("withdraw").style.display="block"

    }
    else{
        document.getElementById("msg").innerHTML="Please enter a valid pin no"   
    }
}
function checkbalance(){
   document.getElementById("input").style.display="none"
   document.getElementById("pin").style.display="none"
   document.getElementById("msg").innerHTML="Your account balance is : "+ atmbal+" Rupees"
   options=""
}
function deposit1(){
    document.getElementById("msg").innerHTML="Please enter the amount you want to deposit and Submit"
    document.getElementById("amount").style.display="block"
    document.getElementById("chk").style.display="block"
    options="D"
}
function withdraw1(){
    document.getElementById("msg").innerHTML="Please enter the amount you want to withdraw and Submit"
    document.getElementById("amount").style.display="block"
    document.getElementById("chk").style.display="block"
    options="W"
}
function submit1(){
    if(document.getElementById("amount").value==""){
            document.getElementById("msg").innerHTML="Pleaser the amount"
        }
    if(options=="D"){

         var depamnt=Number(document.getElementById("amount").value)
            atmbal+=depamnt
            document.getElementById("msg").innerHTML="Amount deposited successfuly"
    }
    else if(options=="W"){
         var withdrawamnt=Number(document.getElementById("amount").value)
         if(withdrawamnt>atmbal){
            document.getElementById("msg").innerHTML="The withdraw amount exceeds current balance amount"
         }
         else{
            atmbal-=withdrawamnt
            document.getElementById("msg").innerHTML="Amount withdrawal successfuly"
         }
           
        }
}


// Traffic Light System using switch

let signal = "red"; // change to red, yellow, or green

switch (signal) {
    case "red":
        console.log("Red Light - STOP");
        break;

    case "yellow":
        console.log("Yellow Light - READY");
        break;

    case "green":
        console.log("Green Light - GO");
        break;

    default:
        console.log("Invalid signal");
}

// Simple Marksheet Generator using Variables and Conditionals

// Student details
let StudentName = "Aleena"
let rollNo = 2312

// Subject marks
let maths = 99
let science = 99
let english = 90

// Calculations
let total11 = maths + science + english;
let percentage1 = (total11*100)/ 300;

let grade;
let result;

// Grade using conditionals
if (percentage1 >= 90) {
    grade = "A+";
} else if (percentage1 >= 75) {
    grade = "A";
} else if (percentage1 >= 60) {
    grade = "B";
} else if (percentage1 >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

// Result using conditionals
if (percentage1 >= 40) {
    result = "Pass";
} else {
    result = "Fail";
}

// Display marksheet
console.log("===== MARKSHEET =====");
console.log("Name:", StudentName);
console.log("Roll No:", rollNo);
console.log("----------------------");
console.log("Maths:", maths);
console.log("Science:", science);
console.log("English:", english);
console.log("----------------------");
console.log("Total Marks:", total11);
console.log("Percentage:", percentage1.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Result:", result);
console.log("======================");