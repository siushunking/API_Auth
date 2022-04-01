const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  role: {
    type: String,
    enum: ["consumer", "shop","admin"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.isConsumer = function () {
  return this.role == "consumer";
};

userSchema.methods.isShop = function () {
  return this.role == "shop";
};

userSchema.methods.isAdmin = function () {
  return this.role == "admin";
};

// mongoose schema middleare
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {  //如果有被更改或者有新data
    const hash = await bcrypt.hash(this.password, 10);  // 先hash 
    this.password = hash;
    next(); //因為是middleware 所以要
  } else {
    return next();
  }
});

// userSchema.methods.comparePassword = function (password, cb) {    
//   bcrypt.compare(password, this.password, (err, isMatch) => {  // compare database password 
//     if (err) {
//       return cb(err, isMatch);
//     }
//     cb(null, isMatch);
//   });
// };

module.exports = mongoose.model("User", userSchema);
