let click = false;
let id = 1;
const addBtn = document.querySelector("#btn-add-book");
const addBook = document.querySelector("#add-book");
const subBtn = document.querySelector("#submit");
const lib = document.querySelector(".lib")

const myLibrary = [];

function Book(id, title, author, pages, readed) {
    if (!new.target) {
        throw Error("Use new");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;

    this.info = function () {
        let text;
        if (readed) {
            text = "already readed";
        } else {
            text = "not read yet";
        }
        let s = this.title + " by " + this.author + ", " + this.pages + " pages, " + text;

        return s;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBtn.addEventListener("click", () => {
    if (click === false) {
        addBtn.setAttribute("style", "background-color: gray");
        addBook.setAttribute("style", "display: block");
        click = true;
    }
});

subBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = document.querySelector("#pages").value.trim();
    const readedValue = document.querySelector('input[name="ticket_type"]:checked').value;

    if (title && author && pages) {
        addBtn.setAttribute("style", "background-color: white");
        addBook.setAttribute("style", "display: none");
        click = false;

        const newDiv = document.createElement("div");
        newDiv.className = "book-card";
        newDiv.id = "book" + id;

        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pReaded = document.createElement("p");

        pTitle.textContent = "Title: " + title;
        pAuthor.textContent = "Author: " + author;
        pPages.textContent = "Pages: " + pages;
        pReaded.textContent = readedValue;

        if (readedValue === "Readed") {
            newDiv.setAttribute("style", "background-color: #AFE1AF");
        } else {
            newDiv.setAttribute("style", "background-color: #D70040");
        }

        newDiv.appendChild(pTitle);
        newDiv.appendChild(pAuthor);
        newDiv.appendChild(pPages);
        newDiv.appendChild(pReaded);

        const newBook = new Book(id, title, author, pages, readedValue);
        addBookToLibrary(newBook);

        lib.appendChild(newDiv);
    }
});