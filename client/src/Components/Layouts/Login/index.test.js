import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import Dashboard from '../Dashboard';

test('Dashboard matches snapshot', () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter context={context}>
      <Dashboard />
    </StaticRouter>,
  );
  expect(component).toMatchSnapshot();
});
