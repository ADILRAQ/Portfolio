import React, { PropsWithChildren } from "react";

export type BadgeProps  = PropsWithChildren<{
  variant: 'orange' | 'dark' | 'bordered',
  sz: 'sm' | 'md',
}>;

const Badge = ({variant, sz, children} : BadgeProps) => {

  // const badgevariant :{variant: 'orange' | 'dark' | } = [
  //   'font-medium text-sm bg-orange rounded-full px-5 py-1 text-background',
  //   'font-medium text-sm bg-dark rounded-full px-5 py-1 text-background'
  // ]

  const badgeVariant :Record<BadgeProps['variant'], string> = {
    orange: 'font-medium bg-orange rounded-full text-background',
    dark: 'font-medium bg-dark rounded-full text-background',
    bordered: 'font-medium bg-transparent rounded-full text-dark border-solid border-2 border-dark',
  }

  const badgeSize :Record<BadgeProps['sz'], string> = {
    sm: 'text-xs px-4 py-1',
    md: 'text-sm px-4 py-1'
  }

  return (
    <span className={`${badgeVariant[variant]} ${badgeSize[sz]}`}>
      { children }
    </span>
  );
}

export default Badge;