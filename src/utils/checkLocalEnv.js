const checkLocalEnv = () => {
  return process.env.REACT_APP_STORAGE === "local-storage";
};

module.exports = checkLocalEnv;
