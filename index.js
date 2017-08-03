const path = require('path')

exports.versions = {
	chromedriver: '2.31',
	geckodriver: 'v0.18.0'
}
exports.geckodriver = path.join(__dirname, 'lib', process.platform === 'win32' ? 'geckodriver.exe' : 'geckodriver')
exports.chromedriver = path.join(__dirname, 'lib', process.platform === 'win32' ? 'chromedriver.exe' : 'chromedriver')
