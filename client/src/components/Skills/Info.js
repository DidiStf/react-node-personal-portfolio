import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './Info.scss';

const SkillsInfo = () => (
  <div className='SkillsInfo'>
    <div className='SkillsInfo_column'>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>JavaScript</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>React</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>React-Native</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Redux</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Vue</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Node.js</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Express</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>MongoDB</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>PostgrSQL</p>
      </div>
    </div>
    <div className='SkillsInfo_column'>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>HTML</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>CSS & Sass</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Jest</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Postman</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>HTTP & REST</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Git</p>
      </div>

      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Npm & Yarn</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>AdobeXd</p>
      </div>
      <div className='SkillsInfo_row'>
        <FontAwesomeIcon className='SkillsInfo_icon' icon={faCaretRight} />
        <p>Figma</p>
      </div>
    </div>
  </div>
);

export default SkillsInfo;
