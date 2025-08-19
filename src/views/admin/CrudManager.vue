
<template>
  <div>
    <v-btn class="mb-4" @click="create">{{ t('admin.add') }}</v-btn>
    <v-table>
      <thead>
        <tr>
          <th>{{ t('admin.title') }}</th>
          <th v-if="type!=='gallery'">{{ t('admin.date') }}</th>
          <th>{{ t('admin.actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="it in items" :key="it.id">
          <td>{{ localized(it.title) }}</td>
          <td v-if="type!=='gallery'">{{ it.date ? formatDate(it.date) : '' }}</td>
          <td>
            <v-btn size="small" variant="text" @click="edit(it)">{{ t('admin.edit') }}</v-btn>
            <v-btn size="small" variant="text" @click="remove(it.id)">{{ t('admin.delete') }}</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <EditDialog
      v-model="dialog"
      :type="type"
      :model="current"
      @save="onSave"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore, type BaseContent, type LocalizedText } from '../../stores/content'
import EditDialog from '../../views/admin/EditDialog.vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const props = defineProps<{ type: 'events'|'news'|'gallery' }>()
const store = useContentStore()
const dialog = ref(false)
const current = ref<BaseContent|null>(null)
const items = computed(() => store[props.type])
function create(){
  current.value = {
    id: crypto.randomUUID(),
    title: { de: '', fa: '', ps: '' },
    body: props.type==='gallery'? undefined : { de: '', fa: '', ps: '' },
   date: props.type==='gallery'? undefined : new Date().toISOString().slice(0,10), // 'YYYY-MM-DD' für <input type="date">

    imageDataUrl: undefined
  }
  dialog.value = true
}
function edit(it: BaseContent){ current.value = JSON.parse(JSON.stringify(it)); dialog.value = true }
function remove(id: string){ store.remove(props.type, id) }
function onSave(item: BaseContent){
  const exists = items.value.find(i => i.id === item.id)
  if (exists) store.update(props.type, item); else store.add(props.type, item)
  dialog.value = false
}
function localized(t: LocalizedText) { return t[locale.value as 'de'|'fa'|'ps'] || t.de }
function formatDate(iso?: string) { return iso ? new Date(iso).toLocaleDateString() : '' }
</script>
