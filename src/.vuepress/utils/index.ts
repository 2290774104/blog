import { ElMessage } from "element-plus";
export function copyText(text: string) {
  navigator.clipboard.writeText(text);
  ElMessage.success("复制成功");
}
