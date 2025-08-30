import serverless from "serverless-http";
import { createServer } from "../server/index";

// Create the Express app using shared server setup
const app = createServer();

// Export the serverless handler to run on Vercel at /api/*
export default serverless(app as any);
