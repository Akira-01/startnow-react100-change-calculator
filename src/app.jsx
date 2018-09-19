import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      Twenties: 0,
      Tens: 0,
      Fives: 0,
      Ones: 0,
      Quarters: 0,
      Dimes: 0,
      Nickels: 0,
      Pennies: 0
    };

    this.updateamountDue = this.updateamountDue.bind(this);
    this.updateamountReceived = this.updateamountReceived.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateamountDue(event) {
    this.setState({ amountDue: Number(event.target.value) });
  }

  updateamountReceived(e) {
    this.setState({ amountReceived: Number(e.target.value) });
  }

  

  // updateTerm(e) {
  //   this.setState({ term: Number(e.target.value) });
  // }

  calculate(e) {
    e.preventDefault();
    // Stops refreshing of server
    //debugger;
    const { amountDue, amountReceived } = this.state;
    console.log('AMOUNTDUE', amountDue);
    console.log('AMOUNTReceived', amountReceived);
    let changeDue = (amountReceived - amountDue) * 100; 
    
    this.setState({
      changeDue:(changeDue /100 ).toFixed(2)
    })
    
    console.log('CHANGEdue', changeDue);

  
    const elementArray = ['Twenties', 'Tens', 'Fives', 'Ones', 'Quarters', 'Dimes', 'Nickels', 'Pennies'];
    const amounts = [2000, 1000, 500, 100, 25, 10, 5, 1];
    const outputs = [];
    //console.log('');
    for (let i = 0; i < elementArray.length; i += 1) {
      if (amounts[i] !== 1) {
        outputs.push(Math.floor(changeDue / amounts[i]));
        changeDue %= amounts[i];
        console.log('CHANGEdue', changeDue);
      } else {
        Math.round(changeDue);
        outputs.push(Math.round(changeDue));
      }
      
      // find how much is due to the customer, amountrecieved - amountdue = changedue

      // changedue = 4.59

      // Calculate how many dollars, how many quarters, pennies etc.

      // SetState with all that information to render it on the screen.
    }

    this.setState({
      Twenties: outputs[0],
      Tens: outputs[1],
      Fives: outputs[2],
      Ones: outputs[3],
      Quarters: outputs[4],
      Dimes: outputs[5],
      Nickels: outputs[6],
      Pennies: outputs[7],
    })
  }
  render() {
    //console.log(changeDue);
    return (
      <div>
        <div className='container'>
          <h3> Change Calculator </h3>
          <form onSubmit={ this.calculate }>
            <div className='form-group'>
              <label htmlFor='amountDue'> How much is due? </label>
              <input
                type='number'
                name='amountDue'
                value={ this.state.amountDue }
                className='form-control'
                id='amountDue'
                onChange={ this.updateamountDue }
              />
            </div>

            <div className='form-group'>
              <label htmlFor='amountReceived'> How much was received? </label>
              <input
                type='number'
                name='amountReceived'
                value={ this.state.amountReceived }
                className='form-control'
                id='amountReceived'
                onChange={ this.updateamountReceived }
              />
            </div>
            <button type='submit' className='btn btn-primary'onClick={this.calculate}> Submit </button> 
          </form>

          <div className='alert alert-success'>
            The total change due is ${this.state.changeDue}
            {/* //<div name='output' id='output' >  This is your calculated monthly payment: { this.state.output }</div> */}
            </div>




          <div className='alert alert-primary' role='alert'>
            Success: Total change due.
            </div>
          <div className='alert alert-primary' role='alert'>
            Danger: Additional money owed.
            </div>

          <div className='row'>
            <div className='col-sm-8 change'>{this.state.Twenties}</div>
            <div className='col-sm-4 change'>{this.state.Tens}</div>
            <div className='col-sm-4 change'>{this.state.Fives}</div>
            <div className='col-sm-4 change'>{this.state.Ones}</div>
          </div>
          <div className='row'>
            <div className='col-sm-4 change'>{this.state.Quarters}</div>
            <div className='col-sm-4 change'>{this.state.Dimes}</div>
            <div className='col-sm-4 change'>{this.state.Nickels}</div>
            <div className='col-sm-4 change'>{this.state.Pennies}</div>
          </div>

        </div>
      </div>
    );
  }
}


export default App;
