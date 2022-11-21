let myLibrary = [];
let book;
let count = 0;
let i = 0;
let j = 0;
let bookDiv;
let bookCount = 0;
let totalRead = 0;
let checkbox = false;
let rakk = document.querySelector('.rakk0')

const addBook = document.querySelector('#addBook')
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookCode = document.querySelector('#book-code')
const bookPages = document.querySelector('#bookPages');
const submit = document.querySelector('#submit');
const add = document.querySelector('#add');
const form = document.querySelector('form')
const formAdd = document.querySelector('.form-add')
const paraTitle = document.querySelector('.paraTitle')
const paraAuthor = document.querySelector('.paraAuthor')
const paraPages = document.querySelector('.paraPages');
const paraStatus = document.querySelector('.paraStatus');
const BookNo = document.querySelector('.BookNo')
const circle = document.querySelector('.circle')
const togle = document.querySelector('.togle')
const Total = document.querySelector('.total')
const ReadCount = document.querySelector('.totalRead');
const Status = document.querySelector('.Status')
const togleSwitch = document.querySelector('.switch')
const checkBox = document.querySelector('.checkBox')


// function for togle status above the togle switch

  function forToggleSwitch(){
    
    if( Status.textContent=='Not Read')
    {

            Status.textContent='Read'
            totalRead++;
            ReadCount.textContent=`Total Read :${totalRead}`;

    }else if(Status.textContent=='Read'){
           
            Status.textContent='Not Read'
            totalRead--;
            ReadCount.textContent=`Total Read :${totalRead}`;
            
        }     
    }


    add.addEventListener('click', () => 
    {  //add button event listener which slides form 

        form.style.top = "20px"
    })

    formAdd.addEventListener('click', () =>
    {  // submit add button which push object into array and slides form upside

        form.style.top = "-600px"
    })



  formAdd.addEventListener('click', () => {
       
    if (count < 10) 
    {
        rakk = document.querySelector(`.rakk${i}`)
        count++;
        j++;

        if( Status.textContent=='Not Read'){
            if(totalRead<=0){
                totalRead = 0;
            }else{
                totalRead--;
            }
                ReadCount.textContent=`Total Read :${totalRead}`;
           
    }}else {

         i++;
         rakk = document.querySelector(`rakk${i}`)
         count = 0;
    }



    book = Object()    
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    book.pages = bookPages.value;
    book.status=Status.textContent;
    console.log(book.status)
    book.code = bookCode.value;

    bookDiv = document.createElement('div');
    codeNo = document.createElement('p');

    codeNo.textContent =`${j}`
    bookDiv.appendChild(codeNo);

    bookDiv.setAttribute(`class`,`book book${j}`);
    bookDiv.setAttribute('onClick', `display(${j})`)

    rakk.appendChild(bookDiv);

    bookCount++;
    Total.textContent=`Total books: ${bookCount}`;

    myLibrary.push(book);
    Status.textContent='Not Read'

})





  function display(j) 
  
  {
        let div = document.querySelector(`.book${j}`)
        div.addEventListener('click',()=>{

        let para = div.querySelector('p')
        let code = para.textContent;
        paraTitle.textContent = `Title : ${myLibrary[code - 1].title}`;
        paraAuthor.textContent = `Author : ${myLibrary[code - 1].author}`;
        paraPages.textContent = `Pages : ${myLibrary[code - 1].pages}`;
        BookNo.textContent = `Book No : ${code}`;
        paraStatus.textContent=`Status :${myLibrary[code - 1].status}`
        
  })


}

    function remove()
    {

        codeForRemove=BookNo.textContent
        codeForRemove = codeForRemove.charAt(codeForRemove.length - 1)
        console.log(codeForRemove)
        delete  myLibrary[ codeForRemove - 1 ]
        let divforRemove = document.querySelector(`.book${codeForRemove}`) 
        rakk.removeChild(divforRemove)

    }


    