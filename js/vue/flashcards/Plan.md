## Vue Build

### Components:

#### Index

#### Login

#### Navbar

#### Group

#### Class

#### Set


### Routes

##### /

If not authenticated:
* Redirect to: /login Login.Vue
* No navbar

If Authenticated:
* List Groups
* Create Group

* List last * used classes

##### /login
* Login with Google button

##### /groups

* List existing groups
* create new group

##### /%groupname%

* Show group details
* Show classes
* Create class
* Edit button to edit group details

##### /%groupname%/%classname%

* List class details
* List sets
* create set
* Edit button to edit class details

##### /%groupname%/%classname%/%set%

* List Flashcards
* Add Flashcard
* Edit button to edit set details

##### /%groupname%/%classname%/%setname%/%flashcard id%

* List details for specific Flashcard
* Button to edit flashcard details.







### Interface


### Resources

Authentication: https://blog.logrocket.com/vue-firebase-authentication/
