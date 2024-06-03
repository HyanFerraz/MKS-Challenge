import styled from "styled-components";

export const HeaderContainer = styled.header`
	background-color: ${(props) => props.theme["blue"]};
	color: ${(props) => props.theme["white"]};
	width: 100%;

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 1.75rem 2rem;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
	}

	@media (min-width: 520px) {
		section {
			max-width: 1440px;
			padding: 1.75rem 4.375rem;
		}
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: end;
	gap: 0.5rem;
	font-weight: 300;
	font-size: 1.25rem;
	line-height: 1.25rem;

	span {
		font-weight: 600;
		font-size: 2.5rem;
	}
`;

export const CartContainer = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background-color: ${(props) => props.theme["white"]};
	color: ${(props) => props.theme["black"]};
	padding: 0.75rem 1rem;
	border-radius: 8px;
	border: 0;
	box-shadow: 0;
	cursor: pointer;

	p {
		font-weight: 700;
		font-size: 1.125rem;
	}
`;
