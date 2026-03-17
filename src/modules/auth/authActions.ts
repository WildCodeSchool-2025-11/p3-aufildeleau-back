import type { RequestHandler } from "express";
import * as authRepository from "./authRepository.js";
import bcrypt from "bcrypt";


// GET /api/items/:id
export const signin: RequestHandler = async (req, res, next) => {

	const { user } = req.body;
	
	res.json(user);
};

// POST /api/items
export const signup: RequestHandler = async (req, res, next) => {
	try {
		const { login, password } = req.body;

		const salt = bcrypt.genSaltSync(8);
		const passwordHash = bcrypt.hashSync(password, salt);

		const insertId = await authRepository.signup(
			String(login),
			passwordHash,
		);
		res.status(201).json({ id: insertId, login });
	} catch (err) {
		next(err);
	}
};
