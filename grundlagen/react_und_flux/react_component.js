import { Component, PropTypes } from 'react';

class MenuItem extends Component {
	render() {
		const { name, active } = this.props;
		return <li className={active ? 'active' : null}>{name}</li>;
	}
}

class Menu extends Component {
	render() {
		const { menuItems } = this.props;
		return (
			<ul>
				{menuItems.map(({ active, name }, index) =>
					<MenuItem key={index} active={active}, name={name} />)}
			</ul>
		);
	}
}

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
};

Menu.propTypes = {
	menuItems: PropTypes.arrayOf(MenuItem.propTypes).isRequired
};
