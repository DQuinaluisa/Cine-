import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (

            <header>
                <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                    <div class="mb-2 sm:mb-0">
                        <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"> PELICULAS TEC +</a>
                    </div>
                    <div>
                        <a href="/peliculas" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">INFORME PELICULAS</a>
                        <a href="/create/salas" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">SALAS</a>
                        <a href="/salas" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">INFORME SALAS</a>
                        <a href="/getInfo" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">INFORME</a>
                    </div>
                </nav>
            </header>
        )
    }
}
