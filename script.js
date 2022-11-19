let myLibrary = [];
let  book;
let count = 0;
let i =0;
let bookinfo;
let bookDiv;
const addBook = document.querySelector('#addBook')
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookCode = document.querySelector('#book-code')
const bookPages = document.querySelector('#bookPages');
const submit = document.querySelector('#submit');
const add = document.querySelector('#add');
const form = document.querySelector('form')
const formAdd = document.querySelector('.form-add')
let rakk = document.querySelector('.rakk0')







add.addEventListener('click',()=>{

form.style.top="20px"
})

formAdd.addEventListener('click',()=>{
    form.style.top="-600px"

})



formAdd.addEventListener('click',()=>{
    
    if(count<=9){
        rakk = document.querySelector(`.rakk${i}`)
        count++;
       
        
    }else{
        count=0
        i++;
        rakk = document.querySelector(`rakk${i}`)
    }

     book = Object()
     book.title = bookTitle.value ;
     book.author = bookAuthor.value;
     book.pages = bookPages.value;
     book.code = bookCode.value;
     bookDiv =document.createElement('div');
     bookDiv.className='book';
     bookDiv.setAttribute('id',`rakk${i}${count}`)
     rakk.appendChild(bookDiv);
     myLibrary.push(book);
     console.log(myLibrary)
    
     
     
    
})



for(i=0;i<myLibrary.length;i++){
for(j=count;j<9;j++){
     bookinfo = document.querySelector(`#rakk${i}${j}`)
    bookinfo.addEventListener('click',()=>{
        console.log(myLibrary[i].title)
    })
}

}