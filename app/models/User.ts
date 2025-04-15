import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function (this: any) {
            return this.accountActivated === true;
        },
    },
    accountActivated: { type: Boolean, default: false },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
