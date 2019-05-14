export const LOCAL_STORAGE_KEY = {
  CARTS: "app_carts",
};

export default class LocalStorageUtils {
  static getItem(key, defaultValue = null) {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem(key) || defaultValue);
    }
    return "undefined";
  }

  static setItem(key, value) {
    if (typeof localStorage !== "undefined") {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
