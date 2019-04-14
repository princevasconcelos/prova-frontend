import styled from 'styled-components';

import styles from '../../../utils/constraint'

const Title = styled.h1`
	font-size: ${styles.sizes.xlarge};
`

const Subtitle = styled.ul`
	font-size: 24px;
	margin: 12px 0;
`

const About = styled.div`
	width: auto;
	height: auto;
	margin: 15px;
`

const Followers = styled.span``

export { Title, Subtitle, About, Followers }
