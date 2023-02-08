import React from 'react';

interface Props {
  subtitle: string
}

export const SubtitleAuthForm: React.FC<Props> = (props) => {
  return (
    <p>
      {props.subtitle}
    </p>
  );
}

