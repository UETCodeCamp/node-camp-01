const std = require('./std')

exports.tests = async () => {
    console.log('Run all tests.')

    await std.test()
}
