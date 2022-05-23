import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CenteredContainer } from './styles';

export default function LoadingScreen() {
  return (
    <CenteredContainer>
      <FontAwesomeIcon icon={solid('spinner')} size="6x" spin />
    </CenteredContainer>
  );
}
