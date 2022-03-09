import React, {Component} from "react";
import {Navigate} from "react-router-dom";

class Connexion extends Component {

    state = {
        user: '',
        goToApp: false
    }

    render() {
        if (this.state.goToApp) {
            return <Navigate push to={`/status`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleClick}>
                    <input type='text' placeholder='User' required value={this.state.user}
                           onChange={this.handleChange}/>
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }

    handleChange = event => {
        const user = event.target.value
        this.setState({user})
    }

    handleClick = event => {
        event.preventDefault()
        this.setState({goToApp: true})
    }
}

export default Connexion