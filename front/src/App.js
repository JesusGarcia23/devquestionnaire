import React from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
      maxPoint: 50,
      totalPoint: 0,
      limitMessage: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let re = new RegExp('https://github.com/');
    if(re.test(this.state.projectRepo) === false){
      alert("Invalid project Repo url, please check again")
      window.scrollTo(0, 0);
    }else{
    axios.post(`${process.env.REACT_APP_LOCALHOST}/submitForm`, this.state)
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
          limitMessage: false
        }, () => {
          alert("THANK YOU! YOUR APPLICATION WAS SUCCESSFULLY SUBMITED!")
          window.scrollTo(0, 0);
        })
        
      }

    }).catch(err => console.log(err))
  }

  }

  updateInput = (e) => {
    e.preventDefault();
    const {name, value, type} = e.target;
    let theValue = Number(value)
    const theInfo = this.state
    let theTotal = 0

    switch(type){

      case 'number':
        console.log(this.state.totalPoint)
        if(this.state.totalPoint > 49 && theValue > theInfo[name]){
          console.log("THIS IS HAPPENING")    
            theValue -= 1
            theInfo[name] = theValue 
            this.setState({
              limitMessage: true
            })
        }else{
          theInfo[name] = theValue 
          this.setState({
            limitMessage: false
          })
        }
  
        for(let x in this.state){
          if(typeof this.state[x] === 'number' && x !== 'maxPoint' && x !== 'totalPoint'){
            theTotal += theInfo[x]
          }
        }
  
        this.setState({
          [name]: theValue,
          totalPoint: theTotal,
          })
        break;
  
      default:
        this.setState({
          [name]: value
        })
        break;
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

// OLD STATE
// constructor(props){
//   super(props)
//   this.state = {
//     fullName:'',
//     email:'',
//     projectRepo:'',
//     projectUrl: '',
//     bestpracticeOOP: 0,
//     modularDevelopment: 0,
//     fulWorkUnderstanding: 0,
//     testing: 0,
//     databaseKnowledge: 0,
//     debugging: 0,
//     probSolvingSkills: 0,
//     javascript: 0,
//     html: 0,
//     css: 0,
//     workingTeam: 0,
//     selfMotivation: 0,
//     communicationSkills: 0,
//     ownEnergyLvl: 0,
//     intAptitude: 0,
//     maxPoint: 50,
//     totalPoint: 0,
//   }
// }
