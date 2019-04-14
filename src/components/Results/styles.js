import styled from 'styled-components';

import styles from '../../utils/constraint';

const Resultlist = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: ${({ type }) => getSizeByType(type)};

	@media (max-width: ${styles.screens.tablet}) {
		justify-content: center;
  };
`

const getSizeByType = type => {
	return {
		album: '2000px',
		artist: '1500px',
		track: '600px'
	}[type]
}

const TotalMessage = styled.span`
	font-size: 16px;
	color: ${styles.colors.black};
`

const LoginMessage = styled.span`
	font-size: 16px;
	margin-bottom: 8px;
`

export { Resultlist, TotalMessage, LoginMessage }
