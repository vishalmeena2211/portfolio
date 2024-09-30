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

const featuredWorks = [
  {
    idx: 1,
    title: "RGPV Connect",
    src: "https://res.cloudinary.com/dc7entfb0/image/upload/f_auto,q_auto/v1/our%20project/oiapdjmbiz1cgwklij1z",
    description: "•Developed an efficient web application for RGPV students, featuring quick result fetching with async HTTP requests and OCR. • Centralized access to notes, schemas, and previous year papers. • Tech: NextJs, Tailwind, Docker, ShadCN, FastAPI, BeautifulSoup4, Tesseract OCR.",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://rgpvconnect.tech",
    objectPosition: "right 20%",
  },
  {
    idx: 2,
    title: "PIMR Bhopal",
    src: "https://res.cloudinary.com/degqrhxgx/image/upload/f_auto,q_auto/v1/Tricrafters%20project%20images/qbbav1duqqyjhhoduuyl",
    description: "The official website for PIMR Bhopal, providing comprehensive information and resources. I developed and maintained the site, ensuring user-friendly content management and enhanced functionality.",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://pimrbhopal.ac.in/",
    objectPosition: "right 20%",
  },
  {
    idx: 3,
    title: "Prabhotsav",
    description: "An event management system for PIMR Bhopal. I led the development, integrating features for registration, scheduling, and communication, ensuring smooth operation during events.",
    src: "https://res.cloudinary.com/degqrhxgx/image/upload/f_auto,q_auto/v1/Tricrafters%20project%20images/qhilgr7vyuntkbflhsob",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://prabhotsav.pimrbhopal.in/",
  },
  {
    idx: 4,
    title: "Tricrafters",
    description: "Tricrafters Software Solution is a company I co-founded. We focus on delivering high-quality software solutions across various industries. My role includes leading development projects, managing teams, and ensuring the successful delivery of client projects.",
    src: "https://res.cloudinary.com/dsiivrxdk/image/upload/f_auto,q_auto/v1/myportfolio/v2cgkvn1ysh4wjde6ct3",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://tricrafters.in/",
    objectPosition: "right 20%",
  },
  {
    idx: 5,
    title: "Tasker",
    description: "Tasker is a task management application that I developed for personal use. It features a clean and intuitive interface, with features for task creation, categorization, and scheduling.",
    src: "https://res.cloudinary.com/dc7entfb0/image/upload/f_auto,q_auto/v1/our%20project/uevswvarxofejgkfmjsv",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://tasker-next-app.vercel.app",
    objectPosition: "right 20%",
  },
  {
    idx: 6,
    title: "RandomTalk",
    description: "RandomTalk is a chat application that I developed for personal use. Basically it allow user to video call with random people. It features a clean and intuitive interface, with features for video call, chat, with random people.",
    src: "https://res.cloudinary.com/dc7entfb0/image/upload/f_auto,q_auto/v1/our%20project/ctttpy3hjzdjnca7r6uj",
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: "https://omeglelike.netlify.app",
    objectPosition: "right 20%",
  },
]

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
        {featuredWorks.map((work) => (
          <MotionGridItem key={work.idx} colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={work.idx}
              title={work.title}
              src={work.src}
              description={work.description}
              height={work.height}
              ctaUrl={work.ctaUrl}
              objectPosition={work.objectPosition}
              isMobile={isMobile}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
