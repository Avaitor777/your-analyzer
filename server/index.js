import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


// data import
import User from "./models/User.js";
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';
import { dataUser, 
    dataProduct, 
    dataProductStat, 
    dataTransaction,
    dataOverallStat, //2021 is only put to make it comprehensive, modify
    dataAffiliateStat,
} from "./data/index.js";



/* configuration part */
dotenv.config();
const app = express();

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* mongoose setup */
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

        /* ONLY ADD DATA ONE TIME */
        //AffiliateStat.insertMany(dataAffiliateStat);
        //User.insertMany(dataUser);
        //Product.insertMany(dataProduct);
        //ProductStat.insertMany(dataProductStat);
        //Transaction.insertMany(dataTransaction);
        //OverallStat.insertMany(dataOverallStat);
        
    })
    .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));
