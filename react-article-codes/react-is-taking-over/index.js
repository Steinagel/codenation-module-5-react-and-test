let jsContainer = document.getElementById("js");
let reactContainer = document.getElementById("react");

const render = () => {
  // JAVASCRIPT
  jsContainer.innerHTML = `
        <div class="demo">
            Hello js
            <br>
            <input />
            <p>${new Date()}</p>
        </div>
    `;

  // REACTJS
  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React",
      React.createElement("br"),
      React.createElement("input"),
      React.createElement("p", null, new Date().toString())
    ),
    reactContainer
  );
};

setInterval(render, 1000);
