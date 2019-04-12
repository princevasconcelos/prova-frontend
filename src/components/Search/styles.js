import styled from 'styled-components';

import styles from '../../utils/constraint';

const StyledInput = styled.input`
	width: 293px;
	margin: 0 10px;
	border-right: none;
	border-left: none;
	border-top: none;
	border-color: ${styles.colors.gray};
	outline: none;
	padding: 8px;
	margin: ${styles.sizes.large} 0px;
	font-size: ${styles.sizes.medium};
	color: ${styles.colors.darkerGray};

	::placeholder {
		color: ${styles.colors.gray};
		font-size: ${styles.sizes.medium};
  	opacity: 0.8;
	};
`
export default StyledInput;
