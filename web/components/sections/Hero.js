import {
  Link,
  Heading,
  Text,
  Container,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react'

import Icon from '../ui/Icon'

const Hero = ({ hero: { subtitle, socialMediaLinks } }) => {
  return (
    <Stack as="section" bgColor="brand.500" p="2rem">
      <Container maxW="1132px">
        <Flex>
          <Box>
            <Box>
              <Text
                color="brand.700"
                mb="-1.4rem"
                fontSize="32px"
                fontWeight="bold"
              >
                Hey, I'm
              </Text>
              <Heading as="h1" fontSize="150px" position="relative" zIndex="1">
                Mika Vesasto
              </Heading>
            </Box>
            <Container maxW="600px" mt="2rem">
              <Box maxW="445px">
                <Box
                  width="96px"
                  bgColor="brand.700"
                  height="5px"
                  mb="0.5rem"
                />
                <Text>{subtitle}</Text>
                <Flex>
                  {socialMediaLinks.map((socialLink) => (
                    <Link
                      key={socialLink._key}
                      href={socialLink.socialLinkUrl.linkUrl}
                      isExternal={socialLink.isExternal}
                      p="1rem"
                    >
                      <Icon icon={socialLink.icon} />
                    </Link>
                  ))}
                </Flex>
              </Box>
            </Container>
          </Box>
          <Box>
            <Box
              borderWidth="5px"
              borderRadius="50%"
              width="260px"
              height="260px"
              borderColor="brand.700"
              position="absolute"
              top="150px"
              right="240px"
              zIndex="0"
            ></Box>
          </Box>
        </Flex>
      </Container>
    </Stack>
  )
}

export default Hero
