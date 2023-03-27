<template>
    <div>
        <div v-for="(text, index) in texts" :key="index">
            <textarea v-model="texts[index]"></textarea>
            <button @click="removeTextarea(index)">删除</button>
        </div>
        <button @click="addTextarea">新增 textarea</button>
        <button @click="confirm">确认</button>
        <p>{{ mergedText }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            texts: [''] // 初始时有一个 textarea
        }
    },
    computed: {
        mergedText() {
            const nonEmptyTexts = this.texts.filter(text => text.trim() !== '') // 过滤掉空白的文本框
            return nonEmptyTexts.join(';') // 将所有非空白的文本框的内容用分号分隔并合并成一个字符串
        }
    },
    methods: {
        addTextarea() {
            this.texts.push('') // 新增一个 textarea
        },
        removeTextarea(index) {
            this.texts.splice(index, 1) // 删除指定位置的 textarea
        },
        confirm() {
            alert(this.mergedText) // 弹出合并后的字符串
        }
    }
}
</script>  