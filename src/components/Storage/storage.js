const setStorage = (key, val) => {
  val = JSON.stringify(val);
  try {
    return localStorage.setItem(key, val);
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      alert("Превышен лимит памяти в браузере!");
    }
  }
};

const getStorage = key => {
  let res = localStorage.getItem(key);
  return JSON.parse(res);
};

const removeStorage = key => {
  return localStorage.removeItem(key);
};

const clearStorage = () => {
  return localStorage.clear();
};

const getStorageState = name => {
  if (getStorage(name)) {
    return getStorage(name);
  } else {
    const defaultData = {
      text1: "1111",
      text2: name,
      typeImg: "jpg",
      fontSize: 14,
      color: "#000",
      rotate: 0,
      pos: {
        x: 0,
        y: 0
      }
    };
    setStorage(name, defaultData);
    return defaultData;
  }
};

export { setStorage, getStorage, removeStorage, clearStorage, getStorageState };
