import './App.css';
import CollectionPage from './pages/collectionpage/collectionpage.component';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/collection/:collectionType" component={CollectionPage} />
     </Switch> 
    </div>
  );
}

export default App;
