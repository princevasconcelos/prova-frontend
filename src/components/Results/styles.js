import styled from 'styled-components';

import styles from '../../utils/constraint';

const Resultlist = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: ${({ type }) => getSizeByType(type)};
`

const getSizeByType = type => {
	return {
		Albums: '2000px',
		Artists: '1500px',
		Tracks: '600px'
	}[type]
}

const Total = styled.span`
	font-size: 16px;
	color: ${styles.colors.black};
`

const LoginMessage = styled.span`
	font-size: 16px;
	margin-bottom: 8px;
`

export { Resultlist, Total, LoginMessage }
