import React from 'react'
import Swal from 'sweetalert2'

function click(id: number, refreshTable: () => void){
  Swal.fire({
    title: 'Esta seguro?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar!',
    cancelButtonText: 'cancelar'
  }).then(async (result) => {
    if (result.isConfirmed) {
       try {
        console.log(id)
        const response = await fetch(`https://chileaccesorios.com/api/chips/${id}`, { method: 'DELETE'})
        if (response.ok) {
          Swal.fire(
            'Ingresado correctamente',
            '',
            'success'
          )
          refreshTable()
        } else {
          Swal.fire(
            'Error al ingresar',
            '',
            'error'
          )
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  })
 } 


export const deletesims = (id : number, refreshTable: () => void) => {
  return (
    click(id, refreshTable)
  )
}
