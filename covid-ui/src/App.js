import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table';

class App extends Component {

constructor(props){
super(props);
this.state={results:[]};
}
componentDidMount() {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

        fetch('http://localhost:8081/report', requestOptions)
        .then(res => res.json())
        .then((data) => {
          this.setState({ results: data.results })
        })
        .catch(console.log)
      }
render(){
return (
            <MaterialTable
                title="Remote Data Preview"
                columns={[
                    { title: 'Title', field: 'title' },
                    { title: 'Category', field: 'category' },
                    { title: 'Biorxiv URL', field: 'biorxiv_url' },
                    { title: 'First posted date', field: 'first_posted' },
                ]}
                data={this.state.results}
                options={{
                    search: true
                }}
            />
        )
}
}

export default App;
