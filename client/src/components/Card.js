import React from "react";
import { connect } from "react-redux";
import Loader  from "react-loader-spinner";
import { fetchDog } from "../actions/actions";

function Card(props) {
    console.log(props)
  return (
    <div>
      <button onClick={props.fetchDog}>I'm a button</button>
      {/* conditional components under here */}
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}

        />
      )}
      {!props.isLoading && props.dog&& <img src={props.dog}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return { isLoading: state.isLoading, dog: state.dog, error: state.error };
};

export default connect(mapStateToProps, {fetchDog})(Card);
