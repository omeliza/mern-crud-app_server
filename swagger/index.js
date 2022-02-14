import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerAutogen from "swagger-autogen";

const _dirname = dirname(fileURLToPath(import.meta.url));

const doc = {
  // общая информация
  info: {
    title: "Usersdata",
    description: "Information about users",
  },
  // что-то типа моделей
  definitions: {
    // модель задачи
    User: {
      id: 8,
      email: "n.surname@gmail.com",
      first_name: "Name",
      last_name: "Surname",
    },
    // модель массива задач
    Users: [
      {
        // ссылка на модель задачи
        $ref: "#definitions/Users",
      },
    ],
  },
  host: "localhost:5000",
  schemes: ["http"],
};

const outputFile = join(_dirname, "output.json");

const endpointsFiles = [join(_dirname, '../app.js')];

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(
  ({ success }) => {
    console.log(`Generated: ${success}`);
  }
);