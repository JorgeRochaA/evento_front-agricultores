import { user, wholesaler } from "../../../types/index";
import "./itemWholesalerStyles.css";

interface items extends wholesaler{
    image:string,
    onContact?: (wholesaler: wholesaler)=>void,
}

function ItemWholesaler(itemsObj:items) {

    const products: string[] = itemsObj.productType.split(',')

    const handleOnContact = () => {
        if(typeof itemsObj.onContact === 'function'){
            const {image, onContact, ...data} = itemsObj
            itemsObj.onContact(data)
        }

    }

  return (
    <div className="card-main-container">
        <div className="card-img-container">
            <img src={itemsObj.image} alt="image post" className="card-img"/>
        </div>
        <div>
            <h3 className="card-main-title">
                <strong className="card-title">{itemsObj.name}</strong>|
                <span className="card-country">{itemsObj.country}</span>|
                <span className="card-main-badge">{itemsObj.sector}</span>
            </h3>
            <p className="card-description">{itemsObj.description}</p>
            <p className="card-secondary-container-badges">
                {
                    products.map((product,index) =>(
                        <span
                            className="card-secondary-badge"
                            key={index}
                        >
                            {product}
                        </span>
                    ))
                }
            </p>
        </div>
        <div className="card-btn-container">
            <button className="card-btn" onClick={handleOnContact}>Contactar ✉</button>
        </div>
    </div>
  )
}

export default ItemWholesaler