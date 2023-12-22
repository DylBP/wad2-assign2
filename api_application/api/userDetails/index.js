import express from 'express';
import UserDetails from './userDetailsModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

router.get('/:username', asyncHandler(async (req, res) => {
    const username = req.params.username;
    const userDetails = await UserDetails.findByUsername(username);
    if(!userDetails) return res.status(401).json({ success: false, msg: "User details for user not found"});
    return res.status(200).json(userDetails);
}));

export default router;