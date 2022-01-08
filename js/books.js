// load book information
const loadBook = () => {
    const getInput = document.getElementById('inputField');
    const getInputText = getInput.value ;
    getInput.value = '';
    // if input field empty
    if(getInputText === ''){
        const displayMsg = document.getElementById('numberResult');
        displayMsg.textContent = '';
        const msg = document.createElement('h3');
        msg.innerHTML = `
        <h3 class="text-danger" > Please write something in input field to display books!! </h3>
        `
        displayMsg.appendChild(msg);
    } 
    else{
        const url = `https://openlibrary.org/search.json?q=${getInputText}` ;
        fetch(url)
        .then(response => response.json())
        .then(data => showBook(data.docs))
    }
}
// show results
const showBook = (books) => {
    // console.log(books);
    const displayBook = document.getElementById('displayBook');
    displayBook.textContent = '';
    // display no result found
    if(books.length === 0){
        const noFound = document.getElementById('numberResult');
        noFound.textContent = '';
        const h3 = document.createElement('h3');
        h3.innerHTML = `
        <h3 class="text-danger" > No result found!! </h3>
        `
        noFound.appendChild(h3);
    }
    else{
        var count = 0;
        books.forEach(book => {
            // console.log(book)
            // how much result fount condition 
            if(book.length !== 0){
                count = count+1;
            }
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
        // console.log(count);
        // how much result fount show on ui
        const noOfResult = document.getElementById('numberResult');
        noOfResult.textContent = '';
        const h4 = document.createElement('h4');
        h4.innerHTML = `
            <h4 class="text-success">${count} Result has found! </h4>
        `
        noOfResult.appendChild(h4);
    } 
}
