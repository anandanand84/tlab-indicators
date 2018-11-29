var config         = require('./remote-config/config.json');
var redisHost      = config.redis.database.host;
var redisPort      = config.redis.database.port;
var redisPassword  = config.redis.database.password;
var user = config.user;
var redisct        = require('redisct')(redisHost, redisPort, redisPassword, false);

module.exports = async function save(meta, code) {
    try {
        var indicator = {
            meta : Object.assign({}, meta, { email : user.email }),
            code : code
        }
        await redisct.saveIndicator(indicator);
    } catch(err) {
        console.error(err);
        console.warn('Failed to save | update indicator ', meta, err.message);
    }
}