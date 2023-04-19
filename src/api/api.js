export function apiHandler(type) {
  let api;

  if (type === 0) {
    api = "https://api.jsonbin.io/v3/b/60db69819328b059d7b2c212";
  } else if (type === 1) {
    api = "https://api.jsonbin.io/v3/b/60db69ce55b7245a20d1a010";
  } else return;
  return api;
}
