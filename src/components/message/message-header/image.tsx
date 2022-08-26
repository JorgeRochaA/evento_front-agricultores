import styled from 'styled-components';

//45px
const ImageContainer = styled.div`
  height: 30px; 
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Letter = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Dot = styled.div`
  height: 10px;//15px
  width: 10px;
  background-color: #47b4ac;
  position: absolute;
  border-radius: 50%;
  bottom: 1px;
  left: 20px;//30px
  border: 3px solid white;
`;

interface params {
  name: string;
}

const randomColor = (): string => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
}

const App = (params: params) => {
  const color = randomColor()
  return (
    <ImageContainer style={{backgroundColor: color}}>
        <Letter>{params.name.charAt(0)}</Letter>
        <Dot className="dot"></Dot>
    </ImageContainer>
  )
}

export default App