import mongoose from "mongoose";
import { ConnectionStr } from "../DBConnection/dbConnection";
ConnectionStr()
const SignupSchema = new mongoose.Schema({
        username:{
            type:String,
            required:[true,"please enter user name"],
            unique:true,
        },
        email:{
            type:String,
            required:[true,"please enter user name"],
            unique:true,
        },
       mobile:{
            type:Number,
            required:[true,"please enter user name"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"please enter user name"],
        },
        gender:{
            type:String,
            required:[true,"please enter user name"],
            unique:true,
        },
        identity:{
            type:String,
            required:[true,"please enter user name"],
            unique:true,
        },
        address:{
            type:String,
            required:[true,"please enter user name"],
            unique:true,
        },
        policy:{
            type:Boolean,
            required:false
        },
        image:{
            type:String,
            required:[true,"please enter user name"],
       
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        forgotPasswordToken:String,
        forgotPasswordTokenVerify:Date,
        token:String,
        tokenVerify:Date
});

const RequestSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter user name"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"please enter user name"],
        unique:true,
    },
   mobile:{
        type:Number,
        required:[true,"please enter user name"],
        unique:true,
    },

    address:{
        type:String,
        required:[true,"please enter user name"],
        unique:true,
    },

    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenVerify:Date,
    token:String,
    tokenVerify:Date
});

export const SignupSchemaData = mongoose.models.users || mongoose.model("users",SignupSchema);
export const RequestSchemaData = mongoose.models.requests || mongoose.model("requests",RequestSchema);