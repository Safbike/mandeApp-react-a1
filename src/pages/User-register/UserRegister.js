import "./css/uregister-css.css";
import { Link } from "react-router-dom";

function UserRegister() {
  return (
    <div class="hold-transition register-page uregister-background">
      <div class="register-box  ">
        <div class="card">
          <div class="card-body register-card-body">
            <div class="register-logo">
              <h2>
                <b>Crea una cuenta</b>
              </h2>
            </div>


            <form action="../../index.html" method="post">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nombre" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellido"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Teléfono"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Repetir contraseña"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Dirección"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>

              <div class="form-group mb-3">
                <div class="input-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="exampleInputFile"
                    />
                    <label class="custom-file-label" for="exampleInputFile">
                      Certificado de residencia
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                {/* <!-- /.col -->*/}
                <div class="col-5 ">
                  <button type="submit" class="btn btn-primary btn-block ">
                    Registrarse
                  </button>
                </div>
                {/*<!-- /.col -->*/}
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <p>----- ¡Trabaja con nosotros! -----</p>
              <Link
                to="/partner-register"
                className="btn btn-block btn-primary"
              >
                Registrarse como colaborador
              </Link>
            </div>

            <Link to="/login" class="text-center">
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
