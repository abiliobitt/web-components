
import XIcon from './icons/x'
import XCircleIcon from './icons/x-circle'

interface IconMappingProps {
  [key: string]: React.FC<GeneralIconProps>
}

const iconsMapping: IconMappingProps = {
  x: XIcon,
  xCircle: XCircleIcon
}

export default iconsMapping
