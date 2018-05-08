const db = require('../config/index')

// console.log(db);

module.exports = db.model('person', { title: String })
