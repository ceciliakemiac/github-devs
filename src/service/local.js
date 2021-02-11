export const LOAD_ERRO = 'LoadErro'
export const hasErro = () => {
  return localStorage.getItem(LOAD_ERRO) !== null;
}
export const addErro = () => {
  localStorage.setItem(LOAD_ERRO, true);
}
export const removeErro = () => {
  localStorage.removeItem(LOAD_ERRO);
}