import styled from 'styled-components';

import styles from '../../utils/constraint';

const StyledBadge = styled.span`
	color: ${styles.colors.white};
	font-size: 12px;
	padding: 0 10px;
	margin: 0 4px;
	border-radius: 1000px;
	vertical-align: super;
	background-color: ${({ color }) => color};
`;

export default StyledBadge;
