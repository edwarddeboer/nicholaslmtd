export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Nicholas Barrett</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Registered Investment Advisor | Specializing in Cryptocurrency and Digital Asset Guidance
        </p>
      </section>

      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personalized investment consulting</li>
          <li>Cryptocurrency and digital asset guidance</li>
          <li>Portfolio construction and performance monitoring</li>
          <li>Risk management and investor education</li>
          <li>Collaboration with CPAs and estate attorneys</li>
        </ul>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Nicholas</h2>
          <p>
            With over 15 years of experience in financial services, including 7 years focused on cryptocurrency and alternative assets, Nicholas works with clients of all experience levels. He values education, transparency, and long-term strategy tailored to each investor’s goals.
          </p>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>Address: 4225 North Central Avenue, Suite 500, Phoenix, AZ 85012</p>
        <p>Phone: (602) 555-1432</p>
        <p>Website: www.NicholasAdvisoryGroup.com</p>
        <p className="mt-4">Please reach out to schedule a consultation or to request more information, including registration documentation.</p>
      </section>
    </main>
  );
}