'use client'

import React, { useState } from 'react'

const IndexPage = () => {
    const [formData, setFormData] = useState({
        numero:  '',
        numerosim:  '',
        puk:  '',
        sim: '',
        cliente:  '',
        numerotelefono:  '',
        fechainicio: '',
        vencimiento: '',
        correo: '',
        precio: '',
        mg: ''
    })

const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
        const response = await fetch('http://chileaccesorios.com/chips.php', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
         console.log(response)
        if (response.ok) {
            // La petición se realizó correctamente
            console.log('Datos enviados correctamente')
        } else {
            // La petición falló
            console.log('Error al enviar los datos')
        }
    } catch (error) {
        console.log('Error:', error)
    }
}
return (
  <div className=' ml-auto w-4/4'>
    <form onSubmit={handleSubmit} className='w-full mt-20'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='numero' className='block'>Numero:</label>
          <input type='number' id='numero' name='numero' value={formData.numero} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='numerosim' className='block'>Numero SIM:</label>
          <input type='number' id='numerosim' name='numerosim' value={formData.numerosim} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='puk' className='block'>PUK:</label>
          <input type='text' id='puk' name='puk' value={formData.puk} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='sim' className='block'>SIM:</label>
          <input type='number' id='sim' name='sim' value={formData.sim} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
      </div>

      <div className='flex flex-wrap -mx-3 mb-6 border-cyan-200'>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='cliente' className='block'>Cliente:</label>
          <input type='text' id='cliente' name='cliente' value={formData.cliente} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='numerotelefono' className='block'>Numero de telefono:</label>
          <input type='number' id='numerotelefono' name='numerotelefono' value={formData.numerotelefono} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='fechainicio' className='block'>Fecha inicio:</label>
          <input type='date' id='fechainicio' name='fechainicio' value={formData.fechainicio} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='vencimiento' className='block'>Vencimiento:</label>
          <input type='date' id='vencimiento' name='vencimiento' value={formData.vencimiento} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
      </div>

      <div className='flex flex-wrap -mx-3 mb-6 border-cyan-200'>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='correo' className='block'>Correo:</label>
          <input type='mail' id='correo' name='correo' value={formData.correo} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='precio' className='block'>Precio:</label>
          <input type='money' id='precio' name='precio' value={formData.precio} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
          <label htmlFor='mg' className='block'>MG:</label>
          <input type='number' id='mg' name='mg' value={formData.mg} onChange={handleChange} className='border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full' />
        </div>
      </div>
      <div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Enviar
        </button>
      </div>
    </form>
  </div>
)
}

export default IndexPage
