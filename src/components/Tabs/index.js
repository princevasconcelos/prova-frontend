import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../store/ducks/tab';

import Container from './styles'

import Tab from './Tab';

class Tabs extends React.Component {
	handleClick = type => this.props.changeTab(type)

	render() {
		const { tab } = this.props;
		return (
			<Container>
				<Tab name="Artists" onClick={this.handleClick} selected={tab === 'Artists'} />
				<Tab name="Albums" onClick={this.handleClick} selected={tab === 'Albums'} />
				<Tab name="Tracks" onClick={this.handleClick} selected={tab === 'Tracks'} />
			</Container>
		)
	}
}

const mapStateToProps = ({ tab }) => ({
	tab
})

export default connect(
	mapStateToProps,
	{
		changeTab
	}
)(Tabs);
