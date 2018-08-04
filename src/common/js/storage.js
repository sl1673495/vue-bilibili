import {SHORT_VIDEO_KEY} from 'common/js/config'

const s = JSON.stringify

const p = JSON.parse

export const setShortVideo = video => window.localStorage.setItem(SHORT_VIDEO_KEY, s(video))

export const getShortVideo = video => {
  const item = window.localStorage.getItem(SHORT_VIDEO_KEY)
  return item ? p(item) : null
}