'use strict';

var Category = React.createClass({
      render: function() {
        return ( < h2 > {
            this.props.title
          } < /h2>);
        }
      });

    ReactDOM.render( < div > < Category title = "Infrastructure" / >
      < Category title = "Ongoing" / >
      < Category title = "Others / School" / > < /div>,
      document.getElementById('container')
    );
