import React from 'react'

const handleChange = () => {};

export default function Inputtype(type: string) {
  return (
    <input type={type} id="sim" name="sim" onChange={handleChange} className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full" />
  )
}
