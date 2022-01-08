// load book information
const loadBook = () => {
    const getInput = document.getElementById('inputField');
    const getInputText = getInput.value ;
    getInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${getInputText}` ;
    fetch(url)
    .then(response => response.json())
    .then(data => showBook(data.docs))
}
// show results
const showBook = (books) => {
    // console.log(books);
    const displayBook = document.getElementById('displayBook');
    displayBook.textContent = '';
    // display no result found
    
    books.forEach(book => {
        // console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg' " class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Book name: ${book.title}</h4>
                <h5 class="card-title">First Publish: ${book.first_publish_year}</h5>
                <p class="card-text">Author : ${book.author_name}</p>
            </div>
        </div>
        `;
        displayBook.appendChild(div);
    })
}