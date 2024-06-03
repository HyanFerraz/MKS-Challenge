import { motion } from "framer-motion";
import styled from "styled-components";

export const SidebarContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	width: 300px;
	height: 100%;
	background: ${(props) => props.theme["blue"]};
	color: ${(props) => props.theme["white"]};
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
	z-index: 1000;
	overflow: scroll;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-weight: 700;

	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0;
	}
`;

export const CartHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 1.5rem;

	h2 {
		display: flex;
		flex-direction: column;
		width: 180px;
	}
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme["white"]};
	font-size: 20px;
	cursor: pointer;
`;

export const CartItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	overflow: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0;
	}
`;

export const TotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	height: 100px;
	font-size: 1rem;
`;

export const CheckoutButton = styled.button`
	width: 100%;
	padding: 1.5rem;
	background: ${(props) => props.theme["black"]};
	color: ${(props) => props.theme["white"]};
	border: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 700;
`;
