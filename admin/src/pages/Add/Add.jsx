import React, { useState } from 'react'
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = () => {

    const url = "http://localhost:4000";

    const [image, SetImage] = useState(false); 

    const [data, setData] = useState({
      name:"",
      discription:"",
      price:"",
      category:"Salad",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("discription",data.discription);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
              name:"",
              discription:"",
              price:"",
              category:"Salad",
            })
            SetImage(false);
            toast.success(response.data.massage)
        }
        else{
          toast.error(response.data.massage);

        }
    }


  return (
    <div className='add' >
      <form className='flex-col' onSubmit={onSubmitHandler} >
        <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>SetImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-discription flex-col">
            <p>Product Discription</p>
            <textarea onChange={onChangeHandler} value={data.discription} name="discription" rows="6" placeholder='Enter your content here'></textarea>
        </div>
        <div className="add-catagory-price">
            <div className="add-catagory flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Desert">Desert</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                    <option value="Other Dishes">Other Dishes</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹200' />
            </div>
        </div>
        <button type='Submit' className='add-btn' >ADD</button>
      </form>
    </div>
  )
}

export default Add
