import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormStudent from './components/FormStudent';
import Input from './components/Input';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper signUpContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="formH2">Your Child's Information</h2>
              <form>
                <Input />
                <Input />
                <Input />
                <p>Add all of your child's classes (click "Add Class"), then click "Create Child".</p>
                <Button />
                <Button />
              </form>
            </div>
            <div className="col-md-6">
              <h2>Hold Your Children Accountable</h2>
              <p className="intro-p">All grades, with the exception of 'I' (Incomplete), 'GNR' (Grade Not Reported), 'L' (Pass, grade to follow), and 'N' (Continuation) grades, are frozen at the time of graduation. Grades of Incomplete become frozen 12 months after the quarter in which they were awarded, either as 'NP' (Not Passed) if the course work has not been successfully completed, or another grade if it has. Grades of 'GNR', 'L', or 'N' also have one year to be updated after which they are frozen as they stand. The Office of the University Registrar evaluates prior to graduation whether the GPA on a transcript bearing grades of Incomplete would meet University requirements for graduation even if all 'I' grades were replaced by NP.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  txt: 'some text'
}

export default App;
