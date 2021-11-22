export const set = (data) => {
  try {
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

export const clear = () => {
  try {
    return localStorage.removeItem('data');
  } catch (e) {
    console.log(e);
    return null;
  }
};
