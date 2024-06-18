import express from 'express';
import { createTweet, deleteTweet, getAllTweets, likeOrDislike,getAllFollowingTweets } from '../controllers/tweetController.js'
import isAuthenticated from '../config/auth.js';

const router = express.Router();

router.route("/create").post(isAuthenticated,createTweet)
router.route("/delete/:id").delete(isAuthenticated,deleteTweet)
router.route("/like/:id").put(isAuthenticated,likeOrDislike)
router.route("/alltweet/:id").get(isAuthenticated,getAllTweets)
router.route("/followingtweets/:id").get(isAuthenticated,getAllFollowingTweets)


export default router;