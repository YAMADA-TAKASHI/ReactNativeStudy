# 環境準備
```
$ npx react-native init ReactNativeStudy
$ cd ReactNativeStudy
$ git init

//$ npm install native-base react-navigation react-navigation-stack react-navigation-tabs react-native-reanimated@1.3.0 react-native-safe-area-view react-native-safe-area-context @react-native-community/masked-view react-native-screens react-navigation-transitions react-native-storage @react-native-community/async-storage react-native-webview --save

//1.5.6がインストールエラーになるため
$ npm i react-native-gesture-handler@1.5.3

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