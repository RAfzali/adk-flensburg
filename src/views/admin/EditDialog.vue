<template>
  <v-dialog v-model="isOpen" max-width="720">
    <v-card>
      <v-card-title>Bearbeiten</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="model.title.de" :label="t('admin.langDe')" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="model.title.fa" :label="t('admin.langFa')" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="model.title.ps" :label="t('admin.langPs')" />
          </v-col>
        </v-row>
        <v-row v-if="type!=='gallery'">
          <v-col cols="12" md="4">
          <v-textarea v-model="model.body!.de" :label="t('admin.langDe')" />
          </v-col>
          <v-col cols="12" md="4">
          <v-textarea v-model="model.body!.fa" :label="t('admin.langFa')" />
          </v-col>
          <v-col cols="12" md="4">
          <v-textarea v-model="model.body!.ps" :label="t('admin.langPs')" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="model.date" type="date" :label="t('admin.date')" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-file-input label="Bild hochladen" accept="image/*" @change="onImage" />
          </v-col>
          <v-col cols="12" md="6" v-if="model.imageDataUrl">
            <v-img :src="model.imageDataUrl" height="160" cover />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="emit('update:modelValue', false)">Abbrechen</v-btn>
        <v-btn @click="save">{{ t('admin.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { BaseContent } from '../../stores/content'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps<{ modelValue: boolean, type: 'events'|'news'|'gallery', model: BaseContent|null }>()
const emit = defineEmits<{ (e:'update:modelValue', v:boolean): void, (e:'save', v:BaseContent): void }>()
const model = ref<BaseContent>({ id:'', title:{de:'',fa:'',ps:''} })

// Proxy für v-model (nicht direkt auf Prop binden!)
const isOpen = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v)
})

watch(() => props.modelValue, (v) => {
  if (v && props.model) model.value = JSON.parse(JSON.stringify(props.model))
}, { immediate: true })

function onImage(e: any){
  const file = e.target?.files?.[0] || e
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => { model.value.imageDataUrl = String(reader.result) }
  reader.readAsDataURL(file)
}
function save(){
  if (model.value.date && /^\d{4}-\d{2}-\d{2}$/.test(model.value.date)) {
    model.value.date = new Date(model.value.date + 'T00:00:00').toISOString()
  }
  emit('save', model.value)
}


</script>
