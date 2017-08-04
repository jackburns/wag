// The form parent will get the data and display it
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = dog => {
    this.props.onRemove(dog);
  };

  render() {
    return (
      <div className="pure-list">
        <h4>
          {this.props.label || "Your List"}
        </h4>
        <ul className="pure-menu-list pure-g">
          {this.props.items.map((dog, index) =>
            <li className="pure-menu-item" key={index}>
              <div className="dog-name pure-u-3-4">
                {dog}
              </div>
              <div className="pure-u-1-4">
                <button
                  className="button-error pure-button"
                  onClick={this.handleClick.bind(null, dog)}
                >
                  X
                </button>
              </div>
            </li>
          )}
          <style jsx>{`
            .button-error {
              margin-left: 1em;
              padding: .3em 1em;
              color: white;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
              background: rgb(202, 60, 60);
            }
            .pure-menu-item {
              width: 100%;
              margin: .1em; 0; 
            }
            .dog-name {
              margin-top: 5px;
            }
          `}</style>
        </ul>
      </div>
    );
  }
}
