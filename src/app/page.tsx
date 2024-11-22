"use client"
import {ListaPerguntas} from "@/app/listas/ListaPerguntas"
import { use, useState } from "react";


export default function page (){
  const [cor, setCor] = useState('');
  const [corErrada, setCorErrada] = useState('')

  function isTrue(validade:boolean, id:number){
      if(validade){
        setCor('#28d745');
      }else{
        setCorErrada('#d72836')
      }
  }

  

  return (
    <div className="h-screen w-screen bg-blue-400 flex justify-center items-center">
      <div className="w-[38rem] h-[38rem] bg-white text-gray-900 border-2 border-gray-900 rounded-xl">
        <div className="px-3 py-6 font-bold border-b-2 border-gray-900 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-t-xl leading-8">
          <h1 className="text-2xl">
            Quiz sobre League of Legends
            <br />
          </h1>
        </div>

        <div className="p-4">
          {ListaPerguntas.map((item) => (
            <div key={item.id} className="p-4 border border-gray-900 ">
              <h1 className="font-bold bg-gray-500 p-4 text-white text-xl">{item.pergunta}</h1>
              <ul className="flex flex-col gap-4 mt-8">
                {item.respostas.map(item => (
                  <li key={item.id} onClick={() => isTrue(item.validade, item.id)} style={{backgroundColor:`${item.validade === true ? `${cor}` : `${corErrada}`}`}} className="transition-colors duration-600 hover:bg-slate-200 p-3 border border-gray-700 ">{item.nome}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}