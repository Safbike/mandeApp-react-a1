import "./css/pregister-css.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'; //importamos react

function PartnerRegister() {

  //funcion que guarda el contenido de los inputs usando react
  const [caption, setRegister] = useState({
    primer_nombre: '',
    primer_apellido: '',
    correo: '',
    celular: '',
    pass1: '',

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
      headers: { "Content-Type": "application/json" }
    })

    //contiene los datos netos de la solicitud
    const data = await res.json()
    console.log(data);
  }

  //aqui tenemos los valores capturados y enviados al useState
  const lookRequest = (e) => {
    //primero copia todo lo que hayamos ingresado, luego captura lo que puse en los respectivos campos 'name', con los respectivos valores escritos
    setRegister({...caption, [e.target.name]: e.target.value});
  }

  return (
    <div class="hold-transition register-page mande-background">
      <div class="pregister-box">
        <div class="card">
          <div class="card-body pregister-card-body">
            <div class="register-logo">
              <h2>
                <b>Crea una cuenta como colaborador</b>
              </h2>
            </div>

            <form onSubmit={partnerSubmit} /*onSubmit ejecuta la funcion contenida*/ action="../../index.html" method="post">
              <div class="input-group mb-3">
                <input 
                name="primer_nombre" //nombramos los input
                type="text" 
                class="form-control" 
                placeholder="Nombre" 
                onChange={lookRequest} //cada cambio que se haga en tiempo real ejecuta la funcion contenida
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  name="primer_apellido"
                  type="text"
                  class="form-control"
                  placeholder="Apellido"
                  onChange={lookRequest}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input 
                name="correo"
                type="email" 
                class="form-control" 
                placeholder="Email" 
                onChange={lookRequest}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  name="celular"
                  type="text"
                  class="form-control"
                  placeholder="Celular"
                  onChange={lookRequest}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-phone"></span>
                  </div>
                </div>
              </div>

              <div class="input-group mb-3">
                <input
                  name="pass1"
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  onChange={lookRequest}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  name="pass2"
                  type="password"
                  class="form-control"
                  placeholder="Repetir contraseña"
                  onChange={lookRequest}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <select class="form-control">
                  <option value="" disabled selected>Seleccione un oficio</option>
                  <option>Carpintero</option>
                  <option>Plomero</option>
                  <option>Electrisista</option>
                  <option>Jardinero</option>
                  <option>Dealer</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label class="custom-file-label" for="customFile">
                    Foto de perfil
                  </label>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label class="custom-file-label" for="customFile">
                    Documento ID
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-12 mb-3">
                  <button type="submit" class="btn btn-mande btn-block">
                    Registrarse
                  </button>
                </div>
              </div>
            </form>

            <Link to="/login" class="text-center a-mande">
              Ya tengo una cuenta creada
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerRegister;
