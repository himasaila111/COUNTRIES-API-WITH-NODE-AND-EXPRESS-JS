//const { response } = require('express');
var express = require('express');
var router = express.Router();
var request = require('request');
var axios = require('axios');
var https = require('https');
const agent = new https.Agent({  
    rejectUnauthorized: false,
    
});

// //using direct headers
// router.get('/getAccessToken1', function(req, res, next) {
//     axios.get("https://www.universal-tutorial.com/api/getaccesstoken",{
//         headers:{   "Accept": "application/json",
//                     "api-token": "u1krKJJUp5o9T9Qng93u86sOpPaFxJWCLGyaG5RxSm-w6QFGEo48u08IlbrqvfWoLYI",
//                     "user-email": "suma2@gmail.com"
//                 },
//                 //"proxy": "http://<server>:3000",
//                 rejectUnauthorized: false,
//                 ejectUnauthorized: false,
//                 requestCert: false,
//                 agent: false,
//             }).then((response) => {
//                 res.json(response.data)
//             })
//             .catch((error) => {
//                   console.error(error)
//                 })
//             console.log("hi");
            
// });

// //using direct headers
// router.get('/countries1', function(req, res, next) {
//     request({
//         method: 'GET',
//         uri: ' https://www.universal-tutorial.com/api/countries/',
//         headers:{   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdW1hMkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ1MWtyS0pKVXA1bzlUOVFuZzkzdTg2c09wUGFGeEpXQ0xHeWFHNVJ4U20tdzZRRkdFbzQ4dTA4SWxicnF2ZldvTFlJIn0sImV4cCI6MTYxNTk3NDQ4Mn0.bOaygW4el7qUat7vATVpTLekgoadTf7GED0hLzMv7FU",
//                     "Accept": "application/json"
//                 },
//                  rejectUnauthorized: false,
//                  ejectUnauthorized: false,
//                  requestCert: false,
//                  agent: false,
//             }).on('error',error =>{
//                 res.status(404).send(error.message);
//             }).pipe(res);
// });

// //using direct headers
// router.get('/states/:states1', function(req, res, next) {
//     states= req.params['states'];
//     request({
//         method: 'GET',
//         uri: ' https://www.universal-tutorial.com/api/states/'+states+'/',
//         headers:{   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdW1hMkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ1MWtyS0pKVXA1bzlUOVFuZzkzdTg2c09wUGFGeEpXQ0xHeWFHNVJ4U20tdzZRRkdFbzQ4dTA4SWxicnF2ZldvTFlJIn0sImV4cCI6MTYxNTk3NDQ4Mn0.bOaygW4el7qUat7vATVpTLekgoadTf7GED0hLzMv7FU",
//                     "Accept": "application/json"
//                 },
//                  rejectUnauthorized: false,
//                  ejectUnauthorized: false,
//                  requestCert: false,
//                  agent: false,
//             }).pipe(res);
// });


//getting geaders from postman
router.get('/getAccessToken', function(req, res, next) {
    let acc=req.headers.accept;
    let token=req.headers.token;
    let mail=req.headers.email;
    request({
        method: 'GET',
        uri: ' https://www.universal-tutorial.com/api/getaccesstoken',
        headers:{   "Accept":acc ,
                    "api-token": token,
                    "user-email": mail,
                },
                rejectUnauthorized: false,
                ejectUnauthorized: false,
                requestCert: false,
                agent: false,
            }).on('error',error =>{
                res.status(404).send(error.message);
            }).pipe(res);
});

//getting headers from postman
router.get('/countries', function(req, res, next) {
    let auth = req.headers.authorization;
    let acc = req.headers.accept;
    console.log(auth);

    request({
        method: 'GET',
        uri: ' https://www.universal-tutorial.com/api/countries/',
        headers:{   "Authorization": auth,
                    "Accept": acc,
                },
                 rejectUnauthorized: false,
                 ejectUnauthorized: false,
                 requestCert: false,
                 agent: false,
            }).pipe(res);
});


//getting headers from postman
router.get('/states/:states', function(req, res, next) {
    states= req.params['states'];
    let auth = req.headers.authorization;
    let acc = req.headers.accept;
    request({
        method: 'GET',
        uri: ' https://www.universal-tutorial.com/api/states/'+states+'/',
        headers:{   "Authorization": auth,
                    "Accept":acc,
                },
                 rejectUnauthorized: false,
                 ejectUnauthorized: false,
                 requestCert: false,
                 agent: false,
            }).pipe(res);
});

module.exports = router;