import styled from 'styled-components';

import styles from '../../../utils/constraint'

const StyledTab = styled.a`
	flex: 0 0 100;
	color: ${styles.colors.darkGray};
	cursor: pointer;
	font-size: ${styles.fonts.large};
	font-weight: 700;
	letter-spacing: 0.25px;
	text-decoration: none;
	text-transform: uppercase;
	${({ selected }) => selected && `
		color: ${styles.colors.white}
		box-shadow: 0 4px 0px -1px ${styles.colors.theme};
	`}

	:hover {
		color: ${styles.colors.white};
	}
`

export default StyledTab
