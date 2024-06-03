import styled from "styled-components";

export const FooterContainer = styled.section`
	background-color: ${(props) => props.theme["gray-100"]};
	color: ${(props) => props.theme["black"]};
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center
`;
