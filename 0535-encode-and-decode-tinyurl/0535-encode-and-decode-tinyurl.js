/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
//풀이참고
const urlMap = new Map();
const codeMap = new Map();
const baseUrl = "http://leetcode.com/";
let counter = 0;

const encode = function(longUrl) {
  if (urlMap.has(longUrl)) {
    return urlMap.get(longUrl);
  }

  //단축 URL 생성
  const shortUrl = baseUrl + counter.toString(36);
  urlMap.set(longUrl, shortUrl);
  codeMap.set(shortUrl, longUrl);
  counter++;
        
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
  return codeMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */