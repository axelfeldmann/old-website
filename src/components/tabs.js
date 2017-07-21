import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/actions';
import classnames from 'classnames';

const mapStateToProps = (state) => ({
  curTab: state.tab
});

const mapDispatchToProps = (dispatch) => ({
  setTab: (tab) => () => dispatch(Actions.setTab(tab))
});

const makeTabLabels = (children, setTab, curTab) => children.map((tp, idx) => {
  const classes = classnames('label', {
    selected: (idx === curTab)
  });
  return (
    <div className={ classes } onClick={ setTab(idx) } key={ idx }>
      { tp.props.label }
    </div>
  );
});

const Tabs = ({ curTab, setTab, children }) => (
  <div className='tabs'>
    <div className='tab-labels'>
      { makeTabLabels(children, setTab, curTab) }
    </div>
    { children[curTab] }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);