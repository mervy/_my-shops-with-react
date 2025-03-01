import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/produtRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

connectDB();

/*const allowedOrigins =
    process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL_PROD] // Em produção, apenas a URL do Render
        : [process.env.FRONTEND_URL, 'http://localhost:3000', 'http://localhost:5173']; // Em desenvolvimento, permite localhost
        */
const allowedOrigins = ['https://my-shops-with-react.onrender.com'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

//Routes
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
