import express from "express";

import getUsersCreators from "../controllers/getUsersCreators.js";

import getCreatorById from "../controllers/getCreatorById.js";

const router = express.Router();
router.use(express.json());

router.get("/", getUsersCreators);

router.get("/getCreatorById", getCreatorById);

export default router;
