import './App.scss';
import CollectionPage from './pages/collectionpage/collectionpage.component';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ProductPage from './pages/productpage/productpage.component';


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/collection/:collectionType" component={CollectionPage} />
        <Route exact path="/shop/products/:productId" component={ProductPage} />

     </Switch> 
     <Footer/>
    </div>
  );
}

export default App;
