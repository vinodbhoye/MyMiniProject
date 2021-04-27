/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Book = void 0;\r\nvar Book = /** @class */ (function () {\r\n    function Book(id, title, author, price, rate, details) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.author = author;\r\n        this.price = price;\r\n        this.rate = rate;\r\n        this.details = details;\r\n    }\r\n    return Book;\r\n}());\r\nexports.Book = Book;\r\n\n\n//# sourceURL=webpack://MiniProject/./src/Book.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar bookManager_1 = __webpack_require__(/*! ./bookManager */ \"./src/bookManager.ts\");\r\nvar books = [];\r\ndocument.getElementById('firstchild').style.display = \"none\";\r\ndocument.getElementById('secondchild').style.display = \"inline\";\r\nvar showAllBookTray = document.getElementById('addbooklist');\r\nshowAllBookTray.addEventListener('click', function () {\r\n    document.getElementById('firstchild').style.display = \"inline\";\r\n    document.getElementById('secondchild').style.display = \"none\";\r\n});\r\nvar showAllBookTray = document.getElementById('showlist');\r\nshowAllBookTray.addEventListener('click', function () {\r\n    document.getElementById('firstchild').style.display = \"none\";\r\n    document.getElementById('secondchild').style.display = \"inline\";\r\n});\r\nvar bookManagerObject = new bookManager_1.bookManager();\r\nvar deleteRowTable = document.getElementById('book-list');\r\nif (deleteRowTable != null) {\r\n    deleteRowTable.addEventListener(\"click\", function (e) {\r\n        var _a, _b, _c, _d;\r\n        var element = e.target;\r\n        //having claslist wether delete button\r\n        if (element.classList.contains('delete-button')) {\r\n            // let books:Book[]=JSON.parse(localStorage.getItem('record')||\"[]\");\r\n            var findID = (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstElementChild;\r\n            var idValue_1 = findID.textContent;\r\n            console.log(idValue_1);\r\n            (_d = (_c = element.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.remove();\r\n            // bookManagerObject.deleteRow(Number (idValue));\r\n            var books_1 = JSON.parse(localStorage.getItem('record') || \"[]\");\r\n            books_1.forEach(function (el) {\r\n                if (Number(el.id) === (Number(idValue_1))) {\r\n                    var indexAt = books_1.indexOf(el);\r\n                    books_1.splice(indexAt, 1);\r\n                }\r\n                localStorage.setItem(\"record\", JSON.stringify(books_1));\r\n            });\r\n            bookManagerObject.showTable(books_1);\r\n        }\r\n    });\r\n}\r\nvar showData = document.getElementById('showlist');\r\nif (showData != null) {\r\n    showData.onclick = function () {\r\n        // console.log(bookManagerObject.showBook());\r\n        bookManagerObject.showBook(books);\r\n        bookManagerObject.showTable(books);\r\n    };\r\n}\r\nvar searchbookdata = document.getElementById('searchbtn');\r\nif (searchbookdata != null) {\r\n    searchbookdata.onclick = function () {\r\n        bookManagerObject.searchBook(books);\r\n    };\r\n}\r\nvar insertData = document.getElementById('addbook');\r\nif (insertData != null) {\r\n    insertData.onclick = function () {\r\n        bookManagerObject.addNewBook();\r\n        bookManagerObject.clearFields();\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://MiniProject/./src/app.ts?");

/***/ }),

