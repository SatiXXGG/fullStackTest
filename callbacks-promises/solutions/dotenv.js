import fs from "fs";

const dotenv = {
  config: (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path || "./.env", "utf-8", (error, data) => {
        if (error) {
          reject(error);
        }
        const split = data.split("\n"); //splits from lines

        split.forEach((line) => {
          if (line.trim() === "") {
            return;
          }
          const [variable] = line.split("/");
          const [name, value] = line.split("=");
          process.env[name.trim()] = value.trim();
        });
      });
    });
  },
};

export default dotenv;
