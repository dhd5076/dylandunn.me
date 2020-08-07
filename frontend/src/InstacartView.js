import {
    Jumbotron,
    Row,
    Col,
    Form,
    InputGroup,
    FormControl,
    Button
} from "react-bootstrap";

import React from 'react';
import Barcode from 'react-barcode'

class InstacartView extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        searchValue: '',
        customUPCValue: '',
        customNameValue: '',
        customWeightValue: '',
        codes: [
        ]
      }

      this.handleManualAdd = this.handleManualAdd.bind(this);
      this.handleManualChange = this.handleManualChange.bind(this);
      this.handleManualWeightChange = this.handleManualWeightChange.bind(this);
      this.handleManualNameChange = this.handleManualNameChange.bind(this);
    }

    handleManualChange(event) {
      this.setState({customUPCValue: event.target.value});
    }

    handleManualNameChange(event) {
      this.setState({customNameValue: event.target.value});
    }

    handleManualWeightChange(event) {
      this.setState({customWeightValue: event.target.value});
    } 

    handleManualAdd() {
      var newCodeList = this.state.codes.concat({name: this.state.customNameValue, id: 0, value: this.state.customUPCValue});
      this.setState({
        customUPCValue: '',
        codes: newCodeList
      });
    }

    render() {
      return(
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
          <Row className="m-0 p-0">
            <Col className="my-2" xs={12} md={6}>
              <Form>
                <h3>Add UPC</h3>
                <h5>{this.state.customNameValue}</h5>
                {this.state.customUPCValue !== '' &&
                <>
                <Barcode
                  background="white"
                  lineColor="black"
                  format="CODE128" 
                  height="50"
                  width="2"
                  value={this.state.customUPCValue}
                />
                <Barcode
                  background="white"
                  lineColor="black"
                  format="UPC" 
                  height="50"
                  width="2"
                  value={this.state.customUPCValue}
                />
                </>
                }
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Prepend>
                   <InputGroup.Text>
                    <i className="fa fa-tag" />
                   </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl value={this.state.customNameValue} onChange={this.handleManualNameChange} placeholder="Product Name" />
                </InputGroup>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Prepend>
                   <InputGroup.Text>
                   <i className="fas fa-weight" />
                   </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl value={this.state.customWeightValue} onChange={this.handleManualWeightChange} type="number" placeholder="0.00" />
                  <InputGroup.Append>
                    <InputGroup.Text>
                      lbs
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Prepend>
                   <InputGroup.Text>
                    <i className="fa fa-barcode" />
                   </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl value={this.state.customUPCValue} onChange={this.handleManualChange} placeholder="UPC" />
                  <InputGroup.Append>
                    <Button onClick={this.handleManualAdd} variant="success">Add To List</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
            <Col className="light-color text-dark m-0 p-2" xs={12} md={6}>
              <h3> Barcode List </h3>
              {this.state.codes.map(code => (
                <Row className="mb-4">
                  <Col>
                    <h3>{code.name}</h3>
                  </Col>
                  <Col>
                    <Barcode 
                      key={code.id}
                      background="white"
                      lineColor="black"
                      format="UPC" 
                      height="50"
                      width="2" 
                      value={code.value}
                    />
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Jumbotron>
      )
    }
  }

export default InstacartView;