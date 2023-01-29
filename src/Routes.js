import { Suspense, React } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/profile";
import User from "./Pages/User";

function Router () {
    return (
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path='/user/:id' element={<Profile/>} />
                    <Route path='/' element={<User/>} />
                </Routes>
            </Suspense>
    )
};

export default Router;





