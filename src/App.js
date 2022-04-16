import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUP/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SingleMeals from './Pages/SingleMeals/SingleMeals';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={ <Home></Home> }></Route>
          <Route path='/home' element={ <Home></Home> }></Route>
          <Route path='/cart' element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={ <SignUp></SignUp> } ></Route>
          <Route path='/singleMeals' element={<SingleMeals></SingleMeals>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
