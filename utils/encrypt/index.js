import {
  AES_KEY,
  AES_IV,
  QZB_AES_KEY,
  QZB_AES_IV
} from '@/utils/const/config'
const CryptoJS = require('@/utils/encrypt/crypto-js'); //引用AES源码js
const Base64 = require('@/utils/encrypt/base64'); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse(AES_KEY); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse(AES_IV); //十六位十六进制数作为密钥偏移量

const qzb_key = CryptoJS.enc.Utf8.parse(QZB_AES_KEY); //十六位十六进制数作为密钥
const qzb_iv = CryptoJS.enc.Utf8.parse(QZB_AES_IV); //十六位十六进制数作为密钥偏移量

//解密手机号
export function decryptData(sessionKey, encryptedData, iv) {
	let key = CryptoJS.enc.Base64.parse(sessionKey)
	let ivv = CryptoJS.enc.Base64.parse(iv)
	let decrypt = CryptoJS.AES.decrypt(encryptedData, key, {
		iv: ivv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	})
	return JSON.parse(Base64.decode(CryptoJS.enc.Base64.stringify(decrypt)))
}
//解密方法
export function decrypted(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//加密方法
export function encrypted(word) {
  console.log(word, 'word')
  let encrypted = CryptoJS.AES.encrypt(word, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  console.log(encrypted.toString(), '加密返回参数')
  return encrypted.toString();
}