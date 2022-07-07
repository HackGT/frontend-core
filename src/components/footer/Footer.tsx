import * as React from 'react';
import { ButtonGroup, Container, IconButton, Stack, Box, Text, } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaGlobe, } from 'react-icons/fa';
import { IconType } from 'react-icons';

class SocialMedia {
  name: string;
  link: string;
  icon: IconType;

  constructor(name: string, link: string, icon: IconType) {
    this.name = name;
    this.link = link;
    this.icon = icon;
  }
}

const SocialMediaList = [
  new SocialMedia("Instagram", "https://www.instagram.com/thehexlabs/", FaInstagram),
  new SocialMedia("Facebook", "https://www.facebook.com/TheHexLabs", FaFacebook),
  new SocialMedia("Twitter", "https://twitter.com/TheHexLabs", FaTwitter),
  new SocialMedia("LinkedIn", "https://www.linkedin.com/company/thehexlabs/", FaLinkedin),
  new SocialMedia("GitHub", "https://github.com/HackGT", FaGithub),
  new SocialMedia("Web", "https://hexlabs.org/", FaGlobe),
]

const Footer: React.FC = () => (
  <Container as="footer" textAlign="center" paddingTop={14} paddingBottom={12}>
    <Stack spacing="5">
      <Stack justifyContent="center" direction="row" align="center">
        <ButtonGroup variant="ghost">
          {SocialMediaList.map((socialmedia: SocialMedia) => (
            <IconButton
              key={socialmedia.name}
              isRound
              as="a"
              href={socialmedia.link}
              aria-label={socialmedia.name}
              icon={<socialmedia.icon fontSize="1.25rem" />}
            />
          ))}
        </ButtonGroup>
      </Stack>
      <Box fontSize="14px" color="rgba(100, 100, 100, 0.7)">
        <Text>Made with ♡ by HexLabs</Text>
        <Text>&copy; {new Date().getFullYear()} HexLabs. All rights reserved.</Text>
      </Box>
    </Stack>
  </Container>
);

export default Footer;