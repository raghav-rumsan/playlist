const PlaylistModel = require("./playlist.model");

// CRUD

const create = (payload) => {
  return PlaylistModel.create(payload);
};

const list = () => {
  // Complex aggregation
  return PlaylistModel.aggregate([
    {
      $lookup: {
        from: "musics", // collection name
        localField: "_id",
        foreignField: "playlist",
        as: "musics",
      },
    },
  ]);
};

const getById = (id) => {
  return PlaylistModel.findOne({ _id: id });
};

const updateById = (id, payload) => {
  return PlaylistModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return PlaylistModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, remove };
