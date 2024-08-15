import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import router from "./Routes/router";
import {
  QueryClientProvider,
} from "@tanstack/react-query";
createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </QueryClientProvider>
  </>
);
