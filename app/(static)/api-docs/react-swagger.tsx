"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export type SwaggerProps = {
    spec: object;
};

export default function ReactSwagger({ spec }: SwaggerProps): JSX.Element {
    return <SwaggerUI spec={spec} />;
}
