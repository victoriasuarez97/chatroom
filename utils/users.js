const users = [];

function userJoin(id, username, rooms) {
  const user = { id, username, rooms };

  users.push(user);
  return user;
}

function getUserJoin(id) {
  return users.find(user => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getRoom(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getUserJoin,
  userLeave,
  getRoom,
};
