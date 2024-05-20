import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/vishalmeena111',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/Vishalmeena181/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishal-meena-a0b78b282/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/25096176/vishal-meena',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCnlSFYeLAXHSZnCk2j0FYKA',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/vishalmeena2211',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/vishal_meena_c005978f3483',
    icon: FaDev,
  },
]
