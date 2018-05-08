const jwt = require('jsonwebtoken')
const fs = require('fs')


// 示例1：
// 采用对称加密算法， 一个秘钥加密或者是解密。


const payload = {
    username: 'felix',
    admin: true
}

// const screct = 'gp5';

// // 签发token
// const token = jwt.sign(payload, screct);

// console.log(token);

// // 验证token
// jwt.verify(token, 'gp5', (error, decoded) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(decoded);
//     }
// })



// 示例2：
// 非对称加密算法， 采用公钥加密， 私钥解密。

/**
 * private key generator:
 * ssh-keygen -t rsa -b 2048 -f private.key
 * generator a public key from private:
 * openssl rsa -in private.key -pubout -outform PEM -out public.key
 */

const privateKey = fs.readFileSync('./config/private.key')
const token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256'
})

console.log(token);

const publicKey = fs.readFileSync('./config/public.key')
jwt.verify(token, publicKey, (err, decoded) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(decoded);
    }
})