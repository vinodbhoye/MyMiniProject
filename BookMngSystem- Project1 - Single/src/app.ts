import {Book} from "./Book"
import {bookManager} from "./bookManager"

let books: Book[] =[];

(<HTMLElement>document.getElementById('firstchild')).style.display="none";
(<HTMLElement>document.getElementById('secondchild')).style.display="inline";


var showAllBookTray=(document.getElementById('addbooklist') as HTMLElement)
showAllBookTray.addEventListener('click',()=>{

        (<HTMLElement>document.getElementById('firstchild')).style.display="inline";
        (<HTMLElement>document.getElementById('secondchild')).style.display="none";
})

var showAllBookTray=(document.getElementById('showlist') as HTMLElement)
showAllBookTray.addEventListener('click',()=>{
        (<HTMLElement>document.getElementById('firstchild')).style.display="none";
        (<HTMLElement>document.getElementById('secondchild')).style.display="inline";
})







let bookManagerObject=new bookManager();
   

let deleteRowTable=(document.getElementById('book-list') as HTMLElement)

if(deleteRowTable!=null)
{

deleteRowTable.addEventListener("click",function(e) {
     let element=  e.target as HTMLElement;
     //having claslist wether delete button
     if(element.classList.contains('delete-button')){
        // let books:Book[]=JSON.parse(localStorage.getItem('record')||"[]");

        let findID=element.parentElement?.parentElement?.firstElementChild as HTMLElement;
         const idValue=findID.textContent;
         console.log(idValue);         
        element.parentElement?.parentElement?.remove();
        // bookManagerObject.deleteRow(Number (idValue));

        let books:Book[]=JSON.parse(localStorage.getItem('record')||"[]");
        books.forEach(el=>{
            if(Number(el.id)===(Number(idValue))){
                const indexAt=books.indexOf(el);
                books.splice(indexAt,1);
            }
            
            localStorage.setItem("record",JSON.stringify(books));
            
        });

        bookManagerObject.showTable(books);
            
        }
});
}



let showData=document.getElementById('showlist') as HTMLElement;
if(showData!=null)
{
        showData.onclick=function(){

                // console.log(bookManagerObject.showBook());
                bookManagerObject.showBook(books);
                bookManagerObject.showTable(books);
              
     }
}     




let searchbookdata=(document.getElementById('searchbtn') as  HTMLElement);

if(searchbookdata!=null)
{

         searchbookdata.onclick=function(){

                bookManagerObject.searchBook(books);
                
        }
        
}

let insertData=document.getElementById('addbook') as HTMLButtonElement;
if(insertData!=null)
{
        insertData.onclick=function(){

        bookManagerObject.addNewBook();
        bookManagerObject.clearFields();
     }
}     




