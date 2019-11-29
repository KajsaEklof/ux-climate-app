import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class PopupCard extends Component {
  state = {};
  render() {
    return (
      <div className="popup_inner">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Card.Text>
             {this.props.cardText}
            </Card.Text>

            <button onClick={this.props.closePopup}>close me</button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PopupCard;
