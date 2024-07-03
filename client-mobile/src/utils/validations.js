export const getStartedValidations = (Alert, form) => {
  const { name, email, password, confirmPassword } = form;

  if (!name.trim()) {
    Alert.alert("Error", "Please enter your name.");
    return false;
  }

  if (!email.trim()) {
    Alert.alert("Error", "Please enter your email address.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    Alert.alert("Error", "Please enter a valid email address.");
    return false;
  }

  if (!password) {
    Alert.alert("Error", "Please enter your password.");
    return false;
  }

  if (password.length < 6) {
    Alert.alert("Error", "Password should be at least 6 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match.");
    return false;
  }

  return true;
};

export const signInValidations = (Alert, form) => {
  const { email, password } = form;
  if (!email.trim()) {
    Alert.alert("Error", "Please enter your email address.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    Alert.alert("Error", "Please enter a valid email address.");
    return false;
  }

  if (!password) {
    Alert.alert("Error", "Please enter your password.");
    return false;
  }

  return true;
};
