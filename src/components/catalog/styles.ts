import styled from "styled-components";

export const CatalogContainer = styled.section`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	flex: 1;


	@media (min-width: 481px) {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 4.375rem;
	}
`;

export const ProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 1rem;

	@media (min-width: 481px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
	}
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 0.5rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	@media (min-width: 481px) {
		flex-direction: row;
		padding: 3rem 0;
		width: 100%;
		justify-content: center;
		gap: 2rem;
	}
`;

export const SelectContainer = styled.select`
	background-color: ${(props) => props.theme["white"]};
	border-radius: 8px;
	height: 1.5rem;
	cursor: pointer;
`;

export const OrderContainer = styled.button`
	background-color: ${(props) => props.theme["white"]};
	border: 0;
	color: ${(props) => props.theme["black"]};
	cursor: pointer;
`;
