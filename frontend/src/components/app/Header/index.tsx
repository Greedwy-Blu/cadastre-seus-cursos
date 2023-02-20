import { Link, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Study from "../study";
import Profile from "../profile";



export function HeaderApp(){
  return(
    <section>
      <div className="flex justify-center w-full h-12 bg-orange-200">
      <ul className="flex space-x-1 m-5">
        <Link to="/app/profile">
          <li><a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500" >perfil</a></li>
          </Link>
          <Link to="/app/profile" >
          <li><a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500" >materias</a></li>
          </Link>
        </ul>
      </div>
    </section>
  )
}