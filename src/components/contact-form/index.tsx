import * as Contact from './styled'
import {Label, Error} from '../common'
import MessageUser from '../common/messageUser'
import React, { useEffect, useState } from 'react'
import account from '../../assets/account.png'
import ProductButton from './productButton'
import {response, sendMessage} from '../../services/contact'
import {useForm, SubmitHandler} from 'react-hook-form'
import {formValues } from '../../services/contact'
import {schemaContact } from '../../schemas/contact'
import {yupResolver } from '@hookform/resolvers/yup';
import {messageType, wholesaler } from '../../types'
import usePost from '../../hooks/usePost'

const styleClose:React.CSSProperties = {
    position: 'absolute',
    top: '1.5rem',
    right: '1rem',
    cursor: 'pointer'
}

const productsWholesaler:string[] = ['Product1', 'Product2', 'Product3']

const user: wholesaler =  {
    appUser: {username: 'user2'},
    productType: 'product1,product2,product3',
    country: 'Peru',
    description: 'Empresa', 
    name: 'Nombre',
    sector: ''
}

interface params {
    userFarmer: string;
    userWholesaler: wholesaler
}

const App = (params: params):JSX.Element => {
    const [products, setProducts ] = useState<string[]>([])
    const {loading, init, error, showMessage, type}  = usePost()
    const [data, setData] = useState<response|null>(null)
    const {register, handleSubmit, formState:{errors}, setValue} = useForm<formValues>({
        mode: 'onBlur',
        resolver: yupResolver(schemaContact)
    })
    
    useEffect(()=>{
        setValue('userFarmer', params.userFarmer)
        setValue('userWholesaler', params.userWholesaler.appUser.username)
    },[params.userFarmer, params.userWholesaler])
    
    const handleSelect = (name:string, state: boolean) => { 
        const productsNew = state? [...products, name] : products.filter(p => p !== name)
        setProducts(productsNew)
        setValue('products', productsNew, { shouldValidate: true })
        
    }

    const onSubmit: SubmitHandler<formValues>  = async (data) => {          
        const res = await init<response>(() => sendMessage(data))
        setData(res)
    }

    return (
        <Contact.CardContact onSubmit={handleSubmit(onSubmit)}>
            <Contact.Title>Formulario de contacto</Contact.Title>
            {showMessage &&
             <MessageUser type={type}>
                <p>
                    {type === messageType.SUCCEEDED? data?.message : error?.message}
                </p>
             </MessageUser>
            }
            <Contact.Body>
                <Contact.HalfContainer>
                    <Label>Mayorista</Label>
                    <Contact.InputContact icon={account} readOnly {...register("userWholesaler")}/>
                    {errors.userWholesaler && <Error>{errors.userWholesaler.message}</Error>}
                </Contact.HalfContainer>
                <Contact.HalfContainer>
                    <Label>Mensaje</Label>
                    <Contact.Message 
                        cols={30} 
                        rows={10} 
                        placeholder='Escriba su mensaje ...'
                        {...register("message")}
                        >
                    </Contact.Message>
                    {errors.message && <Error>{errors.message.message}</Error>}
                </Contact.HalfContainer>
                <Contact.ProductContainer>
                    <Label>Productos que solicita el mayorista</Label>
                    <Contact.ProductList>
                        {
                            params.userWholesaler.productType.split(',').map((v, i)=><ProductButton 
                                key={i} 
                                name={v} 
                                onSelect={handleSelect}
                            />)
                        }
                    </Contact.ProductList>
                    {errors.products && <Error>{errors.products.message}</Error>}
                </Contact.ProductContainer>
            </Contact.Body>
            <Contact.Footer>
                <Contact.SendButton>
                    {loading? 'Enviando mensaje ' :'Enviar Mensaje'}
                </Contact.SendButton>
            </Contact.Footer>
        </Contact.CardContact>
    )
}

App.defaultProps = {
    userFarmer: 'user',
    userWholesaler: user
}

export default App