import "./css/pregister-css.css";
import { Link } from "react-router-dom";

function PartnerRegister() {
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
                  placeholder="Celular"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-phone"></span>
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
