let visibility = false; 

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisbility = this.handleToggleVisbility.bind(this);
    }
    handleToggleVisbility() {   
        visibility = !visibility;
        render();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggleVisbility}>
                    {visibility ? 'Hide details' : 'Show details'}
                </button>
                {visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>         
                    </div>
                )}
            </div>
        );
    }
}

class Counter extends React.Component {
   constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
   }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
      this.setState(() => {
          return {
              count: 0
          };
      });
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
                <VisibilityToggle />
            </div>
        );
    }
}

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>

//         );

//         ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();




//06:13