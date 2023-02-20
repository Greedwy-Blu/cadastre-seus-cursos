import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import Login from './components/login';
import Register from './components/register';
import Error from './components/Error';
import Study from './components/app/study';
import Profile from './components/app/profile';



export default function  Routers(){
  return(
    <BrowserRouter>

<Routes>

                    <Route path="/" element={<HomePage/>}/>
                    <Route path="Home/login" element={<Login/>}/>
                    <Route path="Home/register" element={<Register/>}/>
                    <Route path="app/study" element={<Study/>}/>
                    <Route path="app/profile" element={<Profile/>}/>
                    <Route path='*' element={<Error/>} />

               </Routes>



    </BrowserRouter>
  )
}