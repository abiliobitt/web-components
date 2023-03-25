
import FilledStarIcon from './icons/filledStar'
import StarIcon from './icons/star'
import XIcon from './icons/x'
import XCircleIcon from './icons/x-circle'

interface IconMappingProps {
  [key: string]: React.FC<GeneralIconProps>
}

const iconsMapping: IconMappingProps = {
  x: XIcon,
  xCircle: XCircleIcon,
  star: StarIcon,
  filledStart: FilledStarIcon
}

export default iconsMapping
