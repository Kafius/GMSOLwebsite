import { PortableText } from '@portabletext/react';

const components = {
  block: {
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    normal: ({ children }: any) => <p>{children}</p>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
  },
};

export default function PortableTextRenderer({ content }: { content: any[] }) {
  return <PortableText value={content} components={components} />;
}
