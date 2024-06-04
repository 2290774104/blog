<template>
    <div>
        <el-form :model="form" label-width="auto">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="时间选择器：">
                        <el-date-picker v-model="form.input1" type="datetime" placeholder="选择时间"
                            :shortcuts="shortcuts" />
                    </el-form-item></el-col>
                <el-col :span="12">
                    <el-button type="primary" @click="handleConversion(form.input1)">转换</el-button>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="输入时间：">
                        <el-input v-model="form.input2" style="width: 220px;" />
                    </el-form-item></el-col>
                <el-col :span="12">
                    <el-button type="primary" @click="handleConversion(form.input2)">转换</el-button>
                </el-col>
            </el-row>

            <div>
                <el-form-item label="时间戳（秒）：">
                    <el-input v-model="form.output1" readonly>
                        <template #append>
                            <el-button :icon="DocumentCopy" @click="handleCopy(form.output1)" />
                        </template></el-input>
                </el-form-item>
                <el-form-item label="时间戳（毫秒）：">
                    <el-input v-model="form.output2" readonly>
                        <template #append>
                            <el-button :icon="DocumentCopy" @click="handleCopy(form.output2)" />
                        </template></el-input>
                </el-form-item>
                <el-form-item label="js字符串：">
                    <el-input v-model="form.output3" readonly>
                        <template #append>
                            <el-button :icon="DocumentCopy" @click="handleCopy(form.output3)" />
                        </template></el-input>
                </el-form-item>
                <el-form-item label="YYYY-MM-DD HH:mm:ss：">
                    <el-input v-model="form.output4" readonly>
                        <template #append>
                            <el-button :icon="DocumentCopy" @click="handleCopy(form.output4)" />
                        </template></el-input>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { copyText } from '../utils'
import { dayjs } from 'element-plus';
import { DocumentCopy } from '@element-plus/icons-vue';

const form = reactive({
    format: '',
    input1: '',
    input2: '',
    output1: '',
    output2: '',
    output3: '',
    output4: '',
})

const shortcuts = [
    {
        text: '今天',
        value: new Date(),
    },
    {
        text: '昨天',
        value: () => {
            const date = new Date()
            date.setDate(date.getDate() - 1)
            return date
        },
    },
    {
        text: '一周前',
        value: () => {
            const date = new Date()
            date.setDate(date.getDate() - 7)
            return date
        },
    },
]

const handleConversion = (time: any) => {
    time = time ? time : new Date()
    if (typeof time === 'string') {
        // 十位输入将解析成时间戳（秒）
        if (time.length === 10) {
            time = dayjs.unix(Number(time))
        }
        // 十三位输入将解析成时间戳（毫秒）
        else if (time.length === 13) {
            time = dayjs(Number(time))
        }
    }

    form.output1 = dayjs(time).unix().toString()
    form.output2 = dayjs(time).valueOf().toString()
    form.output3 = dayjs(time).toDate().toString()
    form.output4 = dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

const handleCopy = (output: string) => {
    copyText(output)
}
</script>

<style lang="scss" scoped>
.el-col {
    display: flex;
    justify-content: center;
}
</style>