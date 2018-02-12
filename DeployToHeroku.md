# Heroku へのデプロイ方法
# 必要なもの
- Heroku アカウント
- Heroku CLI

# 手順
## ソースコードのclone
まず、ソースコードをローカルにcloneします。
```
git clone https://github.com/GenbuProject/MastodonRater.git
```

## composer.json の追加

次に、`composer.json`を作成し、git管理に追加します。

```
git add composer.json
git commit -am "add composer.json"
```

## Heroku 上にアプリケーション作成

Heroku にログインし、アプリケーションを作成します。

```
heroku login
heroku apps:create -a APP_NAME(任意のアプリケーション名)
```

アプリケーションの作成が完了したら、以下のコマンドを実行します。

```
heroku git:remote -a APP_NAME(任意のアプリケーション名)
```

## デプロイ

以下のコマンドでHerokuへとデプロイされます。

```
git push heroku master
```

デプロイが完了した後、`https://(APP_NAME).herokuapp.com`にてアプリケーションが動作していることが確認できます。
なお、CLI から開く場合は下記のコマンドを実行してください。

```
heroku apps:open -a APP_NAME
```
