import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, CreditCard, Clock, Shield, Zap, Database, Server, Lock, BarChart3, Users, Cpu, TrendingUp, DollarSign, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              MySQL Cloud Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              Transparent, High-Performance MySQL Hosting at Predictable Costs
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience flexible and transparent <strong>MySQL Cloud Pricing</strong> with Utho. Scale databases for any workload—from small apps to enterprise deployments—without worrying about hidden fees. Our pay-as-you-go model keeps costs predictable while delivering lightning-fast performance, strong security, and 24×7 local support.
            </p>
            
            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-3 rounded-xl mb-3">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <p className="text-white/90 font-medium">Pay-as-you-Go Billing</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-3 rounded-xl mb-3">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <p className="text-white/90 font-medium">99.9% Uptime SLA</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-3 rounded-xl mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <p className="text-white/90 font-medium">24×7 Expert Support</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-3 rounded-xl mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="text-white/90 font-medium">No Credit Card Required</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="px-8">
                Get Started – Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white/20 text-white hover:bg-white/10">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why MySQL Cloud Pricing Matters */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Why Businesses Need Transparent MySQL Cloud Pricing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Growing applications depend on reliable, cost-efficient databases. Unclear pricing or surprise bills can drain budgets and stall innovation. With the right provider, you gain:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Predictable Costs</h3>
              <p className="text-muted-foreground">Avoid hidden charges from traditional hyperscalers.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Scalability on Demand</h3>
              <p className="text-muted-foreground">Add or reduce resources instantly as traffic changes.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-6">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Security & Compliance</h3>
              <p className="text-muted-foreground">Keep sensitive information safe with enterprise-grade protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pain Points */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Common Database Hosting Challenges
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 border-destructive/20">
                <CardContent className="pt-0">
                  <div className="bg-destructive/10 p-3 rounded-xl inline-block mb-4">
                    <DollarSign className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Hidden Costs</h3>
                  <p className="text-muted-foreground text-sm">Unpredictable billing makes financial planning hard.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-destructive/20">
                <CardContent className="pt-0">
                  <div className="bg-destructive/10 p-3 rounded-xl inline-block mb-4">
                    <Zap className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Performance Gaps</h3>
                  <p className="text-muted-foreground text-sm">Shared resources slow down mission-critical apps.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-destructive/20">
                <CardContent className="pt-0">
                  <div className="bg-destructive/10 p-3 rounded-xl inline-block mb-4">
                    <Clock className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Support Delays</h3>
                  <p className="text-muted-foreground text-sm">Automated responses when urgent help is needed.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-destructive/20">
                <CardContent className="pt-0">
                  <div className="bg-destructive/10 p-3 rounded-xl inline-block mb-4">
                    <Server className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Complex Scaling</h3>
                  <p className="text-muted-foreground text-sm">Downtime and manual intervention during traffic spikes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Utho Edge */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Utho Cloud for MySQL
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16">Cloud Without Compromise</p>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground mb-12">
              <p>
                A dependable MySQL provider ensures seamless scaling, strong data protection, and consistent uptime so your applications never miss a beat. Utho combines high-speed NVMe storage, real-time monitoring, and automated backups to keep your MySQL databases fast and resilient. With competitive <strong>MySQL Cloud Pricing</strong>, you avoid capital expenses and pay only for what you use.
              </p>
              
              <p>
                With <strong>Utho Cloud for MySQL</strong>, you get dedicated compute resources, transparent slab-based billing, and 24×7 human-first support from local experts. Features like automatic failover, point-in-time recovery, and advanced VPC networking deliver enterprise-grade reliability without vendor lock-ins. Scale globally or regionally while enjoying predictable costs and exceptional performance.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">Transparent pricing—no surprises</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">Auto-scaling for peak traffic</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">Enterprise-grade security & backups</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">24×7 human-first support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Product Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Dedicated Compute</CardTitle>
                  <CardDescription>True dedicated CPU & memory for MySQL</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Predictable Billing</CardTitle>
                  <CardDescription>Slab-based prepaid pricing</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Performance</CardTitle>
                  <CardDescription>3000+ IOPS NVMe storage</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Security</CardTitle>
                  <CardDescription>End-to-end encryption & daily backups</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Developer Tools</CardTitle>
                  <CardDescription>API access, monitoring, logs</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Expert Support</CardTitle>
                  <CardDescription>24×7 human-first assistance</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Managed vs. Self-Managed Database */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Managed vs. Self-Managed MySQL Database
            </h2>
            
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-foreground">Feature</TableHead>
                    <TableHead className="font-semibold text-foreground">Managed Database Server by Utho</TableHead>
                    <TableHead className="font-semibold text-foreground">Self-Managed Database Server</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Deployment</TableCell>
                    <TableCell className="text-green-600">Managed by Utho</TableCell>
                    <TableCell className="text-muted-foreground">Deployed and managed by user</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Maintenance</TableCell>
                    <TableCell className="text-green-600">Utho handles updates, patches, backups, etc.</TableCell>
                    <TableCell className="text-muted-foreground">Users are responsible for updates, patches, backups</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Security</TableCell>
                    <TableCell className="text-green-600">Security features managed by Utho include encryption, access controls, etc.</TableCell>
                    <TableCell className="text-muted-foreground">Security configurations managed by user</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support</TableCell>
                    <TableCell className="text-green-600">Utho offers support with various service levels</TableCell>
                    <TableCell className="text-muted-foreground">User may rely on community or paid vendor support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Customization in Database Configuration</TableCell>
                    <TableCell className="text-green-600">User creation, DB creation permissions, trusted host, backups, etc.</TableCell>
                    <TableCell className="text-muted-foreground">Users manage these themselves</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ease of Use</TableCell>
                    <TableCell className="text-green-600">User-friendly interface, automated features</TableCell>
                    <TableCell className="text-muted-foreground">Requires more technical expertise</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Reliability</TableCell>
                    <TableCell className="text-green-600">High availability, redundancy, failover</TableCell>
                    <TableCell className="text-muted-foreground">Dependent on user configuration and maintenance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monitoring & Analytics</TableCell>
                    <TableCell className="text-green-600">Built-in monitoring tools and dashboards</TableCell>
                    <TableCell className="text-muted-foreground">User must set up their own</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Backup & Recovery</TableCell>
                    <TableCell className="text-green-600">Automatic backup and recovery provided by Utho</TableCell>
                    <TableCell className="text-muted-foreground">User responsible for setting up and managing</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* MySQL Cloud Pricing Plans */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Flexible MySQL Cloud Pricing Plans
            </h2>
            
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-foreground">RAM</TableHead>
                    <TableHead className="font-semibold text-foreground">vCPU</TableHead>
                    <TableHead className="font-semibold text-foreground">SSD Disk</TableHead>
                    <TableHead className="font-semibold text-foreground">Bandwidth</TableHead>
                    <TableHead className="font-semibold text-foreground">Plan</TableHead>
                    <TableHead className="font-semibold text-foreground">Status</TableHead>
                    <TableHead className="font-semibold text-foreground">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">4 GB</TableCell>
                    <TableCell>2 vCPU</TableCell>
                    <TableCell>80 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹2,691/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">8 GB</TableCell>
                    <TableCell>4 vCPU</TableCell>
                    <TableCell>160 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹5,391/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">16 GB</TableCell>
                    <TableCell>6 vCPU</TableCell>
                    <TableCell>320 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹8,271/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">32 GB</TableCell>
                    <TableCell>8 vCPU</TableCell>
                    <TableCell>480 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹13,491/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">64 GB</TableCell>
                    <TableCell>12 vCPU</TableCell>
                    <TableCell>640 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹23,391/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">96 GB</TableCell>
                    <TableCell>24 vCPU</TableCell>
                    <TableCell>840 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹44,991/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">128 GB</TableCell>
                    <TableCell>32 vCPU</TableCell>
                    <TableCell>960 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹59,391/mo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">192 GB</TableCell>
                    <TableCell>48 vCPU</TableCell>
                    <TableCell>1280 GB</TableCell>
                    <TableCell>1000 GB</TableCell>
                    <TableCell>Hourly</TableCell>
                    <TableCell><span className="text-green-600 font-medium">Available</span></TableCell>
                    <TableCell className="font-semibold text-primary">₹82,791/mo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                All plans include enterprise-grade security, automated backups, and 24×7 support
              </p>
              <Button variant="cta" size="lg" className="px-8">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by 22,000+ Users
            </h2>
            <p className="text-muted-foreground mb-12">
              Join thousands of businesses that have optimized their database costs with Utho
            </p>
            
            {/* Logo Wall */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16 opacity-60">
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <p className="font-bold text-foreground">Honeywell</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <p className="font-bold text-foreground">Maruti Suzuki</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <p className="font-bold text-foreground">Exotel</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <p className="font-bold text-foreground">MyOperator</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "Utho's transparent pricing helped us reduce our database costs by 40% while improving performance."
                  </p>
                  <p className="font-semibold text-foreground">— CTO, Fintech Startup</p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "The 24×7 support team is incredibly responsive. They helped us scale during our traffic spike seamlessly."
                  </p>
                  <p className="font-semibold text-foreground">— Lead Developer, E-commerce</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">What makes Utho's MySQL Cloud Pricing transparent?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our slab-based prepaid pricing model shows exactly what you pay for each resource tier. No hidden fees, no surprise charges—just clear, predictable costs that scale with your usage.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">How easy is it to migrate an existing database?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our migration specialists provide free assistance to move your existing MySQL databases with minimal downtime. We support various migration methods including direct transfer and backup restore.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Can I scale up or down without downtime?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Our auto-scaling features allow you to adjust resources in real-time based on demand. Vertical scaling happens instantly, and horizontal scaling is automated with zero downtime.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">What security measures protect my data?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide end-to-end encryption, daily automated backups, VPC networking, firewall protection, and compliance with industry standards. Your data is secured at rest and in transit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your MySQL Database?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start today with flexible <strong>MySQL Cloud Pricing</strong>, enterprise-grade security, and 24×7 expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="px-8 bg-white text-primary hover:bg-white/90">
                Get Started – Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white/20 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;