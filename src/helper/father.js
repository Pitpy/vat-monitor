const marvel = "PitpyIsDeveloper";

var key = "My-Name-Is-Pitpy";
var iv = "PitpyIsDeveloper";

var rkEncryptionKey = CryptoJS.enc.Base64.parse("u/Gu5posvwDsXUnV5Zaq4g==");
var rkEncryptionIv = CryptoJS.enc.Base64.parse("5D9r9ZVzEYYgha93/aUK2w==");

const enC = val => {
  if (val) {
    var utf8Stringified = CryptoJS.enc.Utf8.parse(val);
    var encrypted = CryptoJS.AES.encrypt(
      utf8Stringified.toString(),
      rkEncryptionKey,
      {
        iv: rkEncryptionIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  } else {
    return null;
  }
};

const deC = val => {
  if (val) {
    var decrypted = CryptoJS.AES.decrypt(val.toString(), rkEncryptionKey, {
      iv: rkEncryptionIv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } else {
    return null;
  }
};

const to = messageToencrypt => {
  if (messageToencrypt) {
    var encryptedMessage = CryptoJS.AES.encrypt(messageToencrypt, key, {
      iv: iv
    });
    return encryptedMessage.toString();
  } else {
    return null;
  }
};

const from = encryptedMessage => {
  if (encryptedMessage) {
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key, {
      iv: iv
    });
    var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
  } else {
    return null;
  }
};

export default {
  to,
  from,
  enC,
  deC
};
