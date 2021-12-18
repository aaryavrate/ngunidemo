const Test = () => {

  const hi = async (req, res) => {
    console.log("Hi Hello ");
    return res.status(200).json({ msg: "Hi There" }).end();
  };


  return {
    hi,
  };

};

module.exports = Test;
