import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import BookFinder from './components/BookFinder'; // Assuming this is your book list/search page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookFinder />} />
        <Route path="/book" element={<BookDetails />} /> {/* Book Details Page without dynamic ID */}
      </Routes>
    </Router>
  );
}

export default App;
