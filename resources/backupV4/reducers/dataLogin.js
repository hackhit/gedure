//Inicar valor del state.
const initialState = {
  user: '',
  pass: '',
  error: {
    user: {
      status: false,
      message: ""
    },
    pass: {
      status: false,
      message: ""
    }
  },
  checkbox: false,
};

// action es el valor devuelto por el action
//action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_VALUE_LOGIN": {
      //Obtener input
      const e = payload;

      //Obtener valores del input
      const name = e.target.name;
      const value = name === 'checkbox' ? e.target.checked : e.target.value;

      //Regresar state.
      return {
        ...state,
        [name]: value,
        error: {
          ...state.error,
          [name]: {
            status: false,
            message: ""
          }
        }
      };
    }
    case "ERROR_INFO_LOGIN": {
      return {
        ...state,
        error: {
          ...state.error,
          [payload.input]: {
            status: true,
            message: payload.message
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

// Seleccionar estado del state.
// export const selectDataLogin = state => state.dataLogin.tema;
