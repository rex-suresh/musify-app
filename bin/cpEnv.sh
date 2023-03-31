function cpProdEnv() {
  touch .env
  cp ./env/prod .env
}

function cpDevEnv() {
  touch .env
  cp ./env/dev .env
}
