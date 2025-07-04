import fs from 'fs'
import imagekit from '../configs/imagekit.js';
import Blog from '../models/blog.js';

export const addBlog = async (req, res) =>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog) ;
        const imageFile = req.file ;

        // check if all fields are present

        if(!title || !description || !category || !imageFile)
        {
            return res.json({success: false, message: "Missing required fields"});
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        // upload image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        })

        // optimise image through imageKit and get URL of transformed image
        const optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        })

        const image = optimizedImageURL;

        await Blog.create({title, subTitle, description, category, image, isPublished});

        res.json({success: true, message: "Blog added successfull"});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}