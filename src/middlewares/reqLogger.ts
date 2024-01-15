import { Request, Response, NextFunction } from "express";

export const reqLogger = (req:Request, res:Response, next:NextFunction) => {
    console.log("[INFO] Requested for: ", req.method, req.url)
    next()
}