import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    setDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{'Current Date'} - {date}</Text>
      <Text style={styles.notice}>{"\n"}
      {"\n"}
      DOCTORS ON LEAVE
      {"\n"}
      </Text>
      <Text style={styles.doc}>
       
        
      {"\t"}  Dr.Dhanya S P (ENT)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  notice:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color:'black'
    
  },
  doc: {
    color:'black'
  }
});