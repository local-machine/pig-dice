# Pig Dice Game

#### _This web site is used to play the game Pig Dice. - June 14, 2019_

#### _By **Na Hyung Choi and Jessica Munoz**_

## Description

This web site is used to play the game Pig Dice. The user can play against the computer or another user. The gameplay runs as follows:

* Player rolls dice and the number rolled is added to a temporary total.
* Player passes turn and temporary total is added to their current score.
* If player rolls a one, they lose any temporary total and the turn passes to the next player.
* The first player to reach 100 wins the game.



### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a random number between 1 and 6** | Roll | "3" |
| **Keeps a tally of current player's rolls** | "3, 5, 3" | "11" |
| **Clears tally of rolls when 1 is rolled** | "3, 5, 3, 1" | "0" |
| **Adds current tally to total score when "pass" is clicked** | "3, 5, 3, Pass" | "Total: 11" |
| **Rolling a one results in the turn passing to the next player** | "3, 5, 3, 1, 4" | "Player 1: 0, Player 2: 4" |
| **Switches to other user upon passing turn** | "3, 5, 3, Pass, 4" | "Player 1: 11, Player 2: 4" |
| **Terminates at 20** | "Player 1 >= 20" | "Player 1 wins" |
| **Terminates at 100** | "Player 1 >= 100" | "Player 1 wins" |

## Setup/Installation Requirements

* Clone this repository and open the .html file.
* OR go directly to the [Web page]()

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap

## Support and contact details

_Please contact Na Hyung and Jessica with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi and Jessica Munoz_**
