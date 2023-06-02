"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import Tablachips from "../component/sims/Tablachips";
import "./sims.module.css";
import Formulariosims from "../component/sims/Formulariosims";

export default function page() {
  const [posts, setPostdata] = useState([]);

  const fetchsims = async () => {
    const response = await fetch("https://chileaccesorios.com/api/chips", {
      cache: "no-store",
      mode: "cors",
    });
    const json = await response.json();
    if (json.length > 0) {
      setPostdata(json);
    }
  };

  useEffect(() => {
    fetchsims();
  }, []);

  return (
    <div className=" ml-14 w-11/12">
      <div className=" mt-10 text-3xl">
        <h1>Agregar SIM</h1>
      </div>
      <Formulariosims refreshTable={fetchsims} />
      <Suspense fallback={<p>Cargando chips</p>}>
        <Tablachips posts={posts} refreshTable={fetchsims} />
      </Suspense>
    </div>
  );
}
