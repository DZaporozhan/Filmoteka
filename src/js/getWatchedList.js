let watchedList = [];

export function getWatchedList() {
  if (
    !localStorage.getItem('watchedList') ||
    JSON.parse(localStorage.getItem('watchedList')).length === 0
  ) {
    return [];
  } else {
    return (watchedList = JSON.parse(localStorage.getItem('watchedList')));
  }
}
