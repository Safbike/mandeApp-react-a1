import "./css/login-css.css";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.jpg'
import { useState, useEffect } from 'react'; //importamos react

function Login() {

  //funcion que guarda el contenido de los inputs usando react
  const [caption, getLogin] = useState({
    correo: '',
    pass: '',

  });

//captura el evento para el boton de registrarse
  const loginSubmit = async (e) => {

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
    getLogin({...caption, [e.target.name]: e.target.value});
  }


  return (
    <div className="login-page mande-background">
      <div className="login-box">
        <div className="card">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <img src={Logo} />
            </div>

            {/*<p className="login-box-msg">Regístrate para iniciar tu sesión</p>*/}

            <form onSubmit={loginSubmit} method="post">
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
                  name="pass"
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
              <div className="row">
                {/*<div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Recuérdame</label>
                  </div>
                  </div>*/
                }
                <div className="col-12">
                  <button type="submit" className="btn btn-mande btn-block">
                    Ingresar
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <div class="separator">¡Trabaja con nosotros!</div>
              {/*<p>----- ¡Trabaja con nosotros! -----</p>*/}
              <Link
                to="/partner-register"
                className="btn btn-block btn-mande mt-2"
              >
                Registrarse como colaborador
              </Link>
            </div>
            {
            /*<p className="mb-1">
              <a href="#">Olvidé mi contraseña</a>
            </p>*/}
            <p className="mb-0">
              <Link to="/user-register" className="text-center a-mande">
                Registrarse como nuevo miembro
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
