import TextContent from '../components/TextContent'
import AboutMeFs from '../posts/about.md'

export default function About() {
  return <TextContent title={'about me'} contentFile={AboutMeFs} />
}
