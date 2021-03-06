//Verificar si ya existe el almacenamiento local de la variable
//theme para evitar reescribirla
if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', 'light');
}

//Verificar si la lista contiene algo
if (
	!localStorage.getItem('notSeeInfoDialog') ||
	typeof JSON.parse(localStorage.getItem('notSeeInfoDialog')) !== 'object'
) {
	//Setear dada
	localStorage.setItem('notSeeInfoDialog', JSON.stringify([]));
}

//Inicar valor del state.
const initialState = {
	tema: localStorage.getItem('theme'),
	showInfo: {
		masterPath: ''
	}
};

// action es el valor devuelto por el action
//action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'UPDATE_THEME': {
			//Verificar tema actual
			const temaActual = state.tema;

			//Cambiar tema actual
			let changeThemeTo = temaActual === 'light' ? 'dark' : 'light';

			//Aplicar cambio en el almacenamiento local.
			localStorage.setItem('theme', changeThemeTo);

			//Regresar state.
			return {
				...state,
				tema: changeThemeTo
			};
		}
			
		case 'UPDATE_MASTER_PATH': {
			return {
				...state,
				showInfo: {
					masterPath: payload
				}
			};
		}
		default: {
			return state;
		}
	}
};

// Seleccionar estado del state.
// export const selectTheme = state => state.settings.tema;