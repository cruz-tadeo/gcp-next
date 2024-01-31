import * as CryptoJS from "crypto-js";

const desencrypt = (path: string) => {
  try {
    const dataUser = decodeURIComponent(path);

    let bytes = CryptoJS.AES.decrypt(dataUser, "saleforceLomas");
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
  } catch (error) {
    console.error("Error during decryption:", error);
  }
};

const encrypt = (data: any) => {
  try {
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "saleforceLomas"
    );

    return encrypted;
  } catch (error) {
    console.error("Error during decryption:", error);
  }
};

export { desencrypt, encrypt };
