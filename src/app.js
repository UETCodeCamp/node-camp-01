const tests = require('./tests/index')
const pusher = require('@uet/pusher')

exports.run = async () => {
    console.log('Submit host:', process.env.SUBMIT_HOST)

    try {
        await tests.tests()

        await pusher.submit({
            is_pass: true,
        })
    } catch (error) {
        await pusher.submit({
            is_pass: false,
            message: error.message || ''
        })
    }
}
