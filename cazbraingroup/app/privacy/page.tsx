import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | CazBrainGroup",
  description: "CazBrainGroup Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <section className="section bg-muted/30 pt-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At CazBrainGroup, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Business information (Company name, industry, job title)</li>
                <li>Communication data (Messages sent through our contact forms)</li>
                <li>Usage data (Pages visited, time spent on site, browser information)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Responding to your inquiries and providing our services</li>
                <li>Improving our website and services</li>
                <li>Sending relevant updates and marketing communications (with consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Third-Party Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at adityagupta200807@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
