import express from "express"
import userActions from "../controllers/userController.js"
const router = express.Router()

router.get("/",userActions.getAllUsers)
router.get("/:id",userActions.getUserByID)
router.post("/register",userActions.createUser)
router.post("/login",userActions.login)
router.put("/:id",userActions.updateUserbyID)
router.delete("/:id",userActions.deleteUserByID)

export default router