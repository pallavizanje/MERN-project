const express = require('express');
const router = express.Router();

//@router GET api/post/test
//@Desc Tests Post route
//@access Public

router.get('/test', (req, res)=> res.json({msg: 'Post Works'}));

module.exports = router;