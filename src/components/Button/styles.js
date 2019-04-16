import styled from 'styled-components';

import styles from '../../utils/constraint';

const StyledButton = styled.button`
	display: block;
	margin: 0 auto;
	cursor: pointer;
	border-radius: 1000px;
	border: none;
	outline: none;
	padding: 12px 24px;
	color: white;
	font-size: 24px;
	background-color: ${styles.colors.theme};

	:hover {
		opacity: 0.8;
	}

	@media (min-width: ${styles.screens.tablet}) {
		margin: 16px 0;
	}
`;

export default StyledButton;
