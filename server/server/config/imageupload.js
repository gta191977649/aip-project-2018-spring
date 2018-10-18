const path = require('path');
const slugify = require('../utils/slugify');
module.exports = (multer) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: (req, file, cb) => {
      let extension = '';
      if (file.mimetype === 'image/jpeg') {
        extension = '.jpg';
      } else if (file.mimetype === 'image/png') {
        extension = '.png';
      }
      let filename =
        new Date().valueOf() + '_' + slugify(req.body.name) + extension;

      cb(null, filename);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    }
    cb(null, false);
  };

  let fileLimits = {
    fileSize: 1024 * 1024 * 5,
  };
  return multer({storage, limits: fileLimits, fileFilter});
};
