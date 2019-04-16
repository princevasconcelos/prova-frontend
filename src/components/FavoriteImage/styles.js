import styled from 'styled-components';

const RelativeWrapper = styled.div`
	position: relative;
`;

const ChildrenContent = styled.div`
	position: absolute;
	bottom: 12px;
	left: 60px;
`;

export { ChildrenContent, RelativeWrapper };
