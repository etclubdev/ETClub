import express from 'express'
import newServices from '../services/etNews-services'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer';
import passport from 'passport';

const Router = express.Router();

Router.get('/', (req, res, next) => {
})
export default Router;