
const isMobile = typeof window.orientation !== 'undefined';

const styles = {
	colors: {
		bgColor: '#191414',
		darkGray: '#b3b3b3',
		white: '#FFF',
		theme: '#1DB954'
	},
	fonts: {
		small: '14px',
		medium: '18px',
		large: isMobile ? '18px' : '24px'
	}
}

export default styles;
