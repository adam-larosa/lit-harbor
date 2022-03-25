import { useState, useEffect } from 'react'


export default function Main() {

	const [word, setWord] = useState('t')

	const changeWord = letter => {
		if (word.length < 8) {
			console.log('noteight', word)
			setWord(word + letter)
		} else {
			console.log('EIGHT')
			setWord(pW => {
				const array = word.split('')
				array.shift(1)
				array.push(letter)
				const newword = array.join('')
				return newword
			})
		}
	}


	const handleKeyDown = e => {
		console.log('key:', e.key)
		changeWord( e.key )
	}
	useEffect(() => {
		window.addEventListener( 'keydown', handleKeyDown )
		return () => window.removeEventListener( handleKeyDown )
	}, [])


	const sendAGET = () => {
		fetch("/movies").then( r => r.json() ).then( console.log )
	}
	console.log(word)
	return (
		<div className="App">
			<header className="cool">
				<h1>LIT HARBOR</h1>
				<button onClick={sendAGET}>X</button>
			</header>
		</div>
	)
}