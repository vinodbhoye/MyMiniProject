import { JsxEmit } from 'typescript';
import { Book } from './Book'

export class bookManager{

    // books:Book[]=[
    //     {id:1, title:"The Guide", author:"R K Narayan", price:200, rate:5, details:"mythdology"},
    //     {id:2, title:"Think Like a Monk", author:"Jay Shetty", price:279, rate:3, details:"msythdology"},
    //     {id:3, title:"The Gufide", author:"R K Naradyan", price:2050, rate:3, details:"mgfdsythdology"},
    //     {id:4, title:"Wings of Fire", author:"APJ Kalam ", price:390, rate:5, details:"mysdcthdology"},
    //     {id:5, title:"My Gita", author:"Devdutt pattanaik", price:180, rate:3, details:"mythvcsvdology"},
    //     {id:6, title:"Train to Pakistan", author:"Khushwant Singh", price:163, rate:2, details:"mythdafology"},
    //     {id:7, title:"Malgudi Days",author:"R K Narayan", price:165, rate:4, details:"science"},
    //     {id:8, title:"vinod", author:"bhoye"  , price:165, rate:4, details:"science"}
    // ];


     

     clearFields(){
        (<HTMLSelectElement>document.getElementById('id')).value='';
        (<HTMLSelectElement>document.getElementById('title')).value='';
        (<HTMLSelectElement>document.getElementById('author')).value='';
        (<HTMLSelectElement>document.getElementById('price')).value='';
        (<HTMLSelectElement>document.getElementById('rating')).value='';
        (<HTMLSelectElement>document.getElementById('details')).value='';

     }




    showBook(books:Book[]){
//data tranfer to key data
        var localBooksData=JSON.parse(localStorage.getItem('record')!);
        for (let i = 0; i < localBooksData.length; i++) {
          books.push(new Book(localBooksData[i].id,localBooksData[i].title, localBooksData[i].author, localBooksData[i].price, localBooksData[i].rate,localBooksData[i].details));
            
        }

    }


    // addBook(){

    //     this.books.push(new Book(1, "The Guide", "R K Narayan", 200, 5, "mythdology"));
    //     this.books.push(new Book(2, "Think Like a Monk", "Jay Shetty", 279, 3, "msythdology"));
    //     this.books.push(new Book(4, "Wings of Fire", "APJ Kalam ", 390, 5, "mysdcthdology"));
    //     this.books.push(new Book(5, "My Gita", "Devdutt pattanaik", 180, 3, "mythvcsvdology"));
    //     this.books.push(new Book(6, "Train to Pakistan", "Khushwant Singh", 163, 2, "mythdafology"));
    //     this.books.push(new Book(7, "Malgudi Days", "R K Narayan", 165, 4, "science"));
    //     this.books.push(new Book(8, "vinod", "bhoye", 165, 4, "science"));

    //     return this.books;

    // }
    
    
    

    addNewBook() {

        

        const bookData={
         id:(<HTMLSelectElement>document.getElementById('id')).value,
         title:(<HTMLSelectElement>document.getElementById('title')).value,
         author:(<HTMLSelectElement>document.getElementById('author')).value,
         price:(<HTMLSelectElement>document.getElementById('price')).value,
         rate:(<HTMLSelectElement>document.getElementById('rating')).value,
         details:(<HTMLSelectElement>document.getElementById('details')).value,
        }
        

            if(localStorage.getItem('record')==null)
            {
                localStorage.setItem('record','[]');
            }
    
            var old_data=JSON.parse(localStorage.getItem('record')!);
            old_data.push(bookData)
    
            localStorage.setItem('record',JSON.stringify(old_data));

    }
    


    searchBook(books:Book[]) {
        let arr:Book[]=[];
        var localSearchBooksData=JSON.parse(localStorage.getItem('record')!);

        let optionvalue = (<HTMLSelectElement>document.getElementById('choose')).value;
        optionvalue = optionvalue.toLowerCase();

        let text = document.getElementById('mySearch') as HTMLInputElement;

        switch (optionvalue) {
            case "id":
                console.log("i have choose id");
                for (let i = 0; i < localSearchBooksData.length; i++) {

                    if (Number(text.value) == (localSearchBooksData[i].id)) {
                        arr.push(localSearchBooksData[i])
                    }
                }

                break;
            case "title":
                console.log("i have choose title");

                for (let i = 0; i < localSearchBooksData.length; i++) {
                    const str = localSearchBooksData[i].title.toLowerCase();
                    console.log(str);

                    if ((text.value).toLowerCase().trim() == (localSearchBooksData[i].title).toLowerCase().trim()) {

                        arr.push(localSearchBooksData[i])
                    }

                }


                break;

            case "author":
                console.log("i have choose author");
                for (let i = 0; i < localSearchBooksData.length; i++) {
                    if ((text.value).toLowerCase().trim() == (localSearchBooksData[i].author).toLowerCase().trim()) {
                        arr.push(localSearchBooksData[i])
                    }

                }

                break;


            case "price":
                console.log("i have choose price");
                for (let i = 0; i < localSearchBooksData.length; i++) {
                    if (Number(text.value) == localSearchBooksData.price) {
                        arr.push(localSearchBooksData[i])
                    }
                }

                break;

                deafault:
                console.log("your wrong choice");
                break;
        }
        
            console.log(optionvalue);

             this.showTable(arr);



    }

    

    // deleteRow(id:number){
    //     alert(`This row is deleted!${id}`);
    //     let books:Book[]=JSON.parse(localStorage.getItem('record')||"[]");
    //     books.forEach(element=>{
    //         if(element.id===id){
    //             const indexAt=books.indexOf(element);
    //             books.splice(indexAt,1);
    //         }
            
    //         localStorage.setItem("record",JSON.stringify(books));
            
    //     });
    //     this.showTable(books);

    // }

     showTable(books:Book[]) {
    
        const table=(<HTMLElement>document.getElementById('book-list'));
    
        table.innerHTML="";
        let htmlString:string="";
            for (let i = 0; i < books.length; i++) {
            htmlString+=
                `<tr>
                <td>${books[i].id}</td>
                <td>${books[i].title}</td>
                <td>${books[i].author}</td>
                <td>${books[i].price}</td>
                <td>${books[i].rate}</td>
                <td><button class="delete-button">${"Delete"}</button></td>
                </tr>`
            //   table.innerHTML+=row;
    
             }

             table.innerHTML=htmlString;
       
    }

        
} 

// document.getElementById('delete')?.addEventListener('click', ()=>
// {

// })





   
    







