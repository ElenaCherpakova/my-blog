import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title,
} from '../components';

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Elena<br/> Cherpakova" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>My New Post</Title>
      </Section>
    </div>
  );
}
