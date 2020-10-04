class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing three'];
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
    
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
   handlePick() {
       alert('handlePick');
   }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        );
    }
}




class Options extends React.Component {
    handleRemoveAll() {
        alert('some message')
    }


    render() {
        return (
        <div>            
        {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }        
        <button onClick={this.handleRemoveAll}>Remove All</button>        
        </div>
        );
    }
}





class Option extends React.Component {
    render() {
        return (
            <div>
              Option: {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    render() {
        return (
        <div>
            <p>AddOption component here</p>
        </div>   
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//11.16
// this is the command to run Babel - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// this is the command to run Live-server - live-server public