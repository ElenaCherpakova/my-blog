import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
  projectId: '3yyqrugy',
  dataset: 'production',
  apiVersion: '2022-11-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
};

export const client = sanityClient(clientConfig);

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
