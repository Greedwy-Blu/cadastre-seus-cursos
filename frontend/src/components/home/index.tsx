import { Link } from 'react-router-dom'
import imgHome from '../../assets/undraw_knowledge_re_5v9l.svg'
export default function HomePage(){
return(
  <section className='grid justify-items-center w-[900px] h-[500px]'>
    <div className='flex items-center translate-x-28'>

    <div className=''>
      <p className='h-48 w-[500px]'>
        <a className="text-center text-3xl ">

          Organizes as suas grades, o controle o seus estudos, melhorando a sua eficaz.

        </a>
      </p>
      <p className='flex space-x-4 text-center font-bold '>
        <Link to="Home/register">
        <a className='h-8 w-16 p-2 bg-red-400  hover:bg-red-500'>register</a>
        </Link>
        <Link to="Home/login">
        <a className='h-8 w-16 p-2 bg-red-400  hover:bg-red-500'>login</a>
        </Link>
      </p>
    </div>

    <div className=''>
      <img src={imgHome} alt="" className='h-[500px] w-[800px]' />
    </div>

    </div>

  </section>
)
}