import {outputFile} from 'fs-extra/esm';
import appRoot from 'app-root-path';

/**
 * 將資料寫到 ./out 目錄下， * 目錄不存在時會建立目錄，寫入完畢後會輸出提示。
 * @param filename string 檔案名稱，不須要傳入副檔名，副檔名固定為 txt
 * @param data object 資料，會使用 JSON.stringify 轉換成文字
 * @returns {Promise<void>}
 */
export async function writeTxt(filename, data) {
  const path = appRoot.resolve(`./out/${filename}.txt`);
  await outputFile(path, JSON.stringify(data));
  console.log(`done ${path}`);
}