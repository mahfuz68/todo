import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children: Children }) {
    const { currentUser } = useAuth();
    return currentUser ? Children : <Navigate to="/login" />;
}
