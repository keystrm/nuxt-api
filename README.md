# itraceit npm package use in nuxt server

check `package.json` and update relative path of itraceit-js library

```json
"itraceit-jslib-v2": "file:/opt/projects/itraceit-jslib-v2"
```

then install package usin 

```bash
pnpm install
pnpm run dev
```

or use npm, yarn or any-other