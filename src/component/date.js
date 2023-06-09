export const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };
  
  export const getDayOfWeek = (date) => {
    const dayOfWeek = date.getDay();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    return dayNames[dayOfWeek];
  };
  
  export const moveToPreviousDate = (date) => {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    return previousDate;
  };
  
  export const moveToNextDate = (date) => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    return nextDate;
  };
  