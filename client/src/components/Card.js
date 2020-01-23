import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchDog } from "../actions/actions";
import styled from "styled-components";

const PrettyMuchWholeApp = styled.div`
  height: 75vh;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDog = styled.img`
  width: 30%;
  
`;

function Card(props) {
  console.log(props);
  return (
    <PrettyMuchWholeApp>
      <button onClick={props.fetchDog}>I'm a button</button>
      {/* conditional components under here */}
      {props.isLoading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {!props.isLoading && props.dog && <StyledDog src={props.dog} alt="dog" />}
    </PrettyMuchWholeApp>
  );
}

const mapStateToProps = state => {
  return { isLoading: state.isLoading, dog: state.dog, error: state.error };
};

export default connect(mapStateToProps, { fetchDog })(Card);
