import React, { useEffect } from 'react';

//Material-UI
import { Grid, Paper } from '@material-ui/core';

//Componentes
import SelectorRegistrosDisplay from './SelectorRegistrosDisplay';
import TableRender from './TableRender';

//Redux
import { connect } from 'react-redux';
import updateValue from '../../../../actions/updateValue';
import updateLoading from '../../../../actions/updateLoading';

//SnackBar
import { useSnackbar } from 'notistack';

function RenderRegistros({ dataLog, updateValue, updateLoading }) {
	
	// Global Const
	const axios = window.axios;

	//Crear un SnackBar
	const { enqueueSnackbar } = useSnackbar();
	//Destructing
	const { selectSearch } = dataLog;

	useEffect(() => {
		let cancel;
		let CancelAxios = axios.CancelToken;

		//FetchData
		const fetchData = async (option) => {
			try {
				//Consulta
				const res = await axios.get(`api/logs?get=${option}`, {
					cancelToken: new CancelAxios((c) => {
						cancel = c;
					}),
				});
				
				//Finalizar effecto de busqueda.
				updateLoading(false, 'LOGS_SEARCHING');

				if (res.data.length > 0) {
					//Set datos
					updateValue(res.data, 'LOGS_DATATABLE');
				} else {
					enqueueSnackbar('No hay registros que mostrar', {
						variant: 'info',
					});
				}
			} catch (error) {
				if (axios.isCancel(error)) {
					//Seguir buscando ya que se canceló.
					updateLoading(true, 'LOGS_SEARCHING');
				} else {
					if (error.response) {
						//Errores HTTP
						const { status, data } = error.response;
						if (status === 403) {
							enqueueSnackbar(data.description, {
								variant: 'error',
							});
						} else if (status === 500) {
							enqueueSnackbar('No se ha podido conectar con la base de datos', {
								variant: 'error',
							});
						} else {
							enqueueSnackbar('Error interno en el servidor', {
								variant: 'error',
							});
						}
					} else {
						enqueueSnackbar('Error interno en el sistema', {
							variant: 'error',
						});
					}
					//Finalizar effecto de busqueda.
					updateLoading(false, 'LOGS_SEARCHING');
				}
			}
		};

		//Iniciar effecto de busqueda.
		updateLoading(true, 'LOGS_SEARCHING');
		//Limpiar datos
		updateValue([], 'LOGS_DATATABLE');
		//PETICION
		fetchData(selectSearch);

		//Al desmontar
		return () => {
			if (cancel) {
				cancel();
			}
		};
	}, [selectSearch, axios, enqueueSnackbar, updateLoading, updateValue]);

	return (
		<Grid container spacing={2} justify="center">
			<Grid item xs={12} sm={5} md={3}>
				<Paper>
					<SelectorRegistrosDisplay />
				</Paper>
			</Grid>
			<Grid item xs={12} sm={11} md={10}>
				<TableRender />
			</Grid>
		</Grid>
	);
}

//ERROR AQUÍ
/* No se logra solucionar el error de que setRows consiga
setear el valor de la DATA recibida, en espera de una solución.
Todo lo demás funciona correctamente pero yo no...
Yo del futuro, arregla esta vaina plo, yo ya no puedo más.
No, nada de lo que intento funciona.
NADA...... Bueno, ya que.
Dejo por aquí que en el primer UPDATE del state no lo realiza,
pero en el segundo y posterior si. Es decir, no tengo ni la
más MINIMA idea de como solventar eso..... Nada, adios.
Pos al final lo que hice fue cederles las funciones del req al
padre, ahora todo funciona correctamente. El padre es ESTE archivo,
por si acaso. xD

Último update: Después de no haber tocado el proyecto durante varias semanas
pude hacer todo más bonito y simple, me he superado, ARRIBA ESPAÑA.*/

const mapStateToProps = (state) => ({
	dataLog: state.panelSettings.logsSection,
});

const mapDispatchToProps = {
	updateValue,
	updateLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderRegistros);