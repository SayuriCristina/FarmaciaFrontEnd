/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const api = axios.create({
  baseURL: 'https://farmaciaapi-utl2.onrender.com/swagger-ui/index.html#/'
})

// Função para cadastrar um usuário 
export const cadastrarTema = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Função para realizar o login
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Função para buscar dados (GET)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

// Função para cadastrar dados (POST)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Função para atualizar dados (PUT)
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados)
  setDados(resposta.data)
}

// Função para deletar dados (DELETE)
export const deletar = async (url: string) => {
  await api.delete(url)
}