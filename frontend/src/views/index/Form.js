//React
import React from 'react';
import { Redirect } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import updateInputValue from '../../actions/updateInputValue';
import updateLoading from '../../actions/updateLoading';

//Compoentes
import RenderForm from './RenderForm';
import { consultAjax } from '../../components/reutilizar/ajaxConsult';
import updateDataUser from '../../actions/login/updateDataUser';
import loginSinceFormSuccess from '../../actions/login/loginSinceFormSuccess';

//SnackBar
import { useSnackbar } from 'notistack';
import errorInfo from '../../actions/errorInfo';

function Form({ updateInputValue, updateLoading, auth, updateDataUser, loginSinceFormSuccess, errorInfo, user, pass }) {
  //Crear un SnackBar
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = e => {
    // enviar input al store para actualizar states
    updateInputValue(e, "LOGIN");
  };

  const handleSubmit = (e) => {
    //Preparativos
    e.preventDefault();
    let error=false;

    //Evitar que el usuario cambie de ruta para así
    //evitar que el componente se desmonte y pueda causar
    //algún daño.
    document.querySelectorAll('.headerNoPanel button').forEach(element => {
      element.disabled = true;
    });

    //Verificar datos
    [{value: user, name: "user"},{value: pass, name: "pass"}].map((input)=>{
      if (input.value.length === 0) {
        //Empty
        errorInfo(input.name, "Campo obligatorio", "LOGIN");
        error=true;
      }else if (input.value.length < 4) {
        //No valid cédula
        errorInfo(input.name, "No válido", "LOGIN");
        error=true;
      }
      return null;
    });

    //Verificar errores
    if (error) {
      //Reactivando botones.
      document.querySelectorAll('.headerNoPanel button').forEach(element => {
        element.disabled = false;
      });
      return null
    }

    //Loading
    updateLoading(true,"LOGIN");
    //Consulta
    setTimeout(getConsult, 2000);
  };

  const getConsult = async () => {
    let res = await consultAjax(
      'https://my-json-server.typicode.com/recker112/candelariaweb/login'
    );
    if (res !== 'no_connect') {
      //Opciones de respuesta del servidor.
      if (true) {
        console.log(res);

        //Add SnackBar
        enqueueSnackbar('Login exitoso', {
          variant: 'success'
        });

        //Boceto de datos a guardar.
        const dataTest = {
          cedula: 'A-28432441',
          cedulaSin: '28432441',
          name: 'Recker ortiz',
          curso: '',
          seccion: '',
          nota: '',
          horario: '',
          profeGuia: '',
          privilegio: 'A-',
          avatar: 'reckerSITO',
          token: 'testDATA47'
        };

        //Al estar todo correcto el servidor DEBE regresar los
        //datos de usuario, los cuales se cargarán con
        //"updateDataUser"
        updateDataUser(dataTest);

        //Una vez terminado de actualizar los datos, se procede a
        //decirle a la APP que se realizó un login correctamente.
        loginSinceFormSuccess();
      }
    } else {
      enqueueSnackbar('No se pudo conectar con el servidor', {
        variant: 'error'
      });
    }

    //Reactivando botones.
    document.querySelectorAll('.headerNoPanel button').forEach(element => {
      element.disabled = false;
    });

    updateLoading(false,"LOGIN");
  };

  //Verificar si se redireccionará o no.
  if (auth) {
    return (
      <Redirect
        to={{
          pathname: '/panel'
        }}
      />
    );
  } else {
    return <RenderForm options={{ handleChange, handleSubmit }} />;
  }
}

const mapStateToProps = state => ({
  auth: state.loginStatus.auth,
  user: state.dataLogin.user,
  pass: state.dataLogin.pass,
  error: state.dataLogin.error,
});

const mapDispatchToProps = {
  updateInputValue,
  updateLoading,
  updateDataUser,
  loginSinceFormSuccess,
  errorInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);