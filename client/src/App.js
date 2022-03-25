import './stylesheets/App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import NotHarbor from './components/Not'
import Main from './components/Main'





function App() {
	
	return (
		<Routes>
			<Route path="*" element={<Main />} />
			<Route path="/not" element={<NotHarbor />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
}

export default App;
