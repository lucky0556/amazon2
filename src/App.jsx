import Home from  './pages/Home.jsx'
import Items from './pages/Items.jsx';
import Cart from './pages/Cart.jsx'
import Order from './pages/Order.jsx';
import Track from './pages/Track.jsx'
import './App.css';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Login from "./login/Login.jsx"
import Create from './login/Create.jsx';
import CounterContextProvider from "./context/CounterContextProvider.jsx"

function App()
{
  const router=createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/side' element={<Items/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path='/track' element={<Track/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create' element={<Create/>}/>
    </>
  
  )
  )

  return(
    <div>
      <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
    </div>

  )
}
export default App;