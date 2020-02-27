import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import PostListRow from '../../components/PostListRow';
import { createNavBar } from '../../utils';
import { setCurrentPost, loadPosts } from '../../actions';

class Posts extends Component {
  static navigationOptions = createNavBar('Posts');

  onSelectPost = post => {
    this.props.setCurrentPost(post);
    this.props.navigation.navigate('PostDetails');
  };

  onRefresh = () => {
    this.props.loadPosts();
  };

  render() {
    const { posts, isLoading, error } = this.props;

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        {error ? (
          <Text>{error}</Text>
        ) : (
            <FlatList
              data={posts}
              keyExtractor={item => `post-${item.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.onSelectPost(item)}>
                  <PostListRow
                    title={item.title}
                    desc={`${item.user && 'by ' + item.user.name || 'Loading user...'}`}
                  />
                </TouchableOpacity>
              )}
              onRefresh={this.onRefresh}
              refreshing={isLoading}
              removeClippedSubviews={true}
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
  loadPosts: () => dispatch(loadPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
