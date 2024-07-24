const library = []

class Book {
  constructor (title, author, year, rating) {
    this.title = title
    this.author = author
    this.year = year
    this.rating = rating
  }
}

const showBookForm = () => {
  const addBookButton = document.querySelector('.js-add-book-button')
  const formDisplay = document.querySelector('.js-modal')
  const pageDisplay = document.querySelector('.js-empty')

  addBookButton.addEventListener('click', () => {
    pageDisplay.classList.add('blur')
    formDisplay.style.display = 'block'
  })

  document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.js-submit-button')
  
    submitButton.addEventListener('click', (event) => {
      addBookToLibrary(event)
    })
  })
}

const closeBookForm = (submitted = false) => {
  const closeButton = document.querySelector('.js-close-button')
  const formDisplay = document.querySelector('.js-modal')
  const pageDisplay = document.querySelector('.js-empty')

  closeButton.addEventListener('click', () => {
    pageDisplay.classList.remove('blur')
    formDisplay.style.display = 'none'
  })

  if (submitted) {
    pageDisplay.classList.remove('blur')
    formDisplay.style.display = 'none'
  }
}

const addBookToLibrary = (event) => {
  event.preventDefault()

  const title = document.querySelector('#js-book-title').value
  const author = document.querySelector('#js-book-author').value
  const rating = parseInt(document.querySelector('#js-book-rating').value)
  const year = document.querySelector('#js-book-year').value

  const myBook = new Book(title, author, rating, year)

  library.push(myBook)
  closeBookForm(true)
}

const displayBooks = () => {
  
}

showBookForm()
closeBookForm()