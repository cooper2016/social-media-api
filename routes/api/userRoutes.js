const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriendToUser,
  removeFriendFromUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId

router
  .route("/api/users/:userId/friends/:friendId")
  .post(addFriendToUser)
  .delete(removeFriendFromUser);

module.exports = router;
