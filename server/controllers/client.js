import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";


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
};

export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);
} catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export const getTransactions = async (req, res) => {
    try {
        // sort should look like: {"field": "userId", "sort": "desc"}
        const { page = 1, pageSize = 20, sort= null, search= "" } = req.query

        //formatting sort shouldbe like { userId: -1}
        const generalSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [ sortParsed.field]: sortParsed.sort = "ase" ? 1 : -1
            };

            return sortFormatted;
        }
        const sortFormatted = Boolean(sort) ? generalSort() : {};

        //query
        const transactions = await Transaction.find({
            $or: [
                {cost: {$regex: new RegExp(search, "i")}},
                {userId: {$regex: new RegExp(search, "i")}}
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize)

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i"}
        })
        //query-
        res.status(200).json({
            transactions,
            total,
    });
} catch (error) {
        res.status(404).json({ message: error.message})
    }
};