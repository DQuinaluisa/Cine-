import React, { Component } from 'react'



export default class Titulo extends Component {
    render() {
        return (


            <div class="flex flex-col ">
                <div class="text-gray-700 text-center"></div>
                <div class="text-gray-700  bg-gray-400 px-40 py-2 m-5">
                    <div class= "bg-white shadow-md rounded px-10 pt-6 pb-10 mb-4 flex flex-col my-4">
                        <div class="-mx-3 md:flex mb-6" >
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                TITULO PELICULA
                            </label>
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Ingrese Titulo"/>
                            </div>
                            <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                GENERO
                            </label>
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Ingrese Genero"/>
                            </div>
                        </div>
                        <div class="box border rounded flex flex-col shadow bg-white">
                             <div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">SINOPSIS</h3></div>
                                 <textarea placeholder="Sinopsis de la Pelicula" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent"></textarea>
                        </div>
                        <div class="flex justify-between ">
                            <div class="text-gray-700  px-4 py-2 m-0"></div>
                            <div class="text-gray-700   px-4 py-2 m-2">
                                <div class="max-w-md rounded overflow-hidden shadow-lg my-5">
                                    <img class="w-full" src="https://bolavip.com/__export/1570123241615/sites/bolavip/img/2019/10/03/heath_ledger_1.jpeg_1693159006.jpeg" alt="Sunset in the mountains"></img>
                                </div>
                            </div>
                            <div class="text-gray-700  px-4 py-2 m-0">     
                            </div>
                        </div>
                        <div class="flex justify-between ">
                            <div class="text-gray-700 px-4 py-2 m-0"></div>
                            <div class="text-gray-700  px-4 py-2 m-2">
                            <button class="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded">
                                Enviar
                            </button>
                            </div>
                            <div class="text-gray-700  px-4 py-2 m-0"></div>
                        </div>
                        
                    </div> 
                    
                </div>
                <div class="text-gray-700 px-4 py-2 m-0 ">
                </div>
               
            </div>



                );
            }
        }
