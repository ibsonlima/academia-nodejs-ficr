const express = require('express');
const router = express.Router();
const CurriculoController = require('../controllers/curriculo-controller');

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express teste"
    });
});

// const https = require('https');
// // Replace with access token for the r_liteprofile permission
// const accessToken = 'jvnrsRtqicyTkOV5';
// const options = {
//     host: 'api.linkedin.com',
//     path: '/v2/me',
//     method: 'GET',
//     headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'cache-control': 'no-cache',
//         'X-Restli-Protocol-Version': '2.0.0'
//     }
// };

// const profileRequest = https.request(options, function (res) {
//     let data = '';
//     res.on('data', (chunk) => {
//         data += chunk;
//     });

//     res.on('end', () => {
//         const profileData = JSON.parse(data);
//         console.log(JSON.stringify(profileData, 0, 2));
//     });
// });
// profileRequest.end();



module.exports = router;