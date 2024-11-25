import React, { Component } from 'react';
import BookItem from '../BookItem';
import './index.css';

class BookFinder extends Component {
  state = {
    searchInput: '',          // Title search input
    isbnInput: '',            // ISBN search input
    booksList: [],            // Stores the books to display
    isLoading: false,
    error: null,
    filteredBooks: [],        // Books after applying filters
    authorsFilter: [],        // Available authors to filter
    yearsFilter: [],          // Available years to filter
    genresFilter: [],         // Available genres to filter
    languagesFilter: [],      // Available languages to filter
    selectedAuthor: '',
    selectedYear: '',
    selectedGenre: '',
    selectedLanguage: ''      // Stores the selected language filter
  };

  // Fetch books from Open Library API when the component mounts
  async componentDidMount() {
    this.setState({ isLoading: true });

    // Retrieve the stored search state from localStorage if it exists
    const storedSearchInput = localStorage.getItem('searchInput');
    const storedIsbnInput = localStorage.getItem('isbnInput');
    const storedSelectedAuthor = localStorage.getItem('selectedAuthor');
    const storedSelectedYear = localStorage.getItem('selectedYear');
    const storedSelectedGenre = localStorage.getItem('selectedGenre');
    const storedSelectedLanguage = localStorage.getItem('selectedLanguage');

    // Set the state to the stored values or use default
    if (storedSearchInput) this.setState({ searchInput: storedSearchInput });
    if (storedIsbnInput) this.setState({ isbnInput: storedIsbnInput });
    if (storedSelectedAuthor) this.setState({ selectedAuthor: storedSelectedAuthor });
    if (storedSelectedYear) this.setState({ selectedYear: storedSelectedYear });
    if (storedSelectedGenre) this.setState({ selectedGenre: storedSelectedGenre });
    if (storedSelectedLanguage) this.setState({ selectedLanguage: storedSelectedLanguage });

    try {
      // Fetch books from Open Library API without a search term
      const response = await fetch('https://openlibrary.org/search.json?q=');
      const data = await response.json();

      if (data && data.docs && Array.isArray(data.docs)) {
        const newBooksList = data.docs.filter(book => book.title); // Ensure title exists
        this.setState({
          booksList: newBooksList,
          filteredBooks: newBooksList,
          isLoading: false
        });

        // Initialize filter options based on fetched books
        this.initializeFilters(newBooksList);
      } else {
        this.setState({
          booksList: [],
          filteredBooks: [],
          isLoading: false,
          error: 'No books found or invalid data structure.'
        });
      }
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  // Save search state to localStorage whenever it changes
  saveStateToLocalStorage = () => {
    localStorage.setItem('searchInput', this.state.searchInput);
    localStorage.setItem('isbnInput', this.state.isbnInput);
    localStorage.setItem('selectedAuthor', this.state.selectedAuthor);
    localStorage.setItem('selectedYear', this.state.selectedYear);
    localStorage.setItem('selectedGenre', this.state.selectedGenre);
    localStorage.setItem('selectedLanguage', this.state.selectedLanguage);
  };

  // Fetch books by title when search input changes
  onChangeSearchInput = async (event) => {
    const searchInput = event.target.value;
    this.setState({ searchInput, isLoading: true, error: null }, this.saveStateToLocalStorage);

    if (searchInput === '') {
      this.setState({ filteredBooks: this.state.booksList, isLoading: false });
      return;
    }

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchInput}`);
      const data = await response.json();

      if (data && data.docs && Array.isArray(data.docs)) {
        const newBooksList = data.docs.filter(book => book.title);
        this.setState({
          booksList: newBooksList,
          filteredBooks: newBooksList,
          isLoading: false
        });
        this.initializeFilters(newBooksList);
      } else {
        this.setState({
          booksList: [],
          filteredBooks: [],
          isLoading: false,
          error: 'No books found or invalid data structure.'
        });
      }
    } catch (error) {
      this.setState({ error: 'Failed to fetch books. Please try again later.', isLoading: false });
    }
  };

  // Handle changes in filter dropdowns (author, year, genre, language)
  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.applyFilters();
      this.saveStateToLocalStorage();
    });
  };

  // Apply selected filters
  applyFilters = () => {
    const { booksList, selectedAuthor, selectedYear, selectedGenre, selectedLanguage } = this.state;

    let filteredBooks = booksList;

    if (selectedAuthor) {
      filteredBooks = filteredBooks.filter(book => book.author_name && book.author_name.includes(selectedAuthor));
    }
    if (selectedYear) {
      filteredBooks = filteredBooks.filter(book => book.first_publish_year === parseInt(selectedYear));
    }
    if (selectedGenre) {
      filteredBooks = filteredBooks.filter(book => book.subject && book.subject.includes(selectedGenre));
    }
    if (selectedLanguage) {
      filteredBooks = filteredBooks.filter(book => book.language && book.language.includes(selectedLanguage));
    }

    this.setState({ filteredBooks });
  };

  render() {
    const {
      searchInput, isbnInput, filteredBooks, isLoading, error,
      authorsFilter, yearsFilter, genresFilter, languagesFilter,
      selectedAuthor, selectedYear, selectedGenre, selectedLanguage
    } = this.state;

    return (
      <div className="book-finder-container bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Book Finder</h1>

        {/* Title Search */}
        <div className="search-input-container flex items-center mb-4">
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon w-6 h-6 mr-2"
          />
          <input
            type="search"
            className="search-input w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for a book by title"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>

        {/* ISBN Search */}
        <div className="isbn-input-container flex items-center mb-4">
          <input
            type="text"
            className="isbn-input w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by ISBN"
            value={isbnInput}
            onChange={this.onChangeIsbnInput}
          />
        </div>

        {/* Filters */}
        <div className="filters-container flex gap-4 mb-6">
          <select
            name="selectedAuthor"
            value={selectedAuthor}
            onChange={this.handleFilterChange}
            className="filter-select p-3 rounded-md w-full"
          >
            <option value="">Select Author</option>
            {authorsFilter.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>

          <select
            name="selectedYear"
            value={selectedYear}
            onChange={this.handleFilterChange}
            className="filter-select p-3 rounded-md w-full"
          >
            <option value="">Select Year</option>
            {yearsFilter.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            name="selectedGenre"
            value={selectedGenre}
            onChange={this.handleFilterChange}
            className="filter-select p-3 rounded-md w-full"
          >
            <option value="">Select Genre</option>
            {genresFilter.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <select
            name="selectedLanguage"
            value={selectedLanguage}
            onChange={this.handleFilterChange}
            className="filter-select p-3 rounded-md w-full"
          >
            <option value="">Select Language</option>
            {languagesFilter.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        {/* Display Books */}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="books-list">
          {filteredBooks.map(book => (
            <BookItem key={book.key} book={book} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BookFinder;
