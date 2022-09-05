import { useState } from "react"

const useTimerMessage = (seconds: number) => {
    const [showMessage, setShowMessage] = useState<boolean>(false)
    let timer:ReturnType<typeof setTimeout>

    const initTimer = () => { 
        setShowMessage(true)
        if(timer) clearInterval(timer)
        timer = setTimeout(function(){
            setShowMessage(false)
        }, seconds * 1000);
    }
    
    const activateShowMessage  = () => setShowMessage(true)    
    const disabledShowMessage  = () => setShowMessage(false)    

    return {showMessage, initTimer, activateShowMessage, disabledShowMessage}
}

export default useTimerMessage