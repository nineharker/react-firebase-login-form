Vscode で create-react-app を使用して eslint、prettier の設定をしたプロジェクト。

create-react-app の場合 eslint と eslint-babel を入れたらエラーになるので入れない。

App.jsx などのコンポーネントの拡張子は jsx にする。

## 使用方法

### VS Code に ESLint の拡張機能の追加

Vscode で Eslint を使えるように拡張機能をインストールする。
ググったらすぐにでます。

### プロジェクトをクローン

```bash
#install create-react-app
npm -g install create-react-app

# clone repo
git clone https://github.com/nineharker/react-vscode-eslint-prettier.git

cd react-vscode-eslint-prettier

yarn install
```

Vscode の設定を変更する。  
セーブ時にフォーマットされる。

```bash
#setting.json
 {
   "javascript.format.enable": false,
   "eslint.autoFixOnSave": true
 }
```

## ローカルサーバー起動

```bash
yarn start
```

## eslint、prettier の設定変更

.eslintrc.js と.prettierrc を編集すれば設定が変更される。
プロジェクトによってお好みに変更してください。
