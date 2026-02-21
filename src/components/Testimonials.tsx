import { testimonials, siteConfig } from '@/data/propertyData';

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Discover the unforgettable experiences of those who have stayed with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 relative"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl">{renderStars(testimonial.rating)}</div>
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {/* @ts-ignore - stayMonth exists after data update */}
                    {testimonial.stayMonth}
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
                <div className="text-xs text-green-600 font-medium">
                  ✓ Verified Guest
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Happy Guests
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Book your stay at Marina Da Gama now and create your own unforgettable memories
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">5.0</div>
                <div className="text-sm text-blue-100">⭐ Guest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-100">🏆 Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-blue-100">🔄 Return Rate</div>
              </div>
            </div>

            <a
              href={siteConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 shadow-xl"
            >
              <span className="mr-2">🏖️</span>
              Book Your Paradise Now
              <span className="ml-2">→</span>
            </a>

            {siteConfig.bookingUrgency.enabled && (
              <div className="mt-4 text-sm text-yellow-300 animate-pulse">
                ⚡ Only a few dates left this month - Book now!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;