import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import SearchForm from './components/SearchForm';
import BookCard from './components/BookCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Whats Your favorite Author most famous for?</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
