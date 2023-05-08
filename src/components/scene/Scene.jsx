import React from "react";
import { StoriesTexts  } from "../style";


function Scene(props) {

return (
<div>
  <StoriesTexts >{props.txt}</StoriesTexts>
</div>
  );

}

export default Scene;