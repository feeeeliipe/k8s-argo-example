import express from 'express';

const app = express();

const color = process.env.IMAGE_COLOR || 'Blank';

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `I\'m the ${color} image`
    });
})

app.listen(3000, () => {
    console.log('App is running on port: 3000');
})