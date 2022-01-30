/*

sample output: 

1 2 3 4 5 6 7 8 9 10
2 * * * * * * * * * 
3 * * * * * * * * *
4 * * * * * * * * * 
5 * * * * * * * * * 
6 * * * * * * * * *
7 * * * * * * * * * 
8 * * * * * * * * * 
9 * * * * * * * * *
10 * * * * * * * * * 

we would like to create a multiplication table like the above. 

*/

function createMultiplyTable() {
    let consoleString = [];
    let multipleString = "";

    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <=10; j++) {
            
            multipleString = multipleString + " " + (i*j);
            if (j === 10){
                consoleString.push(multipleString);
                multipleString = "";
        }
        
        }
    }

        console.log(consoleString);
    
}

createMultiplyTable();



/*
basically what this is doing. 
we create an empty array (consoleString) inside the function;
we create an empty string (multipleString) inside the function.

   *we have two for loops here. The first one is defining a number i, which starts at 1, and is defined to
    run until it reaches = 10, and i++ just means each time i will increase by 1. We start in the loop, and
    immediately hit the second for loop. This defines a number j, which also starts at 1, and same definition. 
    So, we go inside the for loop for j, and find that multipleString is equal to the empty string [which was defined
    earlier] + " " [a space] + i*j. For the first loop i=1 and j=1. therefore multipleString = " 1".
    now j = 2, i is still 1. so multipleString = " 1 2", .... until j=10 and then it = " 1 2 3 4 5 6 7 8 9 10";
    then, j === 10 ane goes inside the if statement, which pushes that string into the empty array of consoleString, and then resets.
    now i = 2, and it goes on to print " 1 4 6 8 10 12 14 16 18 20", and so on until i = 10. Then we exit. 
    This prints out our table. 

*/



