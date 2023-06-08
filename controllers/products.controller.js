import Product from "../models/products.model.js";

export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        
        if (products.length > 0){
            res.status(200).json({
                status: true,
                data: products,
                message: "Products fetched successfully"
            })
        }else{
            res.status(400).json({
                status: false,
                message: "No found products"
            })
        }
       

    } catch (error) {
        console.log(error);
    }
}

export const postProducts = async (req, res) =>{
    try {
        // console.log(req.body);
        const prods = await Product(req.body);
        await prods.save();
        res.status(200).json({
            status: true,
            data: prods,
            message: "Products created successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

export const getProductsById = async (req, res) =>{
    try {
        // console.log(req.body);
        const prods = await Product.findOne({id: req.params.id});
        await prods.save();
        res.status(200).json({
            status: true,
            data: prods,
            message: "Product fetched successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductById = async (req, res) =>{
    try {
        // console.log(req.body);
        const prods = await Product.findOneAndDelete({id: req.params.id});   
        res.status(200).json({
            status: true,
            data: prods,
            message: "Products deleted successfully"
        })
    } catch (error) {
        console.log(error);
    }
}