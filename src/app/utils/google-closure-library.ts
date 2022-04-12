// -------- google-closure-library ---------------
/*

https://closure-compiler.appspot.com/

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name default.js
// @use_closure_library true
// @formatting pretty_print
// ==/ClosureCompiler==

// ADD YOUR CODE HERE
goog.require('goog.crypt.base64');

window['decodeStringToUint8Array'] = goog.crypt.base64.decodeStringToUint8Array;
window['encodeByteArray'] = goog.crypt.base64.encodeByteArray;

*/

/* eslint-disable */
// @ts-nocheck
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

const n = {}; let
  p = null;
function q(c, f) {
  function a(l) {
    for (; e < c.length;) {
      const g = c.charAt(e++); const
        h = p[g];
      if (h != null) {
        return h;
      }
      if (!/^[\s\xa0]*$/.test(g)) {
        throw Error(`Unknown base64 encoding at char: ${g}`);
      }
    }
    return l;
  }
  r();
  for (var e = 0; ;) {
    const d = a(-1); const b = a(0); const m = a(64); const
      k = a(64);
    if (k === 64 && d === -1) {
      break;
    }
    f(d << 2 | b >> 4);
    m != 64 && (f(b << 4 & 240 | m >> 2), k != 64 && f(m << 6 & 192 | k));
  }
}
function r() {
  if (!p) {
    p = {};
    for (let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), f = ['+/=', '+/', '-_=', '-_.', '-_'], a = 0; a < 5; a++) {
      const e = c.concat(f[a].split(''));
      n[a] = e;
      for (let d = 0; d < e.length; d++) {
        const b = e[d];
        void 0 === p[b] && (p[b] = d);
      }
    }
  }
}

export const decodeStringToUint8Array = function (c) {
  const f = c.length; let
    a = 3 * f / 4;
  a % 3 ? a = Math.floor(a) : '=.'.indexOf(c[f - 1]) != -1 && (a = '=.'.indexOf(c[f - 2]) != -1 ? a - 2 : a - 1);
  const e = new Uint8Array(a); let
    d = 0;
  q(c, (b) => {
    e[d++] = b;
  });
  return d !== a ? e.subarray(0, d) : e;
};
export const encodeByteArray = function (c:any, f?:any) {
  void 0 === f && (f = 0);
  r();
  for (var a = n[f], e = Array(Math.floor(c.length / 3)), d = a[64] || '', b = 0, m = 0; b < c.length - 2; b += 3) {
    let k = c[b]; let l = c[b + 1]; var g = c[b + 2]; var
      h = a[k >> 2];
    k = a[(k & 3) << 4 | l >> 4];
    l = a[(l & 15) << 2 | g >> 6];
    g = a[g & 63];
    e[m++] = `${h}${k}${l}${g}`;
  }
  h = 0;
  g = d;
  switch (c.length - b) {
    case 2:
      h = c[b + 1], g = a[(h & 15) << 2] || d;
    case 1:
      b = c[b], e[m] = `${a[b >> 2]}${a[(b & 3) << 4 | h >> 4]}${g}${d}`;
  }
  return e.join('');
};
