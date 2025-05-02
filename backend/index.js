const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user');
const groupRoutes = require('./routes/group');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));

app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
