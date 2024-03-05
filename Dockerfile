# ステージ1: ビルド用イメージ
# ベースイメージとしてNode.jsを使用
FROM node:20-alpine as builder

# 作業ディレクトリを設定
WORKDIR /app

# # 依存関係ファイルをコピー
# COPY package.json package-lock.json ./

# # 依存関係をインストール
# # --prefer-offline と --no-audit を使用してインストール速度を向上させる
# RUN npm ci --prefer-offline --no-audit

# ソースコードをコピー
COPY . .

# Next.jsアプリケーションをビルド
RUN npm install
RUN npm run build

# ステージ2: 実行用イメージ
# FROM node:20-alpine

# # 作業ディレクトリを設定
# WORKDIR /app

# # 依存関係ファイルをコピー
# COPY --from=builder /app/package.json /app/package-lock.json ./

# # ビルド時にインストールした node_modules をコピー
# COPY --from=builder /app/node_modules ./node_modules

# # ビルドされたファイルをコピー
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
# COPY --from=builder /app/next.config.js ./next.config.js

# アプリケーションの実行
CMD ["npm", "start"]
