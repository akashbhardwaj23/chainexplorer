  export const formatTime = (seconds: number) => {
    if (seconds < 60) {
      return `${Math.floor(seconds)} sec`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} min`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hr`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} days`;
    }
  };