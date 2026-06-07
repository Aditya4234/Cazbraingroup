import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | CazBrainGroup",
  description: "CazBrainGroup Terms of Service - Understand the terms and conditions for using our website and services.",
}

export default function TermsPage() {
  return (
    <>
      <section className="section bg-muted/30 pt-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the CazBrainGroup website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                CazBrainGroup provides software development, mobile app development, web development, and related digital services. The specific scope, timeline, and deliverables for each project will be outlined in a separate agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment for services, the client retains ownership of the final deliverables. CazBrainGroup retains the right to display completed work in our portfolio unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We treat all client information as confidential and will not share it with third parties without explicit consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                CazBrainGroup shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at adityagupta200807@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
