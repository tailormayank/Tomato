import { response } from 'express';
import foodModel from '../models/FoodModel.js';
import fs from 'fs';

// add food items

const addFood = async(req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        disription:req.body.disription,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save()
        res.json({success:true, massage:"Food Add"})
    } catch (error) {
        console.log("Error");
        res.json({success:false, massage:"Error"})
        
    }

}

//all food list 
const listFood = async (req , res) =>{
        try {
            const foods = await foodModel.find({});
            res.json({success:true, data:foods})
        } catch (error) {   
            console.log("Error");
            res.json({success:false, massage:"error"})
        }
}

//remove food items 

const removeFood = async (req , res) => {
        try {
            const food = await foodModel.findById(req.body.id);
            fs.unlink(`uploads/${food.image}` , ()=>{});

            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true, massage:"food removed"})
        } catch (error) {
            console.log("Error");
            res.json({success:false, massage:"Error"})
        }
} 

export {addFood, listFood, removeFood};