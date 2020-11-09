/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 * 
 * 栈思路:
 * 栈:
 * 1. 每一项推入栈, 遇到当前项为 ']' 时开始出栈操作, 此处有两种逻辑:
 * 1.1 依次出栈并拼接值为 需要重复的字符串, 遇到 [ 停止 
 * 1.2 依次出栈并拼接值为 需要重复的次数, 栈顶值为非数字时停止
 * 上述两步处理完后, 及处理了一对[], 将重复后的字符串推入栈
 * 
 */
{
  interface String {
    repeat(count: number): string
  }
  const last = (arr: any[]): any => arr[arr.length - 1];
  
  const decodeString = (s: string): string => {
    const stack: string[] = [];
  
    for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      if (curr === ']') {
        let repeatStr: string = '', repeatCount: string = '';
  
        do {
          repeatStr = stack.pop() + repeatStr;
        } while (last(stack) !== '[') {
          stack.pop();
        };
        
        while (/\d/.test(last(stack))) {
          repeatCount = stack.pop() + repeatCount;
        }
  
        stack.push(repeatStr.repeat(Number(repeatCount)));
      } else {
        stack.push(curr);
      }
    }
  
    return stack.join('');
  };
}


/**
 * 递归思路:
 */
{

}

