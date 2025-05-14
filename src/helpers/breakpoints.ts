const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const isMobile = (): boolean => window.innerWidth < breakpoints.md;
export const isTablet = (): boolean =>
  window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
export const isDesktop = (): boolean => window.innerWidth >= breakpoints.lg;

export const isSmallMobile = (): boolean => window.innerWidth < breakpoints.sm;
export const isLargeMobile = (): boolean =>
  window.innerWidth >= breakpoints.sm && window.innerWidth < breakpoints.md;
export const isSmallDesktop = (): boolean =>
  window.innerWidth >= breakpoints.lg && window.innerWidth < breakpoints.xl;
export const isLargeDesktop = (): boolean =>
  window.innerWidth >= breakpoints.xl;
