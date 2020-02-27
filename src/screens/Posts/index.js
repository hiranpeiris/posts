import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import PostListRow from '../../components/PostListRow';
import Loading from '../../components/Loading';
import { createNavBar } from '../../utils';
import { setCurrentPost,  } from '../../actions';

class Posts extends Component {
  static navigationOptions = createNavBar('Posts');

  onSelectPost = post => {
    this.props.setCurrentPost(post);
    this.props.navigation.navigate('PostDetails');
  };

  render() {
    const { posts, isLoading, error } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        {error ? (
          <Text>{error}</Text>
        ) : (
            <FlatList
              data={posts}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={`${index}`}
                  onPress={() => this.onSelectPost(item)}>
                  <PostListRow
                    title={item.title}
                    desc={item.title}
                  />
                </TouchableOpacity>
              )}
            />
          )}
      </Page>
    );
  }
}

const mapStateToProps = ({ posts, isPostsLoading, postsError }) => ({
  posts,
  isLoading: isPostsLoading,
  error: postsError,
});

const mapDispatchToProps = dispatch => ({
  setCurrentPost: post =>
    dispatch(setCurrentPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
