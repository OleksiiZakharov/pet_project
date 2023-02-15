import React from 'react';

interface IProps {
  id: number;
  state: boolean;
  text: string;
  onClickHandler: (id: number) => void;
}

const Badge = ({ id, state, text, onClickHandler }: IProps) => {
  console.log('Badge');
  return (
    <div
      className={`flex-fill filterBlock ${state ? 'active' : null}`}
      onClick={() => onClickHandler(id)}
    >
      {text}
    </div>
  );
};

export default React.memo(Badge);
