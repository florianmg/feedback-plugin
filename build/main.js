var FeedbackPlugin = /** @class */ (function () {
    function FeedbackPlugin() {
        this.initialize();
    }
    FeedbackPlugin.prototype.initialize = function () {
        console.log("initialize()");
        // container
        var container = document.createElement('div');
        container.setAttribute('style', "\n      background-color: #c1c1c1;\n      border-radius: 10px;\n      position: absolute;\n      bottom: 100px;\n      right: 100px;\n      box-sizing: border-box;\n      padding: 10px;\n    ");
        // Title
        var title = document.createElement('h2');
        title.innerText = 'Feedback';
        title.setAttribute('style', "\n      margin: 0;\n      padding: 0;\n    ");
        container.appendChild(title);
        // Input message with reset style
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'feedback-message';
        input.setAttribute('style', "\n      width: 100%;\n      padding: 10px;\n      box-sizing: border-box;\n      margin-top: 10px;\n    ");
        container.appendChild(input);
        // Button
        var button = document.createElement('button');
        button.id = 'feedback-button';
        button.innerText = 'Send';
        button.setAttribute('style', "\n      margin-top: 10px;\n      width: 100%;\n      padding: 10px;\n      box-sizing: border-box;\n    ");
        container.appendChild(button);
        document.body.appendChild(container);
    };
    return FeedbackPlugin;
}());
