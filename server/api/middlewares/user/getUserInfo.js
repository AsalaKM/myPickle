const getUser = require("../../../database/queries/getUser")

const getUserInfo = async (req, res) => {
  const id = req.params.profileID
  console.log(id)

  const user = await getUser(id).catch(err => res.status(400).json({ error: err }))
  return res.status(200).json(user)
}

module.exports = getUserInfo
