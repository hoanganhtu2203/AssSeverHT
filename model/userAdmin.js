const mongoose = require('mongoose')
const useSchema = new mongoose.Schema({
    taikhoan:{
        type:String
    },
    password:{
        type:String
    },
    sodienthoai:{
        type:Number
    },
    
})

const user = mongoose.model('dsusers', useSchema)
module.exports = user