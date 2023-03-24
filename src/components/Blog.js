import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import blogPic from './images/blog2.png';

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

const mainFeaturedPost = {
  title: 'Event Planner',
  description:
    "Plan events and schedule tasks in your neighborhood.",
  image: 'https://media.giphy.com/media/ekY8JdlX7FqQTbteE7/giphy.gif',
  imageText: 'planner',
  linkText: 'Click to see project',
};

const featuredPosts = [
  {
    title: 'Movie DB',
    date: 'Nov 2022',
    description:
      'Track which movies you have watched.',
    image: 'https://media.giphy.com/media/nNUUhTml69NLV3ksaR/giphy.gif',
    imageLabel: 'Movie Reel',
    url: 'https://janvierb1.github.io/The-Movie-Library/',
  },
  {
    title: 'Text Editor',
    date: 'Dec 2022',
    description:
      'Simple Text Editor.',
    image: 'https://media.giphy.com/media/W4p2QJMltrvDqp1c0B/giphy.gif',
    imageLabel: 'Pencil Writing',
    url: 'https://morning-ridge-62197.herokuapp.com/',
  },
  {
    title: 'Social Network API',
    date: 'Jan 2023',
    description:
      'Social Network API',
    image: 'https://media.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.gif',
    imageLabel: 'Social Network Likes',
    url: 'https://github.com/IRiceKrispie/Social-Network-API',
  },
  {
    title: 'Weekly Scheduler',
    date: 'Oct 2022',
    description:
      'Stay ahead by planning ahead.',
    image: blogPic,
    imageLabel: 'Writing a blog',
    url: 'https://iricekrispie.github.io/challenge-5/',
  },
  {
    title: 'Weather Dashboard',
    date: 'Oct 2022',
    description:
      'Search for Weather patterns in your city.',
    image: 'https://media.giphy.com/media/26uf5HjasTtxtNCqQ/giphy.gif',
    imageLabel: 'weather',
    url: 'https://iricekrispie.github.io/challenge-6/',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'My name is Joseph Sandoval. I am a junior web devolper that is familiar with HTML, jQuery, JavaScript, Node.js, Express.js, Web Bundlers, MySQL, MongoDB, and React. Feel free to check out my projects and my repos on GitHub.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/IRiceKrispie" },
    { name: 'LinkedIn', icon: LinkedInIcon, url: "https://www.linkedin.com/in/joseph-sandoval-70b177259/" },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Joseph Sandoval, Web Developer" sections={sections} /> */}
        <Header title="Joseph Sandoval, Web Developer" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="View My Resume" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Feel Free to Contact Me"
        description="Made with care using React and Material UI"
      />
    </ThemeProvider>
  );
}