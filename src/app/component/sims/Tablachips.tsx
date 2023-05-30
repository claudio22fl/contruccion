import React from 'react'

export default  function Tablachips({posts}: any) {
    return (
      <div className=''>
        <table className=' w-3/4 mt-20'>
          <thead
            className='border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600'>
            <tr>
              <th scope='col' className='px-6 py-4'>id</th>
              <th scope='col' className='px-6 py-4'>Numero</th>
              <th scope='col' className='px-6 py-4'>Numero SIM</th>
              <th scope='col' className='px-6 py-4'>PUK</th>
              <th scope='col' className='px-6 py-4'>SIM</th>
              <th scope='col' className='px-6 py-4'>Cliente</th>
              <th scope='col' className='px-6 py-4'>Numero de telefono</th>
              <th scope='col' className='px-6 py-4'>Fecha inicio</th>
              <th scope='col' className='px-6 py-4'>Vencimiento</th>
              <th scope='col' className='px-6 py-4'>Correo</th>
              <th scope='col' className='px-6 py-4'>Precio</th>
              <th scope='col' className='px-6 py-4'>MG</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; numero: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; numerosim: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; puk: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; sim: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; cliente: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; numerodetelefono: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; fechainicio: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; vencimiento: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; correo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; valor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => (
                        // eslint-disable-next-line react/jsx-key
              <tr
                className='border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700'>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>{post.id}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.numero}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.numerosim}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.puk}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.sim}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.cliente}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.numerodetelefono}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.fechainicio}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.vencimiento}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.correo}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.valor}</td>
                <td className='whitespace-nowrap px-6 py-4'>{post.valor}</td>
              </tr>
                    ))}
          </tbody>
        </table>
      </div>
    )
}
