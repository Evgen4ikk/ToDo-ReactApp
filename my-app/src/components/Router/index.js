import Login from '../../pages/Login'
import Profile from '../../pages/Profile'
import Tasks from '../../pages/Tasks'

export const privateRoutes = [
	{path: '/tasks', element: <Tasks/> , exact: true},
	{path: '/profile', element: <Profile/> , exact: true},
	// {path: '/login', element: <Login/> , exact: true},
]

export const publicRoutes = [
	{path: '/login', element: <Login/> , exact: true},
]