import React from 'react';

const Sidebar = () => (
  <aside class="sidebar">
    <ul class="sidebar__main">
      <li>Browse</li>
      <li>Radio</li>
    </ul>

    <ul class="sidebar__music">
      <h2 class="sidebar__header">Your Music</h2>
      <li>Your Daily Mix</li>
      <li>Songs</li>
      <li>Albums</li>
      <li>Artists</li>
      <li>Stations</li>
      <li>Local Files</li>
    </ul>

    <ul class="sidebar__playlists">
      <h2 class="sidebar__header">Playlists</h2>
      <li>Liked from Radio</li>
      <li>Indie Pop</li>
      <li>Roadtrip</li>
      <li>Release Radar</li>
      <li>Focus</li>
      <li>Piano Mood</li>
      <li>Your Summer Rewind</li>
      <li>Inspire</li>
      <li>Alternative Faves</li>
    </ul>
  </aside>
);

export default Sidebar;
