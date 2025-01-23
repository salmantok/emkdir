# emkdir

> emkdir (easy mkdir) alat sederhana yang mempermudah pembuatan direktori

_emkdir menggunakan modul bawaan Node.js, yaitu fs/promises, untuk menangani pembuatan direktori secara asinkron dengan performa tinggi dan efisiensi. Alat ini dirancang untuk mengurangi kompleksitas dalam mengelola path dan penanganan error._

## Instalasi

```bash
npm install emkdir
```

## Penggunaan

```js
import { emkdir } from 'emkdir' // ESM

await emkdir('./test/project')
```

```js
const { emkdir } = require('emkdir') // CommonJS

emkdir('./test/project')
```
