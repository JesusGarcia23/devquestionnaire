import React from 'react'

const Form = (props) => {
    const {fullName, email, projectRepo, projectUrl, bestpracticeOOP, modularDevelopment, fulWorkUnderstanding, testing, databaseKnowledge, debugging,
        probSolvingSkills, javascript, html, css, workingTeam, selfMotivation, communicationSkills, ownEnergyLvl, intAptitude, totalPoint, updateInput, handleSubmit} = props.allInfo

    return(
        <form className='the-form' onSubmit={e => props.handleSubmit(e)}>
        <div className='user-info'>
        <input type='text' name='fullName' value={fullName} onChange={e => props.updateInput(e)} placeholder='FULL NAME'></input>
        <input type='email' name='email' value={email} onChange={e => props.updateInput(e)} placeholder='EMAIL'></input>
        <input type='text' name='projectRepo' value={projectRepo} onChange={e => props.updateInput(e)} placeholder='PROJECT REPO'></input>
        <input type='text' name='projectUrl' value={projectUrl} onChange={e => props.updateInput(e)} placeholder='PROJECT URL'></input>
        </div>

        <div className='skills-form'>
        
        <div className='form-skill'>
        <label>USING BEST PRACTICES FOR OOP:</label>
        <input type='number' name='bestpracticeOOP' min={0} value={bestpracticeOOP} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>MODULAR DEVELOPMENT:</label>
        <input type='number' name='modularDevelopment' min={0} value={modularDevelopment} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>FULL STACK WORKFLOW UNDERSTANDING:</label>
        <input type='number' name='fulWorkUnderstanding' min={0} value={fulWorkUnderstanding} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>TESTING:</label>
        <input type='number' name='testing' min={0} value={testing} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>DATABASE KNOWLEDGE:</label>
        <input type='number' name='databaseKnowledge' min={0} value={databaseKnowledge} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>DEBUGGING:</label>
        <input type='number' name='debugging' min={0} value={debugging} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>PROBLEM SOLVING SKILLS:</label>
        <input type='number' name='probSolvingSkills' min={0} value={probSolvingSkills} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>JAVASCRIPT:</label>
        <input type='number' name='javascript' min={0} value={javascript} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>HTML:</label>
        <input type='number' name='html' min={0} value={html} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>CSS:</label>
        <input type='number' name='css' min={0} value={css} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>WORKING ON A TEAM:</label>
        <input type='number' name='workingTeam' min={0} value={workingTeam} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>SELF MOTIVATION:</label>
        <input type='number' name='selfMotivation' min={0} value={selfMotivation} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>COMMUNICATIONS SKILLS:</label>
        <input type='number' name='communicationSkills' min={0} value={communicationSkills} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>YOUR OWN ENERGY LEVEL:</label>
        <input type='number' name='ownEnergyLvl' min={0} value={ownEnergyLvl} onChange={e => props.updateInput(e)}></input>
        </div>

        <div className='form-skill'>
        <label>INTELLIGENCE / APTITUDE:</label>
        <input type='number' name='intAptitude' min={0} value={intAptitude} onChange={e => props.updateInput(e)}></input>
        </div>

        </div>
        <button>SUBMIT</button>
        </form>
    )
}

export default Form