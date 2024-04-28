import React from "react";

import Typography from "../../ui/Typography";
import Hr from '../../ui/Hr';

const ScreenHeader = ({ title, description }) => (
  <div className="mb-3">
    <Typography variant="h5">{title}</Typography>
    {description && (<Typography variant="small">{description}</Typography>)}
    <div className="my-3">
      <Hr />
    </div>
  </div>
)

export default ScreenHeader;
