import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Link as RLink } from 'react-router-dom';

const MyPolicyPT = (): any => (
  <Container fixed>
    <Typography variant="h6" gutterBottom>
      Cookie policy for
      {' '}
      <Link
        title="Home page"
        color="textPrimary"
        underline="always"
        component={RLink}
        to="/"
      >
        Ricardo Gaefke
      </Link>
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      This is the Cookie Policy for Ricardo Gaefke, accessible from ricardogaefke.com
    </Typography>
    <Typography variant="h6" gutterBottom>
      What Are Cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      As is common practice with almost all professional websites this site uses cookies, which are tiny files that are
      downloaded to your computer, to improve your experience. This page describes what information they gather, how we
      use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from
      being stored however this may downgrade or break certain elements of the sites functionality.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem
      nossa plataforma serão tratadas em concordância com a Lei da Proteção de Dados Pessoais
      de 26 de outubro de 1998 (Lei n.º 67/98).
    </Typography>
    <Typography variant="h6" gutterBottom>
      What Are Cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      As is common practice with almost all professional websites this site uses cookies, which are tiny
      files that are downloaded to your computer, to improve your experience. This page describes what
      information they gather, how we use it and why we sometimes need to store these cookies. We will also
      share how you can prevent these cookies from being stored however this may downgrade or break
      certain elements of the sites functionality.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      For more general information on cookies see the Wikipedia article on HTTP Cookies.
    </Typography>
    <Typography variant="h6" gutterBottom>
      How We Use Cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      We use cookies for a variety of reasons detailed below. Unfortunately in most cases
      there are no industry standard options for disabling cookies without completely
      disabling the functionality and features they add to this site. It is recommended that
      you leave on all cookies if you are not sure whether you need them or not in case they
      are used to provide a service that you use.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Disabling Cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      You can prevent the setting of cookies by adjusting the settings on your browser (see your
      browser Help for how to do this). Be aware that disabling cookies will affect the
      functionality of this and many other websites that you visit. Disabling cookies will
      usually result in also disabling certain functionality and features of the this site.
      Therefore it is recommended that you do not disable cookies.
    </Typography>
    <Typography variant="h6" gutterBottom>
      The Cookies We Set
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Account related cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      If you create an account with us then we will use cookies for the management of the
      signup process and general administration. These cookies will usually be deleted when
      you log out however in some cases they may remain afterwards to remember your site
      preferences when logged out.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Login related cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      We use cookies when you are logged in so that we can remember this fact. This prevents
      you from having to log in every single time you visit a new page. These cookies are
      typically removed or cleared when you log out to ensure that you can only access
      restricted features and areas when logged in.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Site preferences cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      In order to provide you with a great experience on this site we provide the
      functionality to set your preferences for how this site runs when you use it. In order
      to remember your preferences we need to set cookies so that this information can be
      called whenever you interact with a page is affected by your preferences.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Third Party Cookies
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      In some special cases we also use cookies provided by trusted third parties. The following
      section details which third party cookies you might encounter through this site.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      From time to time we test new features and make subtle changes to the way that the site is
      delivered. When we are still testing new features these cookies may be used to ensure that
      you receive a consistent experience whilst on the site whilst ensuring we understand which
      optimisations our users appreciate the most.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      We also use social media buttons and/or plugins on this site that allow you to connect with
      your social network in various ways. For these to work the following social media sites
      including: Google, Facebook, Twitter, Instagram, LinkedIn, will set cookies through our
      site which may be used to enhance your profile on their site or contribute to the data they
      hold for various purposes outlined in their respective privacy policies.
    </Typography>
    <Typography variant="h6" gutterBottom>
      More Information
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Hopefully that has clarified things for you and as was previously mentioned if there is something
      that you are not sure whether you need or not it is usually safer to leave cookies enabled in case
      it does interact with one of the features you use on our site.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      However if you are still looking for more information then you can contact us through one of
      our preferred contact methods:
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Email: ricardogaefke@gmail.com
    </Typography>
  </Container>
);

export default MyPolicyPT;
