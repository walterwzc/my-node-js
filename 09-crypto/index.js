const crypto = require('crypto')

// 示例1： 使用Node自带的 crypto 模块。
// const password = '123';
// const username = 'walter';

// const hash = crypto.createHash('sha256');
// hash.update(password);
// console.log('encrypt password: ' + hash.digest('base64'));

// hash.update(username);
// console.log('encrypt username: ' + hash.digest('base64'));



// 示例2： 使用 bcrypt 来加密。
const bcrypt = require('bcrypt');
const password = '123';

let encryptPassword1 = '';

let encryptPassword2 = '';

bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        console.log(err);
    }
    console.log('salt:', salt);

    bcrypt.hash(password, salt, (err, hash) => {
        encryptPassword1 = hash;
        console.log('hash:', hash);

        // 因为在hash方法是异步， 要在hash方法之中。
        bcrypt.compare(password, encryptPassword1, (error, result) => {
            console.log(result);
        });
    })
})

console.log("=======================================================");

bcrypt.hash(password, 10, (error, hash) => {
    encryptPassword2 = hash;
    console.log(hash);
    
    bcrypt.compare(password, encryptPassword2, (error, result) => {
        console.log(result);
    });
})


console.log("=======================================================");




