# 概要

React、Firebase を使用したダイアログでのログインフォーム。  
ソーシャルログインも実装しています。ログイン後ランディングページからページ偏移します。

- E メールとパスワード
- Google 認証
- Twitter 認証
- Facebook 認証

使用ライブラリ

- 状態管理に redux、、react-redux、
- 非同期処理に redux-thunk
- css フレームワークに material-ui
- ルーティングに react-router-dom

フォーム画面
![20191213063739](https://user-images.githubusercontent.com/48968940/70751129-1d67ae00-1d73-11ea-93e0-b5287bc695bf.png)

# 使用方法

create-react-app を使用しています。インストールしてください。

```bash
#git clone
git clone https://github.com/nineharker/react-firebase-login-form.git

# install create-react-app
npm -g install create-react-app
```

Firebase に登録  
ルートディレクトリに.env ファイルを作成し Firebase の api キーを書く。

```bash
#.env
REACT_APP_FB_API_KEY=XXXXXXXXX
REACT_APP_FB_AUTH_DOMAIN=XXXXXXXXX
REACT_APP_FB_DATABASE_URL=XXXXXXXXX
REACT_APP_FB_PROJECT_ID=XXXXXXXXX
REACT_APP_FB_STORAGE_BUCKET=XXXXXXXXX
REACT_APP_FB_MESSAGING_SENDER_ID=XXXXXXXXX
REACT_APP_FB_APP_ID=XXXXXXXXX
```

Firebase のコンソール画面で Authentication から、ログイン方法の Google、Twitter、Facebook 認証をオンにする。  
参考

# チュートリアル
