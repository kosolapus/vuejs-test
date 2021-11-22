export const set = (data) => {
  try {
    if (data === null) {
      localStorage.removeItem('data');
      return false;
    }
    localStorage.setItem('data', JSON.stringify(data));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const get = () => {
  try {
    return JSON.parse(localStorage.getItem('data'));
  } catch (e) {
    console.log(e);
    return null;
  }
};
