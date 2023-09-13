import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app', // define api folder under app folder
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'VIVIDNOW with Swagger API Docs',
        description: '블로그 API docs, 현재 방명록 페이지만 기재되었습니다.',
        version: '1.0',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          
        },
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
      security: [],
    },
  });
  return spec;
};