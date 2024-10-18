import React, { PropsWithChildren } from "react";

type Status  = PropsWithChildren<{
  style: 'orange' | 'dark' | 'bordered'
}>;

const Badge = ({style, children} : Status) => {

  // const badgeStyle :{style: 'orange' | 'dark' | } = [
  //   'font-medium text-sm bg-orange rounded-full px-5 py-1 text-background',
  //   'font-medium text-sm bg-dark rounded-full px-5 py-1 text-background'
  // ]

  const badgeStyle :Record<Status['style'], string> = {
    orange: 'font-medium text-sm bg-orange rounded-full px-5 py-2 text-background',
    dark: 'font-medium text-sm bg-dark rounded-full px-5 py-2 text-background',
    bordered: 'font-medium text-sm bg-transparent rounded-full px-5 py-1 text-dark border-solid border-2 border-dark',
  }

  return (
    <span className={badgeStyle[style]}>
      { children }
    </span>
  );
}

export default Badge;