import "./css/partnerHome.css";
import image1 from "../../images/userPic.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'; //importamos react
import Cookies from "universal-cookie";

function ViewPartnerProfile() {
  
  const cookie = new Cookies();
  const usuario = cookie.get('nombreUsuario')
  const id = cookie.get('idTrabajador')
  
    //estado que almacena el arreglo de la tabla trabajador
    const [data, getData] = useState([])
    const [user, getToken] = useState([])
    
  //captura el evento para el boton de registrarse
    const loginSubmit = async (e) => {
  
      //evita que se envie a otra pagina
      e.preventDefault();
      
    }
    
    //evento que extrae de la ruta del fetch y captura los datos en un arreglo useState
    const loadData = async () => {
      const response = await fetch('http://localhost:4000/getPartnerData');
      const data = await response.json();
      getData(data);
  
      console.log(data);
      console.log(id);
      for(let index=0; index<data.length; index++){
        if(data[index].id_trabajador==id){
          const token = data[index].id_trabajador; 
          const mainData = async () => {
            const newResponse = await fetch(`http://localhost:4000/getUniqueData/${token}`);
            const user = await newResponse.json();
            getToken(user);
            console.log(user);
          }
          console.log("Sigue funcionando");
          console.log(data[index].id_trabajador);
          mainData(data[index].id_trabajador);
        }
      }
    }
  
    useEffect(()=>{
      loadData();
    }, []);
  

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
const cookie = new Cookies();
const navigate = useNavigate();

const id = cookie.get('idTrabajador')

//estado que almacena el arreglo de la tabla trabajador
const [task, getData] = useState([])

//captura el evento para el boton de registrarse
const loginSubmit = async (e) => {

  //evita que se envie a otra pagina
  e.preventDefault();
  
  
  //bucle que recorre la tabla trabajador almacenada en un array de datos
  for (let x = 0; x < task.length; x++) {
    for (let y = 0; y < task[x].length; y++) {
      await console.log(task[x][y]);
      //si los datos coinciden entonces redireccciona al home
      if(await task[0][y].correo==caption.correo && await task[0][y].password_usuario==caption.pass){
        cookie.set('nombreUsuario', task[0][y].primer_nombre ,{path: '/'});
        cookie.set('idTrabajador', task[0][y].id_trabajador ,{path: '/'});
        navigate('/view-partner-profile')
      }if(await task[x][y].correo==caption.correo && await task[x][y].password_usuario==caption.pass){
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
  getData([data1, data2]);
 
}

useEffect(()=>{
  loadData();
}, []);
*/
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
                  <Link to="/home">
                  <a href="">Inicio</a>
                  </Link>
                 
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
              <div className="col-md-3">
                {/*<!-- Profile Image -->*/}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src= {image1}
                        alt="Partner profile picture"
                      />
                    </div>

                    <h2 className="profile-username text-center">
                     <b>{user[0].primer_apellido} {user[0].primer_nombre}</b> 
                    </h2>
                      <hr/>
                    <p className="text-muted text-center ">{user[0].profesion}</p>
   

                    <ul className="list-group list-group-unbordered mb-3">
                      <li className="list-group-item">
                        <b>Valoración media ⭐</b> <a className="float-right">4.6</a>
                      </li>
                      <li className="list-group-item">
                        <b>Trabajos concluidos</b> <a className="float-right">124</a>
                      </li>

                    </ul>

                    <a href="#" className="btn btn-primary btn-block">
                      <b>Contratar</b>
                    </a>
                  </div>
                  {/*  <!-- /.card-body -->*/}
                </div>
                {/*  <!-- /.card -->*/}

                {/* <!-- About Me Box -->*/}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Acerca de mí</h3>
                  </div>
                  {/*  <!-- /.card-header -->*/}
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1"></i> Educación
                    </strong>

                    <p className="text-muted">
                      B.S. in Computer Science from the University of Tennessee
                      at Knoxville
                    </p>

                    <hr />

                    <strong>
                      <i className="fas fa-map-marker-alt mr-1"></i> Localización
                    </strong>

                    <p className="text-muted">Cali, Valle del cauca</p>

                    <hr />

                    <strong>
                      <i className="fas fa-pencil-alt mr-1"></i> Habilidades
                    </strong>

                    <p className="text-muted">
                      <span className="tag tag-danger">UI Design -</span>
                      <span className="tag tag-success"> Coding -</span>
                      <span className="tag tag-info"> Javascript -</span>
                      <span className="tag tag-warning"> PHP -</span>
                      <span className="tag tag-primary"> Node.js</span>
                    </p>

                    <hr />

                    <strong>
                      <i className="far fa-file-alt mr-1"></i> Descripción
                    </strong>

                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam fermentum enim neque.
                    </p>
                  </div>
                  {/*  <!-- /.card-body -->*/}
                </div>
                {/*  <!-- /.card -->*/}
              </div>
              {/*  <!-- /.col -->*/}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link  active"
                          href="#"
                          data-toggle="tab"
                        >
                          Reviews
                        </a>
                      </li>
                     
                    </ul>
                  </div>{" "}
                  {/*<!-- /.card-header -->*/}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity">
                        {/* <!-- Post -->*/}
                        <div className="post">
                          <div className="user-block">
                            <img
                              className="img-circle img-bordered-sm"
                              src={image1}
                              alt="user image"
                            />
                            <span className="username">
                              <a href="#">Casimiro Estanislao  </a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"></i>
                              </a>
                            </span>
                            <span className="description">
                              Cliente desde - 25/01/2022
                            </span>
                          </div>
                    
                          {/* <!-- /.user-block -->*/}
                          <p><b>Título review </b> - Calificación 5⭐</p>
                          <p>
                            Lorem ipsum represents a long-held tradition for
                            designers, typographers and the like. Some people
                            hate it and argue for its demise, but others ignore
                            the hate as they create awesome tools to help create
                            filler text for everyone from bacon lovers to
                            Charlie Sheen fans.
                          </p>

                          <p>
                            <a href="#" className="link-black text-sm">
                              <i className="far fa-thumbs-up mr-1"></i> Me gusta
                            </a>
                            <span className="float-right">
                              <a href="#" className="link-black text-sm">
                                <i className="far fa-comments mr-1"></i>{" "}
                                Comentarios (5)
                              </a>
                            </span>
                          </p>

                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Escribe una comentario"
                          />
                        </div>
                        {/* <!-- /.post -->*/}

                         {/* <!-- Post -->*/}
                         <div className="post">
                          <div className="user-block">
                            <img
                              className="img-circle img-bordered-sm"
                              src={image1}
                              alt="user image"
                            />
                            <span className="username">
                              <a href="#">Alma Marcela  </a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"></i>
                              </a>
                            </span>
                            <span className="description">
                              Cliente desde - 14/01/2022
                            </span>
                          </div>
                    
                          {/* <!-- /.user-block -->*/}
                          <p><b>Título review </b> - Calificación 4⭐</p>
                          <p>
                            Lorem ipsum represents a long-held tradition for
                            designers, typographers and the like. Some people
                            hate it and argue for its demise, but others ignore
                            the hate as they create awesome tools to help create
                            filler text for everyone from bacon lovers to
                            Charlie Sheen fans.
                          </p>

                          <p>
                            <a href="#" className="link-black text-sm">
                              <i className="far fa-thumbs-up mr-1"></i> Me gusta
                            </a>
                            <span className="float-right">
                              <a href="#" className="link-black text-sm">
                                <i className="far fa-comments mr-1"></i>{" "}
                                Comentarios (2)
                              </a>
                            </span>
                          </p>

                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Escribe una comentario"
                          />
                        </div>
                        {/* <!-- /.post -->*/}

                         {/* <!-- Post -->*/}
                         <div className="post">
                          <div className="user-block">
                            <img
                              className="img-circle img-bordered-sm"
                              src={image1}
                              alt="user image"
                            />
                            <span className="username">
                              <a href="#">Aquiles Curro  </a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"></i>
                              </a>
                            </span>
                            <span className="description">
                              Cliente desde - 12/06/2021
                            </span>
                          </div>
                    
                          {/* <!-- /.user-block -->*/}
                          <p><b>Título review </b> - calificación 3.0⭐</p>
                          <p>
                            Lorem ipsum represents a long-held tradition for
                            designers, typographers and the like. Some people
                            hate it and argue for its demise, but others ignore
                            the hate as they create awesome tools to help create
                            filler text for everyone from bacon lovers to
                            Charlie Sheen fans.
                          </p>

                          <p>
                            <a href="#" className="link-black text-sm">
                              <i className="far fa-thumbs-up mr-1"></i> Me gusta
                            </a>
                            <span className="float-right">
                              <a href="#" className="link-black text-sm">
                                <i className="far fa-comments mr-1"></i>{" "}
                                Comentarios (15)
                              </a>
                            </span>
                          </p>

                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Escribe una comentario"
                          />
                        </div>
                        {/* <!-- /.post -->*/}
                      </div>
                      {/* <!-- /.tab-pane -->*/}
                      <div className="tab-pane" id="timeline">
                        {/*  <!-- The timeline -->*/}
                        <div className="timeline timeline-inverse">
                          {/*   <!-- timeline time label -->*/}
                          <div className="time-label">
                            <span className="bg-danger">10 Feb. 2014</span>
                          </div>
                          {/*  <!-- /.timeline-label -->*/}
                          {/*  <!-- timeline item -->*/}
                          <div>
                            <i className="fas fa-envelope bg-primary"></i>

                            <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"></i> 12:05
                              </span>

                              <h3 className="timeline-header">
                                <a href="#">Support Team</a> sent you an email
                              </h3>

                              <div className="timeline-body">
                                Etsy doostang zoodles disqus groupon greplin
                                oooj voxy zoodles, weebly ning heekya handango
                                imeem plugg dopplr jibjab, movity jajah plickers
                                sifteo edmodo ifttt zimbra. Babblely odeo
                                kaboodle quora plaxo ideeli hulu weebly
                                balihoo...
                              </div>
                              <div className="timeline-footer">
                                <a href="#" className="btn btn-primary btn-sm">
                                  Read more
                                </a>
                                <a href="#" className="btn btn-danger btn-sm">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- END timeline item -->*/}
                          {/*   <!-- timeline item -->*/}
                          <div>
                            <i className="fas fa-user bg-info"></i>

                            <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"></i> 5 mins ago
                              </span>

                              <h3 className="timeline-header border-0">
                                <a href="#">Sarah Young</a> accepted your friend
                                request
                              </h3>
                            </div>
                          </div>
                          {/*  <!-- END timeline item -->*/}
                          {/*  <!-- timeline item -->*/}
                          <div>
                            <i className="fas fa-comments bg-warning"></i>

                            <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"></i> 27 mins ago
                              </span>

                              <h3 className="timeline-header">
                                <a href="#">Jay White</a> commented on your post
                              </h3>

                              <div className="timeline-body">
                                Take me to your leader! Switzerland is small and
                                neutral! We are more like Germany, ambitious and
                                misunderstood!
                              </div>
                              <div className="timeline-footer">
                                <a
                                  href="#"
                                  className="btn btn-warning btn-flat btn-sm"
                                >
                                  View comment
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- END timeline item -->*/}
                          {/*  <!-- timeline time label -->*/}
                          <div className="time-label">
                            <span className="bg-success">3 Jan. 2014</span>
                          </div>
                          {/*   <!-- /.timeline-label -->*/}
                          {/*   <!-- timeline item -->*/}
                          <div>
                            <i className="fas fa-camera bg-purple"></i>

                            <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"></i> 2 days ago
                              </span>

                              <h3 className="timeline-header">
                                <a href="#">Mina Lee</a> uploaded new photos
                              </h3>

                              <div className="timeline-body">
                                <img
                                  src="https://placehold.it/150x100"
                                  alt="..."
                                />
                                <img
                                  src="https://placehold.it/150x100"
                                  alt="..."
                                />
                                <img
                                  src="https://placehold.it/150x100"
                                  alt="..."
                                />
                                <img
                                  src="https://placehold.it/150x100"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                          {/*   <!-- END timeline item -->*/}
                          <div>
                            <i className="far fa-clock bg-gray"></i>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.tab-pane --> */}

                      <div className="tab-pane" id="settings">
                        <form className="form-horizontal">
                          <div className="form-group row">
                            <label
                              htmlFor="inputName"
                              className="col-sm-2 col-form-label"
                            >
                              Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="email"
                                className="form-control"
                                id="inputName"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputEmail"
                              className="col-sm-2 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputName2"
                              className="col-sm-2 col-form-label"
                            >
                              Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                id="inputName2"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputExperience"
                              className="col-sm-2 col-form-label"
                            >
                              Experience
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                className="form-control"
                                id="inputExperience"
                                placeholder="Experience"
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputSkills"
                              className="col-sm-2 col-form-label"
                            >
                              Skills
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                id="inputSkills"
                                placeholder="Skills"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <div className="checkbox">
                                <label>
                                  {/* <input type="checkbox">
                                    {" "}
                                    I agree to the{" "}
                            <a href="#">terms and conditions</a>*/}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button type="submit" className="btn btn-danger">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ViewPartnerProfile;
