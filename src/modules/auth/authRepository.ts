import type { ResultSetHeader, RowDataPacket } from "mysql2";
import client from "../../database/client.js";

export const signin = async (login: string, password: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM users WHERE login = ? and password = ?",
		[login, password],
	);
	return rows[0] as RowDataPacket | undefined;
};

export const signup = async (login: string, password: string) => {
	const [result] = await client.query<ResultSetHeader>(
		"INSERT INTO users (login, password) VALUES (?, ?)",
		[login, password],
	);
	return result.insertId;
};

export const loginExist = async (login: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM users WHERE login = ?",
		[login],
	);

	return rows[0] as RowDataPacket | undefined;
};


