import { Link } from '@chakra-ui/react'

export type Company = 'PIMROfficial' | 'Tricrafters'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  PIMROfficial: {
    name: 'PIMR Bhopal',
    longName: 'Prestige Institute of Management and Research, Bhopal',
    subDetail: 'Official Website',
    url: 'https://www.pimrbhopal.in/',
    position: 'Developer and Administrator',
    duration: 'Jan 2022 - Present',
    logo: {
      light: 'https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/PIMR%20LOGO/m0fb03g22othhobct1qy',
      dark: 'https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/PIMR%20LOGO/m0fb03g22othhobct1qy',
    },
    roles: [
      <>
        Developed and maintained the official website of PIMR Bhopal, providing
        comprehensive information and resources for students, faculty, and
        visitors.
      </>,
      <>
        Implemented a user-friendly content management system (CMS) to allow
        easy updates and management of site content by non-technical staff.
      </>,
      <>
        Enhanced site functionality by integrating interactive features such as
        online admission forms, event calendars, and news updates.
      </>,
      <>
        Ensured the website's compatibility with various devices and browsers,
        improving accessibility and user experience.
      </>,
    ],
  },
  Tricrafters : {
    name: 'Tricrafters Software Solution',
    longName: 'Tricrafters Software Solution',
    subDetail: 'Co-founder and Software Developer',
    url: 'https://www.tricrafters.com/',
    position: 'Co-founder',
    duration: 'May 2022 - Present',
    logo: {
      light: 'https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/TRICRAFTERS%20LOGO/tricrafters_logo_light',
      dark: 'https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/TRICRAFTERS%20LOGO/tricrafters_logo_dark',
    },
    roles: [
      <>
        Co-founded Tricrafters Software Solution, focusing on delivering
        high-quality software solutions for various clients and industries.
      </>,
      <>
        Led the development of key projects, ensuring timely delivery and
        adherence to client specifications.
      </>,
      <>
        Managed a team of developers and designers, fostering a collaborative
        and innovative work environment.
      </>,
      <>
        Developed and implemented software applications that enhanced business
        operations and user experiences for clients.
      </>,
      <>
        Engaged in continuous learning and application of new technologies to
        keep the company's offerings competitive and cutting-edge.
      </>,
    ],
  }
}

export const ExperiencesList = [
  Experiences.PIMROfficial,
  Experiences.Tricrafters,
]
