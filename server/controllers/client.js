import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"

export const getProducts = async (req, res) => {
    try {
        //try implementing from general as of that from user for product and productstat, might work
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                //productstat accessed via productid itself(forign key: productid in productstat)
                //refer diagram
                const stat = await ProductStat.find({
                productId: product._id
            })
            return {
                ...product._doc,
                stat,
            }
        })
    )

    res.status(200).json(productsWithStats);
} catch (error) {
        res.status(404).json({ message: error.message})
    }
}