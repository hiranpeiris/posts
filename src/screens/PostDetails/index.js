import React, { Component } from 'react';
import { FlatList, Image, View } from 'react-native';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import { createNavBar } from '../../utils';
import { BoldText, GrayText, ColorText, VSpacer, PhotoImage } from './PostDetails.style';

class PostDetails extends Component {
  static navigationOptions = createNavBar('Post Details');

  render() {
    const { currentPost, photos } = this.props;

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        <FlatList
          ListHeaderComponent={(
            <View>
              <BoldText fontSize={25}>{currentPost.title}</BoldText>
              <VSpacer />
              {currentPost.user && (<GrayText>by {currentPost.user.name}</GrayText>)}
              <VSpacer space={30} />
              <ColorText color="blue">{currentPost.body}</ColorText>
              <VSpacer space={40} />
            </View>
          )}
          data={photos}
          renderItem={({ item }) => (
            <PhotoImage
              source={{
                uri: item.thumbnailUrl,
              }}
            />
          )}
          numColumns={3}
          keyExtractor={item => `${item.id}`}
        />
      </Page>
    );
  }
}

const mapStateToProps = ({ currentPost, photos }) => ({
  currentPost,
  photos,
});

export default connect(
  mapStateToProps)(PostDetails);
