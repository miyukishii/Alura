// Utilizar Hooks e criar Hooks, construir aplicações dinâmicas, construir aplicações sem EXPO.

// Comando Curl? 
// É um comando disponível na maioria dos sistemas baseado em Unix. Ele é usado como abreviação para “Client URL”. Comandos Curl são destinados para funcionar como uma forma de verificar a conectividade da URL, além de ser uma ótima ferramenta de transferência de dados. Vamos ver como você poderá usar o Comando Curl.

// Preparando ambiente -> https://www.alura.com.br/artigos/configurando-o-ambiente-react-native

// React Native CLI
// Como já vimos, o Expo tem algumas limitações, por exemplo, não conseguimos acessar o bluetooth, não conseguimos fazer compras integradas com a Apple Store e a Play Store.  Se quisermos desenvolver um aplicativo completo mesmo, vamos precisar utilizar o React Native CLI, mas precisaremos também instalar várias SDKs e softwares também para podermos rodar tanto no Android quanto no iOS. Lembrando que se você quiser rodar no iOS você só pode rodar se você tiver um computador MacOS.

// Criar aplicação
// -> npx react-native init <nome> --version 0.65.1

// O que é React Native CLI:
// O React Native CLI é a interface de linha de comando do React Native puro. Command Line Interface é como um programa, mas no terminal. Usando o CLI não teremos as mesmas facilidades do Expo, como o ambiente simplificado, pois teremos que gerar os arquivos nativos direto na nossa máquina.


// Como configurar o ambiente:
// Para que possamos programar com o React Native, tivemos que instalar alguns componentes e programas importantes em nossa máquina: o Node, o JDK, o Android Studio, as SDKs, o Xcode, entre outros.

// Nesta aula, aprendemos sobre o método componentDidMount, que faz parte do ciclo de vida de componentes de classe. Porém, há vários métodos que podemos usar para eventos do componente, como:

// componentDidMount: que, como vimos, é executado quando o componente termina de renderizar;
// componentDidUpdate: que é executado quando o componente recebe alguma atualização e não é executado na primeira vez que o componente carrega;
// componentWillUnmount: que é executado quando o componente é removido da tela;
// componentDidCatch: que é chamado quando a aplicação encontra algum erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos.