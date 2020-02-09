import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, LinearProgress } from '@material-ui/core';

function RenderTableSearch() {
  return (<TableContainer component={Paper} style={{
    maxHeight: '450px',
    overflow: 'auto'
  }}>
    <Table aria-label="Tabla de Registros" size="small">
      <TableHead>
        <TableRow>
          <TableCell align="center">Cédula</TableCell>
          <TableCell align="center">Usuario</TableCell>
          <TableCell align="center">Acción</TableCell>
          <TableCell align="center">Opciones</TableCell>
        </TableRow>
      </TableHead>
    </Table>
    <LinearProgress style={{ width: "100%" }} />
  </TableContainer>);
}

export default RenderTableSearch;