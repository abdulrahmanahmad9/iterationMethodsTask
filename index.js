//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const res = numbers.filter ( (num)=> {

    if (num >= 25) {
        return true;
    } else {
        return false;
    }
})
console.log (res)

const res2 = numbers.filter ( (num2)=> {

    if (num2 % 5 === 0 ) {
        return true;
    } else {
        return false;
    }
})
console.log (res2)

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const res3 = numbers.map ( (num3)=> {

   return num3 * num3
})
console.log (res3)

const res4 = numbers.map ( (num4)=> {

    return num4 *2
 })
 console.log (res4)
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const res5 = numbers.filter ( (num5)=> {

    return num5 >= 20;
})
const res6 = res5.map ( (num6)=> {

    return num6 * 2;
})
console.log (res5)
console.log (res6);

const res7 = numbers.filter ( (num7)=> {

    return num7 % 5 === 0;
})
const res8 = res7.map ( (num8)=> {

    return num8 * 2;
})
console.log (res7)
console.log (res8);


/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const logger = [1, 2, 3, 4, 5];
logger.forEach(function(number) {
    console.log(number);
});

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const temp = [100,60,130,110]
 const toCelsius = temp.map ((temperatures) => { return ((temperatures - 32 ) * (5/9))});
console.log(toCelsius)


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const temperatureC = [35,65,60,40,45,64,30,51,50]

const threshhold = [49]

const hottestDays = temperatureC.filter ((tempo) => {
return tempo > threshhold ;
})
console.log ( hottestDays)

/******************************************
 * logHottestDays(temperatures, threshhold)
 
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 
 * hint: you can combine
 *       all previous functions
 *******************************************/

const temperaturef = [80,119,100,150,90]

const threshholdf = [85]

const logHottestDays = temperaturef.filter ((tempof) => {
return tempof > threshholdf ;
})

const logHottestDaysC = logHottestDays.map ( (tempoc ) => {
    return ((tempoc - 32 ) * (5/9));
})
console.log ( logHottestDaysC)
