import styled from "styled-components";
import MessageCard from "../message-card";
import { message } from "../../../types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 1px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: transparent;
    }
`	    
export interface params {
    messages: message[]
    username: string;
}



const App = (params: params): JSX.Element =>{

    const isUserMessage = (sender:message["sender"]) =>  {

        return sender? params.username === sender : false
    }

    return (
        <>
            <Container>
                {
                    params.messages.map((v, i) => 
                        <MessageCard 
                            key={i} 
                            isTextSent={isUserMessage(v.sender)}
                            message={v.message}
                        />
                    )
                }
            </Container>
        </>
    )

};

export default App;
