import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.model";
import { IUser } from "../types/userTypes";
import bcrypt from "bcryptjs";

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const findUser: IUser | null = await User.findOne({ email });
      if (!findUser) {
        return done(null, false, { message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, findUser.password);

      if (!isMatch) {
        return done(null, false, { message: "Invalid credentials" });
      }
      return done(null, findUser);
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
