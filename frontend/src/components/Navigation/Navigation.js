import React from "react";

const Navigation = () => (
  <div>
    <header class="main__header">
      <h1>Browse</h1>
    </header>

    <nav class="main__nav">
      <a class="link is-active" href="#">
        Overview
      </a>
      <a class="link" href="#">
        Charts
      </a>
      <a class="link" href="#">
        Genres and Moods
      </a>
      <a class="link" href="#">
        New Releases
      </a>
      <a class="link" href="#">
        Discover
      </a>
      <a class="link" href="#">
        More
      </a>
    </nav>
  </div>
);

export default Navigation;
