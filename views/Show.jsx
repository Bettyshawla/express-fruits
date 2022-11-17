const React = require("react");

class Show extends React.Component {
    render(){   
        const {name, color, readyToEat} = this.props
        return (  
        <div>
            <h1> Show Page </h1>
            <p>The {name} is {color}.</p> 
            {readyToEat ? "It is ready to eat!" : " It is not ready to eat... Dont touch that!"}
        </div>
        )
    }
}

module.exports = Show