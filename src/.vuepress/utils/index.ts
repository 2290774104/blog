import { ElMessage } from 'element-plus';
export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  ElMessage.success('复制成功');
};

export const downloadLocalFile = (file: string) => {
  const a = document.createElement('a');
  const base = window.location.pathname.split('/')[1]
  a.href = `/${base}/assets/download/${file}`;
  a.download = file;
  a.click();
}
