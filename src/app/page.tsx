import Layout from '@/components/Layout';
import SimpleHero from '@/components/SimpleHero';
import SimpleSection from '@/components/SimpleSection';
import BookingBanner from '@/components/BookingBanner';
import { sections } from '@/data/simpleData';

export default function Home() {
  return (
    <Layout>
      <SimpleHero />
      {sections.map((section) => (
        <SimpleSection
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          icon={section.icon}
          folder={section.folder}
          description={section.description}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          showMap={section.showMap}
        />
      ))}
      <BookingBanner />
    </Layout>
  );
}
