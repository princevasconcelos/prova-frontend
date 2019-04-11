import styled from 'styled-components';

const Resultlist = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 100vh;
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

export default Resultlist
