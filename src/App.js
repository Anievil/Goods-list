import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GoodPage from './pages/GoodPage/GoodPage'
import Authorization from './pages/Authorization/Authorization'
import Header from './components/Header/Header'
import Catalog from './pages/Catalog(main)/Catalog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Catalog} />
        <Route exact path='/product/:id' component={GoodPage} />
        <Route exact path='/authorization' component={Authorization} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
