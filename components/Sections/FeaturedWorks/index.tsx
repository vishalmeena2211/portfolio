import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from '@/config/animations'
import { mobileBreakpointsMap } from '@/config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made through freelancing, company projects, and case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="PIMR Bhopal"
            src="https://res.cloudinary.com/degqrhxgx/image/upload/f_auto,q_auto/v1/Tricrafters%20project%20images/qbbav1duqqyjhhoduuyl"
            description="The official website for PIMR Bhopal, providing comprehensive information and resources. I developed and maintained the site, ensuring user-friendly content management and enhanced functionality."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://pimrbhopal.in/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Prabhotsav"
            description="An event management system for PIMR Bhopal. I led the development, integrating features for registration, scheduling, and communication, ensuring smooth operation during events."
            src="https://res.cloudinary.com/degqrhxgx/image/upload/f_auto,q_auto/v1/Tricrafters%20project%20images/qhilgr7vyuntkbflhsob"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://prabhotsav.pimrbhopal.in/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Tricrafters"
            description="Tricrafters Software Solution is a company I co-founded. We focus on delivering high-quality software solutions across various industries. My role includes leading development projects, managing teams, and ensuring the successful delivery of client projects."
            src="https://res.cloudinary.com/dsiivrxdk/image/upload/f_auto,q_auto/v1/myportfolio/v2cgkvn1ysh4wjde6ct3"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://tricrafters.in/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
