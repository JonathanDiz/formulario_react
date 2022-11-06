import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <div className="formulario">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <form>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  className="form-control"
                  onChange={handleInputChange}
                ></input>
              </form>
              <div className="col-md-3">
                <form>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Escribe tu apellido"
                    className="form-control"
                    onChange={handleInputChange}
                  ></input>
                </form>
              </div>
              <div className="col-md-3">
                <form>
                  <button className="btn btn-primary" type="submit">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>{datos.nombre} - {datos.apellido}</h3>
    </Fragment>
  );
};

export default Formulario;
