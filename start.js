const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('选择操作：\n1. 初始化钱包\n2.转账\n3. mint');
rl.question('请输入你的选择 (1 或 2 或 3): ', function(choice) {
  if (choice === '1') {
    exec('node wallet_gen.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`执行错误: ${err}`);
        return;
      }
      console.log(`输出: ${stdout}`);
    });
  } else if (choice === '2') {
    exec('node transfer.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`执行错误: ${err}`);
        return;
      }
      console.log(`输出: ${stdout}`);
    });
  } else if (choice === '2') {
    exec('node mint.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`执行错误: ${err}`);
        return;
      }
      console.log(`输出: ${stdout}`);
    });
  } else {
    console.log('无效的选择。');
  }
});
