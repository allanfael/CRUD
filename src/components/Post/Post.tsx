import React from 'react';
import { ViewStyle } from 'react-native';

import Typography from '../Typography';

import { PostDTO } from '@dto/PostDTO';

import { formatDistanceDate } from '@utils/formatDays';

import { Container, RowWrapper } from './post.styles';

interface PostProps extends PostDTO {
  style: ViewStyle;
  onPress(): void;
}

const Post = (props: PostProps) => {
  const { style, onPress, title, createAt, username, content } = props;

  const convertDate = createAt ? formatDistanceDate(createAt) : 'N/A';

  return (
    <Container style={style} onPress={onPress}>
      <RowWrapper>
        <Typography variant='S1Paragraph'>{username}</Typography>
        <Typography variant='S1Paragraph' color='secondaryColor'>
          {convertDate} atrás
        </Typography>
      </RowWrapper>

      <Typography variant='S1ParagraphBold'>{title}</Typography>

      <Typography
        variant='S1Paragraph'
        style={{ marginTop: 6 }}
        numberOfLines={2}
      >
        {content}
      </Typography>
    </Container>
  );
};

export default Post;
