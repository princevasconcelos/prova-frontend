import styles from 'styled-components';

const FlexContainer = styles.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${({ isAuthenticated }) => isAuthenticated ? 'flex-start' : 'center'};
	margin: 20px 0;
`

export default FlexContainer;

