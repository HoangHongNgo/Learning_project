import { useState } from "react";

const AddNewProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const [ShowDetail, setShowDetail] = useState(true);

    const hanldeHideShow = (status) => {
        setShowDetail(status)
    }


    const AddNewBtn = () => {
        let product = { name, price, size, color };

        let productList = localStorage.getItem("productList");
        
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push(product);
            localStorage.setItem("productList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productList", JSON.stringify([product]))
        }
        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
    }


    return (
        <div>
            {
                ShowDetail === true && <fieldset>
                    <legend>ADD NEW PRODUCT</legend>
                    <div className="input-product">
                        <label>Name:</label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Price:</label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Size:</label>
                        <input value={size} type="text" onChange={(event) => setSize(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Color:</label>
                        <input value={color} type="text" onChange={(event) => setColor(event.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => AddNewBtn()}>+Add New</button>
                    </div>
                </fieldset>

            }
            {
                ShowDetail === true && <div onClick={() => hanldeHideShow(false)}>Hide</div>
            }
            {
                ShowDetail === false && <div onClick={() => hanldeHideShow(true)}>Show</div>
            }
            <div>{localStorage.getItem("productList")}</div>
        </div>

    )
}

export default AddNewProduct;