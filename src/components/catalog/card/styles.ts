import styled from "styled-components";

export const CardContainer = styled.section`
	width: 15.625rem;
	max-height: 20.25rem;
	height: 100%;
	border-radius: 4px 8px;
	box-shadow: rgba(0, 0, 0, 0.135) 0px 2px 8px;
	display: flex;
	flex-direction: column;

	div {
		display: flex;
		flex-direction: column;
		padding: 1rem 1rem;
		flex: 1;
		gap: 0.5rem;
	}

	h2 {
		font-size: 0.625rem;
		font-weight: 300;
		flex: 1;
		align-content: start;
	}
`;

export const ProductSection = styled.section`
	display: flex;
	height: 2.5rem;
	justify-content: space-between;
	align-items: start;

	h1 {
		font-size: 1rem;
		font-weight: 400;
	}
`;

export const PriceTag = styled.section`
	display: flex;
	flex-direction: row;
	padding: 0.25rem;
	background-color: ${(props) => props.theme["gray-800"]};
	color: ${(props) => props.theme["white"]};
	font-weight: 700;
	height: 1.625rem;
	border-radius: 6px;
`;

export const BuyButton = styled.button`
	width: 100%;
	padding: 0.5rem 0;
	background-color: ${(props) => props.theme["blue"]};
	color: ${(props) => props.theme["white"]};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	font-weight: 700;
	cursor: pointer;
`;
