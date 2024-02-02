import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import UpdateProduct from './UpdateProduct';

function ProductGrid() {
  const [data, setProd] = useState([]);
  const [isupdate,setUpdate]=useState(false);
  const [product,setProduct]=useState({
    id:1000,
    name:'',
    description:'',
    price:0
  });

  useEffect(() => {
    axios.get("https://localhost:7071/api/Product/GetProductDetails")
      .then((response) => {
        console.log(response.data);
        setProd(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data=>", data);

  function handleDelete(pid) {
    console.log("Please delete product with id:", pid);
    // Add logic for deleting the product using the id
    axios.delete("https://localhost:7071/api/Product/DeleteEmployee?pid="+pid)
    .then((response) => {
    console.log(response)
    alert("Product id="+pid+" deleted Successfully...");
    window.location.reload();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }

  function HandleUpdate(p){
setUpdate(true);
setProduct(p)
console.log(isupdate)
console.log(product);
  }
  const products = data.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <button className="btn btn-success" onClick={()=>{HandleUpdate(product)}}>Update</button>
        &nbsp;&nbsp;
        <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <center>
        <h3>Product Details....</h3>
      </center>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
      {isupdate?<UpdateProduct prod={product}></UpdateProduct>:<ProductDetails></ProductDetails>}
    </div>
  );
}

export default ProductGrid;
