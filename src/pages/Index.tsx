import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              MySQL Cloud Pricing
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Understanding <strong>MySQL Cloud Pricing</strong> is crucial for businesses seeking cost-effective database solutions. 
              With competitive rates and transparent pricing models, <strong>MySQL Cloud Pricing</strong> enables organizations to 
              scale their database infrastructure efficiently while maintaining optimal performance and security for mission-critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Utho Cloud for MySQL
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Reliable MySQL cloud hosting is fundamental for modern businesses requiring scalable, secure database solutions. 
                Organizations need providers that can deliver consistent performance, robust data protection, and cost-efficient scaling 
                to handle varying workloads. The importance of choosing the right MySQL cloud provider cannot be overstated, as it directly 
                impacts application performance, data integrity, and operational costs. Businesses must evaluate factors like uptime guarantees, 
                security protocols, backup strategies, and pricing transparency when selecting their database hosting partner. 
                A dependable <strong>MySQL Cloud Pricing</strong> structure ensures predictable costs while maintaining enterprise-grade reliability.
              </p>
              
              <p>
                <strong>Utho Cloud for MySQL</strong> delivers exceptional value through high-performance infrastructure optimized specifically 
                for MySQL workloads. Our platform features automatic scaling capabilities that adjust resources based on demand, 
                ensuring optimal performance during traffic spikes while controlling costs during low-usage periods. Built-in security 
                measures include encrypted data transmission, regular automated backups, and compliance with industry standards. 
                The pay-as-you-go pricing model provides financial flexibility, allowing businesses to pay only for resources consumed. 
                With 24/7 expert support from database specialists, <strong>Utho Cloud for MySQL</strong> ensures your database operations 
                run smoothly, giving you peace of mind and allowing you to focus on core business objectives.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-8 lg:p-12 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Ready to Optimize Your Database Costs?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore Utho's comprehensive MySQL cloud solutions and discover how our transparent pricing can help your business scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="px-8">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;