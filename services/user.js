
const User = require('../models/index').getModel('user')

const user = {
    /**
     * @Description: ��¼
     * @date 2022/1/16
     * @params: { Object } userData
     * @return: { Object | null }
     */
    async login (userData) {
        let result = await User.findOne(userData)
        console.log(result)
        return result
    }
}

module.exports = user
