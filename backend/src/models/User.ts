import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firebaseUid: string;
  email: string;
  name: string;
  role: "admin" | "user" | "influencer";
  profileImage?: string;
  bio?: string;
  socialMedia?: {
    youtube?: string;
    instagram?: string;
    tiktok?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "influencer"],
      default: "user",
    },
    profileImage: { type: String },
    bio: { type: String },
    socialMedia: {
      youtube: { type: String },
      instagram: { type: String },
      tiktok: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);
