import React from 'react';
import ContentLoader from "react-content-loader";
import classes from './skelet.module.scss';

const PizzaSkeleton: React.FC = () => {

  return (
    <ContentLoader
      className={'pizza-block' + ' ' + classes.wrap}
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="119" r="120" />
      <rect x="0" y="259" rx="10" ry="10" width="280" height="27" />
      <rect x="1" y="314" rx="10" ry="10" width="280" height="87" />
      <rect x="2" y="428" rx="10" ry="10" width="60" height="27" />
      <rect x="122" y="417" rx="10" ry="10" width="152" height="46" />
    </ContentLoader>
  )
}

export default PizzaSkeleton;