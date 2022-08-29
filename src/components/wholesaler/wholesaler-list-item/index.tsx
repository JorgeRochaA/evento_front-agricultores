import { wholesaler } from "../../../types/index";
import styles from "./itemWholesalerStyles.module.css";

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
    <div className={styles.card_main_container}>
        <div className={styles.card_img_container}>
            <img src={itemsObj.image} alt="image post" className={styles.card_img}/>
        </div>
        <div>
            <h3 className={styles.card_main_title}>
                <strong className={styles.card_title}>{itemsObj.name}</strong>|
                <span className={styles.card_country}>{itemsObj.country}</span>|
                <span className={styles.card_main_badge}>{itemsObj.sector}</span>
            </h3>
            <p className={styles.card_description}>{itemsObj.description}</p>
            <p className={styles.card_secondary_container_badges}>
                {
                    products.map((product,index) =>(
                        <span
                            className={styles.card_secondary_badge}
                            key={index}
                        >
                            {product}
                        </span>
                    ))
                }
            </p>
        </div>
        <div className={styles.card_btn_container}>
            <button className={styles.card_btn} onClick={handleOnContact}>Contactar ✉</button>
        </div>
    </div>
  )
}

export default ItemWholesaler