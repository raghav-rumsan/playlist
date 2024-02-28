const MusicModel = require("./music.model");

// CRUD

const create = (payload) => {
  return MusicModel.create(payload);
};

const list = () => {
  return MusicModel.find();
};

const getById = (id) => {
  return MusicModel.findOne({ _id: id });
};

const updateById = (id, payload) => {
  return MusicModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return MusicModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, remove };
