import imgRegister from '../../assets/Open Doodles - Reading.png'
export default function Register(){
  return(
    <section className="">
      <div className='m-2 flex justify-center'>
        <img src={imgRegister} alt="" className='h-[300px] w-[400px] bg-slate-100' />
      </div>
    <div  className="flex justify-center" >
      <form className="md:w-[700px] sm:w-full ">
        <div className="text-sm text-gray-500 pt-2 w-full">
          <p className="m-1">
            <a className="text-slate-900 font-bold">

            NOME

            </a>
          </p>
          <input
            type="text"
            className="w-full h-10 bg-orange-100 border-none"
            placeholder="nome"
          />
        </div>

        <div className="text-sm text-gray-500 pt-2 w-full">

        <p className="m-1">
            <a className="text-slate-900 font-bold">

            EMAIL

            </a>
          </p>


       <input
         type="email"
         className="w-full h-10 bg-orange-100 border-none"
         placeholder="email"
        />
        </div>

        <div className="text-sm text-gray-500 pt-2 w-full">

        <p className="m-1">
            <a className="text-slate-900 font-bold">

            SENHA

            </a>
          </p>


          <input type="text"

         className="w-full h-10 bg-orange-100 border-none"
         placeholder="senha"
         />
        </div>

        <div className="text-sm text-gray-500 pt-2 w-full">

        <p className="m-1">
            <a className="text-slate-900 font-bold">

            IDADE

            </a>
          </p>


          <input type="text"

         className="w-full h-10 bg-orange-100 border-none"
         placeholder="idade"
          />
        </div>
        <div className="md:m-5 md:ml-[300px]  ">
        <button className="w-24 h-10 mt-5
        bg-red-400  hover:bg-red-500 font-bold">
                      enviar
                    </button>
        </div>
      </form>
    </div>
  </section>
  )
}