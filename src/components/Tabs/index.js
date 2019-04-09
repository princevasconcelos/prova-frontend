import React from 'react';

import Container from './styles'

import Tab from './Tab';

const Tabs = () => (
	<Container>
		<Tab name="Artists" selected />
		<Tab name="Albums"/>
		<Tab name="Tracks"/>
	</Container>
)

export default Tabs;
