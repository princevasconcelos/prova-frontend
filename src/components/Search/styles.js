import styled from 'styled-components';

import styles from '../../utils/constraint'

const StyledInput = styled.input`
	display: block;
	width: 80%;
	border: none;
	outline: none;
	padding: 12px 8px;
	margin-top: 28px;
	font-size: ${styles.fonts.medium};
	color: ${styles.colors.darkerGray}

	::placeholder {
		color: ${styles.colors.gray};
		font-size: ${styles.fonts.medium};
  	opacity: 0.8;
	}
`
export default StyledInput;
