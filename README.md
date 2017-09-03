# FashionCloud Coding​ ​Challenge


<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Use the Books-API of the New York Times.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> The app uses routing. Start/home pages.  (You can go back to the home page by clicking on the NYtimes logo)

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> When the page that shows the API data is opened, it should load the necessary data
from the NYT Api and display it in a simple but structured way (no fancy UI needed).
Please show for each book in the list following information: The title, author, rank on
list and rank of previous week.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> As a header of this page please also show a page title (e.g. ‘NYT Bestseller List’) and
“last_modified”.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Please add an icon for every book that indicates if the list rank compared to previous
week has improved, declined or stayed the same.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Please offer the user the choice to sort the list according to following criteria: name,
author, rank this week (default) or rank last week. Please implement the sorting on
the client. The API offers a sorting functionality but please use the features offered by
Angular.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/cancel.png"> Optional Task in case you still have time: Add a dropdown list so the user can
choose what bestseller list shall be used. For this you can use an additional endpoint
called “Besteller List Names”. Please display in the dropdown list the values of
“display_name” and load the data when a selection is made.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png">Please use Angular 1.5

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/question.png">Prefer to use components. **The last time I worked with Angular was quite some time ago, and at that time it didn't have components (and from what I read about it today, components in Angular have quite different syntax and project structure). After that I switched to React and didn't really have a chance to dive into components syntax in Angular 1.5. I totally understand that treating book cards would be a much better approach from 'reusability' standpoint.**

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Create a public Github repo for the code. Commit your progress with good commit message and in sensible chunks

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Test the code in a way that seems appropriate to you in a professional environment. **I used Protractor, which is built on top of WebDriverJS**

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/question.png"> Use standards and best practices as best as you can. 20pxIf I started to use components or Angular 2 with Typescript, I could use ES6**

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Pretend you have a big team and make it really easy for them to run the app and to maintain it for years to come.

<img height="20px" width="20px" src="https://github.com/NadiKuts/NewYorkTimesBestsellers/blob/master/app/check.png"> Please focus on functionality first and a clean coding style and worry about design later.


### Instructions
- Clone repository: `git clone https://github.com/NadiKuts/NewYorkTimesBestsellers.git`

- Navigate to the created folder: `cd NewYorkTimesBestsellers`

- Install dependencies: `npm install`

- Start the project `npm start`

- Once you have ensured that the development web server is up and running, you can run the end-to-end tests using  `npm run protractor`
