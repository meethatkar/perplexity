import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, verified } = req.body;
    // Basic structure: Add validation and hashing later

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
      verified,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { userInfo, password } = req.body;
    // Find user by either email or username using $or
    const user = await User.findOne({ 
      $or: [{ email: userInfo }, { username: userInfo }] 
    }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  // Basic structure: clear cookie later
  res.status(200).json({ message: "Logout successful" });
};
