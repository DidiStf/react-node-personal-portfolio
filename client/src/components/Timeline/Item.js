import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

import './Item.scss';

const TimelineItem = ({ data }) => {
  const {
    date,
    description,
    institution,
    location,
    studies,
    tag,
    title,
  } = data;

  return (
    <div className='TimelineItem'>
      <div className='TimelineItem_content'>
        <span className='TimelineItem_content_tag'>{tag}</span>
        <small>{date}</small>
        <p>{institution}</p>
        <p>{location}</p>
        <strong>{title}</strong>
        <p>{description}</p>
        <span className='TimelineItem_content_circle'>
          <FontAwesomeIcon
            className='TimelineItem_content_circle_icon'
            icon={studies === true ? faGraduationCap : faBriefcase}
          />
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
