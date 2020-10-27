import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      text:'',
    }
  }
  handleButton =(e)=>this.setState({text:this.state.text+e.currentTarget.value})
  clearScreen=()=>this.setState({text:''})
  showResult=()=>this.setState({text:this.calculateResult(this.state.text)})
  calculateResult=(s)=>eval(s)
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4} style={{ border: "1px solid black" }}>
            <Row>
              <input type="text" className="calculator-screen z-depth-1" value={this.state.text} disabled />
              <div className="Keys">
                <button type="button" className="operator btn btn-info" value="+" onClick={this.handleButton}>+</button>
                <button type="button" className="operator btn btn-info" value="-" onClick={this.handleButton}>-</button>
                <button type="button" className="operator btn btn-info" value="*" onClick={this.handleButton}>&times;</button>
                <button type="button" className="operator btn btn-info" value="/" onClick={this.handleButton}>&divide;</button>

                <button type="button" value="7" className="btn btn-light waves-effect" onClick={this.handleButton}>7</button>
                <button type="button" value="8" className="btn btn-light waves-effect" onClick={this.handleButton}>8</button>
                <button type="button" value="9" className="btn btn-light waves-effect" onClick={this.handleButton}>9</button>

                <button type="button" className="operator btn btn-info" value="%" onClick={this.handleButton}>%</button>

                <button type="button" value="4" className="btn btn-light waves-effect" onClick={this.handleButton}>4</button>
                <button type="button" value="5" className="btn btn-light waves-effect" onClick={this.handleButton}>5</button>
                <button type="button" value="6" className="btn btn-light waves-effect" onClick={this.handleButton}>6</button>

                <button type="button" value="1" className="btn btn-light waves-effect" onClick={this.handleButton}>1</button>
                <button type="button" value="2" className="btn btn-light waves-effect" onClick={this.handleButton}>2</button>
                <button type="button" value="3" className="btn btn-light waves-effect" onClick={this.handleButton}>3</button>

                <button type="button" value="0" className="btn btn-light waves-effect" onClick={this.handleButton}>0</button>
                <button type="button" className="decimal function btn btn-secondary" value="." onClick={this.handleButton}>.</button>
                <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={this.clearScreen}>AC</button>

                <button type="button" className="equal-sign operator btn btn-primary" value="=" onClick={this.showResult}>=</button>
              </div>
            </Row>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
