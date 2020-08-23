const express = require('express');
const router = express.Router();
const isImageURL = require('is-image-url'); 

router.get('/',(req,res,next) => {
    let imageUrl = req.query.imageUrl;
    if(isImageURL(imageUrl)){
        const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
        deepai.setApiKey('4d24e2da-8259-4497-8db3-ca2ebf4b1d04');   
        let resultImage = '';
        async function process() {
        var resp = await deepai.callStandardApi("colorizer", {
            image: imageUrl,
        });    
        resultImage = resp.output_url;
        res.status(200).json({
            message:`${operationType} operation success`,
            image_url:imageUrl,
            output_url:resultImage 
            });
        }
        process();
    }
    else{
        res.status(200).json({
            message:'invalid image url'
        })
    } 
});

module.exports = router;
