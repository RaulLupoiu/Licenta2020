import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";
 
export const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = ({ inverted = true, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};
