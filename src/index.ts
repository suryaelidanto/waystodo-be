import express from "express";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
