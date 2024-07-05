import { ElMessage } from 'element-plus';
export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  ElMessage.success('复制成功');
};
