import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>Welcome {this.props.user}</div>
    );
  }
}

const withUser = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      if (this.props.user) {
        return (
          <WrappedComponent { ...this.props} />
        )
      }
      return <div>Welcome Guest!</div>
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

export default withLoader(withUser(Welcome));