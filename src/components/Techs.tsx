import React from "react";
import Badge, { BadgeProps } from "./Badge";

const Techs :React.FC<{ items :string[], type: BadgeProps }> = ({ items, type }) => {

  return (
    <div className="flex gap-3 mt-4w -fit">
      {
        items.map(item => <Badge variant={type.variant} sz={type.sz}>{item}</Badge>)
      }
    </div>
  );
}

export default Techs;