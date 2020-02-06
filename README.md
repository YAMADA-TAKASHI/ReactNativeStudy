# 環境準備
```
$ npx react-native init ReactNativeStudy
$ cd ReactNativeStudy
$ git init

//$ npm install native-base react-navigation react-navigation-stack react-navigation-tabs react-native-reanimated@1.3.0 react-native-safe-area-view react-native-safe-area-context @react-native-community/masked-view react-native-screens react-native-storage @react-native-community/async-storage react-native-webview --save

//1.5.6がインストールエラーになるため
$ npm i react-native-gesture-handler@1.5.3

//その他必要に応じて
$ npm i react-native-barcode-builder
$ npm i react-native-progress
$ npm i react-native-qrcode-image
$ npm i react-redux
$ npm i redux
$ npm i buffer
$ npm i react-native-qrcode-svg react-native-svg

//インストール、リンク
$ npm install
$ react-native link

//ios Podインストール
$ cd ios
$ pod install
$ cd ..

//React17.x対策
$ npx react-codemod rename-unsafe-lifecycles --force

//ビルド
$ react-native run-android
$ react-native run-ios --simulator="iPhone 8"
```


# リリース

## Android keystore作成

```
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

対話形式でいくつかの質問に回答
回答し終えるとrelease-key.keystoreが作成されるので、これをandroid/appに移動

```

## gradle.propertiesを修正

``` properties:gradle.properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=【ストアパスワード】
MYAPP_RELEASE_KEY_PASSWORD=【キーパスワード】
```

## android/app/build.gradleをgradle.propertiesの値を参照するように修正

``` gradle:biuld.gradle
android {
    /* 略 */
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            /* 略 */
            signingConfig signingConfigs.release
        }
    }
}
```