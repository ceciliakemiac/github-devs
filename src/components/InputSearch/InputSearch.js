import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: gray;
  background: white;
  border: none;
  border-radius: 3px;
  width: 250px
`;

const InputSearch = (props) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Busque seu Dev"
        value={props.dev}
        defaultValue={props.dev}
        onChange={e => props.onChangeDev(e.target.value)} />
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
