var express = require('express');
var router = express.Router();
var fs = require('fs');

const middleware1 = (res, req, next) => {
  console.log('First Middleware');
  next();
}
const middleware2 = (res, req, next) => {
  console.log('Second Middleware');
  next();
}

/* GET home page. */
router.get('/', middleware1 , function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', middleware2 , function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/submit', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let number = req.body.number
  fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("User Details Saved");
    }
  })
  // next()
  res.render('success', { title: 'Success' })
})

// router.post('/submit',(req,res)=>{
  
// })

module.exports = router;
