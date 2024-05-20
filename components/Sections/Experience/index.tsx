import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Since 2022, I have had the privilege to work with several companies, which has enabled me to hone my skills and talents. These companies will always have a special place in my heart. Currently, I am in the pre-final year of my B.Tech in Computer Science and Engineering (CSE) and also doing freelancing. Presently, I am working with{' '}
      <Link href="https://wwww.pimrbhopal.in/" target="_blank" rel="noreferrer">
        PIMR
      </Link>.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
