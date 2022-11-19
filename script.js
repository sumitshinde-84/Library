

let myLibrary = [];
let book;


const addBook = document.querySelector('#addBook')
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const submit = document.querySelector('#submit');


function Book(title,author,pages){

this.title = title;
this.author = author;
this.pages = pages;
    
}


function addBookToLibrary(){



 book = new Book(bookTitle.value,bookAuthor.value,bookPages.value)
    

}




submit.addEventListener('click',(book)=>{
    myLibrary.push(book);
    console.log(myLibrary)
})
