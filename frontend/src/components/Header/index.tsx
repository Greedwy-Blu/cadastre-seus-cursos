
import imgIcon from '../../assets/undraw_reading_re_29f8.svg'
export default function Header(){
  return(
    <header>
      <div className="flex justify-center items-center bg-orange-500 w-full h-16">


      <img src={imgIcon} alt="" className='h-12 w-12' />

        <a className="text-lg font-bold">organize suas aulas</a>

      </div>
    </header>
  )
}