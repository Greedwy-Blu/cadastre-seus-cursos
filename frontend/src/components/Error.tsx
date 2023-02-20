import imgError from '../assets/error.png'
export default function Error(){

  return(
    <section className="">
      <div className="flex justify-center mt-52">
      <p className="text-5xl">ERROR 404 : PAGÍNA  NÃO ENCONTRADA</p>
      </div>
      <div className='flex justify-center mt-10'>
      <img src={imgError} alt="" className='h-24 w-34' />
      </div>
    </section>
  )

}