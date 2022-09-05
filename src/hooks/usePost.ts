import { useState } from "react"
import { formatResponseErrorService } from "../services/base"
import { errorService } from "../services/types"
import { messageType } from "../types"
import useTimerMessage from "./useTimerMessage"

const usePost = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<errorService | null>(null)
    const {initTimer, showMessage, activateShowMessage, disabledShowMessage} = useTimerMessage(5)
    const [type, setType] = useState<messageType>(messageType.SUCCEEDED)
    
    const init = async <T>(post: () => Promise<T>) => {
        let response:T|null = null;
        try{
            disabledShowMessage()
            setType(messageType.SUCCEEDED)
            setLoading(true)
            response = await post()       
        }catch(error) {
            const responseError = formatResponseErrorService(error)   
            setError(responseError)
            setType(messageType.FAILED)            
        }finally{
            setLoading(false)
            activateShowMessage()
            initTimer()
        }

        return response
        
    }

    return {loading, init, error, showMessage, type}
}


export default usePost