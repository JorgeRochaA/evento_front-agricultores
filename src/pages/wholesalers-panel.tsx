import styled from "styled-components";
import Aside from "./layout/aside";
import WholesalerListOptions from "../components/wholesaler/wholesaler-options";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { filterWholesalersAsync } from "../redux/slices/wholesalers";
import List from "../components/wholesaler/wholesaler-list";
import Filter from "../components/wholesaler/wholesaler-filter";
import Paginate from "../components/wholesaler/wholesaler-paginate";

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 91vh;
	background-color: var(--color9);
	box-sizing: border-box;
`;	
const Main = styled.main`
	flex: 0 0 86%;
	margin-left: 140px;
	display: flex;
	flex-direction: column;
`;

const MainArticle =  styled.article`
	display: flex;
	height: 100%;
`
const MainColumn = styled.section<{basis: string}>`
	flex: 0 0 ${props => props.basis};
	height: 100%;
`

const PanelUser = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(filterWholesalersAsync(null));
	}, []);

	return (
		<Container>
			<Aside />
			<Main>
				<WholesalerListOptions />
				<MainArticle>
					<MainColumn basis="30%">
						<Filter />
					</MainColumn>
					<MainColumn basis="70%">
						<List />
						<Paginate />
					</MainColumn>
				</MainArticle>
			</Main>
		</Container>
	);
};

export default PanelUser;
