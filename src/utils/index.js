
import styles from './constraint'

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getPopularityByValue(value) {
	if (value > 80) return {
		name: 'Hot',
		color: `${styles.colors.popularity.hot}`
	};
	if (value > 60) return {
		name: 'Cool',
		color: `${styles.colors.popularity.cool}`
	};
	if (value > 30) return {
		name: 'Regular',
		color: `${styles.colors.popularity.regular}`
	};
	if (value > 0) return {
		name: 'Underground',
		color: `${styles.colors.popularity.underground}`
	};
	return {
		name: '',
		color: 'transparent'
	};
}

export { millisToMinutesAndSeconds, getPopularityByValue }
