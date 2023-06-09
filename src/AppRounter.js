import React from "react";
import "./index.css";
import App from "./App";
import Login from "./ui/Login";
import SignUp from "./ui/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>    {/* Router: Route 관리 */}
                    <div>
                        <Switch>
                            {/* Route: url에 따라 다른 컴포넌트 보여주는 컴포넌트 */}
                            {/* 로그인 렌더링: localhost:3000/login */}
                            <Route path="/login">
                                <Login />
                            </Route>
                            {/* 회원가입 컴포넌트 렌더링: localhost:3000/signup */}
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            {/* App 컴포넌트 렌더링: localhost:3000/ */}
                            <Route path="/">
                                <App />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppRouter;