const std = require('../helpers/std')

exports.test = async () => {
    await std.equal('Hello, world!')

    return true
}
