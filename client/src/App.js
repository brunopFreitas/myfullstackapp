import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Register from './components/Register';
import CreatePokemon from './components/CreateForm';
import EditPokemon from './components/EditForm';
import ProtectedRoutes from './ProtectedRoutes'
import './css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import authService from './services/authService';



const App = () => {

  const [authUser, setAuthUser] = useState(authService.isAuthenticated())
 
  const updateNav = () => {
    setAuthUser(authService.isAuthenticated())
  }

    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar authUser={authUser} updateNav={updateNav}/>
          <div id="main-content">
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/signin' element={<SignIn updateNav={updateNav}/> }/>
              <Route element={<ProtectedRoutes/>}>
                <Route path='/create' element={<CreatePokemon />}/>
                <Route path='/update/:id' element={<EditPokemon />}/>
              </Route>
              <Route path='/register' element={<Register />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
}
const NotFound = () =>{
  return <h1>Not Found</h1>
}

export default App;
