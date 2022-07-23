import { CardFilters, Input, Label, ButtonRed} from '../form'
import { styleLabel } from '../styles/index'
import { useState } from "react";

function CardFilter({ title, placeholder}: { title: string, placeholder: string}) {

  const [valueInput, setValueInput] = useState<String[]>([])
  const [isEnter, setIsEnter] = useState<boolean>(false)

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setValueInput([event.target.value])

  const handleEvent= (event:any) => {
    if(event.key === 'Enter'){
      setIsEnter(true)
    }else{
      setIsEnter(false)
    }
  }

  const handleDelete= () => {
    valueInput.splice(0)
    setIsEnter(false)
  }
  
  return (
    <CardFilters>
      <Label>{title}</Label>
      <Input 
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleEvent}
      />
      {
        isEnter===true ? 
          valueInput.map((val, index)=> (
            <div key={index} style={styleLabel}>
              <Label>{val}</Label>
              <ButtonRed onClick={handleDelete}>✖</ButtonRed>
            </div>
          ))
        : <></> 
      }
    </CardFilters>
  )
}

export default CardFilter