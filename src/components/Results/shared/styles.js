import styled from 'styled-components';

import styles from '../../../utils/constraint';

const getSizeByType = (type = 'box') => {
  const sizes = {
    row: {
      width: '100%',
      height: '80px',
    },
    box: {
      width: '300px',
      height: '300px',
    },
    card: {
      width: '100%',
      height: 'auto;',
    },
  };
  return sizes[type];
};

const StyledListItem = styled.div`
	position: relative;
	width: ${({ type }) => type && getSizeByType(type).width};
	height: ${({ type }) => type && getSizeByType(type).height};


	${({ type }) => type === 'row'
		&& `
		display: flex;
		align-items: center;
		margin-top: 16px;
		box-shadow: 0 4px 6px -6px ${styles.colors.darkestGray};
	`}

	${({ type }) => type === 'box'
		&& `
		margin: 20px;

		@media (min-width: ${styles.screens.tablet}) {
			a {
				right: -4px;
			}
			div div {
				left: 75px;
			}
  	};
	`}

	${({ type }) => type === 'card'
		&& `
		background-color: ${styles.colors.lightestBlue};
		display: flex;
		flex-direction: column;
		margin: 20px 0;

		@media (min-width: ${styles.screens.tablet}) {
			flex-direction: row;
  	};
	`}
`;

export { StyledListItem };
