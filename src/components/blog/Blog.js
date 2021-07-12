import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import * as posts from './all_posts'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'PROJECTS', url: '#' },
  { title: 'PROFESSIONAL NETWORKING', url: 'professional' },
  { title: 'SOCIAL MEDIA', url: 'social' },
];

const mainFeaturedPost = {
  title: "Hi, I'm Ishwar. Welcome to my webpage!",
  descriptionline1:
    "This page features the major projects that I have undertaken.",
  descriptionline2:
    "This webpage has been created using ReactJS. ",
  descriptionline3:
    " to view the source code.",
  image: 'https://source.unsplash.com/random',
  // imgText: 'main image description',
  // linkText: 'Continue reading…',
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Personal Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {posts.featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="Connect with me here:" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
