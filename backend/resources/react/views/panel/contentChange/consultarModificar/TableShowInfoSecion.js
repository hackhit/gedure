//React
import React, { useState } from 'react';

//Material-UI
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	Tab,
	Tabs,
	Typography,
	Box,
} from '@material-ui/core';

//Redux
import { connect } from 'react-redux';
import updateInputValue from '../../../../actions/updateInputValue';

function TableShowInfoSecion({ data, changeOpen, updateInputValue }) {
	const [tabValue, setTabValue] = useState(0);

	const handleChange = (e, value) => {
		setTabValue(value);
	};
	
	//Selector de panel a controlar
	function a11yProps(index) {
		return {
			id: `seccion-tab-${index}`,
			'aria-controls': `seccion-tabpanel-${index}`
		};
	}

	return (
		<React.Fragment>
			<Tabs
				value={tabValue}
				indicatorColor="primary"
				onChange={handleChange}
				aria-label="Tab seccion"
				variant="scrollable"
				scrollButtons="auto"
			>
				{data.map((curso, i) => {
					return <Tab 
						key={i} 
						label={`Sección ${curso.seccion}`} 
						{...a11yProps(i)} 
					/>;
				})}
			</Tabs>
			{data.map((curso, i) => {
				return (
					<TabPanel key={i} value={tabValue} index={i}>
						<RenderTable 
							data={curso.estudiantes} 
							changeOpen={changeOpen}
							update={updateInputValue}
						/>
					</TabPanel>
				);
			})}
		</React.Fragment>
	);
}

/*
Renderizador de tablas.
*/
function RenderTable({ data, changeOpen, update }) {
	return (
		<Table aria-label="table seccion info">
			<TableHead>
				<TableRow>
					<TableCell>Cedula</TableCell>
					<TableCell>Nombre</TableCell>
					<TableCell>N° lista</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map(row => {
					return (
						<TableRow key={row.cedula}>
							<TableCell>
								<Button
									onClick={() => {
										delete row.lista;
										update(row,'MODIFY_EXTERNO');
										changeOpen(false);
									}}
								>
									{row.privilegio + row.cedula}
								</Button>
							</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.lista}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}

/*
Creador de panels en TABS, tomado de
material-UI
*/
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`seccion-tabpanel-${index}`}
			aria-labelledby={`seccion-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

const mapDispatchToProps = {
	updateInputValue
};

export default connect(null, mapDispatchToProps)(TableShowInfoSecion);