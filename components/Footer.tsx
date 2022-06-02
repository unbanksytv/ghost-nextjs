import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  HStack,
} from '@chakra-ui/react';

import AnalyticsEventTracker from './AnalyticsEventTracker';
import Link from './Link';
import SocialIcons from './SocialIcons';

interface socialLink {
  name: string;
  href: string;
}


let SOCIALS_LEFT: socialLink[] = [
  { name: 'Discord', href: 'https://discord.gg/gvo' },
  { name: 'Gitbook', href: 'https://gvo.gitbook.io/livethelifetv/' },
  { name: 'Vote', href: 'https://snapshot.org/' },
]

let SOCIALS_RIGHT: socialLink[] = [
  { name: 'Github', href: 'https://github.com/unbanksytv' },
  { name: 'TwitchTV', href: 'https://www.twitch.tv/livethelifetv' },
]

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" className="footer-section global-footer">
      <Flex className="footer-wrap">
        <Box className="footer-data">
          <Box className="footer-logo">
            <Link className="is-image" href="/">
              <Image src="/images/logo.png" alt="logo" />
            </Link>
          </Box>
          <Text className="footer-description">
            ...
          </Text>
          <Box className="footer-icons">
            <SocialIcons />
          </Box>
        </Box>
        <HStack spacing={16} wrap="wrap">
          <UnorderedList className="footer-links" mx="0">
            {SOCIALS_LEFT.map(_social => {
              return <AnalyticsEventTracker
                key={_social.name}
                events={[{
                  eventType: "click",
                  eventName: "CLICK_FOOTER_LINK",
                  data: {
                    link: _social.href,
                    title: _social.name
                  }
                }]}>
                <ListItem className="footer-link">
                  <Link href={_social.href}>{_social.name}</Link>
                </ListItem>
              </AnalyticsEventTracker>
            })}
          </UnorderedList>
          <UnorderedList className="footer-links" mx="0">
            {SOCIALS_RIGHT.map(_social => {
              return <AnalyticsEventTracker
              key={_social.name}
                events={[{
                  eventType: "click",
                  eventName: "CLICK_FOOTER_LINK",
                  data: {
                    link: _social.href,
                    title: _social.name
                  }
                }]}>
                <ListItem className="footer-link">
                  <Link href={_social.href}>{_social.name}</Link>
                </ListItem>
              </AnalyticsEventTracker>
            })}
          </UnorderedList>
        </HStack>
      </Flex>
      <Box className="footer-copyright">
        LTL &copy; 2022. All Rights Reserved. Published with{' '}
        <Link href="https://ghost.org" target="_blank">
          Ghost
        </Link>
        .
      </Box>
    </Box>
  );
}
