import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

export default function Study() {
   let [isOpen1, setIsOpen1] = useState(false);
    function closeModal() {
    setIsOpen1(false);
  }

  function openModal() {
    setIsOpen1(true);
  }

  let [isOpen2, setIsOpen2] = useState(false);
    function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  return (
    <section>

         <Transition appear show={isOpen1} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-full max-h-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-orange-300 shadow-lg rounded-sm ">
                <Dialog.Title as="h3" className="">
                  <div className="flex">
                    <div className="text-lg font-medium text-black ">
                      <a>Cadastrar curso</a>
                    </div>

                    <div className="ml-auto">
                      <button
                        type="button"
                        className="text-black font-extrabold"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </Dialog.Title>

                <div className="mt-2 border-t w-full border-red-900">
                  <form>
                    <p className="text-sm pt-2 w-full  text-slate-900">
                      <input
                        type="text"
                        className="w-full h-10  placeholder:text-black placeholder:font-bold bg-red-300 border-none"
                        placeholder="curso"

                      />
                    </p>

                    <p className="text-sm pt-2">
                      <input
                        type="text"
                        className="w-full  h-10 placeholder:text-black placeholder:font-bold bg-red-300 border-none"
                        placeholder="instuição"

                      />
                    </p>

                    <p className="text-sm pt-2">
                      <input
                        type="text"
                        className="w-full  h-10 placeholder:text-black placeholder:font-bold bg-red-300 border-none"
                        placeholder="Cordenador"

                      />
                    </p>

                    <p className="flex justify-end space-x-4 mt-3">
                      <button
                        className="w-24 h-7 text-black font-bold bg-amber-300"
                        onClick={closeModal2}
                      >
                        Cancel
                      </button>
                      <button className="w-24 h-7 7 text-black font-bold bg-amber-300 ">
                        enviar
                      </button>
                    </p>




                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>


      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal2}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-full max-h-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-orange-300 shadow-lg rounded-sm ">
                <Dialog.Title as="h3" className="">
                  <div className="flex">
                    <div className="text-lg font-medium text-black ">
                      <a>Cadatrar curso</a>
                    </div>

                    <div className="ml-auto">
                      <button
                        type="button"
                        className="text-black font-extrabold"
                        onClick={closeModal2}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </Dialog.Title>

                <div className="mt-2 border-t w-full border-red-900">
                  <form>
                    <p className="text-sm pt-2 w-full  text-slate-900">
                      <input
                        type="text"
                        className="w-full h-10  placeholder:text-black placeholder:font-bold bg-red-300 border-none"
                        placeholder="titulo"

                      />
                    </p>

                    <p className="text-sm pt-2">
                      <input
                        type="text"
                        className="w-full  h-10 placeholder:text-black placeholder:font-bold bg-red-300 border-none"
                        placeholder="materia"

                      />
                    </p>

                    <p className="text-sm pt-2 w-full">
                      <textarea
                        className="w-full  h-40 placeholder:text-black placeholder:font-bold bg-red-300 border-none "
                        placeholder="anotação"

                      />
                    </p>

                    <p className="flex justify-end space-x-4 mt-3">
                      <button
                        className="w-24 h-7 text-black font-bold bg-amber-300"
                        onClick={closeModal2}
                      >
                        Cancel
                      </button>
                      <button className="w-24 h-7 7 text-black font-bold bg-amber-300 ">
                        enviar
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>


      <div className="flex justify-center  w-full h-16 bg-orange-200">
        <div className="flex ">
          <ul className="flex  items-center space-x-1  font-bold">
            <Link to="/app/profile">
              <li>
                <a className=" border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500">
                  perfil
                </a>
              </li>
            </Link>
            <Link to="/app/study">
              <li>
                <a className="border-b-2 border-transparent h-10 w-11 p-2  hover:border-red-500 ">
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

      <div className="flex justify-end m-6 space-x-6 items-center">

       <p className="font-bold h-12 w-24  text-center  bg-red-300 hover:bg-red-400 shadow" onClick={openModal} > <a>Cadastrar Curso</a></p>
        <p className="font-bold h-12 w-24  text-center  bg-red-300  hover:bg-red-400 shadow" onClick={openModal2}><a>Anotar tarefa</a></p>

      </div>


      <div className="mt-20 m-8">
        <div className="flex items-center space-x-3 font-bold">
          <p>
            <a className="text-2xl">CURSO</a>
          </p>
          <p className="border-t-2 w-5/6  border-orange-900"></p>
        </div>
        <div className="h-full mt-4">
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

        <div className="h-full mt-4">
          <div className="grid grid-cols-3 gap-4  ">
            <div className=" bg-slate-500 mx-8  h-[400px] w-[400px]">
              <div id="title"></div>


              <div id="materia"></div>


              <div id="descrição"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
