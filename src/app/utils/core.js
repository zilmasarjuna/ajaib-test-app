let timerId;

export const debounceFunction = (func, delay) => {
  clearTimeout(timerId)

  timerId = setTimeout(func, delay)
} 