import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullName:'',
      email:'',
      projectRepo:'',
      projectUrl: '',
      bestpracticeOOP: 0,
      modularDevelopment: 0,
      fulWorkUnderstanding: 0,
      testing: 0,
      databaseKnowledge: 0,
      debugging: 0,
      probSolvingSkills: 0,
      javascript: 0,
      html: 0,
      css: 0,
      workingTeam: 0,
      selfMotivation: 0,
      communicationSkills: 0,
      ownEnergyLvl: 0,
      intAptitude: 0,
      maxPoint: 51,
      totalPoint: 0,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_HEROKU}/submitForm`, this.state)
    .then(responseFromBackEnd => {
      if(responseFromBackEnd.status === 200){
        this.setState({
          fullName:'',
          email:'',
          projectRepo:'',
          projectUrl: '',
          bestpracticeOOP: 0,
          modularDevelopment: 0,
          fulWorkUnderstanding: 0,
          testing: 0,
          databaseKnowledge: 0,
          debugging: 0,
          probSolvingSkills: 0,
          javascript: 0,
          html: 0,
          css: 0,
          workingTeam: 0,
          selfMotivation: 0,
          communicationSkills: 0,
          ownEnergyLvl: 0,
          intAptitude: 0,
          totalPoint: 0,
        }, () => {
          alert("THANK YOU! YOUR APPLICATION WAS SUCCESSFULLY SUBMITED!")
          window.scrollTo(0, 0);
        })
        
      }

    }).catch(err => console.log(err))
  }

  updateInput = (e) => {
    e.preventDefault();
    const {name, value, type} = e.target;
    let theValue = Number(value)

    if(type !== 'number'){
      this.setState({
        [name]: value
      })
    }else{
      
      const theInfo = this.state

      if(this.state.totalPoint === 50){
        if(theValue > theInfo[name]){
          theValue -= 1
        }
      }

      if(this.state.totalPoint < this.state.maxPoint){
        theInfo[name] = theValue 
      }
    
      let theTotal = 0

      for(let x in this.state){
        if(typeof this.state[x] === 'number' && x !== 'maxPoint' && x !== 'totalPoint'){
          theTotal += theInfo[x]
        }
       
      }

      if(theTotal < this.state.maxPoint){
        this.setState({
          [name]: theValue,
          totalPoint: theTotal 
          })
      }


    }

  }

  render(){
  return (
    <div className="App">
    <Form allInfo={this.state} updateInput={this.updateInput} handleSubmit={this.handleSubmit}/>
    </div>
  );
  }
}

export default App;
