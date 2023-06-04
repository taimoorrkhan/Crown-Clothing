
import Home from './routes/home/Home';
import Navigation from './routes/Navigation/Navigation';
import Authentication from './components/authentication/Authentication';
import Shops from './routes/Shop/Shops';
import Checkout from './components/Checkout/Checkout';

import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shops />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
