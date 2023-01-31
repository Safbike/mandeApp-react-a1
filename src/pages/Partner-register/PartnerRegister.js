import "./css/pregister-css.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; //importamos react

function PartnerRegister() {
  //funcion que guarda el contenido de los inputs usando react
  const [caption, setRegister] = useState({
    primer_nombre: "",
    primer_apellido: "",
  });

  //captura el evento para el boton de registrarse
  const partnerSubmit = async (e) => {
    //evita que se envie a otra pagina
    e.preventDefault();

    /*guardamos informacion del objeto en result, fetch es una funcion para enviar los datos a la direccion que le demos,
    luego configuramos por medio de un objeto el metodo que queremos usar, transformando el objeto json a un string*/
    const res = await fetch("http://localhost:4000/insertData", {
      method: "POST",
      body: JSON.stringify(caption),
      headers: { "Content-Type": "application/json" },
    });

    //contiene los datos netos de la solicitud
    const data = await res.json();
    console.log(data);
  };

  //aqui tenemos los valores capturados y enviados al useState
  const lookRequest = (e) => {
    //primero copia todo lo que hayamos ingresado, luego captura lo que puse en los respectivos campos 'name', con los respectivos valores escritos
    setRegister({ ...caption, [e.target.name]: e.target.value });
  };

  return (
    <div className="hold-transition register-page mande-background">
      <div className="pregister-box">
        <div className="card">
          <div className="card-body pregister-card-body">
            <div className="register-logo">
              <h2>
                <b>Crea una cuenta como colaborador</b>
              </h2>
            </div>

            <form
              onSubmit={partnerSubmit}
              /*onSubmit ejecuta la funcion contenida*/ action="../../index.html"
              method="post"
            >
              <div className="input-group mb-3">
                <input
                  name="primer_nombre" //nombramos los input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  onChange={lookRequest} //cada cambio que se haga en tiempo real ejecuta la funcion contenida
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  name="primer_apellido"
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  onChange={lookRequest}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Celular"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repetir contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <select className="form-control" name="selectedjob">
                  <option value="" disabled selected>
                    Seleccione un oficio
                  </option>
                  <option value="carpintero">Carpintero</option>
                  <option value="plomero">Plomero</option>
                  <option value="electrisista">Electrisista</option>
                  <option value="jardinero">Jardinero</option>
                  <option value="paseadorDePerros"> Paseador de perros</option>
                  <option value="dealer"> Dealer</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="picFile"
                  />
                  <label className="custom-file-label" htmlFor="picFile">
                    Foto de perfil
                  </label>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="idFile"
                  />
                  <label className="custom-file-label" htmlFor="idFile">
                    Documento ID
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-mande btn-block">
                    Registrarse
                  </button>
                </div>
              </div>
            </form>

            <Link to="/login" className="text-center a-mande">
              Ya tengo una cuenta creada
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerRegister;
