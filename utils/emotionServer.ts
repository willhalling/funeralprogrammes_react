import createEmotionServer from '@emotion/server/create-instance'

import createEmotionCache from './createEmotionCache'
const cache = createEmotionCache()
export const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
