import 'react-native';
import React from 'react';
import CommissionItem from './commission-item';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <CommissionItem />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

