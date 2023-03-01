WEBPACK

- Agrupa o (bundle) o código do seu aplicativo.
- Permite definir os componentes em diferentes arquivos para melhor organização.
- Facilita a importação de codigo externo instalado via NPM.

BABEL

- Transformar JSX (return <div></div>) em funções de React (React.creatElement()).
- Transforma JavaScript novo const em Javascript antigo.
  OBS: ele traduz a navegadores de versões antigas os codigos mais atuais ;

Webpack Mínimo
Iniciar um pacote npm na pasta do seu aplicativo

npm init -y
COPIAR
Instalar o webpack, webpack-cli e webpack-dev-server

npm install webpack webpack-cli webpack-dev-server --save-dev
COPIAR
Criar arquivos mínimos. Atualização de 2021, na versão 4 do dev-server é necessário indicar o caminho do arquivo index.html.

- webpack.config.js
- index.html
- src/
  - index.js
    COPIAR
    webpack.config.js

module.exports = {
devServer: {
static: './',
},
};
COPIAR
index.html

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- Main é criado pelo webpack -->
    <script src="main.js"></script>
  </body>
</html>
COPIAR
Adicionar os scripts de desenvolvimento e build ao package.json

"scripts": {
"start": "webpack serve --mode development --open --hot",
"build": "webpack --mode production"
},
COPIAR
React
npm install react react-dom
COPIAR
index.js

// Atualizado para React 18
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
COPIAR
app.js

import React from 'react';

const App = () => {
return React.createElement(
'a',
{ href: 'https://www.origamid.com' },
'Origamid',
);
};

export default App;
COPIAR
Inicie o desenvolvimento com:

npm start
COPIAR
Babel Mínimo
Instalar @babel/core, @babel/preset-react e babel-loader

npm install @babel/core @babel/preset-react babel-loader --save-dev
COPIAR
Criar o webpack.config.js para configurarmos o babel no webpack

module.exports = {
// indica que o devserver deve utilizar a raiz para servir o html.
// atualização de 2021
devServer: {
static: './',
},
// Nos módulos
module: {
// Aplique as seguintes regras
rules: [
{
// Nos arquivos que terminam ($) com .js
        test: /\.js$/,
// Não procure nada em node_modules
exclude: /node_modules/,
// Use o seguinte:
use: {
// Babel
loader: 'babel-loader',
// Com as opções padrões para o React
options: {
presets: ['@babel/preset-react'],
},
},
},
],
},
};
COPIAR
App.js

import React from 'react';

const App = () => {
return <a href="https://www.origamid.com">Origamid</a>;
};

export default App;
COPIAR
index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
COPIAR
Inicie o desenvolvimento com:

npm start
COPIAR
Crie a build final com:

npm run build
COPIAR
Loaders (CSS)
O webpack é instalado com o mínimo de pacotes possíveis para funcionar com o JavaScript. Para dicionarmos outras funcionalidades, como a importação de CSS, imagens, SVG e etc, precisamos adicionar loaders específicos para cada situação.

npm install style-loader css-loader --save-dev
COPIAR
webpack.config.js

module.exports = {
devServer: {
static: './',
},
module: {
rules: [
{
test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
use: ['style-loader', 'css-loader'],
},
],
},
};
COPIAR
App.css

a {
font-size: 1.5rem;
text-decoration: none;
font-family: Arial;
color: tomato;
}
COPIAR
App.js

import React from 'react';
import './App.css';

const App = () => {
return <a href="https://www.origamid.com">Origamid</a>;
};

export default App;
