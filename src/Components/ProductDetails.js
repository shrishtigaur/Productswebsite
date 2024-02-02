import { Fragment, useState } from "react";
import axios from 'axios';
function ProductDetails() {
    const [pid,setPid]=useState(1000);
    const [pname,setPname]=useState('');
    const [pdes,setPdec]=useState('');
    const [pprice,setPprice]=useState(0);

    function HandleAdd(e){
        e.preventDefault()
        const product={
            id:pid,
            name:pname,
            description:pdes,
            price:pprice
        };
    axios.post("https://localhost:7071/api/Product/AddProduct",product)
    .then((response) => {
      console.log(response);
      alert("Product Details=>"+pid+","+pname+","+pdes+","+pprice+" Saved Successfully...");
      window.location.reload();
    })
    .catch((err)=>{
        alert("Some Issue ocurred please try again..."+err.message);
    });
       
    }
    function HandleReset(e)
    {
        e.preventDefault();
        setPid(1000);
        setPname('');
        setPdec('');
        setPprice(0);
    }
  return (
    <div className="container" style={{textAlign: "center"}}><h2>Add Product Here...</h2> 
    <form>
    <div className="formGroup">
      <label>Enter ID of Product:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" min={1000} value={pid} onChange={(e)=>{setPid(e.target.value)}} className="formControl" placeholder="Enter Product ID here..." />
      </label>
      </div><br/>
      <div className="formGroup">
      <label>Enter Name of Product:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className="formControl" value={pname} onChange={(e)=>{setPname(e.target.value)}} placeholder="Enter Product Name here..." />
      </label>
      </div><br/>
      <div className="formGroup">
      <label>Enter Description of Product:
        <input type="text" className="formControl" value={pdes} onChange={(e)=>{setPdec(e.target.value)}} placeholder="Enter Product Description here..." />
      </label>
      </div><br/>
      <div className="formGroup">
      <label>Enter Price of Product:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" min={0} value={pprice} onChange={(e)=>{setPprice(e.target.value)}} className="formControl" placeholder="Enter Product Price here..." />
      </label>
      </div><br/>
      <button className="btn btn-primary" onClick={(e)=>HandleAdd(e)}>Add Product</button>&nbsp;
      <button className="btn btn-danger" onClick={(e)=>HandleReset(e)}>Clear</button>
      </form>
      <br/>
      <br/>
    </div>   
  );
}

export default ProductDetails;
