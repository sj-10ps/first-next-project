const { Schema, models, model } = require("mongoose");

const messageSchema=new Schema({
    property:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Property'
    },
    sender:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    recipient:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
      
    },
    message:{
        type:String
    },
    read:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Message=models.Message??model("Message",messageSchema)
export default Message