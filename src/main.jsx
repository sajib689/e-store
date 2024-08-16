import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import router from "./Routes/router";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </QueryClientProvider>
 </AuthProvider>
);
