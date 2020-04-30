import React from "react";

const BandListItem = ({ band, selectItem }) => (
  <li
    class="band__list__item"
    id={band.id}
    onClick={selectItem}
    onClick={selectItem.bind(this, band.id)}
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/band/{{_id}}/cover); opacity: 0.8"
  >
    <span class="band__name">{band.name}</span>
    <span class="band__genre">{band.genre}</span>
  </li>
);

export default BandListItem;
