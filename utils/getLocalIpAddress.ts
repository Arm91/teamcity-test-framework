import { exec } from 'child_process';

export const getIPAddress = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec('ipconfig getifaddr en0', (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (stderr) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};
