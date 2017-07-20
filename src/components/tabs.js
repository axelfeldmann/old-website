import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/actions';

const mapStateToProps = (state) => ({
  curTab: state.tab
});

const mapDispatchToProps = (dispatch) => ({
  setTab: (tab) => () => dispatch(Actions.setTab(tab))
});

const makeTabLabels = (children, setTab) => children.map((tp, idx) => (
  <div className='tabLabel' onClick={ setTab(idx) } key={ idx }>
    { tp.props.label }
  </div>
))

const Tabs = ({ curTab, setTab, children }) => (
  <div className='tabs'>
    <div className='tabLabels'> { makeTabLabels(children, setTab) } </div>
    { children[curTab] }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);