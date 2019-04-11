import styles from 'styled-components';

const FlexContainer = styles.div`
	display: flex;
	flex-basis: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	background-image: linear-gradient(to right bottom, rgb(70, 77, 83), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
	background-repeat: no-repeat;
	background-size: cover;
`

export default FlexContainer;
