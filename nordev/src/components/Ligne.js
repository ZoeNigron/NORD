// Composant pour afficher une ligne entre deux points
import React from "react";
import { Polyline } from "react-leaflet";

class Ligne extends React.Component {
  render() {
    const { positions, couleur } = this.props;
    return <Polyline positions={positions} color={couleur} />;
  }
}

export default Ligne;