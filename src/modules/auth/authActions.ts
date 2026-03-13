import type { RequestHandler } from "express";
import * as authRepository from "./authRepository.js";

// GET /api/items/:id
export const signin: RequestHandler = async (req, res, next) => {
	const { login, password } = req.body;

	try {
		const isAuth = await authRepository.signin(String(login), String(password));

		if (!isAuth) {
			res.sendStatus(401);
			return;
		}

		res.json(isAuth);
	} catch (err) {
		next(err);
	}
};

// POST /api/items
export const signup: RequestHandler = async (req, res, next) => {
	try {
		const { login, password } = req.body;
		const insertId = await authRepository.signup(
			String(login),
			String(password),
		);
		res.status(201).json({ id: insertId, login });
	} catch (err) {
		next(err);
	}
};
