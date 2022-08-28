import {HalfContainer} from "./styled";
import { Label, Error } from "../common";
import { FieldError } from "react-hook-form";

interface params {
    label: string
    children: React.ReactNode
    error?: FieldError
}

const App = (params: params) => {
	return (
		<HalfContainer>
			<Label>{params.label}</Label>
            {params.children}
            {params.error && <Error style={{fontSize: '.8rem'}}>{params.error.message}</Error>}
		</HalfContainer>
	);
};

export default App;
