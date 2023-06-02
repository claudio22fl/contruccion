'use client'
import { formatDate } from '@/app/utils/format-date'
import Link from 'next/link'
import React, { useState } from 'react'


export default  function Tablachips({posts}: any) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const totalPages = Math.ceil(posts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = posts.slice(startIndex, endIndex)

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }

  const handleItemsPerPageChange = (e: { target: { value: string } }) => {
    setItemsPerPage(parseInt(e.target.value))
    setCurrentPage(1) // Reiniciar la página actual al cambiar la cantidad de elementos por página
  }

    return (
      <div className='container mx-auto mt-10'>
        <div className='flex items-center mb-4'>
          <label htmlFor='itemsPerPage' className='mr-2'>
            Mostrar por página:
          </label>
          <select
            id='itemsPerPage'
            name='itemsPerPage'
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className='border text-slate-950 border-gray-300 px-2 py-1 rounded'
        >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <table className='min-w-full border-gray-300'>
          <thead
            className='border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600'>
            <tr>
              <th className='py-2 text-xs px-3 border-b'>id</th>
              <th className='py-2 text-xs px-3 border-b'>Numero</th>
              <th className='py-2 text-xs px-4 border-b'>Numero SIM</th>
              <th className='py-2 text-xs px-4 border-b'>PUK</th>
              <th className='py-2 text-xs px-4 border-b'>SIM</th>
              <th className='py-2 text-xs px-4 border-b'>Cliente</th>
              <th className='py-2 text-xs px-4 border-b'>Numero de telefono</th>
              <th className='py-2 w-20 text-xs px-4 border-b'>Fecha inicio</th>
              <th className='py-2 text-xs px-4 border-b'>Vencimiento</th>
              <th className='py-2 text-xs px-4 border-b'>Correo</th>
              <th className='py-2 text-xspx-4 border-b'>Precio</th>
              <th className='py-2 text-xs px-4 border-b'>MG</th>
              <th className='py-2 text-xs px-4 border-b'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(({id ,numero,numerosim,puk,sim,cliente,numerodetelefono,fechainicio,vencimiento,correo,valor}: any) => (
              <tr key={id as string}
                className='border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700'>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>{id}</td>
                <td className='py-2 text-xs px-4 border-b'>{numero}</td>
                <td className='py-2 text-xs px-4 border-b'>{numerosim}</td>
                <td className='py-2 text-xs px-4 border-b'>{puk}</td>
                <td className='py-2 text-xs px-4 border-b'>{sim}</td>
                <td className='py-2 text-xs px-4 border-b'>{cliente}</td>
                <td className='py-2 text-xs px-4 border-b'>{numerodetelefono}</td>
                <td className='py-2 text-xs px-4 border-b'>{formatDate(fechainicio)}</td>
                <td className='py-2 text-xs px-4 border-b'>{formatDate(vencimiento)}</td>
                <td className='py-2 text-xs px-4 border-b'>{correo}</td>
                <td className='py-2 text-xs px-4 border-b'>{valor}</td>
                <td className='py-2 text-xs px-4 border-b'>{valor}</td>
                <td className='py-4 text-m  px-4 border-b flex space-x-2.5'>
                  <button><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8 text-green-500 rounded-sm'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
                  </svg>
                  </button>
                  <Link href={`/sims/${id}`}><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8 text-yellow-500'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                  </svg>
                  </Link>
                  <button><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8 text-red-500'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                  </svg>
                  </button>
                </td>
              </tr>
                    ))}
          </tbody>
        </table>
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    className={`py-2 px-4 mx-1 rounded ${
                    index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                  }`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                  </button>
                </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    )
}
