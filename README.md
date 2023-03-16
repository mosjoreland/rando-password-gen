# rando-password-gen

## Issues to be solved
* When clicking on the generate password button I am not asked my preferences for the type of password I would like to create
* The password must be a length of at least 8 characters and no more than 128 characters

## How the issues were solved
* I created prompts that ask what the user would like their password to contain
* I created separate arrays for the character sets
* I then created a function to generate the password based off of the users input, using if statements that operate when the user confirms a certain prompt. With a for loop to generate the password using the if statements above it.
* I also added while loop that checks if the user input a number, if the length is less than 8, and if it is greater than 128. If any of them are false it will prompt the user to enter a valid password length.