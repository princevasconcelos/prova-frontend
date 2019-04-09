
const isMobile = typeof window.orientation !== 'undefined';

const styles = {
	colors: {
		bgColor: '#191414',
		gray: '#888',
		darkGray: '#b3b3b3',
		darkerGray: '#555',
		white: '#FFF',
		black: '#000',
		themeLight: '#1ED760',
		theme: '#1aa34a',
		themeDark: '#089918'

	},
	fonts: {
		small: isMobile ? '12px' : '24px',
		medium: isMobile ? '18px' : '42px',
		large: isMobile ? '24px' : '64px'
	}
}

export default styles;
