export const LOADING = 'Loading'
export const hasLoad = () => {
  return localStorage.getItem(LOADING) !== null;
}
export const addLoad = () => {
  localStorage.setItem(LOADING, true);
}
export const removeLoad = () => {
  localStorage.removeItem(LOADING);
}