/***/ "./src/bookManager.ts":
/*!****************************!*\
  !*** ./src/bookManager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.bookManager = void 0;\r\nvar Book_1 = __webpack_require__(/*! ./Book */ \"./src/Book.ts\");\r\nvar bookManager = /** @class */ (function () {\r\n    function bookManager() {\r\n    }\r\n    // books:Book[]=[\r\n    //     {id:1, title:\"The Guide\", author:\"R K Narayan\", price:200, rate:5, details:\"mythdology\"},\r\n    //     {id:2, title:\"Think Like a Monk\", author:\"Jay Shetty\", price:279, rate:3, details:\"msythdology\"},\r\n    //     {id:3, title:\"The Gufide\", author:\"R K Naradyan\", price:2050, rate:3, details:\"mgfdsythdology\"},\r\n    //     {id:4, title:\"Wings of Fire\", author:\"APJ Kalam \", price:390, rate:5, details:\"mysdcthdology\"},\r\n    //     {id:5, title:\"My Gita\", author:\"Devdutt pattanaik\", price:180, rate:3, details:\"mythvcsvdology\"},\r\n    //     {id:6, title:\"Train to Pakistan\", author:\"Khushwant Singh\", price:163, rate:2, details:\"mythdafology\"},\r\n    //     {id:7, title:\"Malgudi Days\",author:\"R K Narayan\", price:165, rate:4, details:\"science\"},\r\n    //     {id:8, title:\"vinod\", author:\"bhoye\"  , price:165, rate:4, details:\"science\"}\r\n    // ];\r\n    bookManager.prototype.clearFields = function () {\r\n        document.getElementById('id').value = '';\r\n        document.getElementById('title').value = '';\r\n        document.getElementById('author').value = '';\r\n        document.getElementById('price').value = '';\r\n        document.getElementById('rating').value = '';\r\n        document.getElementById('details').value = '';\r\n    };\r\n    bookManager.prototype.showBook = function (books) {\r\n        //data tranfer to key data\r\n        var localBooksData = JSON.parse(localStorage.getItem('record'));\r\n        for (var i = 0; i < localBooksData.length; i++) {\r\n            books.push(new Book_1.Book(localBooksData[i].id, localBooksData[i].title, localBooksData[i].author, localBooksData[i].price, localBooksData[i].rate, localBooksData[i].details));\r\n        }\r\n    };\r\n    // addBook(){\r\n    //     this.books.push(new Book(1, \"The Guide\", \"R K Narayan\", 200, 5, \"mythdology\"));\r\n    //     this.books.push(new Book(2, \"Think Like a Monk\", \"Jay Shetty\", 279, 3, \"msythdology\"));\r\n    //     this.books.push(new Book(4, \"Wings of Fire\", \"APJ Kalam \", 390, 5, \"mysdcthdology\"));\r\n    //     this.books.push(new Book(5, \"My Gita\", \"Devdutt pattanaik\", 180, 3, \"mythvcsvdology\"));\r\n    //     this.books.push(new Book(6, \"Train to Pakistan\", \"Khushwant Singh\", 163, 2, \"mythdafology\"));\r\n    //     this.books.push(new Book(7, \"Malgudi Days\", \"R K Narayan\", 165, 4, \"science\"));\r\n    //     this.books.push(new Book(8, \"vinod\", \"bhoye\", 165, 4, \"science\"));\r\n    //     return this.books;\r\n    // }\r\n    bookManager.prototype.addNewBook = function () {\r\n        var bookData = {\r\n            id: document.getElementById('id').value,\r\n            title: document.getElementById('title').value,\r\n            author: document.getElementById('author').value,\r\n            price: document.getElementById('price').value,\r\n            rate: document.getElementById('rating').value,\r\n            details: document.getElementById('details').value,\r\n        };\r\n        if (localStorage.getItem('record') == null) {\r\n            localStorage.setItem('record', '[]');\r\n        }\r\n        var old_data = JSON.parse(localStorage.getItem('record'));\r\n        old_data.push(bookData);\r\n        localStorage.setItem('record', JSON.stringify(old_data));\r\n    };\r\n    bookManager.prototype.searchBook = function (books) {\r\n        var arr = [];\r\n        var localSearchBooksData = JSON.parse(localStorage.getItem('record'));\r\n        var optionvalue = document.getElementById('choose').value;\r\n        optionvalue = optionvalue.toLowerCase();\r\n        var text = document.getElementById('mySearch');\r\n        switch (optionvalue) {\r\n            case \"id\":\r\n                console.log(\"i have choose id\");\r\n                for (var i = 0; i < localSearchBooksData.length; i++) {\r\n                    if (Number(text.value) == (localSearchBooksData[i].id)) {\r\n                        arr.push(localSearchBooksData[i]);\r\n                    }\r\n                }\r\n                break;\r\n            case \"title\":\r\n                console.log(\"i have choose title\");\r\n                for (var i = 0; i < localSearchBooksData.length; i++) {\r\n                    var str = localSearchBooksData[i].title.toLowerCase();\r\n                    console.log(str);\r\n                    if ((text.value).toLowerCase().trim() == (localSearchBooksData[i].title).toLowerCase().trim()) {\r\n                        arr.push(localSearchBooksData[i]);\r\n                    }\r\n                }\r\n                break;\r\n            case \"author\":\r\n                console.log(\"i have choose author\");\r\n                for (var i = 0; i < localSearchBooksData.length; i++) {\r\n                    if ((text.value).toLowerCase().trim() == (localSearchBooksData[i].author).toLowerCase().trim()) {\r\n                        arr.push(localSearchBooksData[i]);\r\n                    }\r\n                }\r\n                break;\r\n            case \"price\":\r\n                console.log(\"i have choose price\");\r\n                for (var i = 0; i < localSearchBooksData.length; i++) {\r\n                    if (Number(text.value) == localSearchBooksData.price) {\r\n                        arr.push(localSearchBooksData[i]);\r\n                    }\r\n                }\r\n                break;\r\n                deafault: console.log(\"your wrong choice\");\r\n                break;\r\n        }\r\n        console.log(optionvalue);\r\n        this.showTable(arr);\r\n    };\r\n    // deleteRow(id:number){\r\n    //     alert(`This row is deleted!${id}`);\r\n    //     let books:Book[]=JSON.parse(localStorage.getItem('record')||\"[]\");\r\n    //     books.forEach(element=>{\r\n    //         if(element.id===id){\r\n    //             const indexAt=books.indexOf(element);\r\n    //             books.splice(indexAt,1);\r\n    //         }\r\n    //         localStorage.setItem(\"record\",JSON.stringify(books));\r\n    //     });\r\n    //     this.showTable(books);\r\n    // }\r\n    bookManager.prototype.showTable = function (books) {\r\n        var table = document.getElementById('book-list');\r\n        table.innerHTML = \"\";\r\n        var htmlString = \"\";\r\n        for (var i = 0; i < books.length; i++) {\r\n            htmlString +=\r\n                \"<tr>\\n                <td>\" + books[i].id + \"</td>\\n                <td>\" + books[i].title + \"</td>\\n                <td>\" + books[i].author + \"</td>\\n                <td>\" + books[i].price + \"</td>\\n                <td>\" + books[i].rate + \"</td>\\n                <td><button class=\\\"delete-button\\\">\" + \"Delete\" + \"</button></td>\\n                </tr>\";\r\n            //   table.innerHTML+=row;\r\n        }\r\n        table.innerHTML = htmlString;\r\n    };\r\n    return bookManager;\r\n}());\r\nexports.bookManager = bookManager;\r\n// document.getElementById('delete')?.addEventListener('click', ()=>\r\n// {\r\n// })\r\n\n\n//# sourceURL=webpack://MiniProject/./src/bookManager.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;