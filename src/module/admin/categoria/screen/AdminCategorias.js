import React, { useEffect, useState } from "react";
import { getCategoria} from "../../../../services/categoria";
import CategoriaFormulario from "../components/CategoriaFormulario";
import AdminHeader from "../components/AdminHeader";
import CategoriaTabla from "../components/CategoriaTabla"

const AdminCategorias = () => {
  const [dato, setDato] = useState([]);
  const [modo, setModo] = useState("crear");
  const [categ, setCateg] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerCategoria = () => {
    getCategoria().then((respuesta) => {
      setDato(respuesta);
    });
    setLoading(false);
  };
  useEffect(() => {
    obtenerCategoria();
  }, []);

  return (
    <>
    <AdminHeader/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <CategoriaFormulario
            dato={dato}
            obtenerCategoria={obtenerCategoria}
            modo={modo}
            setModo={setModo}
            categ={categ}
            setCateg={setCateg}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <CategoriaTabla
            dato={dato}
            obtenerCategoria={obtenerCategoria}
            modo={modo}
            setModo={setModo}
            categ={categ}
            setCateg={setCateg}
            loading={loading}
          />
        </div>
      </div>
    </div>
    </>

  );
};

export default AdminCategorias;
