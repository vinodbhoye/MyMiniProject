

// //here fetch my add book html page
var fetchAddbtn=document.getElementById('addbook');
var container=document.getElementById('container');


fetchAddbtn.addEventListener('click',buttonClick)


function buttonClick(){
    const xhr=new XMLHttpRequest();

        //what to do when response is ready
        xhr.onload=function(){

            if(this.status===200){
                container.innerHTML=xhr.responseText;
            }else{
                console.warn('Did not receive 200 0k from response')
            }

        };
        //Open the object

        xhr.open('GET','bookAdd.html');

    //send the request
    xhr.send();
}
//================================================================================
function create(event){
    event.preventDefault();
    const id=document.getElementById('id').value;
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const price=document.getElementById('price').value;
    const rate=document.getElementById('rate').value;
    const details=document.getElementById('details').value;

    let url='http://localhost:9000/Books';
    let book={"id":id, "title":title,"author":author,"price":price,"rate":rate,"details":details};

    fetch(url,{
        method:"POST",
        body:JSON.stringify(book),
        headers:{"Content-type":"application/json"}
    })


}




//====================================================================================
// //render booklist html table page
const xhr = new XMLHttpRequest();

// //what to do when response is ready
xhr.onload = function () {

    if (this.status === 200) {
        container.innerHTML = xhr.responseText;
    } else {
        console.warn('Did not receive 200 0k from response')
    }

};

//Open the object

xhr.open('GET', 'bookList.html');

// var ourData = JSON.parse(xhr.responseText);

//send the request
xhr.send();




fetch('http://localhost:9000/Books')
.then(res=>{
    if(!res.ok){
        throw Error(res.statusText)
    }
    console.log(res)
    return res.json();
})
.then((data)=>{
    console.log(data);
     renderHTML(data);
    
}).catch((error)=>{console.log(error)})




function renderHTML(json){
    var table=document.getElementById('book-list');


    table.innerHTML="";
    for (let i = 0; i < json.length; i++) {
        let row=
            `<tr>
            <td>${json[i].id}</td>
            <td>${json[i].title}</td>
            <td>${json[i].author}</td>
            <td>${json[i].price}</td>
            <td>${json[i].rate}</td>
            <td><a class=""details" href=""./details.html>Details</a> <span>|</span><button class="delete-button">${"Delete"}</button></td>
            </tr>`

            if(table!==null)
          table.innerHTML+=row;

         }


         //===============================================DELETE FUNCTION=================================================
         

         let deleteRowTable=(document.getElementById('tableid-showtable'))
            if(deleteRowTable){
                   deleteRowTable.addEventListener("click",function(e) {
                   let element=  e.target;

                   if(element.classList.contains('delete-button')){
    
                    let findID=element.parentElement?.parentElement?.children[0];
                    
                     const idValue=findID.textContent;
                     console.log(idValue);         
                    element.parentElement?.parentElement?.remove();
                 
                    
                    const myDataObject ={ id:idValue}

                    let url='http://localhost:9000/Books/'+idValue;

                        fetch(url, {
                            method: 'DELETE',
                            headers: {
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(myDataObject)
                        })
                        .then(response => {
                            return response.json( )
                        })
        
                   console.log(element);
                   }
      })

   
}




//================================================SEARCH BY============================================================

let searchBook=document.getElementById('searchbtn')
if(searchBook)
{
    searchBook.addEventListener('click',function(){
    

                let optionvalue = (document.getElementById('choose')).value;
                optionvalue = optionvalue.toString();

                let text = document.getElementById('inputSearchText').value;

                let url='http://localhost:9000/Books/'
        
                switch (optionvalue) {
                    case "id":
                         url+=`?id=${text}`;
                         
                         fetch(url)
                         .then(res=>res.json())
                         .then(data=>renderHTML(data))
                         .catch((error)=>{console.log(error)})
                        break;
                    case "title":
                        url+=`?title=${text}`;
                         
                        fetch(url)
                        .then(res=>res.json())
                        .then(data=>renderHTML(data))
                        .catch((error)=>{console.log(error)})

                        break;
                    case "author":
                        url+=`?author=${text}`;
                         
                        fetch(url)
                        .then(res=>res.json())
                        .then(data=>renderHTML(data))
                        .catch((error)=>{console.log(error)})


                        break;
                    case "price":
                        url+=`?(price)_lti=${text}`;
                         
                        fetch(url)
                        .then(res=>res.json())
                        .then(data=>renderHTML(data))
                        .catch((error)=>{console.log(error)})

                        break;        
                
                    default:
                         alert("Please check you someone get wrong input....")
                         console.log("Please check input ......")
                        break;
                }
        
    })
}


//====================================================details============================




    
}




