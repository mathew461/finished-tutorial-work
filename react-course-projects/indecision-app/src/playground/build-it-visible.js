console.log('App.js is running!')

const app = {
    title: 'Visibility Toggle',
    toggle: ['Hey, these are some details you can now see!']
}      

const hide = () => {

    let elem = document.getElementById("mybutton1")
        if (elem.innerHTML == "show details") {
            elem.innerHTML = "hide details";
            app.toggle = [''];
        } else if (elem.innerHTML == "hide details") {
            elem.innerHTML = "show details";
            app.toggle = ['Hey, these are some details you can now see!'];
        }
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const visibility = (
        <div>
            <h1>{app.title}</h1>
            <button id='mybutton1' onClick={hide}>show details</button>
            <p>{app.toggle}</p>   
        </div>          
    );

    ReactDOM.render(visibility, appRoot);
};

render();
// this is the command to run Babel - babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
// this is the command to run Live-server - live-server public
