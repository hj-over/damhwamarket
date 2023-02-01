import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Detail from "./pages/Detail";
import List from "./pages/List";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Basket from "./pages/Basket";
import Members from "./pages/Members";
import { Provider } from "react-redux";
import { store } from "./reducer/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "listing/:category",
        element: <List />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/members",
    element: <Members />,
  },
]);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
