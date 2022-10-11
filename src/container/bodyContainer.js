import React from "react";
import BodySection from "../views/body/bodyComponent";
import { checkGrammar } from "../redux/actions/storeAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    storeData: state.storeReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkGrammar: (data) => dispatch(checkGrammar(data))
  };
};

function BodyContainer(props) {
  return <BodySection {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
