import express from 'express';
import os from 'os';

const app = express();

const color = process.env.IMAGE_COLOR || 'Blank';
const hostname = os.hostname();
const platform = os.platform();

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `I\'m the ${color} image`,
        hostname,
        platform
    });
})

app.listen(3000, () => {
    console.log('App is running on port: 3000');
})