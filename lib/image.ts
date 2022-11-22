/**
 * Image Util
 */

export function setImageRatio(width: any, height: any, maxWidth: any, maxHeight: any) {
  let ratio = maxWidth / width
  if (height * ratio > maxHeight) {
    ratio = maxHeight / height
  }
  return ratio
}
