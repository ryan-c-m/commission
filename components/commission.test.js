import 'react-native';
import React from 'react';
import Commission from './commission';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Commission />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

