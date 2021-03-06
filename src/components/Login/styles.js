import styled from 'styled-components';

import styles from '../../utils/constraint';

const SpotifyButton = styled.button`
	display: flex;
	align-items: center;
	padding: 8px 12px;
	cursor: pointer;
	border: none;
	color: ${styles.colors.white};
	background-color: ${styles.colors.black};
	font-size: 22px;
	font-weight: 600;

	:hover {
		background-color: ${styles.colors.theme};
	}
`;

const SpotifyIcon = styled.img`
	margin-left: 6px;
	width: 32px;
	height: 32px;
`;

export { SpotifyButton, SpotifyIcon };
