const request = require('request-promise-native')

const hostApp = process.env.STUDENT_HOST || 'http://localhost:8888'
console.log('Start running with host app:', hostApp)

const _parseUrl = (host = '') => {
    if (!host) return ''

    return host.indexOf('http') === -1 ? `http://${host}` : host
}

const instance = request.defaults({
    baseUrl: _parseUrl(hostApp)
})

const _request = async (options = {}) => {
    const defaultOpts = {
        uri: '/',
        method: 'GET',
    }
    const opts = Object.assign({}, defaultOpts, options)

    try {
        const response = await instance(opts)

        return response
    } catch (error) {
        throw error
    }
}

exports.request = (options) => {
    return _request(options)
}

