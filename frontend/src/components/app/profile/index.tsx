import { Link } from "react-router-dom";

import imgIcon from '../../../assets/undraw_reading_re_29f8.svg'

export default function Profile(){
  return(
    <section>
        <div className="flex justify-center  w-full h-16 bg-orange-200">
        <div className="flex ">
        <ul className="flex  items-center space-x-1  font-bold">
        <Link to="/app/profile">
          <li><a className="border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500 " >perfil</a></li>
          </Link>
          <Link to="/app/study" >
          <li><a className="border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500 " >estudos</a></li>
          </Link>
        </ul>
        </div>

        <div className="flex  translate-x-[500px] ">
          <div className="flex items-center">
          <p className=" i font-bold "><a>Logout</a></p>
          </div>
        </div>


      </div>

      <div className="  w-[500px] h-[600px] mt-10 ml-[450px]">

        <div className="flex justify-center">
         <img src={imgIcon} alt="" className='h-32 w-32' />
        </div>
        <div>

        <p className="flex font-bold  m-4 space-x-4">


        <a>nome:</a>
        <a>teste</a>

        </p>

        <p className="flex font-bold m-4 space-x-4">


        <a>email:</a>
        <a>teste</a>

        </p>

        <p className="flex font-bold  m-4 space-x-4">


        <a>idade:</a>
        <a>teste</a>

        </p>

        </div>


      </div>
    </section>
  )
}