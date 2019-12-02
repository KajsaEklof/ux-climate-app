import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class PopupCard extends Component {
  state = {};
  render() {
    return (
      <div className="popup_inner">
        <Card style={{ width: "36rem" }}>
          <Card.Body>
            <Card.Title className="popupTitle">
              {this.props.cardTitle}
            </Card.Title>
            <Card.Text>{this.props.cardText1}</Card.Text>
            <Card.Text>{this.props.cardText2}</Card.Text>

            <button className="popupBtn" onClick={this.props.closePopup}>
              close me
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PopupCard;
