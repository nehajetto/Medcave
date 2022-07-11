import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Navigator from './src/containers/Navigator';
import { firebase } from '@react-native-firebase/app';
export class App extends Component {

	componentDidMount()
	{
		var config = {
			apiKey: "AIzaSyAzdHCCcJr0VGVbmvWT8c4LJJKl8aWxj8A",
			authDomain: "medcave-b622d.firebaseapp.com",
			projectId: "medcave-b622d",
			storageBucket: "medcave-b622d.appspot.com",
			messagingSenderId: "1084079362170",
			appId: "1:1084079362170:web:f9e6996923ab6009716bc3",
			measurementId: "G-FCCV4H330L"
		  };
		  firebase.initializeApp(config);
	}
  render() {
	return (
	 <Navigator/>
	)
  }
}

export default App