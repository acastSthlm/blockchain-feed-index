const express = require ('express');
const bodyParser = require ('body-parser');
const error = require ('./middlewares/error');
const podcasts = require ('./routers/podcasts');
const validate = require ('./routers/validate');

let router = express.Router();

router.use(bodyParser.json());
router.all('/api/podcasts', podcasts);
router.get('/api/validate', validate);
router.use(error);

module.exports = router;
