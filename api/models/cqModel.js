const mongoose = require("mongoose");
const cqSchema = new mongoose.Schema({

question : {
    required : [true , 'must enter question'],
    type : String,
    },
answer  : {
    required : [true , 'must enter '],
    type : String,
    },

doctor  : {
    required : [true , 'must enter '],
    type : mongoose.Schema.ObjectId,
    ref : 'User'
    },

    
},{
    timestamps: true,
    versionKey: false
    });
    const Cq = mongoose.model("Cq", cqSchema);
    module.exports = Cq;
    