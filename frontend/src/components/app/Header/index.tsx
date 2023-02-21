import { Link, Route } from "react-router-dom";
import imgApp from '../../../assets/Learning-amico.svg'


export function HeaderApp(){
  return(
    <section className="">
      <div className="flex justify-center  w-full h-16 bg-orange-200">
        <div className="flex ">
        <ul className="flex  items-center space-x-1  font-bold">
        <Link to="/app/profile">
          <li><a className="border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500" >perfil</a></li>
          </Link>
          <Link to="/app/study" >
          <li><a className="border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500" >estudos</a></li>
          </Link>
        </ul>
        </div>

        <div className="flex  translate-x-[500px] ">
          <div className="flex items-center">
          <p className=" i font-bold "><a>Logout</a></p>
          </div>
        </div>


      </div>
      <div className="flex justify-center items-center">

        <img src={imgApp} alt="" className="w-[500px]"/>
        <p className=" font-bold">
          <a className="flex items-center  text-2xl">BEM-VINDO</a>
          <a className="text-xl  ml-4">começe a organizar a seus estudos! </a>

          </p>

      </div>
    </section>
  )
}