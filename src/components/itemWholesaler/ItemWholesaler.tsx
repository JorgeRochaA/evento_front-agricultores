import "./itemWholesalerStyles.css";

function ItemWholesaler({ id, image, name, country, sector, description, products}: 
                        { id:number, image:string ,name:string, country:string, sector:string, description:string, products:string[]}) {
  return (
    <div className="card-main-container">
        <div className="card-img-container">
            <img src={image} alt="image post" className="card-img"/>
        </div>
        <div>
            <h3 className="card-main-title">
                <strong className="card-title">{name}</strong>|
                <span className="card-country">{country}</span>|
                <span className="card-main-badge">{sector}</span>
            </h3>
            <p className="card-description">{description}</p>
            <p className="card-secondary-container-badges">
                {
                    products.map(product =>(
                        <span className="card-secondary-badge">{product}</span>
                    ))
                }
            </p>
        </div>
        <div className="card-btn-container">
            <button className="card-btn">Contactar ✉</button>
        </div>
    </div>
  )
}

export default ItemWholesaler