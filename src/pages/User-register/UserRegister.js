import "./css/uregister-css.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; //importamos react

function UserRegister() {

 //funcion que guarda el contenido de los inputs usando react
  const [caption, setRegister] = useState({
    primer_nombre: '',
    primer_apellido: '',
    correo: '',
    telefono: '',
    pass1: '',
    direccion: '',
    recibos: '',
  });

  //captura el evento para el boton de registrarse
  const userSubmit = async (e) => {
    //evita que se envie a otra pagina
    e.preventDefault();

    /*guardamos informacion del objeto en result, fetch es una funcion para enviar los datos a la direccion que le demos,
    luego configuramos por medio de un objeto el metodo que queremos usar, transformando el objeto json a un string*/
    const res = await fetch("http://localhost:4000/insertUserData", {
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
      <div className="register-box  ">
        <div className="card">
          <div className="card-body register-card-body">
            <div className="register-logo">
              <h2>
                <b>Crea una cuenta</b>
              </h2>
            </div>


            <form onSubmit={userSubmit} action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input 
                name="primer_nombre"
                type="text" 
                className="form-control" 
                placeholder="Nombre" 
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
                name="correo"
                type="email" 
                className="form-control" 
                placeholder="Email" 
                onChange={lookRequest}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                name="telefono"
                type="number"
                className="form-control"
                placeholder="Teléfono"
                onChange={lookRequest}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                name="pass1"
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={lookRequest}
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
                  onChange={lookRequest}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                name="direccion"
                  type="text"
                  className="form-control"
                  placeholder="Dirección"
                  onChange={lookRequest}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-map-marker-alt"></span>
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <div className="input-group">
                  <div className="custom-file">
                    <input
                    name="recibos"
                      type="file"
                      className="custom-file-input"
                      id="homeFile"
                      onChange={lookRequest}
                    />
                    <label className="custom-file-label" htmlFor="homeFile">
                      Certificado de residencia
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* <!-- /.col -->*/}
                <div className="col-12 ">
                  <button type="submit" className="btn btn-mande btn-block ">
                    Registrarse
                  </button>
                </div>
                {/*<!-- /.col -->*/}
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
            <div className="separator">¡Trabaja con nosotros!</div>
              <Link
                to="/partner-register"
                className="btn btn-block btn-mande mt-3"
              >
                Registrarse como colaborador
              </Link>
            </div>

            <Link to="/login" className="text-center a-mande">
              Ya tengo una cuenta creada
            </Link>
          </div>
          {/*<!-- /.form-box -->*/}
        </div>{" "}
        {/*<!-- /.card -->*/}
      </div>
    </div>
  );
}

export default UserRegister;
