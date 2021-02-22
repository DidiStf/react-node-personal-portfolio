import { isBrowserSafari } from '../../utils/userAgent';

import './TerminalAnimation.scss';

const TerminalAnimation = () => {
  const isSafari = isBrowserSafari();

  return (
    !isSafari && (
      <div className='TerminalAnimation'>
        didistf@xmg-fusion: ~$
        <div className='TerminalAnimation_cursor'> </div>
      </div>
    )
  );
};

export default TerminalAnimation;
