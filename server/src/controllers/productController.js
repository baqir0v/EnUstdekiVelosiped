import productModel from "../models/productModel.js";

const productActions = {
    createProduct: async (req, res) => {
        try {
            const { title, price, image, categories, discount, sale } = req.body
            const newProduct = new productModel({
                title: title,
                price: price,
                image: image,
                categories: categories,
                discount: discount,
                sale: sale
            })
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.status(500).json({ message: error })

        }
    },
    getAllProducts: async (req, res) => {
        try {
            const allproducts = await productModel.find({})
            res.send(allproducts)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    getProductByID: async (req, res) => {
        try {
            const { id } = req.params
            const product = await productModel.findById(id)
            res.send(product)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await productModel.findByIdAndDelete(req.params.id)
            res.send(`${product.title} deleted`)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }, updateProduct: async (req, res) => {
        try {
            const updateFields = req.body;
            const update = await productModel.findByIdAndUpdate(req.params.id, updateFields)
            if (!update) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.send(`${update.title} updated`)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}

export default productActions