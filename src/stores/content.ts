
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Lang = 'de' | 'fa' | 'ps'

export interface LocalizedText {
  de: string
  fa: string
  ps: string
}

export interface BaseContent {
  id: string
  title: LocalizedText
  body?: LocalizedText
  date?: string // ISO
  imageDataUrl?: string
}

export const useContentStore = defineStore('content', () => {
  const events = ref<BaseContent[]>(load('events'))
  const news = ref<BaseContent[]>(load('news'))
  const gallery = ref<BaseContent[]>(load('gallery'))

  function saveAll() {
    save('events', events.value)
    save('news', news.value)
    save('gallery', gallery.value)
  }

  function add(type: 'events'|'news'|'gallery', item: BaseContent) {
    getRef(type).value.unshift(item)
    save(type, getRef(type).value)
  }
  function update(type: 'events'|'news'|'gallery', item: BaseContent) {
    const arr = getRef(type).value
    const idx = arr.findIndex(i => i.id === item.id)
    if (idx >= 0) {
      arr[idx] = item
      save(type, arr)
    }
  }
  function remove(type: 'events'|'news'|'gallery', id: string) {
    const arr = getRef(type).value.filter(i => i.id !== id)
    getRef(type).value = arr
    save(type, arr)
  }

  function getRef(type: 'events'|'news'|'gallery') {
    return type === 'events' ? events : (type === 'news' ? news : gallery)
  }

  function save(key: string, value: any) {
    localStorage.setItem('adk_' + key, JSON.stringify(value))
  }
  function load(key: string) {
    try {
      return JSON.parse(localStorage.getItem('adk_' + key) || '[]')
    } catch { return [] }
  }

  return { events, news, gallery, add, update, remove, saveAll }
})
