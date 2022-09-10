let queueList = [];

export function getQueueList() {
  if (
    !localStorage.getItem('queueList') ||
    JSON.parse(localStorage.getItem('queueList')).length === 0
  ) {
    return [];
  } else {
    return (queueList = JSON.parse(localStorage.getItem('queueList')));
  }
}
