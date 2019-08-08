import React ,{Component} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap'
// import './App.css';


class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      data1:[],
      loader:false
    }
  }
   componentWillMount(){
// alert("will mount")
   }
   componentDidMount(){
     this.setState({loader:true})
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then((response)=> {
      this.setState({data1:response.data, loader:false})
      //  console.log(response.data)
    })
   }
  render(){

    if(this.state.loader){
return <h1>Getting Data from Api.....!!!</h1>
    }else{
      return( 
        <div>
        
          {this.state.data1.map((item,k) =>(
  <Card style={{ width: '18rem' }} key={k}>
       
       <Card.Body>
       <Card.Title>{item.employee_name}</Card.Title>
       <Card.Text>
      {item.employee_salary}
      </Card.Text>
      <Card.Text>
      {item.id}
       </Card.Text>
   
  </Card.Body>
</Card>) )}
          
          {/* {alert("render")} */}
        
        </div>
        );
    }
  }
}

export default App;
