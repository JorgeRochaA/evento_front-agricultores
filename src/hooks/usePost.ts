import { useState } from "react"
import useTimerMessage from "./useTimerMessage"

const usePost = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {initTimer, showMessage} = useTimerMessage(5)

    const init = async <T>(post: () => Promise<T>) => {
                
        try{
            setLoading(true)
            const res = await post()
            return res

        }catch(error) {

        }finally{
            setLoading(false)
        }

        
    }

    return {loading, init}
}


export default usePost