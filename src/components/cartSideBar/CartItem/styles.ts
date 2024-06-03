import styled from "styled-components";

export const CartItemCard = styled.div`
	background-color: ${(props) => props.theme["white"]};
	color: ${(props) => props.theme["black"]};
	width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	position: relative;
	border-radius: 8px;

	@media (min-width: 520px) {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}
`;

export const RemoveButton = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	color: ${(props) => props.theme["black"]};
	font-size: 1.5rem;
  cursor: pointer;
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

export const CardFooter = styled.section`
	width: 100%;
  padding: 1rem 1.25rem;
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const QuantityButton = styled.div`
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${(props) => props.theme["gray-100"]};
	border-radius: 4px;

	span {
		text-align: center;
		width: 30px;
		border-left: 1px solid ${(props) => props.theme["gray-100"]};
		border-right: 1px solid ${(props) => props.theme["gray-100"]};
	}

	button {
    flex: 1;
		background-color: ${(props) => props.theme["white"]};
    border: 0;
    font-size: 1.5rem;
    cursor: pointer;
	}
`; 