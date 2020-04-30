import React from "react";
import { Component, useState } from "react";

import BandListItem from "../BandListItem/BandListItem";

class BandList extends Component {
  constructor(props) {
    super(props);

    const [bands, setBands] = useState([]);
  }

  fetchBands = () => {
    console.log("Fetch Bands");
    setBands([{ name: "Name" }]);
  };

  selectBandHandler = id => {
    console.log("select band handler");
    console.log("band id: ", id);
  };

  render() {
    <ul class="band__list">
      {bands.map(band => (
        <BandListItem
          key={band.id}
          band={band}
          selectItem={this.selectBandHandler}
        />
      ))}
    </ul>;
  }
}

export default BandList;
