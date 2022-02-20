import React from 'react';
import RepoDetailsComponent from '../Components/RepoDetailsComponent';

const DetailScreen = props => {
  const item = props.route.params;

  //UI Details from Reusable RepoDetailComponent
  return <RepoDetailsComponent item={item} />;
};

export default React.memo(DetailScreen);
