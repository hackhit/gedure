import React, { useState, useEffect } from 'react';

//Material-UI
import { Grid, Paper } from '@material-ui/core';

//Componentes
import RenderTableOk from './RenderTableOk';
import RenderTableError, { RenderTableSearch } from './RenderTableStatus';
import { RenderSelect } from '../../../../components/RendersGlobal';

function RenderRegistros() {
	const [selectSearch, setsSlectSearch] = useState('all');
	const [Req, setReq] = useState({});
	const [search, setSearch] = useState(true);

	const handleChangeSelect = e => {
		const value = e.target.value;

		setsSlectSearch(value);
	};

	useEffect(
		() => {
			let cancel = false;

			setSearch(true);
			setReq({});
			const res = {
				query: {
					status: true
				},
				data: [
					{
						cedula: '28438812',
						name: 'Recker',
						accion: 'Inicio de sesión',
						privilegio: 'A-',
						opciones: {
							desbloquear: false
						}
					},
					{
						cedula: '12941274',
						name: 'Luis',
						privilegio: 'V-',
						accion: 'Baneo',
						curso: '1G',
						seccion: 'A',
						opciones: {
							desbloquear: true
						}
					}
				]
      };
      
      //PETICION
			if (selectSearch === 'all') {
				setReq(res);
			} else if (selectSearch === 'ban') {
				setReq(res);
			}

			//Poner el cancel en la petición asincrona.
			setTimeout(() => {
				if (!cancel) {
					setSearch(false);
				}
			}, 2000);

			return () => {
				cancel = true;
			};
		},
		[selectSearch]
	);

	return (
		<Grid container spacing={2} justify="center">
			<Grid item xs={12} sm={5} md={3}>
				<Paper variant="outlined">
					<SelectorRegistrosDisplay
						options={{
							selectSearch,
							handleChangeSelect
						}}
					/>
				</Paper>
			</Grid>
			<Grid item xs={10}>
				<TableShow options={{ Req, search }} />
			</Grid>
		</Grid>
	);
}

function TableShow(props) {
	//Destructurar props.
	const { Req, search } = props.options;
	const { query, data } = Req;

	//Verificar si existe query.status
	let error = query !== undefined && query.status ? false : true;

	if (!search && !error) {
		return (
			<div>
				<RenderTableOk data={data} />
			</div>
		);
	} else {
		if (!search) {
			return (
				<div>
					<RenderTableError error={error} />
				</div>
			);
		} else {
			return (
				<div>
					<RenderTableSearch />
				</div>
			);
		}
	}
}

function SelectorRegistrosDisplay(props) {
  const { handleChangeSelect, selectSearch } = props.options;
  
  //Config de registros
	const registSelect = {
		name: 'registros',
		values: [
			{
				value: 'all',
				name: 'Todos'
      },
      {
				value: 'ban',
				name: 'Baneados'
      },
      {
				value: 'login',
				name: 'Inicio de sesión'
      },
      {
				value: 'changePass',
				name: 'Cambio de contraseña'
			},
		]
	};

	return (
		<div className="Box">
			<span className="title">Buscar Registros</span>
			<div className="content">
				<RenderSelect action={handleChangeSelect} val={selectSearch} data={registSelect} classNameSet="select" customWidth="auto" empty={false} />
			</div>
		</div>
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
por si acaso. xD*/

export default RenderRegistros;