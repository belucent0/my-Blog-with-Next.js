import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: "app",
        definition: {
            openapi: "3.0.0",
            info: {
                title: "VIVIDNOW with Swagger API Docs",
                description: "블로그 API docs, 계정 및 방명록 관련 api",
                version: "2.0",
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
            servers: [
                {
                    url: `${process.env.NEXT_PUBLIC_API_URL}`,
                },
            ],
            security: [],
        },
    });
    return spec;
};
