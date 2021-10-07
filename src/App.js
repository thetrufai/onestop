import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Menubar from './components/Menubar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { db, auth } from './components/firebase'
import Login from './components/Login';
import styled from 'styled-components'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [ cartItems, setCartItems ] = useState( [] );

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()

      }))

      setCartItems(tempItems);
    })
  }
  
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
    
  }

  useEffect(() => {
    getCartItems();
  }, [])

   return (

     <Router>
       
       {
         !user ? (
           <Login setUser={setUser} />
           
         ) : (
       
           <Container>
               <Header
                 signOut={signOut}
                 user={user}
                 cartItems={cartItems} />
             <Menubar />

             <Switch>
           
               <Route path='/login'>
                 <Login setUser={setUser} />

               </Route>
     
               <Route path='/cart'>
                 <Cart cartItems={cartItems} />
               </Route>
          
               <Route path='/'>
                 <Home />
               </Route>

             </Switch>

           </Container>
         )
       }
    </Router>
  );
}

const Container = styled.div``
export default App;
