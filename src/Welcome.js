import React from 'react';

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>Welcome {this.props.user}</div>
    );
  }
}

const withUser = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      return (
        <WrappedComponent { ...this.props} />
      )
    }
  }
}


const withLoader = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      const { isLoaded } = this.props;
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      return super.render();
    }
  }
}

export default withLoader(withUser(WelcomeMessage));