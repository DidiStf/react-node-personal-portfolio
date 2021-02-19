import { useContext } from 'react';

import timelineData from '../../assets/data/timeline';
import TimelineItem from './Item';

import { TranslationLocaleContext } from '../../context/TranslationLocaleProvider';

import './Timeline.scss';

const Timeline = () => {
  const { locale } = useContext(TranslationLocaleContext);
  const data = timelineData[locale];

  return (
    data.length && (
      <div className='Timeline'>
        {data.map((d, i) => (
          <TimelineItem data={d} key={i} />
        ))}
      </div>
    )
  );
};

export default Timeline;
