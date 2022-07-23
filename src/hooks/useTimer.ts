import { useState } from "react"

const useTimer = (seconds: number) => {
    const [value, setValue] = useState<boolean>(false)
    let timer:ReturnType<typeof setTimeout>

    const initTimer = () => { 
        setValue(true)
        if(timer) clearInterval(timer)
        timer = setTimeout(function(){
            setValue(false)
        }, seconds * 1000);
    }

    return {value, initTimer}
}

export default useTimer