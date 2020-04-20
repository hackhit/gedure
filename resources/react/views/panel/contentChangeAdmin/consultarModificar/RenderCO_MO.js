import React from 'react';

//Material-UI
import { Grid, Paper } from '@material-ui/core';

//Components
import SearchUsers from '../../../../components/SearchUsers';
import SearchSeccion from './SearchSeccion';
import ModifyForm from './ModifyForm';

//Redux
import { connect } from 'react-redux';
import updateValue from '../../../../actions/updateValue';

function RenderCO_MO({ updateValue }) {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={6}>
        <Paper variant="outlined">
          <SearchUsers
						apiUrl="api/user/"
						updateData={updateValue}
						updateDataOption="MODIFY_EXTERNO"
					/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper variant="outlined">
          <SearchSeccion />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Paper className='Box' variant="outlined">
          <span className="title">Modificar</span>
          <div className="content">
            <ModifyForm />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

//REDUX
const mapDispatchToProps = {
	updateValue
};

export default connect(null,mapDispatchToProps)(RenderCO_MO);