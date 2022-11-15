const React = require("react")

class VegeIndex extends React.Component {
  render() {
    const  { vegetables } = this.props
    return (
      <div>
        <h1>Vege Index Page</h1>
        <ul>
          {
            vegetables.map((vegetables, i) => {
              return (
                <li  key = {i}>
                  The{' '}
                  <a href={`/vegetables/${i}`}>{vegetables.name}</a>
                  {" "}
                  is {vegetables.color} <br />
                  {
                    vegetables.readyToEat 
                    ? "It is ready to eat" 
                    : "It is not ready to eat"
                  }
                  <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  } 
}

module.exports = VegeIndex