import React, { useEffect, useState } from 'react'
import { BrowserRouter} from 'react-router-dom'
import { AuthContext } from '../../context/context'
import Navbar from '../../UI/Navbar/Navbar'
import MainRouter from '../Router/MainRouter'

const Main = () => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(()=>{
		if(localStorage.getItem('auth')){
			setIsAuth(true)
		}
	},[])
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
				<BrowserRouter>
				{isAuth 
					? <Navbar/>
					:	<></>
				}
					<MainRouter/>
				</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default Main;