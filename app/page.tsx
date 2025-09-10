import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, DollarSign, ArrowRight, Users, Target, Coins } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image src="/images/anomapay-logo.png" alt="AnomaPay Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-serif font-bold text-xl text-foreground">AnomaPay</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </a>
              <a
                href="https://x.com/TheKaezy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Created by @thekaezy
              </a>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Pay Anywhere, Anytime,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
              Anonymously
            </span>{" "}
            with AnomaPay
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            The global stablecoin router powered by Anoma's intent-centric protocol. Experience coordination as a
            service - not just faster payments, but true decentralized coordination between people, groups, and markets.
          </p>

          <div className="mb-8">
            <Image
              src="/images/stablecoin-router-banner.png"
              alt="The Global Stablecoin Router"
              width={800}
              height={200}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-cyan-50 text-lg px-8 py-4">
              Start Using AnomaPay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Abstract blockchain visual */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <div className="w-full h-full border-2 border-cyan-300 rounded-full animate-spin-slow"></div>
          <div className="absolute top-8 left-8 w-80 h-80 border border-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-16 w-64 h-64 border border-cyan-200 rounded-full animate-spin-reverse"></div>
        </div>
      </section>

      {/* What Makes AnomaPay Different Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6">
              What Makes AnomaPay Different?
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Most payment systems are siloed. They settle transactions, but not intentions. With AnomaPay, you don't
              just "send money" - you express an intent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-white mb-2">Pay a Friend</h3>
                  <p className="text-cyan-100">
                    Express your intent once, and solvers compete to match it privately and automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-white mb-2">Split a Bill</h3>
                  <p className="text-cyan-100">Coordinate group payments without intermediaries or complex setups.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-white mb-2">Fund a DAO Proposal</h3>
                  <p className="text-cyan-100">Enable complex multi-party coordination for decentralized governance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coins className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-white mb-2">Coordinate Recurring Payments</h3>
                  <p className="text-cyan-100">Set up automated, intent-based recurring transactions across chains.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-serif font-bold text-2xl text-white mb-6">Anoma Protocol Principles</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-cyan-100">Intent-centric design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-cyan-100">Privacy by default</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-cyan-100">Peer-to-peer trust</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-cyan-400/20">
                <p className="text-sm text-cyan-200 italic">
                  "It's not just faster payments. It's coordination as a service."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-4">Why Choose AnomaPay?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the next evolution of payments with intent-centric design, counterparty discovery, and true
              cross-chain coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">Instant Settlement</h3>
                <p className="text-muted-foreground">
                  No more waiting 3-5 business days or babysitting crosschain bridges. Instantly receiving payments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">Zero-Knowledge Privacy</h3>
                <p className="text-muted-foreground">
                  Private by design with ZK proofs protecting your transaction data from being broadcasted to the world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">Cross-Chain Flexibility</h3>
                <p className="text-muted-foreground">
                  Send value on-chain, off-chain, or hybrid without worrying about how. Works with crypto and fiat
                  rails.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">Cost Efficient</h3>
                <p className="text-muted-foreground">
                  Cuts out middlemen and slashes costs. No hidden charges or 3rd party involvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-4">How AnomaPay Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You don't choose the route. You declare your intent and the protocol handles the execution. This is what
              crypto native payments were supposed to be.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-4">Express Your Intent</h3>
              <p className="text-muted-foreground">
                Simply state what you want: "Send $50 to my cousin in Nairobi" - no need to specify routes or chains.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-4">Counterparty Discovery</h3>
              <p className="text-muted-foreground">
                The network finds optimal counterparties automatically - no order books or intermediaries needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-4">Private Execution</h3>
              <p className="text-muted-foreground">
                Solvers compete to fulfill your intent privately, ensuring optimal execution and complete privacy.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-2xl text-card-foreground mb-4 text-center">Real-World Example</h3>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground italic mb-4">
                "I want to trade 5 NFTs for stablecoins, but only from a verified collector."
              </p>
              <p className="text-card-foreground">
                Your intent is expressed once, and solvers compete to match it privately and automatically. The network
                removes dependence on idle order books - if no one posts the right order, your request doesn't just sit
                idle. New markets can emerge instantly, without platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Works with your favorite wallets and dApps out of the box.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {["MetaMask", "WalletConnect", "Coinbase", "Trust Wallet", "Phantom", "Keplr"].map((wallet) => (
              <div key={wallet} className="bg-card rounded-lg p-6 w-full text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3"></div>
                <span className="text-sm font-medium text-card-foreground">{wallet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6">
            Ready to Experience the Future of Payments?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust AnomaPay for their decentralized payment needs.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-cyan-50 text-lg px-8 py-4">
            Start Using AnomaPay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/images/anomapay-logo.png" alt="AnomaPay Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-serif font-bold text-xl text-foreground">AnomaPay</span>
            </div>

            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AnomaPay. Built on the Anoma protocol. All rights reserved.</p>
            <p className="mt-2">
              Created by{" "}
              <a
                href="https://x.com/TheKaezy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                @thekaezy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
