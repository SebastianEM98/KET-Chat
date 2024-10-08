import { Navbar } from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import { Login } from './pages/login/Login'
import { SignUp } from './pages/signup/SignUp'
import { Home } from './pages/home/Home'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
    const { authUser } = useAuthContext();

    return (
        <>
            <div className='h-100'>
                <Routes>
                    <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
                <Toaster />
            </div>
        </>

    )
}

export default App
