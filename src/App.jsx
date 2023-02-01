import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { useAuth } from './context/AuthContext';
import Collections from './page/Collections';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Register from './page/Register';

function App() {
    const { currentUser } = useAuth();
    const user = () => {
        if (currentUser !== null) {
            return currentUser;
        }
        return 'no user found';
    };
    console.log(user());

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <Routes>
                <Route
                    index
                    element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/collections"
                    element={
                        <PrivateRoute>
                            <Collections />
                        </PrivateRoute>
                    }
                />
                <Route path='/*' element={<NotFound/>} />

                
            </Routes>
        </div>
    );
}

export default App;
