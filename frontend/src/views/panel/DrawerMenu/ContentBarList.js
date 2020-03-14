import React from 'react';

//Componentes
import CloseDrawerMenu from './CloseDrawerMenu';
import RenderButtonList from './RenderButtonList';

//Material-UI
import { List, Divider } from '@material-ui/core';

//Iconos
import History from '@material-ui/icons/History';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/Delete';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import HomeIcon from '@material-ui/icons/Home';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ArchiveIcon from '@material-ui/icons/Archive';
import ListAltIcon from '@material-ui/icons/ListAlt';

//Redux
import { connect } from 'react-redux';

const ContentBarList = ({privilegio}) => {
	const dataListAdmin = [
		{
			redirect: 'home',
			text: 'Dashboard',
			icon: <HomeIcon />
		},
		{
			redirect: 'reg',
			text: 'Registros',
			icon: <History />
		},
		{
			redirect: 'co/mo',
			text: 'Consultar/Modificar',
			icon: <ReceiptIcon />
		},
		{
			redirect: 'upload',
			text: 'Cargar',
			icon: <CloudUploadIcon />
		},
		{
			redirect: 'options',
			text: 'Opciones',
			icon: <BuildIcon />
		},
		{
			redirect: 'delete',
			text: 'Borrar',
			icon: <DeleteIcon />
		},
		{
			redirect: 'notice',
			text: 'Publicar',
			icon: <NewReleasesIcon />
		},
		{
			redirect: 'deleteNotices',
			text: 'Borrar publicación',
			icon: <DeleteSweepIcon />
		},
  ];
  
  const dataListEstu = [
		{
			redirect: 'home',
			text: 'Dashboard',
			icon: <HomeIcon />
    },
    {
			redirect: 'boleta',
			text: 'Boleta',
			icon: <ListAltIcon />
    },
    {
			redirect: 'horario',
			text: 'Horario',
			icon: <QueryBuilderIcon />
    },
    {
			redirect: 'constancias',
			text: 'Constancias',
			icon: <ArchiveIcon />
		},
	];

	return (
		<div role="presentation">
			<div className="drawerMenu">
				<span className="TextHead">Menú</span>
				<CloseDrawerMenu />
			</div>
			<List style={{ width: '250px' }} dense={true}>
				{privilegio === "A-" && dataListAdmin.map((data, i) => {
					return (
						<React.Fragment key={i}>
							<RenderButtonList
								options={{
									redirect: data.redirect,
									text: data.text
								}}
								indexPass={i}
							>
								{data.icon}
							</RenderButtonList>
							{/*Poner dividers*/}
							{(i === 0 || i === 5) ? (<Divider />) : null}
						</React.Fragment>
					);
        })}
        {privilegio === "V-" && dataListEstu.map((data, i) => {
					return (
						<React.Fragment key={i}>
							<RenderButtonList
								options={{
									redirect: data.redirect,
									text: data.text
								}}
								indexPass={i}
							>
								{data.icon}
							</RenderButtonList>
							{/*Poner dividers*/}
							{(i === 0 || i === 5) ? (<Divider />) : null}
						</React.Fragment>
					);
				})}
			</List>
		</div>
	);
};

//REDUX
const mapStateToProps = (state) => ({
  privilegio: state.userData.privilegio
});

export default connect(mapStateToProps)(ContentBarList);