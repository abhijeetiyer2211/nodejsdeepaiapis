const express = require('express');
const router = express.Router();
const isImageURL = require('is-image-url'); 
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

// (async function() {
//     var resp = await deepai.callStandardApi("neural-style", {
//             style: "YOUR_IMAGE_URL",
//             content: "YOUR_IMAGE_URL",
//     });
//     console.log(resp);
// })()
router.get('/',(req,res,next) => {
    let imageUrl = req.query.imageUrl;
    let imageStyle = (req.query.imageStyle === '') ? '' :req.query.imageStyle;
    if(isImageURL(imageUrl)){
        const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
        deepai.setApiKey('4d24e2da-8259-4497-8db3-ca2ebf4b1d04');   
        let resultImage = '';
        let operationType='';
        async function process() {
        if(imageStyle === "")
        {
            operationType="colorizer"
            var resp = await deepai.callStandardApi("colorizer", {
                image: imageUrl,
            });
            resultImage = resp.output_url;
        }
        else{
           operationType="neural-style"
           var resp = await deepai.callStandardApi("neural-style", {
               style: imageStyle,
                content: imageUrl,
            });
            resultImage = resp.output_url;
       }
        
        res.status(200).json({
            message:` operation success`,
            image_url:imageUrl,
            imageStyle_url:imageStyle,
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
