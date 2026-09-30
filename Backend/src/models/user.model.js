import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
