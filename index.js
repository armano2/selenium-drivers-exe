const path = require('path')
const os = require('os');
const arch = os.arch();

exports.versions = {
	chromedriver: '2.31',
	geckodriver: 'v0.18.0'
}
exports.geckodriver = path.join(__dirname, 'lib', arch, 'geckodriver.exe')
exports.chromedriver = path.join(__dirname, 'lib', arch, 'chromedriver.exe')
