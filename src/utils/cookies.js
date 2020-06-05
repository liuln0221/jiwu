import Cookies from 'js-cookie';

const languageKey = '_lang';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = language => Cookies.set(languageKey, language);

const morgIdKey = 'morgId';
export const getMorgId = () => Cookies.get(morgIdKey);
export const setMorgId = morgId => Cookies.set(morgIdKey, morgId);

const morgNameKey = 'morgName';
export const getMorgName = () => Cookies.get(morgNameKey);
export const setMorgName = morgName => Cookies.set(morgNameKey, morgName);

const authTokenKey = 'token';
export const getAuthToken = () => Cookies.get(authTokenKey);
export const setAuthToken = authToken => Cookies.set(authTokenKey, authToken);

const uuidKey = 'uuid';
export const getUserId = () => Cookies.get(uuidKey);
export const setUserId = uuid => Cookies.set(uuidKey, uuid);

const firstNameKey = 'firstname';
export const getFirstName = () => Cookies.get(firstNameKey);
export const setFirstName = firstName => Cookies.set(firstNameKey, firstName);

const userNameKey = 'username';
export const getUserName = () => Cookies.get(userNameKey);
export const setUserName = userName => Cookies.set(userNameKey, userName);
