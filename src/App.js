import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {  
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store}  />} />

        <Route path='/profile'
          render={() => <Profile store={props.store} />}/>

        <Route path='/users'
          render={() => <UsersContainer  />  }/>
      </div>

    </div>


  );
}




export default App;
