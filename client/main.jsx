import { App } from '/imports/ui/App';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { render } from 'react-dom';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(App());
  // render(<App />, document.getElementById('react-target'));
});
