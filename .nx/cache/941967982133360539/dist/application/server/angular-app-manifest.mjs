
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6SWMCCFI.js",
      "chunk-HL5J3PQW.js",
      "chunk-NJPLYCWR.js",
      "chunk-IVMNBVY2.js",
      "chunk-D7OOZPSD.js",
      "chunk-64RSDO76.js",
      "chunk-6MBOXXHD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D4BTPDXV.js",
      "chunk-D7OOZPSD.js",
      "chunk-64RSDO76.js",
      "chunk-6MBOXXHD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7CAINLOL.js",
      "chunk-64RSDO76.js",
      "chunk-6MBOXXHD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/auth/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZEDPYCHE.js",
      "chunk-2Z5BDO4U.js"
    ],
    "route": "/checkouts"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZEDPYCHE.js",
      "chunk-2Z5BDO4U.js"
    ],
    "route": "/checkouts/success"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZEDPYCHE.js",
      "chunk-2Z5BDO4U.js"
    ],
    "route": "/checkouts/failure"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U7MAULP7.js"
    ],
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMOH3UOG.js"
    ],
    "route": "/terms-of-service"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K5OLLPKS.js",
      "chunk-IPHUA2QQ.js",
      "chunk-TPWAKPUQ.js",
      "chunk-U4HQ5A2X.js",
      "chunk-JWEDNJBE.js",
      "chunk-IVMNBVY2.js",
      "chunk-D7OOZPSD.js",
      "chunk-6MBOXXHD.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/resume-generator"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/settings"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/resumes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/resumes/*/edit"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/resumes/*/tailor"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/cover-letter"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/job-tracker"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/interview-coach"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "route": "/application/linkedin-optimizer"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M6LVKNQ7.js",
      "chunk-N3KXQB46.js",
      "chunk-D7OOZPSD.js",
      "chunk-XQA5OULQ.js",
      "chunk-BL4FRIRM.js",
      "chunk-SS6OVLD6.js"
    ],
    "redirectTo": "/application/dashboard",
    "route": "/application/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3106, hash: '54e1946eb3274b63872b3a54d7f90e3314f906cf18ade94fc3d5d4655b8c8433', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3646, hash: 'cbd4b578aaac4c82190a1b259223ecbdcfaa34d185687e65ebdb9977715bed97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'terms-of-service/index.html': {size: 4790, hash: '178346788219d83d4c90e6fa3e1a09f6df7ada46bb2254b1d99405e81bf8945d', text: () => import('./assets-chunks/terms-of-service_index_html.mjs').then(m => m.default)},
    'checkouts/index.html': {size: 4850, hash: '9756a0c7e9bfe60d9a4f99708a1b5ac723e7da100ae7280bb9fcf535df7697e6', text: () => import('./assets-chunks/checkouts_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 4816, hash: 'b8ecc6f05257c12bdd85a45326a1300d1394a404c3dceaef32dbb30229fe98a2', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6180, hash: '7b4d9d907cbeb9421d50ac278f0246c3d94aee42580d70dd72b788847dc1ef2a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'checkouts/failure/index.html': {size: 4809, hash: 'b928575b2a6aaae43b58a0c07e775638c3c88bb840c11e7c4e2efa1672598cc0', text: () => import('./assets-chunks/checkouts_failure_index_html.mjs').then(m => m.default)},
    'checkouts/success/index.html': {size: 4860, hash: 'd54a2b51df7cfc85d27a6b4c8bfe5cddd685b1b670b423bb41bc907161890981', text: () => import('./assets-chunks/checkouts_success_index_html.mjs').then(m => m.default)}
  },
};
