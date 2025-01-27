// Composant pour afficher les messages et la distance
import React from "react";

class Info extends React.Component {
  render() {
    const { message, distanceCovered } = this.props;
    return (
      <div>
        <p>{message}</p>
        <p>Distance parcourue : {distanceCovered}m</p>
      </div>
    );
  }
}

export default Info;