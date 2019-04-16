import styled from 'styled-components';

import styles from '../../../utils/constraint';

const Thumbnail = styled.img`
	width: 64px;
	height: 64px;
	margin-right: 16px;
	margin-left: 8px;
`;

const Title = styled.h1`
	color: ${styles.colors.black};
	font-size: ${styles.sizes.small};

	@media (min-width: ${styles.screens.tablet}) {
		font-size: ${styles.sizes.medium};
	}
`;

const Subtitle = styled.small`
	font-size: ${styles.sizes.xsmall};
	color: ${styles.colors.darkerGray};
`;

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 66px;
`;

const Duration = styled.span`
	font-size: ${styles.sizes.small};
	color: ${styles.colors.theme};
`;

export {
  Thumbnail, Title, Subtitle, FlexWrapper, Duration,
};
