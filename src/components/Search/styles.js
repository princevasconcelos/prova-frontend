import styled from 'styled-components';

import styles from '../../utils/constraint';

const StyledInput = styled.input`
	width: 90%;
	margin: 0 10px;
	border: none;
	outline: none;
	padding: 12px 8px;
	margin: ${styles.sizes.large} 0px;
	font-size: ${styles.sizes.medium};
	color: ${styles.colors.darkerGray};

	::placeholder {
		color: ${styles.colors.gray};
		font-size: ${styles.sizes.medium};
  	opacity: 0.8;
	};

	@media (min-width: ${styles.screens.tablet}) {
    width: 500px;
  };

	@media (min-width: ${styles.screens.desktop}) {
    width: 700px;
  };
`
export default StyledInput;
