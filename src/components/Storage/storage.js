export const setStorage = (key, val) => {
  val = JSON.stringify(val);
  try {
    return localStorage.setItem(key, val);
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
     alert('Превышен лимит памяти в браузере!');
    }
};

export const getStorage = key => {
  let res = localStorage.getItem(key);
  return JSON.parse(res);
};

export const removeStorage = key => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  return localStorage.clear();
};

export const getStorageState = name => {
  if (getStorage(name)) {
    return getStorage(name);
  } else {
    const defaultData = {
      text1: "1111",
      text2: name,
      typeImg: "jpg",
      fontSize: 14,
      color: "#000"
    }
    setStorage(name, defaultData)
    return defaultData
  }
};
