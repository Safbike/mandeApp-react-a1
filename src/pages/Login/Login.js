import "./css/login-css.css";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.jpg'
function Login() {
  return (
    <div className="login-page mande-background">
      <div className="login-box">
        <div className="card">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <img src={Logo} />
            </div>

            {/*<p className="login-box-msg">Regístrate para iniciar tu sesión</p>*/}

            <form method="post">
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
