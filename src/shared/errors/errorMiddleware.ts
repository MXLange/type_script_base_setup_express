import { NextFunction, Request, Response } from "express";
import AppError from "./AppErrors";

export async function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {

  console.log(error)
  if (error instanceof AppError) {
    if (error.queryRunner !== null) {
      await error.queryRunner.release();
    }

    return res.status(error.status).json({
      mensagem: error.mensagem,
      status: error.status,
    });
  }

  return res.status(500).json({
    mensagem: "Erro interno do servidor",
    status: 500,
  });
}