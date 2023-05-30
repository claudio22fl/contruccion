import React, { Suspense } from 'react'
import Tablachips from '../component/sims/Tablachips'
import './sims.module.css'
import Formulariosims from '../component/sims/Formulariosims'

const fetchsims = async() => {
  return fetch('http://chileaccesorios.com/chips.php', { cache: 'no-store' })
    .then((res) => res.json())
}

export default async function page() {
  const posts = await fetchsims()
  return (
    <div className=' ml-14 w-3/4 '>
      <Formulariosims />
      <Suspense fallback={<p>Cargando chips</p>}>
        <Tablachips posts={posts} />
      </Suspense>
    </div>
  )
}
