import { Link } from "react-router-dom";

export default function Profile(){
  return(
    <section>
        <div className="flex justify-center w-full h-16 bg-orange-200">
        <ul className="flex space-x-1 m-5">
        <Link to="/app/profile">
          <li><a className="bg-red-300 h-10 w-11 p-2 hover:bg-red-500" >perfil</a></li>
          </Link>
          <Link to="/app/study" >
          <li><a className="bg-red-300 h-10 w-11 p-2  hover:bg-red-500" >materias</a></li>
          </Link>
        </ul>
      </div>
      <div>
        <a>aaabbb</a>
      </div>
    </section>
  )
}