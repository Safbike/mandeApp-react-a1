import "./css/login-css.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from '../../images/logo.jpg'
import { useState, useEffect } from 'react'; //importamos react

function Login() {

  const navigate = useNavigate();

  //estado que guarda el contenido de los inputs
  const [caption, getLogin] = useState({
    correo: '',
    pass: '',

  });

  //estado que almacena el arreglo de la tabla trabajador
  const [task1, getData1] = useState([])
  const [task2, getData2] = useState([])
  
//captura el evento para el boton de registrarse
  const loginSubmit = async (e) => {

    //evita que se envie a otra pagina
    e.preventDefault();
    
    
    //bucle que recorre la tabla trabajador almacenada en un array de datos
    for (let x = 0; x < task1.length; x++) {
      for (let y = 0; y < task1[x].length; y++) {
        console.log(task1[x][y]);
        //si los datos coinciden entonces redireccciona al home
        if(task1[0][y].correo==caption.correo && task1[0][y].password_usuario==caption.pass){
          navigate('/view-partner-profile')
        }if(task1[1][y].correo==caption.correo && task1[1][y].password_usuario==caption.pass){
          navigate('/view-user-profile')
        }
      }
      
    }  
  }

  //aqui tenemos los valores capturados y enviados al useState
  const lookRequest = (e) => {
    //primero copia todo lo que hayamos ingresado, luego captura lo que puse en los respectivos campos 'name', con los respectivos valores escritos
    getLogin({...caption, [e.target.name]: e.target.value});
  }

  //evento que extrae de la ruta del fetch y captura los datos en un arreglo useState
  const loadData = async () => {
    const response1 = await fetch('http://localhost:4000/getPartnerData');
    const response2 = await fetch('http://localhost:4000/getClientData');
    const data1 = await response1.json();
    const data2 = await response2.json();
    getData1([data1, data2]);
   
  }

  useEffect(()=>{
    loadData();
  }, []);

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
