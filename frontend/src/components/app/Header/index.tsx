import { Link, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Study from "../study";
import Profile from "../profile";



export function HeaderApp(){
  return(
    <section className="">
      <div className="flex justify-center  w-full h-12 bg-orange-200">
        <div className="flex ">
        <ul className="flex  items-center space-x-1  font-bold">
        <Link to="/app/profile">
          <li><a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500" >perfil</a></li>
          </Link>
          <Link to="/app/study" >
          <li><a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500" >estudos</a></li>
          </Link>
        </ul>
        </div>

        <div className="flex  translate-x-[500px] ">
          <div className="flex items-center">
          <p className=" i font-bold "><a>Logout</a></p>
          </div>
        </div>


      </div>
    </section>
  )
}