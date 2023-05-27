
import Home from './routes/home/Home';
import Navigation from './routes/Navigation/Navigation';
import Authentication from './components/authentication/Authentication';



import { Route, Routes } from 'react-router-dom';
const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

      </Route>
    </Routes>
  );
}

export default App;
