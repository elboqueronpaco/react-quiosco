import React from 'react';
import { SubtitleAuthForm } from './SubtitleAuthForm';
import { TitleAuthForm } from './TitleAuthForm';

interface Props {
  title: string
  subtitle: string
}

export const ContinerTitleForm: React.FC<Props> = (props) => {
  return (
    <div>
      <TitleAuthForm title={props.title}/>
      <SubtitleAuthForm subtitle={props.subtitle} />
    </div>
  );
}


