import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  RowImage,
  RowTitleBox,
  RowTitleText,
  RowDescText
} from './PostListRow.style';

const PostListRow = ({
  title,
  desc,
  image,
  titleColor,
  descColor,
}) => {
  return (
    <Container>
      <RowImage src={image} />
      <RowTitleBox>
        <RowTitleText color={titleColor}>{title}</RowTitleText>
        <RowDescText color={descColor}>{desc}</RowDescText>
      </RowTitleBox>
    </Container>
  );
};

PostListRow.defaultProps = {
  image: undefined,
  titleColor: undefined,
  descColor: undefined,
};

PostListRow.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string,
  titleColor: PropTypes.string,
  descColor: PropTypes.string,
};

export default PostListRow;
