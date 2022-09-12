import { Document, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>

    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  </div>
);
