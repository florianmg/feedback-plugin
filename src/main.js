class FeedbackPlugin {

  constructor() {
    this.initialize();
  }

  initialize() {
    console.log("initialize()");

    // container
    const container = document.createElement('div');
    container.setAttribute('style', `
      background-color: #c1c1c1;
      border-radius: 10px;
      position: absolute;
      bottom: 100px;
      right: 100px;
      box-sizing: border-box;
      padding: 10px;
    `);

    // Title
    const title = document.createElement('h2');
    title.innerText = 'Feedback';
    title.setAttribute('style', `
      margin: 0;
      padding: 0;
    `);
    container.appendChild(title);

    // Input message with reset style
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'feedback-message';
    input.setAttribute('style', `
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      margin-top: 10px;
    `);
    container.appendChild(input);

    // Button
    const button = document.createElement('button');
    button.id = 'feedback-button';
    button.innerText = 'Send';
    button.setAttribute('style', `
      margin-top: 10px;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    `);
    container.appendChild(button);

    document.body.appendChild(container);
  }
}