import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main/Main'
import './style/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Main/>
	</React.StrictMode>
)
