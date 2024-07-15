import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
     username: {
        type: String,
        required: true,
        unique: true
     },
        password: {
            type: String,
            required: true,
            unique: true
        },  
    });

    userSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
       next();
    });

    const User = mongoose.model('User', userSchema);
export default User;


