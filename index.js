require('dotenv').config({
    path: './dev.env'
})

try {
    require('./src/app').run()
} catch (error) {
    console.log('Error', error)
}
