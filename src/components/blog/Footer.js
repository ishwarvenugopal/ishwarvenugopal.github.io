import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon, InlineIcon } from '@iconify/react';
import stackoverflowIcon from '@iconify-icons/simple-icons/stackoverflow';
import researchgateIcon from '@iconify-icons/simple-icons/researchgate';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          <IconButton aria-label="GMail" onClick={() => window.open("mailto:ishwarvenugopal06@gmail.com?subject=''")}>
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/ishwar-venugopal")}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="GitHub" onClick={() => window.open("https://github.com/ishwarvenugopal")}>
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="Twitter" onClick={() => window.open("https://twitter.com/ishwarvenugopal")}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="StackOverflow" onClick={() => window.open("https://stackoverflow.com/users/11130170/ishwar-venugopal")}>
            <Icon icon={stackoverflowIcon} fontSize="large" />
          </IconButton>
          <IconButton aria-label="ResearchGate" onClick={() => window.open("https://www.researchgate.net/profile/Ishwar-Venugopal")}>
            <Icon icon={researchgateIcon} />
          </IconButton>
          <IconButton aria-label="Facebook" onClick={() => window.open("https://www.facebook.com/ishwar.venugopal")}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="Instagram" onClick={() => window.open("https://www.instagram.com/ishwar_venugopal/")}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
