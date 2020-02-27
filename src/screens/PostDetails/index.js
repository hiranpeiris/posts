import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import Button from '../../components/Button';
import { createNavBar } from '../../utils';

class PostDetails extends Component {
  static navigationOptions = createNavBar('Post Details');

  render() {
    const { currentPost } = this.props;

    return (
      <Page paddingTop="30" paddingLeft="20" paddingRight="20">
        
      </Page>
    );
  }
}

const mapStateToProps = ({ currentPost }) => ({
  currentPost,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetails);
