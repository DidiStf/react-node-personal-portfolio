import timelineData from '../../assets/data/timeline';
import TimelineItem from './Item';

import './Timeline.scss';

const Timeline = () => {
  return (
    timelineData.length && (
      <div className='Timeline'>
        {timelineData.map((data, i) => (
          <TimelineItem data={data} key={i} />
        ))}
      </div>
    )
  );
};

export default Timeline;
