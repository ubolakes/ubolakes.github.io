const jsFrame = new JSFrame();

// menu
const whoami = document.getElementById("whoami");
const projects = document.getElementById("projects");
const quit = document.getElementById("quit");
// submenu
const projectsMenu = document.getElementById('projectsmenu');
const jaderissima = document.getElementById('jaderissima');
const rv_tracer = document.getElementById('rv_tracer');
const rv_encapsulator = document.getElementById('rv_encapsulator');
const cva6_te_connector = document.getElementById('cva6_te_connector');
const cg_project = document.getElementById('cg_project');
const dlx_simulator = document.getElementById('dlx_simulator');

bindCallbacks();

// assigns the callback functions to the ojects
function bindCallbacks() {
    // event listeners
    // main menu
    whoami.addEventListener("click", showWhoAmIWindow);
    projects.addEventListener("click", showProjects);
    quit.addEventListener("click", quitPage);
    // submenu
    jaderissima.addEventListener("click", showJaderissimaWindow);
    rv_tracer.addEventListener("click", showRVTracerWindow);
    rv_encapsulator.addEventListener("click", showRVEncapWindow);
    cva6_te_connector.addEventListener("click", showConnectorWindow);
    cg_project.addEventListener("click", showCGProjectWindow);
    dlx_simulator.addEventListener("click", showSimulatorWindow);
}

// shows initial window
function showWelcomeWindow() {
    const frame = jsFrame.create({
        name: 'welcomeWindow',
        title: 'Welcome',
        left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 600, height: 400,
        movable: true, // Enable to be moved  by mouse
        resizable: false, // Enable to be resized by mouse
        html: '<div id="welcome" style="font-size:20px;color:darkgray;">Contents will change in 5s</div>'
    });

    // show frame
    frame.show();
}

function showWhoAmIWindow() {
    var frame = jsFrame.getWindowByName('whoAmIWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'whoAmIWindow',
            title: 'Who Am I',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 600, height: 400,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('whoami_text')
        });

        // show frame
        frame.show();
    }
}

function showProjects() {
    const open = projectsMenu.classList.toggle('open');
    projects.classList.toggle('active', open);
}

// exits the page
function quitPage() {
    close();
}

// loads the content for a window
function getContent(id) {
    return document.getElementById(id).innerHTML;
}

// generates random integer
function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

// show windows
function showJaderissimaWindow() {
    var frame = jsFrame.getWindowByName('jaderissimaWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'jaderissimaWindow',
            title: 'La Jaderissima',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 1000, height: 600,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('jaderissima_text')
        });

        // show frame
        frame.show();
    }
}

function showRVTracerWindow() {
    var frame = jsFrame.getWindowByName('rvTracerWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'rvTracerWindow',
            title: 'RISC-V Tracer',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 1000, height: 600,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('rv_tracer_text')
        });

        // show frame
        frame.show();
    }
}

function showRVEncapWindow() {
    var frame = jsFrame.getWindowByName('rvEncapWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'rvEncapWindow',
            title: 'RISC-V Encapsulator',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 1000, height: 400,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('rv_encapsulator_text')
        });

        // show frame
        frame.show();
    }
}

function showConnectorWindow() {
    var frame = jsFrame.getWindowByName('CVA6ConnectorWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'CVA6ConnectorWindow',
            title: 'CVA6-TE Connector',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 1000, height: 600,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('cva6_te_connector_text')
        });

        // show frame
        frame.show();
    }
}

function showCGProjectWindow() {
    var frame = jsFrame.getWindowByName('CGProjectWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'CGProjectWindow',
            title: 'CG Project ThreeJS',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 400, height: 300,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('cg_project_text')
        });

        // show frame
        frame.show();
    }
}

function showSimulatorWindow() {
    var frame = jsFrame.getWindowByName('DLXSimulatorWindow');

    // checks if it exists before creating a new one
    if (frame) {
        frame.requestFocus();
        // frame.show();
    } else {
        const frame = jsFrame.create({
            name: 'DLXSimulatorWindow',
            title: 'DLX Simulator',
            left: 20 + getRandomInt(), top: 150 + getRandomInt(), width: 500, height: 200,
            movable: true,// Enable to be moved  by mouse
            resizable: false,// Enable to be resized by mouse
            html: getContent('dlx_simulator_text')
        });

        // show frame
        frame.show();
    }
}
