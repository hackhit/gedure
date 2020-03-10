import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//Redux
import { connect } from 'react-redux';
import toggleDrawer from '../../../actions/panel/toggleDrawer';

function CloseDrawerMenu({toggleDrawer}) {
  return (
    <Tooltip title="Cerrar menú" arrow enterDelay={1000}>
      <IconButton onClick={()=>{toggleDrawer(false)}}>
        <ChevronLeftIcon />
      </IconButton>
    </Tooltip>
  );
}

const mapDispatchToProps = {
  toggleDrawer,
}

export default connect(null,mapDispatchToProps)(CloseDrawerMenu);