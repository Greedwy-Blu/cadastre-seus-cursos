import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import Login from './components/login';
import Register from './components/register';
import Error from './components/Error';



export default function  Routers(){
  return(
    <BrowserRouter>

<Routes>

                    <Route path="/" element={<HomePage/>}/>
                    <Route path="Home/login" element={<Login/>}/>
                    <Route path="Home/register" element={<Register/>}/>
                    <Route path='*' element={<Error/>} />

               </Routes>



    </BrowserRouter>
  )
}