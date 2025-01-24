import React, { Component } from 'react'

export default class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = {face:null, compteur:0, end:false} // end howa wach l9ayna l3adad s7i7 wla la
    }
    jouer = () => {
        let facealea = Math.floor(Math.random()*6 + 1);
        this.setState({face:facealea, compteur:this.state.compteur+1}) // compteur howa 3dad almo7awalat
        if (facealea == this.props.cache)  // cach howa props jayni mn App.js
            this.setState({end:true})
    }
    init = () => {
        this.setState({face:null, compteur:0, end:false})
    }
    render() {
        return (
            <div>
                <img src={
                    this.state.face==null
                    ?"images/init.PNG"
                    :`images/face${this.state.face}.PNG`
                } />
                <h1>Jeu de Dé...</h1>
                <p>face : {this.state.face}</p>
                <p>Nombre d'essais : {this.state.compteur}</p>
                {
                    this.state.end
                    ?<div><p>Bravo! Vous avez trouvez la face cachée</p><button onClick={this.init} className="bg-primary p-2 rounded">Initialiser</button></div>
                    :<button onClick={this.jouer} className="bg-primary p-2 rounded">Jouer</button>
                }
            </div>
        )
    }
}
