let multer = require('multer');
let path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/img/users'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFiles = multer({storage});

module.exports = uploadFiles;