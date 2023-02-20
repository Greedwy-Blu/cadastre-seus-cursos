import imgHome from '../../assets/undraw_knowledge_re_5v9l.svg'
export default function HomePage(){
return(
  <section className='grid justify-items-center w-[900px] h-[500px]'>
    <div className='flex items-center translate-x-28'>

    <div className=''>
      <p className='h-48 w-[500px]'>
        <a className="text-center text-3xl ">

          Organizes as suas grades, o controle o seus estudos, melhorando a sua eficaz e

        </a>
      </p>
    </div>

    <div className=''>
      <img src={imgHome} alt="" className='h-[500px] w-[800px]' />
    </div>

    </div>

  </section>
)
}