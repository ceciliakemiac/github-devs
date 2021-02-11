import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect, useSelector } from 'react-redux';

import * as actionCreators from '../../store/actions';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const InputSearch = (props) => {
  console.log("TESTE")
  console.log(props.dev);
  return (
    <div>
      <Input
        type="text"
        placeholder="Search Dev"
        value={props.dev}
        onChange={e => props.onChangeDev(e.target.value)} />
      <Button variant="contained"><SearchIcon /></Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dev: state.reducer.name,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeDev: (value) => dispatch({ type: actionCreators.CHANGE_NAME, value: value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
