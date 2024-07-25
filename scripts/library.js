const emptyPageDisplay = document.querySelector('.js-empty')
const libraryDisplay = document.querySelector('.js-library')
const libraryGrid = document.querySelector('.js-library-grid')
const formDisplay = document.querySelector('.js-modal')
const formCloseButton = document.querySelector('.js-close-button')
const formSubmitButton = document.querySelector('.js-submit-button')
const emptyAddButton = document.querySelector('.js-empty-add-button')
const libraryAddButton = document.querySelector('.js-library-add-button')

const library = JSON.parse(localStorage.getItem('library')) || []

class Book {
  constructor (title, author, year, rating) {
    this.title = title
    this.author = author
    this.year = year
    this.rating = rating
  }
}

const submitBookForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    formSubmitButton.addEventListener('click', (event) => {
      event.preventDefault()

      const title = document.querySelector('#js-book-title').value
      const author = document.querySelector('#js-book-author').value
      const rating = parseInt(document.querySelector('#js-book-rating').value)
      const year = document.querySelector('#js-book-year').value
      
      emptyPageDisplay.classList.remove('blur')
      libraryDisplay.classList.remove('blur')
      formDisplay.style.display = 'none'
  
      const book = new Book(title, author, year, rating)
      library.push(book)

      localStorage.setItem('library', JSON.stringify(library))
  
      document.forms[0].reset()
  
      closeBookForm()
      displayBooks()
    })
  })

}

const displayBooks = () => {
  let libraryHTML = ''
  
  emptyPageDisplay.style.display = 'none'
  libraryDisplay.style.display = 'block'
  
  library.forEach((book) => {
    libraryHTML += `
      <div class="book">
        <div class="text-details">
          <div class="book-title-container">
            <span class="book-title js-book-title">${book.title}</span>
          </div>
          <div class="author-year-container">
            <p>
              <span class="book-author js-book-author">${book.author}</span> &#183;
              <span class="book-year js-book-year">${book.year}</span>
            </p>
          </div>
        </div>
        <div class="book-rating-container">
          <img src="assets/ratings/rating-${(book.rating).toFixed(1) * 10}.png" alt="">
          <span class="book-rating js-book-rating">(${(book.rating).toFixed(1)})</span>
        </div>
      </div>
    `
  })

  libraryGrid.innerHTML = libraryHTML
  showBookForm(libraryDisplay, libraryAddButton)
}

const closeBookForm = () => {
  formCloseButton.addEventListener('click', () => {
    emptyPageDisplay.classList.remove('blur')
    libraryDisplay.classList.remove('blur')
    formDisplay.style.display = 'none'
  })
}

const showBookForm = (page, button) => {
  button.addEventListener('click', () => {
    page.classList.add('blur')
    formDisplay.style.display = 'block'
  })
}

const loadPage = () => {
  if (library.length === 0) {
    emptyPageDisplay.style.display = 'grid'
    showBookForm(emptyPageDisplay, emptyAddButton)
  } else {
    libraryDisplay.style.display = 'block'
    showBookForm(libraryDisplay, libraryAddButton)
    displayBooks()
  }
}

console.log(library)
loadPage()
submitBookForm()
closeBookForm()

// const showBookForm = (page) => {
//   const addBookButton = document.querySelector('.js-add-book-button')

//   const formDisplay = document.querySelector('.js-modal')
//   const pageDisplay = document.querySelector(page)

//   addBookButton.addEventListener('click', () => {
//     pageDisplay.classList.add('blur')
//     formDisplay.style.display = 'block'
//   })

//   document.addEventListener('DOMContentLoaded', () => {
//     const submitButton = document.querySelector('.js-submit-button')
  
//     submitButton.addEventListener('click', (event) => {
//       addBookToLibrary(event, page)
//     })
//   })
// }

// const closeBookForm = (page, submitted = false) => {
//   const closeButton = document.querySelector('.js-close-button')
//   const formDisplay = document.querySelector('.js-modal')
//   const pageDisplay = document.querySelector(page)

//   closeButton.addEventListener('click', () => {
//     pageDisplay.classList.remove('blur')
//     formDisplay.style.display = 'none'
//   })

//   if (submitted) {
//     pageDisplay.classList.remove('blur')
//     formDisplay.style.display = 'none'
//   }
// }

// const addBookToLibrary = (event, page) => {
//   event.preventDefault()

//   const title = document.querySelector('#js-book-title').value
//   const author = document.querySelector('#js-book-author').value
//   const rating = parseInt(document.querySelector('#js-book-rating').value)
//   const year = document.querySelector('#js-book-year').value

//   const myBook = new Book(title, author, year, rating)

//   library.push(myBook)
//   closeBookForm(page, true)
//   displayBooks()
// }

// const displayBooks = () => {
//   const emptyPageDisplay = document.querySelector('.js-empty')
//   const libraryDisplay = document.querySelector('.js-library')
//   const libraryGrid = document.querySelector('.js-library-grid')
  // let libraryHTML = ''

  // emptyPageDisplay.style.display = 'none'
  // libraryDisplay.style.display = 'block'

  // library.forEach((book) => {
  //   libraryHTML += `
  //     <div class="book">
  //       <div class="text-details">
  //         <div class="book-title-container">
  //           <span class="book-title js-book-title">${book.title}</span>
  //         </div>
  //         <div class="author-year-container">
  //           <p>
  //             <span class="book-author js-book-author">${book.author}</span> &#183;
  //             <span class="book-year js-book-year">${book.author}</span>
  //           </p>
  //         </div>
  //       </div>
  //       <div class="book-rating-container">
  //         <img src="assets/ratings/rating-50.png" alt="">
  //         <span class="book-rating js-book-rating">(5.0)</span>
  //       </div>
  //     </div>
  //   `
  // })

  // libraryGrid.innerHTML = libraryHTML
//   showBookForm(libraryDisplay)
//   closeBookForm(libraryDisplay)
// }

// showBookForm('.js-empty')
// closeBookForm('.js-empty')

//If library is empthy it will display empty page, if not it will display the books you have. 

//You need a checker to check which page to display

//You need a display books in library function