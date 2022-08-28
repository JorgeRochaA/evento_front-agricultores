import React from "react";
import { errorService } from "../../services/types";
import { messageType } from "../../types";
import MessageUser from "../common/messageUser";

interface params {
	type: messageType;
	message: string;
	error: errorService | null;
	showMessage: boolean
}

const App = (params: params) => {

	if(!params.showMessage){
		return <></>
	}

	return (
		<MessageUser type={params.type}>
			<p>
				{
                    params.type === messageType.SUCCEEDED
					? params.message
					: params.error?.message
                }
			</p>
		</MessageUser>
	);
};

export default App;
