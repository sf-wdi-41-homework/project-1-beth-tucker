# <img src="https://cdn.pixabay.com/photo/2016/08/23/15/11/checklist-1614702_1280.png" width="60"> Jibe

## Overview

*What problem are we solving?*

It is hard to keep track of all of the “to dos” that a person needs to complete throughout the week. There are professional and personal items, and layers within each of those categories. Jibe is a centralized place where people organize and track their tasks.

*Who is our user?*

Any person who needs to keep track of items can use our product. Jibe is particularly useful for individuals who have different types of tasks (i.e., personal, professional, goals) that they want to keep organized.

## Code Walkthrough

*What does your product do?*

A user of Jibe can:
+ Create lists // Lists are where to dos live.
+ Delete lists
+ Create to dos
+ Complete to dos
+ Delete to dos

*How does the code work?*

We used HTML, CSS, Bootstrap, JavaScript, Mongoose, and Node to build this project.

On load the page lists all non-deleted to dos that are stored in the database. When the user selects a specific list from the dropdown on the right, the to dos on the selected list are rendered into the to do list left. When the user selects a specific to do item, it is crossed out. When a user selects the 'X' associated with a to do item it is deleted from the database. The user can create a new to do item by selecting the '+' while on a specific list. When the new to do is created it will be associated with the list that was selected at the time of creation. If the user selects the gear icon in the list column they will be taken to the List Manager modal. Within this modal they can create and delete lists; those updates will be reflected in the database.  

*What will (should) we improve?*

We plan to eventually add the following functionality:
+ User authentication
+ Add optional due dates on to dos
+ Add ability to create recurring to dos
+ Add ability to share lists with other users
+ Add ability to assign to dos to specific users

## Contributors

This project was built by Beth Witten and Tucker Bolding for Project 1 of WDI at General Assembly in SF.

Check out Beth's work [here](https://github.com/brwitten).
Check out Tucker's work [here](https://github.com/tuckbolding).
