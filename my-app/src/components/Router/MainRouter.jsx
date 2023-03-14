import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes} from '.'
import { AuthContext } from '../../context/context'
import Error from '../../pages/Error'
import Login from '../../pages/Login'
import Tasks from '../../pages/Tasks'

const Router = () => {
	const {isAuth} = useContext(AuthContext);

	return(
		isAuth 
			?	<Routes>
					{privateRoutes.map(route => 
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
							exact={route.exact}
						/>
						)}
						<Route path ='/' element={<Tasks/>} /> 
						<Route path='*' element={<Error/>} />
				</Routes>
			:	<Routes>
					{publicRoutes.map(route => 
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
							exact={route.exact}
						/>
					)}
						<Route path ='/' element={<Login/>} />
						{!isAuth && <Route path ='*' element={<Login/>} /> }
				</Routes>
	)
}

export default Router;