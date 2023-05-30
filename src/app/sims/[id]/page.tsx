import React from 'react'

export default function page({params}: any) {
  const { id } = params
  return (
    <div>Esto es un sim {id}</div>
  )
}
