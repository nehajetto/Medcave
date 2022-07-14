// App.js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['No', 'Facilities', 'Price', 'Time'],
      widthArr: [40, 150, 60, 80],
      DataTable: [
        ['1', 'Blood Routine', '55', '1.30 hr'],
        ['2', 'Haemoglobin', '15', '30 min'],
        ['3', 'Total WBC', '15', '45 min'],
        ['4', 'Differential Count', '20', '45 min'],
        ['5', 'Platelet', '25', '45 min'],
        ['6', 'ESR', '15', '1 hour'],
        ['7', 'Blood Grouping', '25', '30 min'],
        ['8', 'Blood Sugar', '15', '30 min'],
        ['9', 'Cholestrol', '40 ', '30 min'],
        ['10', 'Urine Routine', '30', '1 hour'],
        ['11', 'Albumin/Sugar', '15', '30 min'],
        ['12', 'Urine Bile Salt', '15', '30 min'],
        ['13', 'Urine Bile Pigment', '15', '30 min'],
        ['14', 'UPT', '40', '30 min'],
        ['15', 'Malarial Parasite', 'Free', '2 hour'],
       /* ['16', 'b', 'c', 'd'],
        ['17', '2', '3', '4'],*/
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#22C7B8'}}>
          <Row data={state.HeadTable} widthArr={state.widthArr} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} widthArr={state.widthArr} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#22C7B8'
  },
  TableText: { 
    margin: 10
  }
});
