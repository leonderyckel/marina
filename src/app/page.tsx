import Layout from '@/components/Layout';
import SimpleHero from '@/components/SimpleHero';
import SimpleSection from '@/components/SimpleSection';
import BirdingExperiences from '@/components/BirdingExperiences';
import BookingBanner from '@/components/BookingBanner';
import { sections } from '@/data/simpleData';

export default function Home() {
  return (
    <Layout>
      <SimpleHero />
      
      {/* Main sections with dynamic layouts */}
      {sections.map((section, index) => {
        // Define layout variations for dynamic design
        let layout: 'default' | 'alternating' | 'feature' = 'default';
        
        if (section.id === 'house-exterior') layout = 'feature';
        else if (section.id === 'bedrooms') layout = 'alternating';
        else if (section.id === 'location') layout = 'feature';
        
        return (
          <div key={section.id}>
            <SimpleSection
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              icon={section.icon}
              folder={section.folder}
              description={section.description}
              backgroundColor={section.backgroundColor}
              textColor={section.textColor}
              showMap={section.showMap}
              layout={layout}
            />
            
            {/* Add Birding Experiences after Activities section */}
            {section.id === 'activities' && (
              <BirdingExperiences />
            )}
          </div>
        );
      })}
      
      <BookingBanner />
    </Layout>
  );
}
