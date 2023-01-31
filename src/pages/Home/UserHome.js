import "./css/UserHome.css";
import { useState, useEffect } from "react";
/*import { Link } from "react-router-dom";*/

function UserHome() {
  //funcion que guarda el contenido de los inputs usando react
  const [caption, setSearch] = useState({
    searchHome: "",
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
    setSearch({ ...caption, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
      {/*<!-- Content Wrapper. Contains page content -->*/}
      <div className="content-wrapper">
        {/*<!-- Content Header (Page header) -->*/}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Cerrar sesión</a>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </div>
            </div>
          </div>{" "}
          {/*<!-- /.container-fluid -->*/}
        </section>

        {/* <!-- Main content -->*/}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/*  <!-- /.col -->*/}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <div className="row">
                      <div className="col-md-12">
                        <form action="#">
                          {" "}
                          {/*Aquí va la ruta al darle search*/}
                          <div className="input-group">
                            <input
                              type="search"
                              className="form-control form-control-lg"
                              placeholder="Buscar por oficio"
                            />
                            <div className="input-group-append">
                              <button
                                type="submit"
                                className="btn btn-lg btn-default"
                              >
                                <i className="fa fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{" "}
                  {/*<!-- /.card-header -->*/}
                  {/*<!-- /.card -->*/}
                  <div className="card">
                    <div className="card-header">
                      <p>Resultados de la búsqueda:</p>
                    </div>
                    {/*<!-- /.card-header -->*/}

                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th> ⭐ </th>
                          <th>Nombre de Colaborador</th>
                          <th>Oficio</th>
                          <th>Precio/hora</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>4.5</td>
                          <td>Santiago Norrea</td>
                          <td>Paseador de Perros</td>
                          <td>7$</td>
                        </tr>
                        <tr>
                          <td>3.9</td>
                          <td>Valeria Rojas</td>
                          <td>Cocinero</td>
                          <td>20$</td>
                        </tr>
                        <tr>
                          <td>4.1</td>
                          <td>Fernando Casablanca</td>
                          <td>Gatillero</td>
                          <td>200$</td>
                        </tr>
                        <tr>
                          <td>4.2</td>
                          <td>Elsa Caporros</td>
                          <td>Dealer</td>
                          <td>5$</td>
                        </tr>
                      </tbody>
                    </table>

                    {/*<!-- /.card-body -->*/}
                    <div className="card-footer clearfix">
                      <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &laquo;
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &raquo;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*<!-- /.card -->*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserHome;
