"use client";
import Swal from "sweetalert2";
import React, { useState } from "react";

const IndexPage = ({ update }: any) => {

  const [formData, setFormData] = useState({
    numero: 0,
    numerosim: 0,
    puk: "",
    sim: 0,
    cliente: "",
    numerodetelefono: 0,
    fechainicio: "",
    vencimiento: "",
    correo: "",
    valor: 0,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("http://chileaccesorios.com/api/chips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        Swal.fire(
          'Ingresado correctamente',
          '',
          'success'
        )
        update();
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
  return (
    <div className=" ml-auto w-4/4">
      <form onSubmit={handleSubmit} className="w-full mt-20">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="numero" className="block">
              Numero:
            </label>
            <input
              type="number"
              id="numero"
              name="numero"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="numerosim" className="block">
              Numero SIM:
            </label>
            <input
              type="number"
              id="numerosim"
              name="numerosim"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="puk" className="block">
              PUK:
            </label>
            <input
              type="text"
              id="puk"
              name="puk"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="sim" className="block">
              SIM:
            </label>
            <input
              type="number"
              id="sim"
              name="sim"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 border-cyan-200">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="cliente" className="block">
              Cliente:
            </label>
            <input
              type="text"
              id="cliente"
              name="cliente"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="numerodetelefono" className="block">
              Numero de telefono:
            </label>
            <input
              type="number"
              id="numerodetelefono"
              name="numerodetelefono"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="fechainicio" className="block">
              Fecha inicio:
            </label>
            <input
              type="date"
              id="fechainicio"
              name="fechainicio"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="vencimiento" className="block">
              Vencimiento:
            </label>
            <input
              type="date"
              id="vencimiento"
              name="vencimiento"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 border-cyan-200">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="correo" className="block">
              Correo:
            </label>
            <input
              type="mail"
              id="correo"
              name="correo"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label htmlFor="valor" className="block">
              Precio:
            </label>
            <input
              type="money"
              id="valor"
              name="valor"
              onChange={handleChange}
              className="border text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default IndexPage;
