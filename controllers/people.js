let { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostMan = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const findPerson = people.find((person) => {
    return person.id === Number(id);
  });

  if (findPerson) {
    findPerson.name = name;
    return res.json({ success: true, data: people });
  } else return res.json({ success: false, msg: "please provide name value" });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const findPerson = people.find((person) => {
    return person.id === Number(id);
  });
  if (!findPerson) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with ${id} provided` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostMan,
  updatePerson,
  deletePerson,
};
