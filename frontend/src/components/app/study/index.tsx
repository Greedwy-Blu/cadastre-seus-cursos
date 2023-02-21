import { Link } from "react-router-dom";

export default function Study() {
  return (
    <section>
      <div className="flex justify-center  w-full h-12 bg-orange-200">
        <div className="flex ">
          <ul className="flex  items-center space-x-1  font-bold">
            <Link to="/app/profile">
              <li>
                <a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500">
                  perfil
                </a>
              </li>
            </Link>
            <Link to="/app/study">
              <li>
                <a className="bg-red-200 h-10 w-11 p-2  hover:bg-red-500">
                  estudos
                </a>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex  translate-x-[500px] ">
          <div className="flex items-center">
            <p className=" i font-bold ">
              <a>Logout</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 m-8">
        <div className="flex items-center space-x-3 font-bold">
          <p>
            <a className="text-2xl">CURSO</a>
          </p>
          <p className="border-t-2 w-5/6  border-orange-900"></p>
        </div>
        <div className="h-full">
          <div className="grid grid-cols-3 gap-4  ">
            <div className=" bg-slate-500 mx-8  h-[400px] w-[400px]">
              <div id="curso"></div>

              <div id="instuição"></div>

              <div id="Cordenador"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 m-8">
        <div className="flex items-center space-x-3 font-bold">
          <p className="border-t-2 w-5/6  border-orange-900"></p>

          <p>
            <a className="text-2xl">ANOTAÇÕES</a>
          </p>
        </div>

        <div className="h-full">
          <div className="grid grid-cols-3 gap-4  ">
            <div className=" bg-slate-500 mx-8  h-[400px] w-[400px]">
              <div id="title"></div>

              <div id="conteudo"></div>

              <div id="descrição"></div>

              <div id="materia"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
