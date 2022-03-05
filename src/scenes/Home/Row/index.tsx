import { ListChildComponentProps } from 'react-window';

import { TimelineQuery } from '../../../generated/graphql';

export const Row = ({ data, index, style }: ListChildComponentProps<TimelineQuery>) => {
  const value = data.timeline.edges[index].node;
  return (
    <div style={style}>
      <div>{value.by.nickname}</div>
      <div>{value.message}</div>
      <div>{value.createdAt}</div>
    </div>
  );
};
