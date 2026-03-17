import * as authRepository from "../modules/auth/authRepository.js";
import bcrypt from 'bcrypt';

export const checkLogin = async (req, res, next) => {
    const { login, password } = req.body;

    const isExist = await authRepository.loginExist(login)

    if (!isExist) {
        res.status(401).send({message : 'Mauvaise login'});
        return;
    }


    const passwordValid = bcrypt.compareSync(password, isExist.password); // true

    if (!passwordValid) {
        res.status(401).send({message : 'Mauvais identifiants'});
        return;
    }

    req.body.user = isExist;
    
    next();
}

export const isAdmin = async (req, res, next)  => {
    const isExist = true;


    if (!isExist) {
        res.sendStatus(401);
        return;
    }

    next();
}