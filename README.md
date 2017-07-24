# Project Title

Color Game

## Project Description

This was a coding project from Colt Steele's Udemy course. Instead of doing the project as a code along, I took it as a coding challenge. We were shown the end result before the code along, began, so I paused the video and completed this project before watching the solution.

### Things to know

This project is styled using bootstrap. The color sqaures on the page are placed using Bootstrap's row and column grid system.

The variable colors is set to an empty array. Four other variables are declared and assigned to elements from the page.

The colorLoad function takes a number as a parameter, and loops through creating an array of random RGB colors. Upon each iteration, a new color is added to the colors array. One of these colors from the colors array is chosen at random to be the correct answer.

The colorDisplay shows the RGB value as text. The feedback variable will inform the user if the answer is right or wrong.

A for loop is assigning each random color to each square on the page. An event listener is added to each element. If the background-color of the selected square does not equal the right answer, the background changes to that of the body background, and the feedback displays the text 'Wrong!'

If the background color of the selected element does match the correct answer, the feedback reads 'Correct!' The h1 background, and the color of all the squares change to equal the color of the right answer.

The default number of squares loaded upon rendering the page is 6. This is considered hard mode. The new colors button will check to see if hard mode or easy mode is active, and then render 6 or 3 squares, respectively.

The easy button adds the class active to itself, removes the class active from hard, changes the h1 style background to its default value, clears the feedback, and displays three squares. The hard button does the inverse of that and displays six squares. 
