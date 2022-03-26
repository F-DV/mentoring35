import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';
import Lanzando from '../resorurces/lanzando.jpg'
const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="list"></label>
      <img alt='' src={Lanzando} width="200" height="200"></img>
      <br />
      <textarea id="list" style={{ width: "300px", height: "120px" }} 
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <br />
      <button type="submit" disabled={props.loading}>
        Lanzar dado!!
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)
