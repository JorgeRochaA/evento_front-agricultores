import styled from 'styled-components'
import {Input, Button } from '../common'

export const CardContact = styled.form`
`
export const InputContact = styled(Input)<{icon:string}>`
    height: 2.5rem;
    border: 1px solid #ced4da;
    padding-left: 36px;
    background: url(${props => props.icon}) no-repeat left;
    background-size: 20px;
    background-position: 10px;
    color: var(--color3);
    &:focus{
        outline: 2px solid var(--color4);
    }
`

export const Title = styled.h3`
    text-align: left;
    color: var(--color3);
    padding-left: 1rem;
`

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
export const HalfContainer = styled.div`
    flex: 0 0 50%;
    padding: 1rem;

`

export const Message = styled.textarea`
    background-color: #F9F9FB;
    color: var(--color3);
    border-radius: 5px;
    width: 100%;
    border: 0;
    font-size: 1rem; 
    font-family: Arial, Helvetica, sans-serif;
    padding: .5rem;
    resize: none;
    &:focus{
        outline: 2px solid var(--color4);
    }   
`

export const ProductContainer = styled.div`
    flex: 0 0 100%;
    padding-left: 1rem;
`
export const ProductList = styled.div`
    display: flex;
    gap: 10px;
    margin: .5rem 0;
`


export const Footer = styled.div`
    display:flex;
    justify-content: center;
    margin: .8rem;  
`

export const SendButton = styled(Button)`
    padding: .8rem 1.2rem;
    background-color: var(--color10);
    &:hover{
        background-color: var(--color4);     
    }
`