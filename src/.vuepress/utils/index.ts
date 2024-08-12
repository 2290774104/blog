import { ElMessage } from 'element-plus';
export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  ElMessage.success('复制成功');
};

export const downloadLocalFile = (file: string) => {
  const a = document.createElement('a');
  const base = location.pathname.split('/')[1];
  a.href = `/${base}/assets/download/${file}`;
  a.download = file;
  a.click();
};

export interface IResult {
  code: 200 | 500
  msg: string
  data?: string
}

export const loadFile = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve({
        code: 200,
        msg: 'ok',
        data: reader.result
      });
    };
    reader.onerror = () => {
      reject({
        code: 500,
        msg: '文件加载失败'
      });
    };
  });
};

export const dataURLtoBlob = (dataURL: string) => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

export const dataURLtoFile = (dataURL: string, fileName: string) => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
};