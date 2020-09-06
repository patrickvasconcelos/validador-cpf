import ValidarCpf from "./modulos/valida-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();
