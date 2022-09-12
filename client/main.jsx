import { App } from '/imports/ui/App';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(App());
});
