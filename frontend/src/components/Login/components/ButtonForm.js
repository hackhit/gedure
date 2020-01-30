import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class ButtonForm extends Component {
  render() {
    if (this.props.verificando){
      return(
        <CircularProgress />
      )
    }else {
      return (
        <Button variant="contained" type="submit">Acceder</Button>
      )
    }
  }
}

export default ButtonForm;
