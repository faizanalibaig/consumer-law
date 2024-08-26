import bcrypt from "bcrypt";

export function hashPassword(myPlaintextPassword) {
  try {
    return bcrypt.hashSync(
      myPlaintextPassword,
      parseInt(process.env.BCRYPT_SALT_ROUND) 
    );
  } catch (error) {
    console.log("Unable to hash password", error);
    throw error;
  }
}

export function isPasswordCorrect(myPlaintextPassword, hash) {
  return bcrypt.compareSync(myPlaintextPassword, hash);
}
