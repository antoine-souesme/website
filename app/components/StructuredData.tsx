type JsonLdValue = Record<string, unknown>;

type StructuredDataProps = {
  entries: JsonLdValue[];
};

const StructuredData = ({ entries }: StructuredDataProps) => {
  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
