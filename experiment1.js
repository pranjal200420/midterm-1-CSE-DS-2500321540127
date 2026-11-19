const EventEmitter = require("events");

class Button extends EventEmitter {
    click() {
        this.emit("click", {
            message: "Button clicked!"
        });
    }
}

const button = new Button();


button.on("click", (event) => {
    console.log(event.message);
});


button.click();