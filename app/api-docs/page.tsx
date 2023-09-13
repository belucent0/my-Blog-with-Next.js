import { getApiDocs } from '../../utils/swagger';
import ReactSwagger from './react-swagger';

//Swagger - api-docs
export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container mx-auto min-h-screen px-3 py-3 md:px-24">
      <ReactSwagger spec={spec} />
    </section>
  );
}