import React from 'react'
import { render } from 'react-dom'

const context = React.createContext()

function Parent() {
    return (
        <div>
            <h1>Parent</h1>
            <Child />
        </div>
    )
}

function Child() {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild />
        </div>
    )
}

function GrandChild() {
    return (
        <context.Consumer>
        {(name) => (
            <div>
                <h1>GrandChild</h1>
                <h3>Name: {name}</h3>
            </div>
        )}
        </context.Consumer>
        
    )
}

class App extends React.Component {
    render() {
        const name = 'Marvin'
        return (
            <context.Provider value={name}>
                <Parent />
            </context.Provider>
            
        )
    }
}

render(<App />, document.getElementById('root'))