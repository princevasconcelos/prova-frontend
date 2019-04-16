import React from 'react';
import { connect } from 'react-redux';

import StyledInput from './styles';

import { saveQuery } from '../../store/ducks/query';

const Search = ({
  type, authentication: { token }, saveQuery, getData,
}) => {
  async function handleInputChange(event) {
    const newQuery = event.target.value;
    if (newQuery) {
      saveQuery(newQuery);
      getData(newQuery, type, token);
    }
  }

  return (
    <StyledInput
      type="text"
      placeholder="Search for artists, albums or tracks"
      onChange={handleInputChange}
    />
  );
};

const mapStateToProps = ({ type, authentication }) => ({
  type,
  authentication,
});

export default connect(
  mapStateToProps,
  {
    saveQuery,
  },
)(Search);
