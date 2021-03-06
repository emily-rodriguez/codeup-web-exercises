(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Emily",
        lastName: "Rodriguez"
    };

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {   name: 'Cameron',
            amount: 180
        },
        {   name: 'Ryan',
            amount: 250
        },
        {   name: 'George',
            amount: 320
        }
    ];

    shoppers.forEach(function(shopper){
       console.log("Welcome to HEB " + shopper.name + "!");
       console.log("Your total today is $" + parseFloat(shopper.amount).toFixed(2));
       var totalAfterDiscount = (shopper.amount = (shopper.amount - (0.12 * shopper.amount)));
       if (shopper.amount >= 200){
           console.log("Congrats, you get a 12% discount! Your new total is $" + parseFloat(totalAfterDiscount).toFixed(2));
       } else {
           console.log("Sorry, you didn't spend enough for a discount. Thank you for shopping at HEB!");
       }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        // {
        //     title: "Harry Potter and the Prisoner of Azkaban",
        //     author: {
        //         firstName: "JK",
        //         lastName: "Rowling"
        //     }
        // },
        createBook("Harry Potter and the Prisoner of Azkaban", "JK Rowling"),
        {
            title: "American Gods",
            author: {
                firstName: "Neil",
                lastName: "Gaiman"
            }
        },
        {
            title: "Ready Player One",
            author: {
                firstName: "Ernest",
                lastName: "Cline"
            }
        },
        {
            title: "The Power",
            author: {
                firstName: "Naomi",
                lastName: "Alderman"
            }
        },
        {
            title: "Little Fires Everywhere",
            author: {
                firstName: "Celeste",
                lastName: "Ng"
            }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach (function(book, i){
            console.log("Book # " + (i + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    });


    // alternate solution using for loop

    // for (var i = 0; i < books.length; i++) {
    //     console.log("Book # " + (i + 1);
    //     console.log(("Title: " + books[i].title));
    //     console.log(("Author: " + books[i].author.firstName + " " + books[i].author.lastName));
    // }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // function createBook(title, authorFirstName, authorLastName) {
    //     var bookObject = {
    //     title: title,
    //         author: {
    //             firstName: authorFirstName,
    //             lastName: authorLastName
    //         }
    //     };
    //     return bookObject;
    // }
    //
    // var newBook = createBook("Freedom", "Jonathan", "Franzen");
    // console.log(newBook);
    //
    //
    //
    // function showBookInfo(bookObject) {
    //         console.log("Book # " + 6);
    //         console.log("Title: " + bookObject.title);
    //         console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName);
    // }
    //
    // console.log(showBookInfo(newBook));

    // alternate solution:


    function createBook(title, author){
        var name = author.split(" ");
        return {title: title,
                author: {
                    firstName: name[0],
                    lastName: name[1]
            }}

    }

    books.push(createBook("In Cold Blood", "Truman Capote"));

    // // You can re-assin an element in an array using this...
    // books[3] = createBook("Gone Girl", "Gillian Flynn");

    function showBookInfo(book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log(("------"));
    }

    // for (var i = 0; i < books.length; i++) {
    //     showBookInfo(books[i], i);
    // }

    books.forEach(showBookInfo);

})();


