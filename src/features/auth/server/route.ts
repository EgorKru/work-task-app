import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema, registrerSchema } from "../schemas";

const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        async (c) => {
            const { email, password } = c.req.valid("json");

            console.log({ email, password });

            return c.json({ email, password });
        }
    )
    .post(
        "/register",
        zValidator("json", registrerSchema),
        async (c) => {
            const { name, email, password } = c.req.valid("json");

            console.log({ name, email, password });

            return c.json({ name, email, password });
        }
    )

export default app;