/**
 * AIみう LINEスタンプ一覧データ
 *
 * 新しいスタンプを追加するときは、下の配列にオブジェクトを1つ足すだけです。
 * 必要な項目：
 *   id          … 識別用ID（英数字）
 *   name        … 商品名
 *   description … 説明文
 *   image       … 画像パス（public/images/stamps/ に置く）
 *   storeUrl    … LINE STORE のURL
 *   buttonLabel … ボタンに表示する文字
 */

const STAMPS = [
  {
    id: "vol1",
    name: "AIみう Vol.1",
    description: "かわいいAIみうの日常リアクションスタンプ16種類",
    image: "/public/images/stamps/vol1.png",
    storeUrl: "https://line.me/S/sticker/35028734",
    buttonLabel: "Vol.1をLINEで見る",
  },
  {
    id: "vol2",
    name: "AIみう Vol.2",
    description: "表情豊かで使いやすいAIみうのリアクションスタンプ16種類",
    image: "/public/images/stamps/vol2.png",
    storeUrl: "https://line.me/S/sticker/35057978",
    buttonLabel: "Vol.2をLINEで見る",
  },
];

/** トップページのスタンプ紹介カード用テキスト */
const STAMPS_PROMO = {
  title: "AIみう LINEスタンプ発売中！",
  description:
    "毎日のトークで使える、かわいいAIみうのLINEスタンプを販売中です。新作も順次追加予定です。",
  buttonLabel: "LINEスタンプ一覧を見る",
  href: "/stamps/",
};
