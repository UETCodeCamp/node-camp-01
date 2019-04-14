const fs = require('fs')

const _getPathStdFile = () => {
    const pathFile = process.env.STUDENT_STD_OUT_FILE || ''

    if (!pathFile) {
        throw new Error('There is no std_out path file.')
    }

    return pathFile.trim()
}

/**
 * @return {Promise<String>}
 */
const _getContentStdFile = async () => {
    const pathFile = _getPathStdFile()

    return new Promise((resolve, reject) => {
        fs.readFile(pathFile, {encoding: 'utf8'}, (error, data) => {
            if (error) return reject(error)

            return resolve(data)
        })
    })
}


exports.equal = async (expectString = '') => {
    const stdOut = await _getContentStdFile()

    return expectString === stdOut
}

