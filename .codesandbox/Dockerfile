FROM node:lts-slim

# Avoid Corepack download prompts during `pnpm install`, eg:
#
# ```
# ! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-9.1.1.tgz
# ? Do you want to continue? [Y/n]
# ```
#
# https://github.com/nodejs/corepack/tree/09528a8ea8f2a953b67c9079615eae3394531862#:~:text=COREPACK_ENABLE_DOWNLOAD_PROMPT
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable
