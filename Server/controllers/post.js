const {request, response } = require("express");

const newPost = async (req = request, res = response ) => {

    res.json({msg:'ok'})

}


module.exports = {
    newPost
}