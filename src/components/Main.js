import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <object width="100%" height="600" type="application/pdf" data="https://drive.google.com/file/d/1dovo2Uu9cS1Z7sBdaoBTCzjqqbiMGXQHWEhEfKy5qJA/preview">
        <embed src="https://drive.google.com/file/d/1dovo2Uu9cS1Z7sBdaoBTCzjqqbiMGXQHWEhEfKy5qJA/preview" width="100%" height="400px"/>
      </object>
      {/* For future use below */}
      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;