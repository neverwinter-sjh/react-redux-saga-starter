import React from 'react';
import CounterContainer from 'containers/counter/CounterContainer';
import TestHooks from 'components/test/TestHooks';

const Main = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TestHooks />
    </div>
  );
};

export default Main;
