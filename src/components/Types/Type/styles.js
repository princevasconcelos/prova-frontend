import styled from 'styled-components';

import styles from '../../../utils/constraint';

const StyledLink = styled.a`
	color: ${styles.colors.darkGray};
	cursor: pointer;
	font-size: ${styles.sizes.large};
	font-weight: 700;
	letter-spacing: 0.25px;
	text-decoration: none;
	text-transform: uppercase;
	${({ selected }) => selected
		&& `
		color: ${styles.colors.black}
		box-shadow: 0 4px 0px -1px ${styles.colors.theme};
	`}

	:hover {
		opacity: 0.8;
		color: ${styles.colors.theme};
	}
`;

export default StyledLink;
