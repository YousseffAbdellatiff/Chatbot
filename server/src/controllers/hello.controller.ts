import { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
  console.log("Responding to hello request");
  res.json({ message: "Hello from TypeScript Express!" });
};
