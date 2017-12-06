var generateMessage = (from, text)=>{
  return {
    from,
    text,
    createdAt : new Date().getFullYear(),
  };
};

module.exports = {
  generateMessage
};
