const isSafari = (): boolean => {
  const userAgent = navigator.userAgent;
  return userAgent.includes("Safari") && !userAgent.includes("Chrome");
};

export default isSafari;
