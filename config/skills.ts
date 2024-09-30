import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiDocker,
  SiGooglecloud,
  SiGitlab,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiShadcnui,
  SiPrisma,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'
import { DiDjango, DiMaterializecss } from 'react-icons/di'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Graphql (JS)',
      icon: SiGraphql,
    },
    {
      name: 'Django',
      icon: DiDjango,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
  ],
  frontend: [
    {
      name: 'React, RecoilJS',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },

    {
      name: 'Redux',
      icon: SiRedux,
    },

  ],
  database: [

    {
      name: 'Prisma ORM',
      icon: SiPrisma,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    }
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
  ],
  'ui frameworks': [
    {
      name: 'ShadCN',
      icon: SiShadcnui,
    },
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'Material Tailwind',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: DiMaterializecss,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: BsQuestionSquare,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'Github',
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
