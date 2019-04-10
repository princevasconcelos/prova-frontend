import styled from 'styled-components';

import styles from '../../utils/constraint'

const StyledInput = styled.input`
	width: 330px;
	border: none;
	outline: none;
	padding: 12px 8px;
	margin: ${styles.sizes.large} 0px;
	font-size: ${styles.sizes.medium};
	color: ${styles.colors.darkerGray}

	::placeholder {
		color: ${styles.colors.gray};
		font-size: ${styles.sizes.medium};
  	opacity: 0.8;
	}
`
export default StyledInput;
